---
title: JDBC
date: 2024-6-07
tag:
  - JDBC
category:
  - java
---
# JDBC
创建工程，导入驱动jar包
1. 注册驱动
2. 获取连接
3. 定义sql语句
4. 获取执行sql对象
5. 执行sql
6. 处理返回结果
7. 释放资源



## JDBC API
* DriverManager
* Connection
* Statement
* ResultSet
* PreparedStatement

### DriverManager
1. 注册驱动
2. 获取数据库的连接
### Connection
1. 获取执行SQl对象
* 普通执行SQl对象
`Statement createStatement()`
* 预编译SQL的执行对象：防止SQL注入
`PreparedStatement prepareStatement(sql)`
* 执行存储过程的对象
`CallableStatement prepareCall(sql)`

2. 事物管理
* MySQl事务管理
`开启事事务 BEFIN;/START TRANSACTION`
`提交事务 COMMIT;`
`回滚事务 ROLLBACK;`
MySQL默认自动提交事务
当写的多条代码出错时防止运行了前面几条，回滚到都未运行的状态
用异常处理机制
* JDBC事务管理 Connection接口定义了3个对应的方法
`开启事务 setAutoCommit(boolean autoCommit()) true为自动提交事务 false为手动提交事务`
`提交事务 commit()`
`回滚事务 rollback()`
### Statement
作用：
1. 执行数据库
2. 执行SQL语句
* int executeQuery(sql):执行DML,DDL语句
DML返回影响的行数 DDL语句执行成功也可能返回0
* ResultSet executeQuery(sql) 执行DDL语句 返回ResultSet结果集对象
### ResultSet
1. ResultSet(结果集对象)
* `ResultSet stmt.executeQuery(sdl)`执行DQL语句，返回ReSultSet对象
2. 获取查询结果
* boolean `next()`将光标从当前位置向前移动一行，判断当前行是否为有效行
`true 有效行 当前行有数据`
`false 无效行 当前行没有数据`
* getXxx(参数) 获取数据
`xxx 数据类型 如int getint(参数)`
参数: `int 列的编号从1开始 String 列的名称`
### PreparedStatement
作用 预编译SQL语句并执行：预防SQL注入问题
SQL注入
* SQL注入是通过操作输入来修改事先定义好的SQL语句，用来达到执行代码对服务器进行攻击的方法

1. 获取PreparedStatement
```java
//SQL语句中的参数值，使用？占位符替代
String sql = "select * from user where usename = ? and password =?";
//通过Connection对象获取，并传入对应的sql语句
PreparedStatement patmt = conn.prepareStatement(sql);
```
2. 设置参数值
```java
PreparedStatement对象 :setXxx(参数1，参数2):给?赋值
Xxx 数据类型，如setint(参数1,参数 2);
参数1: ?的位置编号，从1开始
参数2: ?的值
```
3. 执行SQl
`executeUpdate();或executeQuery();`:不需要再传递sql

会转义/从而阻止SQL注入

#### PreparedStatement原理
好处：
1. 预编译SQL，性能更高
2. 防止SQL注入，将敏感字符转义
PreparedStatement预编译功能开启
`useServerPreStmls=true`+&传入URL中
配置MySql执行日志(重启mysql服务后生效)
通过查看日志来看内部如何实现的
```sql
log=output=FILE
gengral-log=1
general_log_file="D:\mysql.log"
slow_query-log=1
slow_query_log_file="D:\mysql_slow.log"
long_query_time=2
```

原理
1. 在获取PreparedStatement对象时，将sql语句发送给mysql服务器进行检查，编译(这些步骤很耗时)
2. 执行时就不用再进行这些步骤了，速度更快
3. 如果sql模板一样，则只需要进行一次检查，编译

### 数据库连接池
* 数据库连接池是个容器，负责分配，管理数据库连接（Connection）
* 它允许应用程序重复使用一个现有的数据库连，而不是再重新建立一个
* 释放空闲时间超过最大空闲时间的数据库连接来避免因为没有释放数据库连接而引起的数据库连接遗漏
* 好处
1. 资源重用
2. 提升系统响应速度
3. 避免数据库连接遗漏
数据库连接池的实现
* 标准接口 DataSource
1. 官方(SUN)提供的数据库连接池标准接口,由第三方组织实现此接口
2. 功能：获取连接 Connection getConnection()
* 常见的数据库连接池
1. DBCP
2. C3P0
3. Druid

* Druid(德鲁伊)
1. Druid连接池是由阿里巴巴开源的数据库连接池项目
2. 功能强大，性能优秀，是java语言最好的数据库连接池之一
#### Driud使用步骤
1. 导入jar包 druid-1.1.12.jar
2. 定义配置文件
3. 加载配置文件
4. 获取数据库连接池对象
5. 获取连接

获取列的属性
```java
package com.wzy.java;
import java.sql.*;
public class Demo1 {
	public static void main(String[] args) throws SQLException {
		String driverName = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
		String dbURL = "jdbc:sqlserver://localhost:1433;DatabaseName=edcu;encrypt=false";
		String userName = "sa";
		String userPwd = "kdyq1108";
		Connection conn = DriverManager.getConnection(dbURL, userName, userPwd);

		String sql = "select *from SC where 成绩=90";
		Statement stmt = conn.createStatement();

		ResultSet rs = stmt.executeQuery(sql);

		ResultSetMetaData metaData = rs.getMetaData();
		int columnCount = metaData.getColumnCount();
		for (int i = 1; i <= columnCount; i++) {

			String columnName = metaData.getColumnName(i);
			int type = metaData.getColumnType(i);
			String typeName = metaData.getColumnTypeName(i);
			boolean isNullable = metaData.isNullable(i) != ResultSetMetaData.columnNoNulls;
			System.out.println("列名: " + columnName);
			System.out.println("数据类型: " + type);
			System.out.println("数据类型名: " + typeName);
			System.out.println("是否可以为NULL: " + isNullable);
			System.out.println("---------------------");
		}
		while (rs.next()) {
			System.out.println(rs.getString("学号") + " " + rs.getString("课程号") + " " + rs.getString("成绩"));
			// Array array=rs.getArray(1);
		}
		// 释放资源
		rs.close();
		stmt.close();
		conn.close();
	}
}
```
sql防注入，并打印返回的值
```java
	public static void main(String[] args) throws SQLException {
		String driverName = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
		String dbURL = "jdbc:sqlserver://localhost:1433;DatabaseName=edcu;encrypt=false";
		String userName = "sa";
		String userPwd = "kdyq1108";
		Connection conn = DriverManager.getConnection(dbURL, userName, userPwd);
		String sql = "select *from Student where 性别= ?";//预防sql注入
		PreparedStatement patmt = conn.prepareStatement(sql);
		patmt.setString(1, "男");
		ResultSet rs = patmt.executeQuery();//返回ResultSet结果集
		ResultSetMetaData metaData = rs.getMetaData();
		int columnCount = metaData.getColumnCount();//返回列的数量
		//打印查询结果
		while(rs.next()) {
			System.out.println(rs.getString(1)+" "+rs.getString(2)+" "+rs.getString(3)+" "+rs.getString(4));
		}
		conn.close();
	}
```

### 测试代码

sql serve
```java
package com.wzy.java;
//import java.sql.Connection;
//import java.sql.DriverManager;
import java.sql.*;
public class Demo1 {
	public static void main(String[] args) throws SQLException {
		String driverName = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
		String dbURL = "jdbc:sqlserver://localhost:1433;DatabaseName=edcu;encrypt=false";
		String userName = "sa";
		String userPwd = "kdyq1108";
		Connection conn = DriverManager.getConnection(dbURL, userName, userPwd);
		// 3,定义sql
		String sql = "update Student set 系别 = 666 where 姓名='赵亦'";
		// 4,执行sql的对象Statement
		Statement stmt = conn.createStatement();
		// 5,执行sql
		int i = stmt.executeUpdate(sql);// 返回受影响的行数
		// 6,处理结果
		System.out.println(i);
		// 7,释放资源
		stmt.close();
		conn.close();
	}
}
```

mysql

```java
    public static void main(String[] args) throws SQLException {
        String url = "jdbc:mysql://127.0.0.1:3306/java";
        String username = "用户名";
        String password = "密码";
        //全局相关资源定义
        Connection conn = DriverManager.getConnection(url, username, password);
        
        conn.close();
    }
```







