---
title: java基础
date: 2024-6-07
tag:
  - java基础
category:
  - java
---
# java学习笔记

[TOC]

## 前言

java是一种纯粹的面向对象的编程语言

jre:java Runtime Environment 运行环境

JVM: 运行时所需要的核心类库java虚拟机

JDK:Java Development 开发工具包

.java的源文件 经过编译后生成.class的字节码文件 这个文件可以被JVM读取 是一种二进制文件

通过javac命令对java文件进行编译 通过java命令对class文件进行运行

源程序(.java)——>编译器(javac)——>字节码(.class)——>JVM——>机器码

即是解释性语言又是编译型语言 先编译 后解释

UNicode编码  万国码 

c语言ASCCII码 1字节Byte=8bit

在cmd命令中改变编码格式
`javac -encoding utf8 Text.java`

#### java的注释

```
//java的注释语法 ctrl+/快捷键注释注释当前行 取消注释一样
/*java的另一种注释语法*/ ctrl+shit+/注释 ctrl+shit+\取消注释
/**java特有的文档注释  快捷键 先敲出/**然后回车
@author 作者名字
@version v1版本号
*/                                                                                          
```

#### java的输出:

`Alt+/ 弹出相关类或方法名称，选择想要的，所以不必记住全名，而System.out.println()的快捷键是" sysout+Alt+/ "`
格式化输出保留两位小数
`System.out.printf("f=%.2f",f);`
```java
public class text {
	public static void main(String[] args) {
		// TODO 自动生成的方法存根
		System.out.print("nihao");//println自带换行
        int a=10;
        System.out.printf("x=%d",a);//printf格式化输出
	}
}
/*如果格式化输出错误
在项目 属性 java编辑器 配置工作空间设置 检查编辑器一致性是否为1.7
*/
```

#### java的输入：

```java
import java.util.Scanner; 
public class text {
	public static void main(String[] args) {
		// TODO 自动生成的方法存根
		Scanner scanner = new Scanner(System.in);
		int number = scanner.nextInt();
		//scanner.nex;读取字符串 nextInt读取整数
		//next读取直到空格 nextLine读取到换行符
		//nextDoule读取浮点数
		//hasNextInt检查输入的是不是整数 返回false/true
		//可以用来判断输入是否正确加个if语句
		//hasNext hasNextDouble
		System.out.println(number);
		scanner.close();//关闭Scanner对象
	}
}
```

## java的命名规则

字母数字下划线开头 不能以数字开头 不能占用java的关键字和保留字.在java中严格区分大小写 多了一个$

命名规则:

包名 多单词组成所有单词用小写

类名 ，接口名 多单词组成时所有单词首字母大写  大驼峰

变量名，方法名 多单词组成时，第一个单词首字母小写，第二个单词开始首字母大写 （int myInt=12;） 小驼峰

常量名 所有的字母都大写 多单词时每个单词用下划线连接

😎只是规范 你也可以不遵守

## java的数据类型

### 基本数据类型：

对于整数来说默认类型是`int` 对于浮点数来说默认是`double`

java对于局部变量（可以理解为main里面的）来说必须手动赋值，而成员变量（main外边 class里面的）会自动赋默认值

整数类型:

byte(8位有符号整数 -128~127) 一字节

short(16位有符号整数 -32768~32767) 两字节

long型要在后面加L 8字节(==加L==是因为默认的是`int`类型)

int(32位有符号整数) long(64位有符号整数) 4字节

String 字符串

```java
int a=10;//十进制表示
int a=0b101;//0b/0B二进制表示
int a=012;//0八进制表示
int a=0x1f;//0x/0X表示十六进制
```

浮点类型：float double   float类型要在后面加==F== 因为默认的类型是`double`

```java
double x=0.123E2;//0.123*10的平方 可以进行科学计数法
//flaot a=3.3;这样就是错误的 因为默认是double
```

浮点型==无法精确==存储的 一旦有浮点型参与运算得出的结果一定不要==比较

```
double x=6.9;
double y=3.0;
double z=x/y;//这个结果是2.3000000000000003如果进行比较可以做差看误差大小
```

字符类型; char 可以存储一个汉字 两字节

布尔类型： boolean 只有两个可能的值 true false

| 类型  | 所占字节   | 范围           |
| ----- | ---------- | -------------- |
| byte  | 1字节=8bit | -128~127(2^7^) |
| short | 2字节      | -2^15^~2^15^-1 |
| int   | 4字节      | -2^31^~2^31^-1 |
| long  | 8字节      | -2^63^~2^63^-1 |
| char  | 2个字节    | 0~65535        |
```java
        byte num = 127;
        //byte -128 -127
        for(int i=0;i<3;i++){
            System.out.println(num);
            //结果分别为
            //127 -128 127
            num++;//越界了，回到负数下线那里
        }
    }
```


### 引用数据类型:

类(class) 接口(Interface) 数组(Arrary) 枚举等

String是引用数据类型 可以用来存放字符串 并且提供了大量的方法来操作字符串

### 强制数据类型转换

char,byte,short类型相互转化时（+）会自动转化为int类型

```
 short s1=2;
 //s1=s1+1;会报错 
 s1+=1;//不会报错 有特殊处理
```

char,byte,short ——>int——>long——>float——>double

对于字符串String的转化（+）只会转化为字符串

```java
String a = "nihao";
int b = 6;
char c = 'a';
System.out.println(b+c+a);//打印出的结果是103nihao
```

强制类型转换：java大容量无法直接转化为小容量  程序员必须手动加上强制类型转化符

```java
byte b=(byte)150;//这个结果是-106 因为砍掉了前三个（int）多出的字节 1字节=8bit byte是一字节八位的
```

在java中，多种数据混合运算时，各自先转换成容量最大的类型，再做运算

```java
byte x=10/3;//不会报错因为直接得出了结果
int a=10;
int b=3;
byte=a/b;//会报错 因为编译器智能检测到结果时int类型 不 不能直接复制给byte类型变量 所以可以强制类型转换
```

a对应的ASCII码97 A对应的ASII码65 0对应48 

编码是将字符转换为二进制数据的过程，解码是将二进制数据转换为字符的过程

Java中的字符char 和字符串String都是采用==Unicode==编码 字符对应了Unicode码值

常量(const)

最终常量final 在类型前面加上final后这个变量的值就不能修改了

当一个常数或字符串我们需要在程序里反复反复使用的时候，我们就可以把它定义为static final，这样内存就不用重复的申请和释放空间。

## 运算符：

### 位运算符:

与或非 异或（相同为0 不相同为1） 取反

```
		System.out.println(12 & 5);//4
		//0000 1100(12) 
		//0000 0101(5) 得出 0000 0100 就是4
		System.out.println(12 | 5);//3
		System.out.println(12 ^ 5);//9
		//得出 0000 1001 就是9
		System.out.println( ~ 12);//-13
		//1111 1010
```

交换两个数字的值

```
int m=12;
int n=5;

m=m^n;
n=m^n;//
m=m^n;
```

<<左移几位就相当于乘以2的几次方    

转化为二进制数字进行左移或者右移  缺的位数用0补

```java
3<<4; 相当于3乘以2的四次方    0000 0000 0000 0011 变成  0000 0000 0001 10000就是16+32=48 int是4字节32位的
69>>4;相当于69除以2的四次方   这里为了举例并未完全列出来 不要把里面存在的1也给移走了
```

右移包括无符号右移

` >>右移 看最高位是几 是0就补0 是1就补1 `

`>>> 无符号右移 最高位都补0  这样负数补完以后就会变成正数`

### 自增自减运算符

`前++：先自增1 后做运算` `谁在前先干嘛`

`后++:先做运算 后自增`

```
		short a=0;
		a=a+1;//这个会报错
		a++;
		
		short s = 10;
		s+=1;//既可以实现运算又不会更改s的数据类型
```

```
		int x=0,y=1;
		if(++x==y-- & x++==1||--y==0)
			System.out.println("x="+x+",y="+y);//y的结果为啥是0
```

```java
		int num1=10;		
		int num=num1++;
		System.out.println(num1);//11
		System.out.println(num);//10
		
		int num2=10;
		int n=++num2;
		System.out.println(num2);//11
		System.out.println(n);//11
```

除/ 整数除整数还是整数 小数部分舍弃

%取余数 如果对负数取余数呢？？？👀结果的符号取决于被模数（前面的那个数字）



### 逻辑运算符

& 与 && 的区别：

`& 不管左边是true还是false 右端都会进行运算`

`&& 当左端为false时右端不再进行运算`

| 与 || 区别

`| 当左端为true时右端照样做运算`

`|| 当左端为true时，右端不再进行运算`

### 三元运算符

在一定程度上可以与if  else互换

```
int a=9;
int b=10;
int c=b>a?b:a;
String str = a>b?"a大":"b大";//后面那两个类型必须一致
System.out.println(str);
System.out.println(c);
```
### 转义字符

dev那个黑色输出框，宽度80列，每八列是一组

`\t`跳过了几列?跳过当前这一组

`printf("a\t123")`结果是a后面8-1 7个空格

`\n`

`\r` 

跳回本行行首 (只有c语言这样)

在java python中跟\n 效果一样
在java中
`%%`转义为%


## 程序流程控制

* swithcase语句
  
* if-else语句

* >java不是靠缩进的 
  >
  >```
  >		int m=0,n=3;
  >		if(m>0)
  >			if(n>2)
  >				System.out.println("a");
  >		else 
  >			System.out.println("b");//结果啥也没有
  >```
  >
  >从最后面的else往上开始找

* while循环和for循环可以相互转换
  
* for循环 先执行第一步然后第三步最后第二步
```java
   int i = 0;
   for (printf("第一步\n"); i < 3; printf("第二步\n"))
   {
       printf("第三步 %d\n", i++);
   }
```
```java
/*		i	j	k
   *	0	1	3
  * *	1	2	2
 * * *	2	3	1
* * * *	3	4	0

		i	j	k
 * * *  0	3	1
  * *	1	2	2
   *	2	1	3
*/
		for(int i=0;i<4;i++){
			for(int k=0;k<3-i;k++){
				System.out.print(" ");
			}//打印一行的空格
			for(int j=0;j<i+1;j++){
				System.out.print("* ");
			}//外循环行 内循环行里面的内容
			System.out.println();
		}
		for(int i=0;i<3;i++){
			for(int k=0;k<i+1;k++){
				System.out.print(" ");
			}//打印空格
			for(int j=0;j<3-i;j++){
				System.out.print("* ");
			}
			System.out.println();
		}
```
### 跳出循环
* break 
使用在switch-case中或者循环中
如果使用在循环中，表示，结束“当前循环”`就是离的最近的一个for循环`
* continue
使用在循环结构中 表示，结束“当次循环”
* 标签laber
  ```java
  		laber:for(int i=1;i<5;i++){
			for(int j=1;j<=10;j++){
				if(j%4 == 0){
					//break laber;//结束laber标签所在的那个循环 结果为123
					continue laber;//跳出laber那个标签所在的那个循环
				}
				System.out.print(j);
			}
			System.out.println();
		}
  ```

## 数组

### 三种定义数组的方法

```java
String[] names;
int scores[];
```

* 静态初始化 初始化数组与给数组赋值同时进行

* >`names = new String[]{"张三","李四","王五"}`

* 动态初始化 初始化数组与给数组赋值分开进行

* >`scores = new int[2];`
  >
  >`scores[0] = 87;`
  >
  >`score[1] = 89`

```java
		//String[] arr = new String[]{"ni","hao"};
		
		//String[] arr ={"ni","hao"};
		
		String[] arr=new String[2];
		arr[0]="ni";
		arr[1]="hao";
```

数组的长度

```java
//对于一维数组
int[] num = new int[]{2,3,4};
System.out.print(num.length);//结果是3
//对于二维数组
int[][] n= new int[][]{{2},{3,4,5},{6,6,6}};
System.out.println(n.length);//3 打印的是行数 初始化化是一定要给行数
System.out.println(n[0].length+" "+n[1].length+" "+n[2].length);//1 3 3 
```

数组的默认类型

* int 默认是0
* float double 默认是0.0
* char 默认为空格
* boolean 默认是false
* 引用数据类型默认是null(如String)



### 算法：将二位数组的行列颠倒

```java
		int temp=0;
		for(int i=0;i<3;i++){
			for(int j=i;j<3;j++){
				temp=arr[i][j];
				arr[i][j]=arr[j][i];
				arr[j][i]=temp;
			}
		}
```

内存的基本结构

* 栈static 存放局部变量，对象的引用
* 堆heap new出来的东西
* 方法区 常量池
* 静态域 

### 数组的排序

java中有集成好的排序

先导入`import java.util.Arrays;`

`Arrays.sort(arr)`//传入arr数组进行排序

冒泡排序

```java
int[] arr = new int[]{5,4,11,7,3,23,34,6};
		for(int i=0;i<arr.length - 1;i++){//8个数比较7次
			for(int j=0;j<arr.length-1-i;j++){
				if(arr[j]>arr[j+1]){
					int temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
				}
			}
		}
```

冒泡排序的优化

```
//优化思路 设置一个哨兵 如果提前排序好了就不需要进行后面的比较
		for(int i=0;i<arr.length-1;i++){
			boolean flag=true;
			for(int j=0;j<arr.length-1-i;j++){
				if(arr[j]>arr[j+1]){
					int temp=arr[j];
					arr[j]=arr[j+1];
					arr[j+1]=temp;
					flag=false;
				}
			}
			if(flag){
				System.out.println("跳出循环");
				break;
			}
		}
```



直接选择排序

```
		for(int i=0;i<arr.length - 1;i++){
			for(int j = i+1;j < arr.length;j++){//这里i有跟j相等的时候所以不能-1 +1是因为相等的不用比较
				if(arr[i] > arr[j]){
					int temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}
		//第一轮挑出来一个最小的
		//第二轮再挑出来一个最小的 以此类推
```

直接选择排序的优化

```
		for(int i=0;i<arr.length - 1;i++){
			int t=i;//默认i是最小的
			for(int j = i;j < arr.length;j++){
				//一旦在i后发现存在比其小的元素，就记录那个元素的下角标
				if(arr[t] > arr[j]){
					t = j;
				}
			}
			if(t != i){
				int temp = arr[t];
				arr[t] = arr[i];
				arr[i] = temp;
			}
		}
```

# 面向对象编程
* 属性 对应类中的成员变量
* 行为 对应类中的成员方法

类比作汽车设计图，对象就是是实实在在的汽车

每个编译单元（文件）都==只能有一个public类==，这表示，每个编译单元都有单一的公共接口，用public类来表现。该接口可以按要求包含众多的支持包访问权限的类。如果在某个编译单元内有一个以上的public类，编译器就会给出错误信息。

如何使用呢
1.导包
* import 包名称.类名称
* 对于和当前类属于同一个包的情况，可以省略导包语句不写
2.创建，格式
* 类名称 对象名 = new 类名称();
3. 使用
 * 使用成员变量 对象名.成员变量
 * 使用成员方法 对象名.成员方法名(参数) 

## 构造方法(构造器)
不能被重写
* 构造方法的名称必须和所在类名称完一样
* 构造方法不要写返回值类型，void的都不写
* 构造方法不能return一个具体的返回值
* 如果没有写任何构造函数，那么编译器将会默认赠送一个构造方法
* 一旦编写了至少一个构造方法，编译器将不再赠送
* 类的多个构造器之间构成重载
特点 
> 跟类同名
> 构造方法的权限修饰符跟所属类的修饰符一致

```java
public class cla {
	private String name;
	private int age;
	
	public cla(){//如果注释，就会执行下面的，不传参数会报错
		System.out.println("无参数构造方法执行");
	}
	
	public cla(String name,int age){
		this.name=name;
		this.age=age;
		System.out.println("有参构造方法执行");
	}
	public void setname(String name){
		this.name=name;
	}
	public void setage(int age){
		this.age=age;
	}
	public void print(){
		System.out.println(name+" "+ age);
	}
}
```
## this关键字
* this.成员变量名
* 谁调用的this，谁就是this 打印出来this和person地址相同

1. 在本类的成员方法中，访问本类的成员变量
2. 在本类的成员方法中，访问本类的另一个成员方法。
3. 在本类的构造方法中，访问本类的另一个构造方法。
   >在==第三种==用法要注意
   A.this(...)调用也必须时构造方法时的第一个语句，唯一一个
   B.super和this两种构造调用，不能同时使用
## super关键字
* super关键字用来访问父类内容，而this关键字用来访问本类内容
  三种用法
  1. 在子类的成员方法中，访问父类的成员变量。
  2. 在子类的构造方法中，访问父类的成员方法。
  3. 在子类的构造方法中，访问父类的构造方法  


## static关键字

static 静态的，可以用来修饰属性，方法，*代码块(或初始化块)，*内部类

static修饰属性（类变量）
1. 由类创建的所有对象，都共用这一个属性
2. 当其中一个对象对此属性进行修改，会导致其他对象对此属性的一个调用。vs 实例变量（非static修饰的属性，各个对象各自拥有一套副本）
3. 类变量随着类的加载而加载的，而且独一份
4. 静态的变量可以直接通过“类.类变量”的形式来调用（不是静态，要申请对象再.）
5. 类变量的加载要早于对象，所以当有对象以后，可以“对象.类变量”使用，但是“类.实例对象“是不行的
6. 类变量存在于静态域中。
   

java中所有的类都继承了object类，在使用时可以将其重写，从而打印出类中的属性
```java
public class TextSportMan {
	public static void main(String[] args) {
		SportMan s1 = new SportMan("一号", 23);
		SportMan s2 = new SportMan("二号", 21);
		s1.name = "花花";
		s1.nation = "china";
		System.out.println(s1);
		System.out.println(s2);
		System.out.println(SportMan.nation);
	}
}
class SportMan{
	//实例变量(随着对象的创建而被加载的)
	String name;
	int age;
	//类变量
	static String nation;//共用
	public SportMan(String name, int age) {
		super();
		this.name = name;
		this.age = age;
	}
	public String toString() {
		return "SportMan [name=" + name + ", age=" + age + ", nation=" + nation
				+ "]";
	}
}

```
static 修饰方法（类方法）
1. 随着类的加载而加载，在内存中也是独一份
2. 可以直接通过"类.类方法"的方式调用
3. 内部可以调用静态的属性或静态的方法，而不能调用非静态的属性或方法。反之，非静态的方法可以调用静态的属性和方法。
> 静态的方法内不可以有super和this关键字

注：静态的结构（static的属性，方法，代码块，内部类）的生命周期要早于非静态的结构，同时被回收也要晚于非静态的结构。

static的使用
不依赖于具体的对象，就可以设置成static
比如银行的最小存款数 不会发生改变 就可以设置为静态的
* 使用静态的变量可以实现累加的效果，因为静态的变量在内存中独一份
```java
public class text {
	public static void main(String[] args) {
		Circle c1 = new Circle(2.0);
		Circle c2 = new Circle(2.1);
		System.out.println(Circle.getTotal());
		Circle.show();
		c1.setInfo("我是一个漂亮的圆");
		Circle.show();
	}
}
class Circle{
	private double radius;
	private static String info = "我是一个圆";
	private static int total = 0;//因为total是static的，在内存中独一份，所以可以用来记录创建的对象的个数
	
	public Circle(double radius){
		this.radius = radius;
		total++;
	}
	public double getRadius(double rasius){
		return rasius;
	}
	public void setRadius(double radius){
		this.radius = radius;
	}
	
	public static String getInfo(){
		return info;
	}
	public static void setInfo(String info){
		Circle.info = info;
	}
	public static int getTotal(){
		return total;
	}
	public static void show(){
		System.out.println(info);
	}
	public String toString() {
		return "Circle [radius=" + radius + "]";
	}
}
```
## final关键字
在java中声明类，属性和方法时，可用关键字final来修饰，表示最终
1. final修饰类，这个类就不能被继承，如String类，StringBuffer类，System类
2. final修饰方法，不能被重写
3. final修饰属性，此属性就是一个常量，一旦初始化后就不可再赋值，习惯上，常量用大写字符表示。
> 此常量在哪里赋值（未直接初始化），①此常量不能使用默认初始化②可以是显式的赋值，代码块，构造器
* 变量用static final修饰，全局变量
* 当一个常数或字符串我们需要在程序里反复反复使用的时候，我们就可以把它定义为static final，这样内存就不用重复的申请和释放空间。
## 初始化块（代码块）
格式为
{
}
1. 代码块如果有修饰的话，那么只能用static
2. 分类
静态代码块
`static{}`
1. 可以有输出语句
2. 随着类的加载而加载，而且只被加载一次
3. 多个静态代码块之间按照顺序结构执行
4. 静态代码块的执行要早于非静态代码块的执行
5. 静态的代码块当中只能执行静态的结构（类属性，类方法）

非静态代码块
1. 可以对类的属性（静态的非静态的都可以）进行初始化操作，同时也可以调用本类声明的方法（静态非静态都可以）
2. 里面可以有输出语句
3. 一个类中可以有多个非静态的代码块，多个代码块之间按照顺序结构执行
4. 每创建一个类的对象，非静态代码块就加载一次
5. 非静态代码块的执行要==早于==构造器

关于属性赋值的操作，1.默认的初始化，2.显式的初始化或代码块初始化（此处两个结构按照==顺序==执行），3.构造器中，4.通过方法对对象的相应属性进行修改


## 重载
方法的重载
1. 同一个类中，
2. 方法名必须相同
3. 方法的参数列表不同
   > 参数的个数不同
   参数的类型不同
   

✨
## 面向对象的特征 
三大特征
* 封装
* 继承
* 多态

### 封装和隐藏
给属性赋值的时候加上一些限制，比如腿的个数不能为负数
这时候就可以加上封装隐藏来实现

1. 当创建了类的对象以后，如果直接通过“对像.属性”的方式对相应的对象赋值的话，可能会出现不满足实际情况的意外，我们考虑不让对象直接作用属性，而是通过“对象.方法”的形式，来控制对象对属性的访问，实际情况中，对属性的要求就可以通过方法来实现。
2. private 私有化 修饰的属性只能在类中调用，可以通过方法赋值
* （1）.将类的属性私有化。（2）.提供公共的方法（setter&getter）来实现调用。
子类不能覆盖声明为private的方法

>权限修饰符，可以用来修饰属性，方法。

|访问控制符|类内部|同一个包|不同包的子类|同一个工程|
|- |- |- |- |- |
|private|yes||||
|default|yes|yes|||
|protected|yes|yes|yes||
|public|yes|yes|yes|yes|
```java
public class demotext1 {
	public static void main(String[] args) {
		People people = new People();
		people.print();
		people.setage(-10);
		people.setname("张三");
		people.print();
	}
}
class People{
	private String name;
	private int age;
	
	public String getname(){
		return this.name;
	}
	public int getage(){
		return this.age;
	}
	
	public void setname(String name){
		this.name = name;
	}
	
	public void setage(int age){
		if(age > 0 && age < 100)
			this.age = age;//加个if语句来限制输入的条件
		else
			throw new RuntimeException("您输入的数据有误！");//报错时会提示这个
	}
	public void print(){
		System.out.println("name "+name+", age "+age);
	}
}
```

### 继承

定义子类格式 
```java
public class 子类名称 extends 父类名称{

}
```
继承关系中，父子类构造方法的特点
1. 子类构造方法当中有一个默认隐含的"super()"调用，所以一定是先调用父类构造，后执行子类构造
2. 子类构造可以通过super()关键字来调用父类重载构造
3. super父类构造调用，必须是子类构造方法第一个语句，不能一个子类构造调用多个super构造

总结
子类必须调用父类的构造方法，不写则赠送super(),写了则用指定的super调用，super只能有一个，还必须是第一个。


### 方法的覆盖重写
重写（Override）方法名称一样，参数列表也一样
重载(Overload)方法的名称一样，参数列表不一样

方法覆盖重写特点，创建的是子类对象，则优先用子类方法

1. `@Override`写在方法前面，用来检测是不是有效的正确覆盖重写
就算不写，只要满足要求，也是可以的
2. 子类方法的返回值必须小于等于父类方法的返回值范围
提示 java.long.Object类是所有类的公共最高类，java.long.String就是Object的子类
父类用Object子类也可以用Object和String，但反过来不行
3. 子类方法的权限==必须大于等于==父类方法的权限修饰符
4. 静态只能覆盖静态

> 尽量不要修改老的类，可以用super继承，然后重写


### 抽象类abstract class
```
随着继承层次中一个个新子类的定义，类变得越来越具体，而父类则更一般，更通用。
类的设计应该保证父类和子类能够共享特征。有时将一个父类设计的非常抽象，以至于
它没有具体的实例，这样的类叫做抽象类。
```
eg: 人可以说话，说话的内容由工人或学生决定
abstract:抽象的，可以用来修饰类，方法
abstract不能用来修饰属性，构造器，private,final,static  
1. abstract修饰类，抽象类
   ①不可被实例化
   ②抽象类有构造器（凡是类都有构造器）
   ③抽象方法所在的类一定是抽象类
   ④抽象类中可以没有抽象方法
2. abstract修饰方法，抽象方法
   ①格式，没有方法体，包括{}，如public abstract void eat();
   ②抽象方法只保留方法的功能，而具体的执行，交给继承抽象类的子类，由子类重写此抽象方法。
   ③若子类继承抽象类并重写了所有的抽象方法，则此类是一个“实体类”，即可以实例化
   ④若子类继承抽象类，没有重写所有抽象方法，意味着此类中仍有抽象方法，则此类必须声明为抽象的
   抽象类是用来实现模型化那些父类无法确定全部实现，而是由其子类提供具体实现方法的对象的类。

```
抽象类体现的就是一种模板模式的设计，抽象类作为多个子类的通用模板，子类在抽象类的基础上进行扩展，
改造，但子类总体上会保留抽象类的行为方式
解决的问题
当功能内部一部分实现是确定，一部分实现是不确定的，这时就可以把不确定的部分暴露出去，让子类去实现。
编写一个抽象父类，父类提供了多个子类的通用方法，并把一个或多个方法留给其子类实现，就是一种模板模式
```
```java
package com.wzy.Text;
public class Text {
	public static void main(String[] args) {
		new SubTemplat().spendTime();
	}
}
abstract class Template {

	public abstract void code();

	public void spendTime() {
		long start = System.currentTimeMillis();
		code();
		long end = System.currentTimeMillis();
		System.out.println("花费的时间是" + (end - start));
	}
}
class SubTemplat extends Template{
	public void code() {
		boolean flag = false;
		for(int i = 2;i <= 100000;i++) {
			for(int j = 2;j <= Math.sqrt(i);j++) {
				if(i % j ==0) {
					flag = true;
					break;
				}
			}
			if(!flag) {
				System.out.println(i);
			}
			flag = false;
		}
	}
}
```

### 接口
接口就是一种公共的规范标准，
只要符合规范标准，就可以大家通用。
接口是一种引用数据类型，最重要的内容就是其中的抽象方法。
为什么要引入接口这个概念呢(跟抽象类具体有什么区别)
> `java中不允许多重继承，但使用接口就可以实现多重继承`
```java
public interface 接口名称P{
	//接口内容
}
```
如果是java7，那么接口中可以包含的内容有：
1. 常量
2. 抽象方法

如果是java8，还可以额外包括有：
3. 默认方法
4. 静态方法

如果是java9，还可以额外包括
5. 私有方法

注意事项：
1. 接口当中的抽象方法，修饰符必须是两个固定的关键字，public abstract
2. 这两个关键字修饰符，可以选择性地忽略。
3. 方法的三要素，可以随意定义。（方法名、参数列表、返回值。）

接口使用步骤：
1. 接口不能直接使用，必须有一个“实现类”来“实现”该接口（不能直接new接口对象使用）(可以使用匿名内部类)
格式 :
implements 执行，装备
```java
public class 实现类名称 implements 接口名称{
	//...
}
```
2. 接口的实现类必须覆盖重写（实现）接口中所有的抽象方法
实现，去掉abstract关键字，加上方法体大括号

3. 创建实现类的对象，进行使用
4. 
注意事项
如果实现类并没有覆盖重写接口中所有的抽象方法，那么这个实现类自己就必须是抽象类
接口中没有构造器，接口可以继承接口


#### 默认方法
从java8开始，接口允许定义默认方法。
格式
```java
public default 返回值类型 方法名称（参数列表）{

}
```
①接口的默认方法，可以通过接口实现类对象，直接调用
②接口的默认方法，也可以被接口实现类进行覆盖重写
备注: 接口当中的默认方法，可以解决接口升级的问题
接口内添加抽象方法，而其他实现类不用重写
就可以新添一个默认方法
#### 接口静态方法
从java 开始，接口当中允许定义静态方法
格式：
```java
public staitic 返回值类型 方法名称（参数列表）{

}
```
提示 就是将abstract或者的default换成static即可，带上方法体
注意事项
不能通过接口实现类的对象来调用接口当中的静态方法。
正确用法，通过接口名称，直接调用其中的静态方法。
格式 接口名称.静态方法名（参数）
####  默认方法私有化
问题描述，
我们需要抽取一个公共方法，用来解决两个默认方法之间重复代码的问题，
但是这个共有方法不应该让实现类使用，应该是私有化的。
解决方案
从java9 开始，接口当中允许定义私有方法
1. 普通私有方法，解决多个默认方法之间重复代码问题
格式
`private 返回值类型 方法名称（参数列表){方法体}`
2. 静态私有方法，解决多个静态方法之间重复代码问题
格式
`private static 返回值类型 方法名称(参数列表){方法体}`
#### 接口中的常量
接口当中也可以定义“成员变量”但必须使用public static final 三个关键字进行修饰。
从效果上看，这其实就是接口的【常量】。
格式
`public static final 数据类型 常量名称 = 数据值`
备注：
一旦使用final关键字进行修饰，说明不可改变。
注意事项
1. 接口当中的常量，可以省略public static final，注意，不写也照样是这样。
2. 接口当中的常量，必须进行赋值，不能不赋值。
3. 接口当中常量的名称，使用完全大写的字母，用下划线进行分隔。（推荐命名规则）

#### 接口总结
1. 成员变量其实是常量，格式
`public static final 数据类型 常量名称 = 数据值`
注意：
常量必须进行赋值，而且一旦赋值不能改变。
常量名称完全大写，用下划线进行分隔。

2. 接口中最重要的就是抽象方法，格式
`public abstract 返回值类型 方法名称(参数列表);`
注意：
实现类必须覆盖重写接口所有的抽象方法，除非实现类是抽象类。

3. 从java8开始，接口允许定义默认方法，格式：
`public default 返回值类型 方法名称(参数列表){方法体}`
注意：默认方法也可以被覆盖重写

4. 从java9 开始接口允许定义静态方法，格式：
`public static 返回值类型 方法名称(参数列表){方法体}`
注意 应该通过接口名称进行调用，不能通过实现类对象调用接口静态方法

5. 从java9开始，接口里允许定义私有方法，格式：
普通私有方法：`private 返回值类型 方法名称(参数列表){方法体}`
静态私有方法:`private static 返回值类型 方法名称(参数列表){方法体}`
注意;privated的方法只有接口自己才能调用，不能实现类或被别人使用。

### 多态
`继承或者接口实现类`
面向对象三大特征：封装性，继承性，多态性
extends继承或者implements实现，是多态的前提。
```
父类 人类
子类 学生 员工

小明是一个学生，同时也是一个人
小明是一个对象，这个对象既有学生形态，也有人类形态，
一个对象拥有多种形态，这就对象的多态性
```
代码当中体现多态性，其实就是一句话：父类引用指向子类对象。
格式：
父类名称 对象名 = new 子类名称();
或者
接口名称 对象名 = new 实现类名称();
```java
public class text2 {

	public static void main(String[] args) {
		fu obj = new zi();
		obj.method();
		obj.methodfu();//找不到就往上找
	}
}
class fu{
	public void method() {
		System.out.println("这是父类方法");
	}
	public void methodfu() {
		System.out.println("这是父类特有方法");
	}
}
class zi extends fu{
	@Override
	public void method() {
		System.out.println("这是子类方法");
	}
}
```

访问成员变量的两种方式
1. 直接通过对象名称访问成员变量，看等号左边是谁，优先用谁，没有则向上找
2. 间接通过成员方法访问成员变量，看该方法属于谁，优先用谁，没有则向上找。

在多态的代码当中成员方法的访问规则是
1. 看new的是谁，就优先用谁，没有则向上找。

口诀：编译看左边，运行看右边。

对比一下：
成员变量，编译看左边，运行还看左边。
`直接调.成员变量用的是左边的`
`通过成员方法访问成员变量，就近原则`
成员方法，编译看左边，运行看右边。
`编译时左边要有相应的方法，运行的时候运行的是右边的方法`
```java
public class text2 {

	public static void main(String[] args) {
		fu obj = new zi();//多态
		
		obj.method();//父子都有，优先用子
		obj.methodfu();//子类没有，父类有向上找到父类
	
		//编译看左，左边是fu，fu当中没有methodzi方法，所及编译器报错
//		obj.methodzi();//错误写法
	}
}
class fu{
	int num = 10;
	public void showNum() {
		System.out.println(num);
	}
	public void method() {
		System.out.println("父类方法");
	}
	public void methodfu() {
		System.out.println("父类特有方法");
	}
}
class zi extends fu{
	int num = 20;
	int age = 16;
	@Override
	public void showNum() {
		System.out.println(num);
	}
	@Override
	public void method() {
		System.out.println("子类方法");
	}
	public void methodzi() {
		System.out.println("这是子类特有方法");
	}
}
```
使用多态的好处
无论右边new的时候换成哪个子类对象，等号左边的调用方法都不会发生变化

### 对象转型
①对象的向上转型
格式 父类名称 对象名 = new 子类名称();
含义:右侧创建了一个子类对象，把它当作父类来看待使用
注意事项：向上转型一定是安全的，从小范围转向了大范围。

不恰当的比喻：类似于强制类型转换 小范围可以转为大范围

有弊端
对象一旦向上转型为父类，那么就无法调用子类原本特有的内容
（解决方案 用对象的向下转型（还原））


②对象的向下转型
其实就是一个还原的动作
格式:子类名称 对象名 = （子类名称）父类对象
含义：将父类对象，【还原】成为本来的子类对象
注意事项：
* 必须保证对象本来创建的时候，就是猫，才能向下转型成为猫
* 如果对象创建的时候本来不是猫，现在非要向下转型成为猫，就会报错。
> 但是你怎么知道父类的引用，本来是什么子类? 看下一节

类似于：
```
int num = (int)10.0;//可以
int num = (int)10,5;//会精度损失
```
```java
public class text2 {

	public static void main(String[] args) {
		
		//向上转型
		Animal animal = new Cat();
		animal.eat();//猫吃鱼
		
		//animal.catchMouse(); 错误写法
		
		//向下转型，进行“还原”动作
		Cat cat =(Cat)animal;
		cat.catchMouse();//猫抓老鼠
		
		//错误的向下转型 本来new的时候是一只猫，现在非要当狗
		Dog dog = (Dog)animal;//错误写法，编译不会报错，但是运行会出现异常
		//java.Lang.ClassCastException
	}
}
abstract class Animal{
	public abstract void eat();
}

class Cat extends Animal{
	public void eat(){
		System.out.println("猫吃鱼");
	}
	public void catchMouse() {
		System.out.println("猫抓老鼠");
	}
}
class Dog extends Animal{
	public void eat() {
		System.out.println("小狗进食");
	}
	public void show() {
		System.out.println("汪汪汪");
	}
}
```
另一个向下转型的例子
```
public class Text {
    public static void main(String[] args) {
		//向上转型
		//向下转型
		fu a = new zi();
		a.method();//这是子类method
		a.methodfu();//父类特有方法
		//如何调用子类的特有方法
		zi b =(zi)a;
		b.methodzi();//子类特有方法
		b.methodfu();//父类特有方法
		b.method();//普通子类方法
	}
}
class fu{
	
	public void method(){
		System.out.println("这是普通父类方法");
	}
	public void methodfu(){
		System.out.println("这是父类特有方法!");
	}
}
class zi extends fu{
	public void method(){
		System.out.println("这是普通子类方法");
	}
	public void methodzi(){
		System.out.println("这是子类特有方法");
	}
}
```
#### 用instanceof关键字进行类判断
👏instanceof
```
String c = "hello";
if(c instanceof String)
   System.out.println("这是true");//结果会打印出来
```
左边是对象右边是类
当对象是右边类或子类所创建对象时，返回true；否则，返回false。
判断左边对象是否是有右边类的实例
返回true或false
```
if(animal instanceof Cat){
//注意instanceof左边如果是父类那他也会为真
	((Cat)animal).catchMouse();
}
```
eg
```java
public class Text {

	public static void main(String[] args) {
		Computer computer = new Computer();
		computer.powerOn();
		//向上转型 多态
		USB usbMouse = new Mouse();
		computer.useDevice(usbMouse);
		//参数是usb类型，正好传进去的就是USB鼠标
		KeyBoard keyboard = new KeyBoard();//没有使用多态
		computer.useDevice(keyboard);//正确
		//computer.useDevice(new keyboard());//也正确
		computer.powerOff();
	}

}
interface USB{
	public abstract void open();//打开设备
	public abstract void close();//关闭设备
}
class Computer {
	public void powerOn() {
		System.out.println("笔记本开机");
	}
	public void powerOff() {
		System.out.println("笔记本关机");
	}
	public void useDevice(USB usb) {
		usb.open();//打开设备
		if(usb instanceof Mouse) {
			Mouse mouse = (Mouse)usb;//向下转型
			mouse.click();
		}else if(usb instanceof KeyBoard) {//先判断
			KeyBoard keyboard = (KeyBoard) usb;//
			keyboard.type();
		}
		usb.close();//关闭设备
	}
}
class Mouse implements USB{
	@Override
	public void open() {
		System.out.println("打开鼠标");
	}
	public void close() {
		System.out.println("关闭鼠标");
	}
	public void click() {
		System.out.println("鼠标点击");
	}
}
class KeyBoard implements USB{
	@Override
	public void open() {
		System.out.println("打开键盘");
	}
	public void close() {
		System.out.println("关闭键盘");
	}
	public void type() {
		System.out.println("键盘输入");
	}
}

```
### 内部类
如果一个事物的内部包含另一个事物，那么这就是一个类内部包含另一个类
例如，身体和心脏的关系，又如，汽车和发动机的关系
分类
1. 成员内部类
2. 局部内部类（包含匿名内部类）
匿名内部类用法多

#### 成员内部类
成员内部类的定义格式
```
修饰符 class 外部类名称{
	修饰符 class 内部类名称{

	}
}
```
注意：内用外，随意访问。外用内，需要内部类对象
外部类$内部类  这样的格式
abstract
final
如何使用成员的内部类？有两种方式
1. 间接方式，在外部类的方法中，使用内部类，然后main只调用外部类的方法。
2. 直接方式，公式：
类名称 对象名 = new 类名称();
外部类名称.内部类名称 对象名 = new 外部类名称().new 内部类名称();

如果出现了重名现象，那么格式是 
`外部类名称.this.外部类成员变量名`
```java
public class Text {
    public static void main(String[] args) {
		w.inside a = new w().new inside();
		a.method();
		w b = new W();
		b.in();
	}
}
class w{
	int num=10;

	public class inside{
		int num = 20;
		public void method(){
			System.out.println(this.num);//20
			System.out.println(w.this.num);//10
		}
	}
	public void in(){
		System.out.println(num);//10
	}
}

```

### 局部内部类
如果一个类是定义在一个方法内部的，那么这就是一个局部内部类。
“局部”：只有当前所属的方法才能使用它，出了这个方法外面就不能用了。

定义格式：
```
修饰符 class 外部类名称{
	修饰符 返回值类型 外部方法名称(参数列表){
		class 局部内部类名称{

		}
	}
}
```
小结一下类的权限修饰符
public > protected > (default) > private
定义一个类的时候，权限修饰符规则
1. 外部类：public /(default)
2. 成员内部类 public / default / private
3. 局部成员类 ==什么都不能写==（不是default）


局部内部类如果希望访问所在方法的局部变量，那么这个局部变量必须是【有效final的】
备注：
从java 8+开始，只要局部变量值不变，那么final关键字就可以省略。
（可以看作局部内部类copy了一份局部变量，所以这个变量值不能修改）
原因：
1. new出来的对象在堆内存中
2. 局部变量是跟着方法走的，在栈内存中。
3. 方法运行结束之后，立刻出栈，局部变量就会立刻消失。
4. 但是new出来的对象会在堆当中持续存在，直到垃圾回收消失。
```java
public class Text {
    public static void main(String[] args) {
		w t = new W();
		t.method();
	}
}
class w{
	int num = 10;
	//num = 20;//这样会报错
	public void method(){
		class inclass{
			public void prt(){
				System.out.println(num);
			}
		}
		inclass text = new inclass();//还必须在类的下面？
			text.prt();
	}
}
```
#### 匿名内部类
这一节很重要哟
1. 如果接口的实现类（或者是父类的子类）只需要使用唯一的一次。
那么这种情况下就可以省略该类的定义，而改为使用【匿名内部类】

2. 匿名内部类的定义格式：
接口名称 对象名 = new 接口名称(){
	//覆盖重写所有抽象方法
};
```java
public class Text {
    public static void main(String[] args) {
		//Myinterfaceimpl obj = new Myinterfaceimpl();
		//obj.method();
		Myinterface obj = new Myinterface() {
			public void method(){
				System.out.println("这是匿名内部类。");
			}
		};
		obj.method();//会打印出这是匿名内部类
		//这时下面实现类就可以删除了
	}
}
interface Myinterface{
	public abstract void method();
}
class Myinterfaceimpl implements Myinterface{
	@Override
	public void method(){
		System.out.println("接口实现类");
	}
}
```
匿名内部类注意事项
对格式"new 接口名称(){....}"进行解析
1. new代表创建对象的动作
2. 接口名称就是匿名内部类需要实现哪个接口
3. {....}这才是匿名内部类的内容

另外还需要注意的几点问题
1. 匿名内部类，在【创建对象】的时候，只能使用唯一一次。
如果希望多次创建对象，而且类的内容一样的话，那么就必须使用单独定义的实现类了
2. 匿名对象，在【调用方法】的时候，只能调用唯一一次。
如果希望同一个对象，调用多次方法，那么必须给对象起个名字。
3. 匿名内部类是省略了【实现类/子类名称】但是匿名对象省略了【对象名称】
强调,匿名内部类和匿名对象不是一回事！！！
```java
public class Text {
    public static void main(String[] args) {
		//使用了匿名内部类，而且省略了对象名称，也是匿名对象
		new Myinterface() {
			@Override
			public void method1(){
				System.out.println("这是匿名内部类A。");
			}
			@Override
			public void method2(){
				System.out.println("这是匿名内部类B。");
			}
		}.method1();
	
	}
}
interface Myinterface{
	public abstract void method1();
	public abstract void method2();
}

```
## java异常处理
异常分为两类
1. error
> java虚拟机无法解决的严重问题。如JVM系统内部错误，资源耗尽等严重情况，一般不编写针对性的代码处理 eg 数组下标越界异常 空指针异常 算数异常1/0 
2. Exception
> 其他因编程错误或偶然的外在因素导致的一般性问题，可以使用针对性的代码处理。

例如
* 空指针访问
* 试图读取不存在的文件
* 网络连接中断

java.lang.Throwable 
* Error:错误，程序中断不进行处理
* Exception:异常，要求在编写程序时，就要考虑到对这些异常的处理
* > 编译时异常，在编译期间会出现的异常（编译javac.exe命令时，出现异常）
* > 运行时异常，在运行期间会出现的异常（执行java.exe命令时，出现异常）（空指针异常）

### 如何处理异常Exception
java提供的是异常处理的抓抛模型
1. “抛”，当我们执行代码时，一旦出现异常，就会在异常的代码处生成一个对应的异常类型的对象，并将此对象抛出。（自动抛出/手动抛出）
* 一旦抛出此异常类的对象，那么程序就终止执行
* 此异常类的对象抛给方法的调用者
2. “抓”，抓住上一步抛出来的异常类的对象，如何抓？即为异常处理方式
* java提供了两种方式来处理异常类的对象。
#### 处理的方式一：
```java
try{
	//可能出现异常的代码
}catch(Exception1 e1){
	//处理的方式一
}catch(Exception2 e2){
	//处理的方式二
}finally{
	//可选，一定要执行的代码
}
```
注：
1. try内声明的变量，类似于局部变量，出现了try{}语句，就不能被调用
2. finally是可选的.。
3. catch语句内部是对异常对象的处理
* getMessage();printStackTrace();
4. 可以有多个catch语句，try中抛出的异常类对象从上往下去匹配catch中的异常类的类型，一旦满足就执行catch中的代码。执行完，就跳出其后的多余catch语句
5. 如果异常处理了，那么其后的代码的代码继续执行
6. 若catch中多个异常类型是“并列”关系，谁上谁下都可以。
但是若catch中多个异常类型是“包含”关系，须将子类放在父类的上面，进行处理，否则报错
7. finally中存放的是一定会被执行的代码，不管try中是否仍有异常未被处理，以及是否有return语句 。
try中有return语句也会执行finally（eg:关闭文件那个代码）
8. try-catch是可以嵌套的。

对于运行时异常来说，可以不显式的进行处理。
对于编译时异常来说，必须要显示的进行处理

eg:
```java
import java.util.InputMismatchException;
import java.util.Scanner;
public class Text {
    public static void main(String[] args) {
		
		Scanner in = new Scanner(System.in);
		try{
		int num = in.nextInt();
		System.out.println(num);
		}catch(InputMismatchException e){
			System.out.println("出现类型不匹配的异常了！");
			System.out.println(e.getMessage());//也可以去掉用自己的方法
		}
	}
}
```
#### 处理方式二
声明抛出异常时java中处理异常的第二种方式
在方法的声明处，显式的抛出该异常对象的类型

* 格式：
`public void method() throws FileNotFoundException,IoException{}`
throws后面也可以是Exception对异常进行统一处理
* 当在此方法内部出现异常的时候，就会抛出一个异常类的对象，献给方法的调用者。
* 异常的对象可以逐层向上抛，直至main中，当然在向上抛的过程中可以通过try-catch-finally进行处理

java的异常处理，抓抛模式
1. 抓，异常的处理，有两种方式（①try-catch-finally②throws + 异常的类型）
2. 抛，一旦执行过程中，出现异常， 会抛出一个异常类的对象（自动的抛出 vs 手动的抛出（throw + 异常类的对象））
> 异常类，既可以是现成的，又可以是手动创建的
```java
throw new RuntimeException("传入的类型错误");
		//去掉Runtime会报错，编译时就要解决，
```
抛出的异常类型若是RuntimeException，可以不显式的处理
若是一个Exception，必须要显式的处理。
如何自定义一个异常类
1. 自定义的异常类继承现有的异常类
2. 提供一个序列号，提供几个重载的构造器
```java
public class Text {
    public static void main(String[] args) {
		
		throw new MyException("传入的类型有误！");
	}
}
class MyException extends RuntimeException{
	static final long serialVersionUID = -1234567l;
	public MyException(){

	}
	public MyException(String message){
		super(message);
	}
}
```
子类重写的父类方法，其抛出的异常类型只能是被重写的方法的异常类的子类或者异常类型一样
```java
public class Text {
    public static void main(String[] args) {
		A a = new B();
		try{
		a.method1();//编译看左,但是运行的时候看的是右边
		}catch(IOException e){//所以A中抛出的类型一一定要大于B类抛出的类型
			e.printStackTrace();
		}
	}
}
class A{
	public void method1() throws IOException{

	}
}
class B extends A{
	@Override
	public void method1() throws FileNotFoundException{

	}
}
```
# java中常用的类
## 了解一下
### Math
`java.lang.Math`提供了一系列静态方法用于科学计算，其方法的参数和返回值类型一般为double型
### Biglnteger类
`java.math.BigDecimal`
integer类作为int的包装类，能存储的最大整型值为$2^{31}$-1,支持任意精度的整数
## 以下比较常用
### Random类

1. 导包`import java.util.Random`
2. 创建 `Random r = new Random();`
3. 使用获取一个随机的int数字(范围是int的所有范围，有正负两种),`int num = r.nextInt();`
获取一个随机的int数字（参数代表了了范围，左闭右开区间）,`int num = r.nextInt(3);`
实际上代表的含义[0,3),也就是0-2
```java
import java.util.Random;
public class Text {
    public static void main(String[] args) {
		Random r = new Random();
		for(int i=0;i < 10;i++){
			int num = r.nextInt(100);//0-99
			System.out.println(num);
		}
	}
}
```
可以写一个猜数小游戏

### 日期类
`java.lang.System`
System类提供的`public static currentTimeMillis();`用来返回当前时间与1970年1月1日0时0分0秒之间以毫秒为单位的时间差。
##### java.util.Data类
还有一个`java.sql.Data`是其子类
表示特定的瞬间精确到毫秒
```java
import java.util.Date;
public class Text {
    public static void main(String[] args) {
		Date d1 = new Date();
		System.out.println(d1.toString());//Thu Apr 04 22:04:08 CST 2024
		System.out.println(d1.getTime());//1712239525782
		Date d2 = new Date(1712239525782l);//还原回去
		System.out.println(d2);//Thu Apr 04 22:05:25 CST 2024
	}
}
```
#### SimpleDateFormat类
Date类的api不易于国际化，大部分被废弃了
SimpleDateFormat类易于国际化
* 格式化 日期---->文本 使用SimpleDateFormat()方法
* 解析 文本--->日期
数据库日期的转换
```java
import java.util.Date;
import java.text.SimpleDateFormat;
public class Text {
    public static void main(String[] args) {
		//默认的
		SimpleDateFormat sdf = new SimpleDateFormat();
		String date = sdf.format(new Date());
		System.out.println(date);//24-4-4 下午10:13
		//指定格式的格式化
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");//看说明改格式
		String data = sdf1.format(new Date());//2024-04-04 10:17:41
		System.out.println(data);

		//解析
		Date date1 = sdf.parse("24-4-4 下午10:13");
		System.out.println(date1);//Thu Apr 04 22:13:00 CST 2024

		date1 = sdf1.parse("2024-04-04 10:17:41");
		System.out.println(date1);//Thu Apr 04 10:17:41 CST 2024
	}
}
```
#### Calendar类
了解
java.util.Calendar(日历)类
```java
import java.util.Date;
import java.util.Calendar;
public class Text {
    public static void main(String[] args){
		Calendar c = Calendar.getInstance();
		int day = c.get(Calendar.DAY_OF_MONTH);
		System.out.println(day);//这个月的第几天

		c.add(Calendar.DAY_OF_MONTH, -2);
		day = c.get(Calendar.DAY_OF_MONTH);
		System.out.println(day);//+2

		c.set(Calendar.DAY_OF_MONTH, 23);
		Date d = c.getTime();
		System.out.println(d);
}
}
```

## String类
构造字符串对象
使用Unicode编码
String代表不可变的字符序列，底层使用char[]存放，一旦赋值其值不可改变。
==String是final的==
```java
//如果字符串池中已经存在相同内容的字符串，则返回字符串池中的引用；否则，将该字
//符串添加到字符串池中，并返回对字符串池中的新引用。

public class Text {
    public static void main(String[] args){
		String str1 = "JavaEE";
		String str2 = "JavaEE";
		String str3 = new String("JavaEE");
		String str4 = "JavaEE" + "Android";
		String str5 = "Android";
		String str6 = str1 + str5;
		str5 = str5 + "Handoop";
		String str7 = str6.intern();
		//	equals比较内容
		System.out.println(str1 == str2);//true
		System.out.println(str1 == str3);//false
		System.out.println(str1.equals(str3));//true

		System.out.println(str4 == str6);//false
		System.out.println(str4.equals(str6));//true
		System.out.println(str7 == str4);//true 
}
}
```
内存情况
### 字符串的常用的方法
```java
int length();//返回字符串的长度
char charAt(int index);//返回在指定index位置的字符,index从0开始
boolean equals(Object anObject);
//比较两个字符串是否相等，相等返回true否则返回false
int compareTo(String anotherString);
//返回正数表示外面的字符串大于里面的
//返回负数表示里面的大于外面的
//返回0表示相等
int indexOf(String s);
//返回s字符串在当前字符串中首次出现的位置，若没有返回-1
int indexOf(String s,int startpoint);
//返回s字符串从当前字符串startpoint位置开始首次出现的位置
int lastIndexOf(String s);
//返回s字符串最后一次在当前字符串中出现的位置，若无返回-1
int lasrindexxof(String s,int startpoint);
boolean startsWith(String prefix);//判断当前字符串是否以prefix开始
boolean endsWith(String suffix);//判断当前字符串是否以prefix结束
boolean regionMatches(int firstStarts,String other,int otherStart,int length);
//判断当前字符串从firstStarts开始的字串与另一个字符串other从otherStart开始，length长度的字符串是否equals

String substring(int startpoint);//
String substring(int strat,int ens);
//返回从start开始到end结束的一个左闭右开的字串，strat从0开始
String replace(char oldChar,String new);
//替换字符
String replaceAll(String old,String new);
String trim();//去除当前字符中首尾出现的空格，若有多个，就去除多个
String concat(String str);
//连接当前字符串与str
String[] split(String regex)
//按照regex将当前字符串拆分成多个字符串，整体返回String[];
```
## StringBuffer类
java.lang.Stringbuffer代表可变的字符序列，可以对字符串内容进行增删
容器，底层使用char[]存储，此案成安全的，效率低。
```java
StringBuffer append(String s);//可以是各种类型
StrinfBuffer insert(int index,String str);
StrinfBuffer reverse();//反转
StrinfBuffer delete(int startIndex,int endIndex);
char charAt(int n);
void setCharAt(int n,char ch);
StrinfBuffer replace(int stareIndex,int endIndex,String str);
int indexOf(String str);
String substring(int start ,int end);
int length();
```
总结;添加append();可以连着.方法添加。
删除,delete(int n,int j)
修改，setCharAt(int index,char ch);
查 charAt(int n)
插入,insert(int index,String str);
反转，reverse();本身的值也会变
长度length()
## StringBuilder
可变字符序列，是jdk5.0新加入的，线程不安全但是效率高于StrinfBuffer
## 包装类
```
基本数据类型: boolean，char，byte，short，int，long，float，double
封装类类型：Boolean，Character，Byte，Short，Integer，Long，Float，Double
```
1. 字符串与基本数据类型，包装类之间转换
①字符串--->基本数据类型，包装类：调用相应包装类的parseXxx(String str);
②基本数据库，包装类--->字符串：调用字符串的重载的valueOf()方法
2. 字符串与字节数组间的转换
①字符串---->字节数组：调用字符串的getbytes()
②字节数组---->字符串:调用字符串的构造器

3. 字符串与字符数组间的转换
①字符串---->字符数组,调用字符串的toCharArray()
②字符数组---->字符串，调用字符串的构造器
```java
//转int
String str1 = "123";
int i = Integer.parseInt(str1);
//转字符串
str2 = i+"";
str2  = String.valueOf(i);
//字符串与字节数组间的转换
String str = "abc123";
byte[] b = str.getBytes();
//字节数组转字符串
String str3 = new String(b);
//字符串与字符数组间的转换
String str4 = "abc123中国人";
char[] c = str4.toCharArray();
String str5 = new String(c);
```

# 集合
可分为Collection和Map两种体系
Collection接口
1. set:元素无序，不可重复的集合--类似高中数学上的“集合”
2. list：元素有序，可重复的集合--“动态”数组

Map接口：具有映射关系，“key- value对”的集合--高中的“函数”自变量-因变量
* 一方面，面向对象语言对事物的体现都是以对象的形式，为了方便对多个对象的操作，就要对对象进行存储。另一方面，使用Array存储对象方面有一些弊端，而java集合就像一种容器，可以动态地把多个对象的引用放入容器中。
* java集合类可以用于存储数量不等的多个对象，还可用于保存具有映射关系的关联数组。
1. 存储对象可以考虑：①数组。②集合
2. 数组存储对象的特点：Stundent[] stu = new Studnet[20];stu[0] = new Student();...
> 弊端：①一旦创建长度不变，②真实的数组存放的对象的个数是不可知的。
1. 集合
Collection接口
---List接口：存储有序的，可以重复的元素
--------`ArrayList（主要的实现类）`
--------`LinkedList(用链表存的，频繁插入删除)`
--------`Vector(古老的实现类，线程安全的)`
---Set接口:存储无序的，不可重复的元素,set中常用的方法都是Collection下定义的
---------`HashSet(主要实现类)`
---------`LinkedhashSet`
---------`TreSet`
Map接口:存储键值对
-----------HashMap：Map的主要实现类
-----------LinkedHashMap：使用链表维护添加进Map中的顺序，故遍历Map时，是按添加的顺序遍历的
-----------TreeMap；按照添加进Map中的元素的key的指定属性进行排序要求key必须是同一个类的对象
------------Hashtable
----------------------子类Properties
## Collection接口
1-5
```java
import java.util.Date;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
public class Text {
    public static void main(String[] args){
      Collection coll = new ArrayList();//接口new实现类
      //1.返回元素个数
      System.out.println(coll.size());
      //2.向集合添加一个元素
      //add(object obj)
      coll.add(123);
      coll.add("AA");
      coll.add(new Date());
      coll.add("BB");

      System.out.println(coll.size());
      //3，addAll(Collection coll)将形参coll中包含的所有元素添加到当前集合中
      Collection coll1 = Arrays.asList(1,2,3);
      coll.addAll(coll1);
	  //查看集合元素
	  System.out.println(coll);//ArrayList重写
      System.out.println(coll.size());//7
      //4.isEmptu();判断集合是否为空
      System.out.println(coll.isEmpty());//false
      //5..clear()清空集合元素
      coll.clear();
      System.out.println(coll.isEmpty());//true
}
}
```
6-9
```java
      Collection coll = new ArrayList();
      coll.add(123);
      coll.add("AA");
      coll.add(new Date());
      coll.add("BB");

      //6.contains(Object obj);
      //判断集合中是否包含指定的obj元素，如果包含返回true，反之返回false
      //判断的依据，根据元素所在类的equals()方法进行判断
      //明确，如果存入集合中的元素是自定义类的对象，要求：自定义类重写equals()方法！
      boolean b1  = coll.contains(123);
      System.out.println(b1);
      //7.containsAll(Collection coll);判断当前集合中是否包含coll中所有元素
      Collection coll1 = new ArrayList();
      coll1.add(123);
      coll1.add(new String("AA"));
      boolean b3 = coll.containsAll(coll1);
      System.out.println(b3);
      coll.add(456);
      //8.retainAll(Collection coll);求当前集合与coll的共有的元素，返回给当前集合
      coll.retainAll(coll1);
      System.out.println(coll);
      //9.remove(Object obj);删除集合中的obj元素，若删除成功，返回true，否则返回false
      boolean b4 = coll.remove("BB");//不存在，下面是false
      System.out.println(b4);
```
10-15
```java
	     Collection coll = new ArrayList();
	      coll.add(123);
	      coll.add(new String("AA"));
	      coll.add(new Date());
	      coll.add("BB");

	      Collection coll1 = new ArrayList();
	      coll1.add(123);
	      coll1.add(new String("AA"));
	      //10.removeAll(Collection coll);从当前元素中删除包含在coll中的元素
	      coll.remove(coll1);
	      coll.removeAll(coll1);
	      System.out.println(coll);
	      //equals(Object obj);判断集合中的所有元素是否完全相同
	      Collection coll2 = new ArrayList<>();
	      coll2.add(123);
	      coll2.add(new String("AA"));
	      System.out.println(coll1.equals(coll2));//true
	      //12.hashCode();
	      System.out.println(coll.hashCode());
	      //13.toArray();将集合转化为数组?数组怎么转集合？上一节的
	      Object[] obj = coll.toArray();
	      for(int i = 0;i < obj.length;i++){
	        System.out.println(obj[i]);
	      }
	      //14 iterator();返回一个Iterator接口实现类的对象
	      Iterator iterator = (Iterator) coll.iterator();
	      //不用for遍历和下面这种方式遍历
	      //System.out.print(iterator.next());
	      //System.out.print(iterator.next());
	      //使用这种方式
	      while(iterator.hasNext()) {
	    	  System.out.println(iterator.next());
	      }

		//这样不行。因为在里面打印那个也会调用一次，隔一个打印一个，而且可能会报错
        //while(iterator.next() != null){
        //System.out.println(iterator.next());
        //}
```
增强for循环
```java
    //使用增强for循环实现集合的遍历,
	for(Object i:coll){//这里没有调用iterator()方法，直接使用
	System.out.println(i);
	}
	//使用增强for循环实现集合的遍历
	String[] str = new String[]{"AAA","BBB","DDD"};
    for(String s:str){
    System.out.println(s);
    }
```
## ArrayList，List的主要实现类
list中相对Collection，新增加的方法
* void add(int index,Object ele)在指定的索引位置index添加元素ele(如果父类用的Collection则需要向下转型)
* boolean addAll(int inndex,Collection eles)
* Object get(int index)获取指定索引的元素
* int indexOf(Object obj)返回obj在集合中首次出现的位置，没有的话返回-1
* int lastIndexOf(Object  obj)返回obj在集合中最后一次出现的位置，没有的话，返回-1
* Object remove(int index)删除指定索引位置的元素
* Object set(int index,Object ele)设置指定索引位置的元素为ele
* List subList(int fromIndex,int toIndex)返回从fromIndex到toIndex结束的一个子list。左闭右开，不含末尾

List常用的方法:
> 增(add(Object obj))  也可以指定位置
> 删(remove) 也可以指定位置
> 改(set(int index,Object obj)) 
> 查(get(int index) int indexOf(Object obj))  
> 插(add(int index,Object ele)) 
> 长度(size())

ArrayList中
注意：当集合中添加自定义类的元素时，必须重写equals方法，才能判断集合中所有元素是否完全相同
addAll 求并集
retainALl  共有的结果复制给调用的集合
removeAll  

## Set的主要实现类 HashSet
set存储的元素是无序的，不可重复的！
1. 无序性，无序性!=随机性，真正的无序性，指的是元素在底层存储的位置是无序的
2. 不可重复性，当向Set中添加进相同的元素的时候，后面的这个不能添加进去。

说明：要求添加进Set中的元素所在的类，一定要重写equals()和hashCode()方法，
进而保证Set中元素的不可重复性！

3. Set中的元素是如何存储的呢？使用了哈希算法。
```
当向Set中添加对象时，首先调用此对象所在类的hashCode()方法，计算此对象的哈希值，
此哈希值决定了此对象在Set中的存储位置，若此位置之前没有对象存储，则这个对象直接
存储到此位置，若此位置已有对象存储，再通过equals()比较这两个对象是否相同。
如果相同，后一个对象就不能添加进来。
万一返回false了呢，都存储（不建议如此）
```
> 要求：hashCode()方法要与equals()方法一致

## ListHashSet
ListHashSet:使用链表维护了一个添加进集合的顺序，导致当我们遍历LinkedHashSet集合
元素时，是按照添加进去的顺序遍历的！
ListHashSet插入性能略低于HashSet，但在迭代访问Set里的全部元素有很好的性能

## TreeSet
TreeSet:
1. 向TreeSet中添加的元素必须是同一个类的。
2. 可以按照添加进集合中的元素的指定的顺序遍历，像String，包装类等默认按照从小到大的顺序遍历。
3. 当向TreeSet中添加自定义类的对象时，有两种排序方法，①自然排序②定制排序
4. 自然排序要求自定义类实现java,lang.Comparable接口并重写其compareTo(Object obj)方法
在此方法中，指明按照自定义类的哪个属性进行排序

5. 向TreeSet中添加元素时，首先按照ComareTo()进行比较，一旦返回0，虽然仅是两个对象的
此属性值相同，但是程序会认为这两个对象是相同的，进而后一个对象不能添加进来(下面例子)

> compareTo()与hashCode()以及equals()三者保持一致!

```java
@Override
public int compareTo(Object o){
	if(o instanceof Person){
		Person p = (Person)o;
		//return this.name.compareTo(p.name);这样名字一样存不进去
		//return this.age.compareTo(p.age);这样年龄一样就存不进去
		int i = this.age.compareTo(p.age);
		if(i == 0){
			return return this.name.compareTo(p.name);
		}else{
			return i;
		}
		}
}
```

### TreeSet定制排序
1. 创建一个是是实现了Comparator接口的类对象
2. 将此对象作为形参传递给TreeSet的构造器中
3. 向TreeSet中添加Coparator接口中的compare方法中涉及的类的对象

TreeSet的定制排序，见下面步骤compare()与hashCode()以及equals()三者保持一致
```java
	Comparator com = new Comparator(){
	@Override
	//向TreeSet中添加Customer类的对象，
	//在此compare()方法中，指明是按照Customer的哪个属性排序的
	public int compare(Object o1,Object o2){
		if(o1 instanceof Customer && o2 instanceof Customer){
			Customer c1 = (Customer)o1;
			Customer c2 = (Customer)o2;
			int i = c1.getId.compareTo(c2.getid());
			if(i == 0){
				return c1.getName().compareTo(c2.getName());
			}
			return i;
		}
		return 0;
	}
}
```

#### TreeSet练习
```
1. 定义一个Employee类
该类包含：private 成员变量name,age,birthday，其中birthday为MyDate类的对象：
并为每一个属性定义getter，setter方法；
并重写toString方法输出name,age,birthday

Mydate类包含
private成员变量 month,day,year,并为每一个属性定义getter,setter方法，

创建该类的5个对象，并把这些对象放入TreeSet集合中（下一章，Treeset需要使用泛型来定义）
分别按以下两种方式对集合中的元素进行排序，并遍历输出
①使Employee实现comparable接口，并按name排序
②创建TreeSet时传入Comparator对象，按生日日期的先后排序
提示：Employee类是否需要重写equals()方法？MyDate类呢?
```
Employy类
```java
public class Employee implements Comparable{
	private String name;
	private int age;
	private MyDate birthday;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public MyDate getBirthday() {
		return birthday;
	}
	public void setBirthday(MyDate birthday) {
		this.birthday = birthday;
	}
	
	public Employee(String name, int age, MyDate birthday) {
		super();
		this.name = name;
		this.age = age;
		this.birthday = birthday;
	}
	@Override
	public String toString() {
		return "Employee [name=" + name + ", age=" + age + ", birthday=" + birthday + "]";
	}
	@Override
	public int compareTo(Object o) {
		if(o instanceof Employee) {
			Employee e = (Employee)o;
			return this.name.compareTo(e.name);
		}
		return 0;
	}
	@Override
	public int hashCode() {
		return Objects.hash(age, birthday, name);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Employee other = (Employee) obj;
		return age == other.age && Objects.equals(birthday, other.birthday) && Objects.equals(name, other.name);
	}
}
```
Employee1
```java
public class Employee1 {
	private String name;
	private int age;
	private MyDate birthday;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public MyDate getBirthday() {
		return birthday;
	}
	public void setBirthday(MyDate birthday) {
		this.birthday = birthday;
	}
	
	public Employee1(String name, int age, MyDate birthday) {
		super();
		this.name = name;
		this.age = age;
		this.birthday = birthday;
	}
	@Override
	public String toString() {
		return "Employee [name=" + name + ", age=" + age + ", birthday=" + birthday + "]";
	}
	@Override
	public int hashCode() {
		return Objects.hash(age, birthday, name);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Employee other = (Employee) obj;
		return age == other.age && Objects.equals(birthday, other.birthday) && Objects.equals(name, other.name);
	}
}
```

MyDate类
```java
public class MyDate {
	private int day;
	private int month;
	private int year;
	public int getDay() {
		return day;
	}
	public void setDay(int day) {
		this.day = day;
	}
	public int getMonth() {
		return month;
	}
	public void setMonth(int month) {
		this.month = month;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	
	public MyDate(int day, int month, int year) {
		super();
		this.day = day;
		this.month = month;
		this.year = year;
	}
	@Override
	public String toString() {
		return "MyDate [date=" + day + ", month=" + month + ", year=" + year + "]";
	}
}
```
实现类1
```java
	public static void main(String[] args) {
		//1.自然排序。使Employee实现comparable接口，并按name排序
		Employee e1 = new Employee("刘德华", 55, new MyDate(4, 12, 1976));
		Employee e2 = new Employee("郭富城", 43, new MyDate(7, 3, 1965));
		Employee e3 = new Employee("张学友", 33, new MyDate(9, 12, 1965));
		Employee e4 = new Employee("黎明", 54, new MyDate(12, 2, 1967));
		Employee e5 = new Employee("李敏镐", 65, new MyDate(4, 21, 1945));
		
		TreeSet set = new TreeSet();
		set.add(e1);
		set.add(e2);
		set.add(e3);
		set.add(e4);
		set.add(e5);
		
		Iterator iterator = set.iterator();
		while(iterator.hasNext()) {
			System.out.println(iterator.next());
		}
	}
```
实现类2
定制排序的main，注意这里面用的是Employee1
生日一样的就进不去了
```java
public static void main(String[] args) {
	//定制排序，创建TreeSet时传入Comparator对象，按生日日期的先后排序
	Comparator com = new Comparator() {

	@Override
	public int compare(Object o1, Object o2) {
		if(o1 instanceof Employee1 && o2 instanceof Employee1) {
			Employee1 e1 = (Employee1)o1;
			Employee1 e2 = (Employee1)o2;
				
			MyDate birth1 = e1.getBirthday();
			MyDate birth2 = e2.getBirthday();
			if(birth1.getYear() != birth2.getYear()) {
				return birth1.getYear() - birth2.getYear();
			}else {
				if(birth1.getMonth() != birth2.getMonth()) {
					return birth1.getMonth() - birth2.getMonth();
				}else {
					return birth1.getDay() - birth2.getDay();
				}
			}
		}
		return 0;
	}
	};
		TreeSet set = new TreeSet(com);
		Employee1 e1 = new Employee1("刘德华", 55, new MyDate(4, 12, 1976));
		Employee1 e2 = new Employee1("郭富城", 43, new MyDate(7, 3, 1954));
		Employee1 e3 = new Employee1("张学友", 33, new MyDate(9, 12, 1954));
		Employee1 e4 = new Employee1("黎明", 54, new MyDate(12, 3, 1954));
		Employee1 e5 = new Employee1("李敏镐", 65, new MyDate(4, 21, 1945));

		set.add(e1);
		set.add(e2);
		set.add(e3);
		set.add(e4);
		set.add(e5);
		Iterator iterator = set.iterator();
		while(iterator.hasNext()) {
			System.out.println(iterator.next());
		}
	}
```


## Map接口
跟函数一样~
1. Map与Collection并列存在，用于保存具有映射关系的数据:key-Value
2. Map中的key和value都可以是任何引用数据类型的数据
3. Map中的key用Set来存放，==不允许重复==，即同一个Map对象所对应的类，须重写hashCode()和equals()方法
4. 常用String类作为Map的"键"
5. key和value之间存在单向一对一关系，即通过指定的key总能找到唯一的，确定的value


```java
Object put(Object key,Object value):向Map中添加一个元素
Object remove(Object key)：按照指定的key删除key-value
void putAll(Mat t)
void clear()：清空
Object get(Object key):获取指定key的value值，若无此key，返回null
boolean containsKey(Object key)：
boolean containsValue(Object value)
int size()：返回
boolean isEmpty()
boolean equals(Object obj)
keySet()//返回set视图
map.values()//返回Collection视图
```
1. HashMap,key是用Set来存放的，不可重复，value是用Collection来存放的，可重复.一个key-value对，是一个Entry，所有的Entry使用Set存放的,也是不可重复的。
2. 向HashMap中添加元素时，会调用key所在类的equals()方法，判断两个key是否相同，若相同，则只能添加进后添加的哪个元素
```java
    public static void main(String[] args){
      Map map = new HashMap();
      map.put("AA", 213);
      map.put("BB", 456);
      map.put("BB", 456);
      map.put(123, "CC");
      map.put(null, null);
      System.out.println(map.size());//4
  }
```
如何遍历Map
* Set keySet()
* Collection values()
* void entrySet()
```java
    public static void main(String[] args){
      Map map = new HashMap();
      map.put("AA", 213);
      map.put("BB", 45);
      map.put(123, "CC");
      map.put(null, null);
      
      //1.遍历key堆
      Set set = map.keySet();
      for(Object obj : set){
        System.out.println(obj);
      }
      //2.遍历value集
      Collection values = map.values();
      Iterator i = (Iterator) values.iterator();
      while(i.hasNext()){
        System.out.println(i.next());
      }
      //3.如何遍历key-value对
      //方式1
      Set set1 = map.keySet();
      for(Object obj : set1){
        System.out.println(obj + "----->" +map.get(obj));
      }
      //方式2
      Set set2 = map.entrySet();
      for(Object obj : set2){
        Map.Entry entry = (Map.Entry)obj;
        System.out.println(entry.getKey()+"--->"+entry.getValue());
        System.out.println(entry);//也可以这样
      }
  }
```
### TreeMap
自然排序
实现Comparable
```java
//这里在Person内部已经实现了compareTo方法
Map map = new TreeMap();
map.put(new Person("AA",23),89);
map.put(new Person("MM",22),79);
map.put(new Person("GG",23),99);
map.put(new Person("JJ",13),69);
Set set1 = map.keySet();
for(Object obj:set1){
	Sysout.out.println(obj + "----->" + map.get(obj));
}
```
定制排序
```java
Comparator com = new Comparator(){
	public int compare(Object o1 && Object o2){
		if(o1 instanceof Customer && o2 instanceof Customer){
			Customer c1 = (Customer)o1;
			Customer c2 = (Customer)o2;
			int i = c1.getId().compareTo(c2.getId());
			if(i == 0){
				return c1.getName().compareTo(c2.getName());
				}
				return i;
		}
		return 0;
	}
};
TreeMap map = new TreeMap(com);
map.put(new Customer("AA",1001),87);
map.put(new Customer("CC",1001),67);
map.put(new Customer("MM",1004),77);
map.put(new Customer("GG",1002),97);
```
### HashTable
古老的实现类，线程安全。
不允许使用null作为key和value
不建议使用
子类 Properties：常用来处理属性文件，键和值都是String类型的
```
后缀为properties的文件
可以载入进这个文件的内容
```

## Collections工具类的使用
操作Collections以及Map的工具类:Collections

区分:Collection与Collections
```java
reverse(List),反转List中元素的顺序
shuffle(List),对list集合元素进行随机排序
short(List),根据元素的自然排序对指定List集合元素按升序排序
short(List,Comparator),根据指定Comparator产生的顺序对List集合元素进行排序
swap(List,int,int),将指定list集合中i处元素和j处元素进行交换 
Object max(Collection),根据元素的自然排序，返回给定集合中的最大元素
Object max(Collection,Comparator),根据Comparetor指定的顺序，返回给定集合中的最大
Object min(Collection)
Object min(Collection,Comparator)
int frequency(Collection,object),返回指定集合中指定元素的出现次数
void copy(List dest,List src)，将src中的内容复制到dest中
//List list1 = Arrays.asList(new Object[list.size()])要这样写，不然会越界
boolean replaceAll(List list,Object oldVal,Object newVal)
//
```
同步控制
Collections类中提供了多个synchronizedXxx()方法，该方法可使将指定集合包装成线程同步的集合，从而可以解决多线程并发访问集合时的线程安全问题


# javaIO
站在程序的角度理解
IO流用来处理设备之间的数据传输
java程序中，对于不同数据的输入输出操作以流（stream）的方式进行
java.io包下提供了各种"流"类和接口，用以获取不同种类的数据，并通过标准的方法输入或输出数据。

## ***注意：***
出现乱码，可以查看一下文本的存储编码格式是不是utf-8
一定要记得关闭流，/刷新（flush）流 不然可能写不进文件里面
记得调用的方法是 (obj,0,len)不然可能出现读出后后面还有内容
eg
* String str = new String(tem,0,len); 
非常重要的一点想想上面为什么这样写。

* fos.write(b,0,len);



 | (抽象基类)|字节流 |字符流 |
 |- |- |-|
 | 输入流| InputStream|Reader |
 | 输出流|OutputStream |Writer |

流的分类
1. 按照数据的流行不同，输入流，输出流
2. 按照处理数据的单位不同，字节流，字符流（处理的文本文件）
3. 按照角色的不同，节点流（直接作用文件的）处理流
| 抽象基类| 节点流(文件流)| 
| --- | --- |
| InputStream|FileInputStream |
| OutputStream|FileOutputStream |
| Reader|FileReader |
| Writer|FileWriter |

## File类
java.io.File类
1. 凡是与输入输出相关的类，接口等都定义在java.io包下
2. File是一个类,可以有构造器创建其对象，此对象对应着一个文件(.txt .doc)或者一个文件夹
3. File类对象是与平台无关的
4. File中的方法，仅涉及到如何创建，删除，重命名，等等。只要涉及文件内容的，File是无能为力的，必须由io来完成
5. File类的对象，常作为io流的具体类的构造器的形参
```java
getName();
getPath();
getAbsoluteFile();
getAbsolutePath();
getParent();
renameTo(File newName);重命名
//file1.renameTo(file2);file1重命名file2,要求file1文件一定存在，file2一定不存在

exists();
canWrite();
canRead();
isFile();
isDirectory();
lastModified();
length();

creatNewFile();
delete();
mkDir();//创建一个文件目录，只有在上层文件目录存在的情况下，才能返回true
mkDirs();//创建一个文件目录，若上层文件目录不存在，一并创建
list();//返回String[] 要遍历 列出这个文件下的所有文件
listFiles();//返回File[]对象


File file = new File("E:\\桌面\\阿里云同步文件夹\\Typora");
String[] str = file.list();
for(String t : str) {
System.out.println(t);
}
```

## FileInputStream
从硬盘存在的一个文件中，读取其内容到程序中，
读取的文件一定要存在，否则怕抛FileNotFoundException
```java
//可以使用try catch 的方式处理异常
//因为一定要关闭对应的流
//1.创建一个File类的对象
File file = new File("hello.txt");
//2.创建一个FileInoutStream类的对象
FileInputStream fis = new FileInputStream(file);
//3.调用FileInputStream 的方法，实现file文件的读取
//read();读取文件的一个字节，当执行到文件结尾时，返回-1
int b = fis.read();
while(b!=-1){
	System.out.print((char)b);
	b=fis.read();
}
//4. 关闭相应的流
fis.close();
```
用下面这种
```java
try{
File file = new File("hello.txt");
FileInputStream fis = new FileInputStream(file);
byte[] b=new byte[5];
int len;
//每次读入到byte中的字节的长度
//read返回了读取到几个
while((len=fis.read(b))!=-1){
		for(int i=0;i<len;i++){//为啥不是b.length呢
			System.out.print((char)b[i]);
		}
		//String str = new String(b,0,len);
		//System.out.print(str);
	}
}catch(IoException e){
	e.printStacktrace();
}finally{
	if(fis!=null){
		try{fis.close};
	}catch(Ioexception e){
		e.printStacktrace();
	}
}
```
## FileOutputStream
```java
//1.创建一个File对象，表明要写入的文件位置
File file =new File("hello2.txt");//写入可以没有这个文件
//2. 创建一个FileOutputStream的对象，将file的对象作为形参传递给FileOutputStream的构造器中
FileOutputStream fos = null;
try{
	fos=new FileOutputStream(file);
	//3. 写入操作
	//输出的物理文件可以不存在，当执行过程中，若不存在，会自动创建
	//若存在，会将原有的覆盖
	fos.write(new String("i love China i love the world").getBytes());
}catch(Exception e){
	e.printStackTrace();
}finally{
	if(fos!=null){
		try{
			//4. 关闭输出流
			fos.close();
		}catch(IoException e){
			e.printStackTrace();}}}
```
## FileInputOutputStream复制
从硬盘读取一个文件，并写入到另一个位置。（相当于文件的复制）
```java
//1. 提供读入，写出的文件
File file1 = new File("hello.txt");
File file2 = new File("hello3.txt");
//2.提供相应的流
FileInputStream fis = null;
FileOutputStream fos = null;
try{
	fis = new FileInputStream(file1);
	fos = new FileOutputStream(file2);
	//3.实现文件的复制
	byte[] b = new byte[20];
	int len;
	while((len=fis.read(b))!=-1){
		//fos.write(b);错误的写法两种fos.write(b,0,b.length);
		fos.write(b,0,len);
	}
}catch(Exception e){
	e.printStackTrace();
}finally{
	if(fos!=null){
		try{
			fos.close;
		}catch(IOException e){
			e.printStackTrace();
		}
	}
	if(fis!=null){
		try{
			fis.close();
		}catch(IOException e){
			e.printStackTrace();}}}
```
可以写成一个方法，想想~
下面这是运行过的
```java
public class classDemo {
	public static void main(String[] args) {
		Copy c = new Copy();
		c.copy("E:\\桌面\\nihao.txt","E:\\桌面\\china.txt");
	}
}
class Copy{
	
	void copy(String start,String end) {//传入要复制文件的目录，和目标目录}
		File file1 = new File(start);
		File file2 = new File(end);
		
		FileOutputStream fos = null;
		FileInputStream fis = null;
		
		try {
			fos = new FileOutputStream(file2);
			fis = new FileInputStream(file1);
			
			byte[] buffer = new byte[20];//改变数值，控制读写速度
			int len = 0;
			while ((len = fis.read(buffer))!= -1) {
                fos.write(buffer, 0, len);//写入到buffer里面，每次写入从0到len的长度
            }
		} catch (Exception e) {
			
			e.printStackTrace();
		}finally {
			if(fos!=null && fis!=null) {
				try {
					fos.close();
					fis.close();
				} catch (Exception e) {
					e.printStackTrace();
			}}}}}
```

## FileReader
使用FileReader FileWriter 可以实现文本文件的复制
对于非文本文件（视频文件，音频文件，图片）只能使用字节流。
```java
public class FileTest {
	public static void main(String[] args) {
		FileReader fr = null;
		try {
			File file = new File("E:\\桌面\\h.txt");
			fr = new FileReader(file);

			char[] c = new char[24];
			int len;
			while ((len = fr.read(c)) != -1) {
				String str = new String(c, 0, len);
				System.out.println(str);
			}
		}catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		} finally {
			if (fr != null) {
				try {
					fr.close();
				} catch (IOException e) {
					// TODO 自动生成的 catch 块
					e.printStackTrace();
				}
			}
		}
	}
}
```
写不进去的时候在写入后面加上flush();方法
```java
	public static void main(String[] args) {
		//1. 输入流对应的文件src一定要存在，否则抛异常。输出流对应的文件可以不存在，执行过程中会自动创建
		FileReader fr = null;
		FileWriter fw = null;
		try {
			File src = new File("E:\\桌面\\h.txt");
			File dest = new File("E:\\桌面\\h1.txt");
			//2.
            fr = new FileReader(src);
            fw = new FileWriter(dest);
            //3. 
            char[] c = new char[24];
            int len;
            while ((len = fr.read(c)) != -1) {
                fw.write(c,0, len);
            }		
            
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			if(fw!=null) {
				try {
                    fw.close();
                } catch (IOException e) {
                    // TODO 自动生成的 catch 块
                    e.printStackTrace();
                }
			}
			if(fr!=null) {
				try {
                    fr.close();
                } catch (IOException e) {
                    // TODO 自动生成的 catch 块
                    e.printStackTrace();
                }
			}
		}
	}
```
这里可以写一个创建文件，输入内容，写进文件的小程序
用字节流和字符流
## 对象流
ObjectinputStream和ObjectOutputStream
对象的序列化机制
```
允许把内存中的java对象转化成平台无关的二进制流,从而允许把这种二进制流
持久的保存在磁盘上，或通过网络将这种二进制流传输到另一个网络节点，当其他程序
获取了这种二进制流，就可以恢复成原来的java对象
```
序列化的好处
```
在于可以将任何实现了Serializable接口的对象转化为字节数据
使其在保存和传输时可被还原

序列化是RMI(Remote Method invoke - 远程方法调用)
```
为了让类是可序列化的，该类必须实现如下两个接口之一
Serializable
Externalizable
```java
	public static void main(String[] args) {
	    //对象的序列化过程，将内存中的对象通过ObjectOutputStream转化为二进制流，存储在硬盘文件中
		Person p1 = new Person("小米",23);
		Person p2 = new Person("红米",21);
		
		ObjectOutputStream oos = null;
		try {
			oos = new ObjectOutputStream(new FileOutputStream("Person.txt"));
			
			oos.writeObject(p1);
			oos.flush();
			oos.writeObject(p2);
			oos.flush();
		}catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}finally {
			if(oos != null) {
				try {
					oos.close();
				} catch (IOException e) {
					// TODO 自动生成的 catch 块
					e.printStackTrace();
				}
			}
		}
	}
//要实现序列化的类
/*
 * 1. 要求此类是可序列化的，实现Serializable/Externalizable接口
 * 2. 要求类的属性同样要实现Serializable接口
 * 3. 提供一个版本号private static final long serivalVersionUID
 * 4. 使用static或transient修饰的属性，不可实现序列化
 */
class Person implements Serializable{
	String name;
	Integer age;
	
	public Person(String name, Integer age) {
		super();
		this.name = name;
		this.age = age;
	}
	@Override
	public String toString() {
		return "Person [name=" + name + ", age=" + age + "]";
	}
}
```
对象写进文件 ps: 上课讲的
```java
public static void main(String[] args) throws IOException {
        Student s1 = new Student("张三",18,"郑州市");
        File file = new File("obj.txt");
        FileOutputStream fos = new FileOutputStream(file);
        ObjectOutputStream oos = null;
        oos = new ObjectOutputStream(fos);
        oos.writeObject(s1);
        oos.flush();
        fos.close();
        oos.close();
    }
```

反序列化
```java
	public static void main(String[] args) {
		//对象的反序列化过程，将硬盘中的文件通过ObjectInputStream转化为相应的对象
		ObjectInputStream ois = null;
		try {
			ois = new ObjectInputStream(new FileInputStream("D:\\eclipseNew\\workspace\\TextDemo1\\Person.txt"));
			Person p1 = (Person)ois.readObject();
			System.out.println(p1);
			Person p2 = (Person)ois.readObject();
			System.out.println(p2);
		} catch (Exception e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}finally {
			if(ois !=null) {
				try {
					ois.close();
				} catch (IOException e) {
					// TODO 自动生成的 catch 块
					e.printStackTrace();
				}
			}	
		}
	}

class Person implements Serializable{
	String name;
	Integer age;
	
	public Person(String name, Integer age) {
		super();
		this.name = name;
		this.age = age;
	}
	@Override
	public String toString() {
		return "Person [name=" + name + ", age=" + age + "]";
	}
}
//Person [name=小米, age=23]
//Person [name=红米, age=21]
```
从文件读出对象 ps: 上课讲的
```java
public static void main(String[] args) throws IOException, ClassNotFoundException {
        File file = new File("obj.txt");
        FileInputStream fis = new FileInputStream(file);
        ObjectInputStream ois = new ObjectInputStream(fis);
        Student stu = (Student)ois.readObject();
        System.out.println(stu);
        fis.close();
        ois.close();
    }
```

### javaIO相关代码
```java
package com.wzy.java;

import java.io.*;
import java.util.*;

/**
 179. 自己创建文件“静夜思.txt”，内容为“床前明月光，疑是地上霜。举头望明月，低头思故乡。”，要求将此文件的内容使用字节流复制到D:\myFile\静夜思.txt中。
 180. 自己创建文件“静夜思.txt”，内容为“床前明月光，疑是地上霜。举头望明月，低头思故乡。”，要求将此文件的内容使用字符流复制到D:\myFile\静夜思.txt中。
 200. 使用序列化实现北极熊对象polarBear的存储为二进制文件D:\ polarBear.bin，
 并使用反序列化对二进制文件polarBear.bin读取，并输出到控制台上(类设计合理即可)。
 175. 自己创建模板，模板内容如下：
 “您好！我是一只猴子monkey，我的名字是{name}，我是一只{type}。我的主人是{master}”
 模板存放在“D:\ monkey.txt”,
 读取模板文件D:\ monkey.txt的内容，按照D:\ monkey.txt的模板格式保存宠物数据到文本文件，
 即把{name}、{type}、{master}替换为具体的宠物信息，将替换后的内容写入到D:\myDoc\ monkey.txt中。
 （要求使用BufferedReade、BufferedWriter、StringBuffer、replace()实现）。
 */
public class Test1 {
    public void title175() throws IOException {
        File file = new File("d:\\monkey.txt");
        FileReader fr = new FileReader(file);

        BufferedReader bfr = new BufferedReader(fr);

        StringBuffer sb = new StringBuffer(bfr.readLine());
        sb.replace(sb.indexOf("{name}"),sb.indexOf("{name}")+"{name}".length(),"小黑");//小黑替换{name}


        FileWriter fw = new FileWriter(file);
        BufferedWriter bfw = new BufferedWriter(fw);
        bfw.write(sb.toString());
        bfw.flush();

        fr.close();
        fw.close();
        bfr.close();
        bfw.close();
    }
    public void title179() throws IOException {
        File oldFile = new File("d:\\静夜思.txt");
        File newFile = new File("d:\\myfile");
        newFile.mkdirs();//创建文件夹
        newFile = new File("d:\\myfile\\静夜思.txt");

        FileInputStream fis = new FileInputStream(oldFile);//读
        FileOutputStream fos = new FileOutputStream(newFile);//写 复制

        byte tem[] = new byte[1024];
        int length;
        while((length = fis.read(tem)) != -1){
            fos.write(tem,0,length);//写进去
        }
        fis.close();
        fos.close();
    }
    public void title180() throws IOException {
        File oldFile = new File("d:\\静夜思.txt");
        File newFile = new File("d:\\myfile\\静夜思.txt");//这个myfile文件夹已经创建了
        //读出文件出现乱码 看一下源文件格式是否为utf-8
        FileReader fr = new FileReader(oldFile);
        FileWriter fw = new FileWriter(newFile);

        char[] arr = new char[128];
        int length;
        while((length = fr.read(arr)) != -1){
            fw.write(arr,0,length);//最好这样写，不然可能出现一些错误
        }

        fr.close();
        fw.close();


    }
    public void title200() throws IOException, ClassNotFoundException {
        //先序列化
        File file = new File("d:\\polarBear.bin");
        FileOutputStream fos = new FileOutputStream(file);
        ObjectOutputStream oos = new ObjectOutputStream(fos);
        Animal animal1 = new Animal("小黑");
        Animal animal2 = new Animal("小红");
        oos.writeObject(animal1);
        oos.writeObject(animal2);
        fos.close();
        oos.close();
        //反序列化
        FileInputStream fis = new FileInputStream(file);
        ObjectInputStream ois = new ObjectInputStream(fis);
        Animal a1 = (Animal)ois.readObject();
        Animal a2 = (Animal) ois.readObject();
        System.out.println(a1+"\n"+a2);


    }
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        Test1 test = new Test1();
        //测试179
        //test.title179();
        //测试180
        //test.title180();
        //测试200
        //test.title200();
        //测试175
        test.title175();
    }
}
class Animal implements Serializable{
    String name;
    public Animal(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Animal{" +
                "name='" + name + '\'' +
                '}';
    }
}
```

# Java补充知识讲解

## 网络编程相关
Java提供的网络类库，它可以实现无痛的网络连接，联网的底层细节被隐藏在java的本机安装系统里面，有JVM进行控制，并且Java实现了一个跨平台的网络库
C/S架构 客户端/服务端
B/S架构 浏览器/服务器
本地回路地址：127.0.0.1
公认端口HTTP(80) FTP(21) Telnet(23)
注册端口 MySQL(3306)
如果端口号被另一个服务或应用所占，会导致当前程序启动失败
OSI参考模型（七层）过于理想化，未能推广
TCP/IP参考模型 ： 应用层 传输层 网络层 物理+数据链路层

* 实例化的方式
1. `InetAddress getByName(String host)`
2. `InetAddress getLocalHost()`
```java
    public static void main(String[] args) {
        try {
            //1.实例化
            //getByName()获取指定ip对应的InetAddress的实例
            InetAddress inet1 = InetAddress.getByName("192.168.23.31");//也可以写域名
            System.out.println(inet1);//打印出地址

            //getLocalHost 获取本机ip对应的InetAddress的实例
            InetAddress inet2 = InetAddress.getLocalHost();
            System.out.println(inet2);//显示本机局域网ip

            //2.两个常用的方法
            System.out.println(inet1.getHostAddress());
            System.out.println(inet1.getHostName());//域名
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }
    }
```
### Socket类
* 网络上具有唯一标识的ip地址和端口号组合在一起构成唯一能识别的标识符套接字(Socket)
* 利用套接字开发网路应用程序已被广泛的采用，以至于成为事实上的标准，网络通信其实就是Socket间的通信。
* 通信的两端都要有Socket，是两台机器间通信的端点。
* Socket允许程序把网络连接当成一个流，数据在两个Socket间通过IO传输。
* 一般主动发起通信的应用程序属客户端，等待通信请求的为服务端
* Socket分类
* * 流套接字(stream socker) 使用TCP提供可依赖的字节流服务
* * * ServerSocket 此类实现TCP服务器套接字，服务器套接字等待请求通过网络传入
* * * Socket此类实现客户端套接字，接字是两台机器间通信的端点。
* * 数据包套接字(datagram socket) 使用UDP提供尽力而为的数据报服务
* * * DatagramSocket 此类表示用来发送和接收UDP数据包的套接字
#### Socket相关API
客户端给服务端发送消息
客户端
```java
  public static void main(String[] args) {
        Socket socket = null;
        OutputStream os = null;
        ByteArrayOutputStream baos = null;
        try {
            //创建一个Socket
            InetAddress inetAddress = InetAddress.getByName("127.0.0.1");//声明ip地址
            int port = 8989;//声明对方的端口号
            socket = new Socket(inetAddress, port);
            //发送数据
            os = socket.getOutputStream();
            os.write("你好，我是客户端，请多多关照。".getBytes());
            //客户端表明不再继续发送数据 不写这个服务器会一直等待！！！
            socket.shutdownOutput();
            //接受来自服务端的消息
            InputStream is = socket.getInputStream();
            byte[] buffer = new byte[1024];//小了会出现乱码
            int len;
            //读取来袭服务端的消息
            baos = new ByteArrayOutputStream();
            while((len=is.read(buffer)) != -1){
                baos.write(buffer,0,len);
            }
            System.out.println(baos.toString());


        } catch (IOException e) {
            e.printStackTrace();
        } finally {

            try {
                baos.close();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            //关闭Socket
            try {
                if (socket != null)
                    socket.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                if (os != null) {
                    os.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
```
服务端
```java
 public static void main(String[] args) {
        ServerSocket serverSocket = null;
        Socket socket = null;//阻塞式的方法 一直等着
        InputStream is = null;
        OutputStream os = null;//得到一个输出流，给客户端发送消息
        try {
            //1.创建一个ServerSocket
            int port = 8989;
            serverSocket = new ServerSocket(port);

            //2.调用accept() 接收客户端的Socket
            socket = serverSocket.accept();

            socket.getInetAddress().getHostAddress();//得到发来消息的ip

            //3.接收数据
            is = socket.getInputStream();
            byte[] buffer = new byte[1024];//小了会出现乱码
            int len;

            //解决上面小了会出现问题
            ByteArrayOutputStream baos = new ByteArrayOutputStream();//内部，维护了一个byte[]
            while((len=is.read(buffer)) != -1){
                //错误的，可能会出现乱码
//                String str = new String(buffer,0,len);
//                System.out.print(str);
                baos.write(buffer,0,len);
            }
            System.out.println(baos.toString());
            System.out.println("\n数据接收完毕");
            //服务端发送数据给客户端
            os = socket.getOutputStream();
            os.write("成功接受数据!".getBytes());

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            //4.关闭Socket，ServerSocket,流
            try {
                os.close();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            try {
                if(socket!=null)
                    socket.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                serverSocket.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                if(is != null)
                    is.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
```
注意上面代码是如何解决出现乱码问题的。
如何解决服务器一直等待的问题的
##### 聊天室项目
客户端有三个类
```java
public class Client {
    public static void main(String[] args) throws Exception{
        int port = 8989;
        //连接服务器
        Socket socket = new Socket("139.9.114.22",port);

        //开启两个线程
        //一个负责看别人聊，即接受服务器转发的消息
        Receive receive = new Receive(socket);
        receive.start();

        //一个线程负责发送自己的话
        Send send = new Send(socket);
        send.start();

        send.join();//等我发送线程结束了，才结束整个程序

        socket.close();

    }

public class Send extends Thread {
    private Socket socket;
    public Send(Socket socket) {
        super();
        this.socket = socket;
    }
    public void run() {
        try {
            Scanner input = new Scanner(System.in);
            OutputStream outputStream = socket.getOutputStream();
            PrintStream ps = new PrintStream(outputStream);
            while (true) {
                System.out.println("自己的话:");
                String str = input.nextLine();
                if ("bye".equals(str)) {
                    break;
                }
                ps.println(str);
            }
            input.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}


public class Receive extends Thread{
    private Socket socket;
    public Receive(Socket socket){
        super();
        this.socket = socket;
    }
    public void run(){
        try {
            InputStream inputStream = socket.getInputStream();
            Scanner input = new Scanner(inputStream);

            while(input.hasNextLine()){
                String line = input.nextLine();
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

```

服务端
```java
public class Server {
    //用来存储所有在线的客户端
    static HashSet<Socket> online = new HashSet<Socket>();
    public static void main(String[] args) throws Exception{
        ServerSocket server = new ServerSocket(8989);
        while(true){
            Socket socket = server.accept();

            online.add(socket);//连接的对象存进集合

            MessageHandler mh = new MessageHandler(socket);//把当前的对象传送过去
            mh.start();//开启多线程
        }
    }

    static class MessageHandler extends Thread{
        private Socket socket;
        private String ip;
        public MessageHandler(Socket socket){
            super();
            this.socket = socket;
        }

        public void run(){
            try {
                ip = socket.getInetAddress().getHostAddress();
                sendToOther(ip+"上线了");
                InputStream input = socket.getInputStream();
                InputStreamReader reader = new InputStreamReader(input);
                BufferedReader br = new BufferedReader(reader);
                String str;
                while((str = br.readLine())!=null){
                    sendToOther(ip+":"+str);
                }
                sendToOther(ip + "下线了");
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                online.remove(socket);
            }
        }

        public void sendToOther(String message) throws IOException{
            for(Socket on :online){
                OutputStream every = on.getOutputStream();
                PrintStream ps = new PrintStream(every);
                ps.println(message);
            }
        }
    }
}
```


# java多线程
1. 程序：为了完成特定任务，用某种语言编写的一组指令的集合，即指一段静态的代码，静态对象。
2. 进程：程序的一次执行过程，或是正在内存中运行的应用程序，如运行中的qq，运行中的网易云音乐播放器
* 每一个进程都有一个独立的内存空间，系统运行一个程序即是一个进程从创建，运行到消亡的过程。（生命周期）
* 程序是静态的，进程是动态的
* 进程作为操作系统调度和分配资源的最小单位（亦是刺痛运行程序的基本单位），系统在运行时会为每个进程分配不同的内存区域
* 现代的操作系统，大都支持多进程的，支持同时运行多个程序。
3. 线程：进程可进一步细化为线程，是程序内部的一条执行路径，一个进程至少有一个线程。
* 一个进程同一时间若并行执行多个线程，就是支持多线程的
* 线程作为CPU调度和执行的最小单位
* 一个进程中的多个线程共享相同的内存单元，他们从同一个堆中分配对象，可以访问相同的变量和对象，这就使得线程间通信更简便，高效，但多个线程操作共享的系统资源可能就会带来安全隐患。

不同进程之间是不共享内存的
进程之间的数据交换和通信成本很高

线程调度
1. 分时调度
2. 抢占式调度

> 并行(parallel)：指两个或多个事件咋同一时刻发生（同时发生），指在同一时刻，有多条指令在多个CPU上同时执行，比如多个人同时做不同的事。
> 并发(concurrency)：指两个或多个事件在同一时间段内发生，即在一段事件内，有多条指令在单个CPU上快速轮换，交替执行，使得在宏观上具有多个进程同时执行的效率。

## 创建和启动线程
* java语言的JVm允许程序运行多个线程，使用java.lang.Thread类代表线程，所有的线程对象都必须是Thread类或其子类的实例
* Thread类的特性
* * 每个线程都是通过特定Thread对象的start()方法来启动这个线程，而非直接调用run()
* * 要想实现多线程，必须在主线程中创建新的线程对象。

### 方式一，继承Thread类
1. 创建一个继承于Thread类的子类
2. 重写Thread类的run() ----> 将此线程要执行的操作声明在此方法体中
3. 创建当前Thread的子类的对象
4. 通过对象调用start()  1.启动线程 2.调用当前前程的run方法
```java
public class Test {
    public static void main(String[] args) {
        PrintNumber t1 = new PrintNumber();
        t1.start();
		System.out.println("hello");//看一下在哪里如果再写一个循环打印出的数字会有交互
    }
}
class PrintNumber extends Thread{
    @Override
    public void run() {
        for(int i=1;i<=100;i++){
            if(i%2==0){
                System.out.println(i);
				System.out.println(Thread.currentThread().getName());//当前线程的名字
            }
        }
    }
}
```
问题1：能否使用t1.run()替换t1.start()的调用，实现分线程的创建和调用?
不能，那样就不是多线程了
问题2：再提供一个分线程，用于100以内偶数的遍历？
不能让已经start的线程再次执行start，否则会报异常，可以在创建一个实例调用

### 方式二 实现Runnable接口
步骤
1. 创建一个实现Runnable接口的类
2. 实现接口中的run() --> 将此线程要执行的操作声明在此方法发中
3. 创建当前实现类的对象
4. 将此对象作为参数传递到Thread类的构造器中，创建Thread类的实例`new Thread(实例)`
5. Thread类的实例调用strat();

共同点:
① 启动线程，使用的都是Thread类中定义的start()
② 创建的线程对象，都是Thread类或其子类的实例
不同点: 一个是类的继承，一个是接口的实现
建议，建议使用实现Runnable接口的方式
Runnable方式的好处:① 实现的方式，避免类的单继承的局限性 ② 更适合处理有共享数据的问题 ③ 实现了代码和数据的分离
联系 `public class Thread implements Runnable` 代理模式
## 线程的常用结构
1. **线程中的构造器**
```java
public Thread() //分配一个新的线程对象

public Thread(String name)//分配一个指定名字的新的线程对象

public Thread(Runnable target) //指定创建线程的目标对象，它实现了Runnable接口中的run方法

public Thread(Runnable target,String name ) //分配一个带有指定目标新的线程对象并指定名字
```
2. **线程中的常用方法**
start() 1,启动线程 2，调用线程的run()
run() 将线程要执行的操作，声明在run()中
currentThread() 获取当前代码对应的线程
getName(): 获取线程名
setName() 设置线程名
sleep(Long millis) ： 静态方法，调用时可以使得当前线程睡眠指定的毫秒数
tip： 父类方法没有throws或者说抛出的异常很小，子类不能抛出比父类大
yield()  静态方法，一旦执行此方法，就释放CPU的执行权
join(); 在线程a中通过线程b调用join() 意味着线程a进入阻塞状态，直到线程b执行结束，线程a才结束阻塞状态，继续执行
isAlive() 判断当前线程是否存活
**过时的方法**
stop();不建议使用，强行结束一个线程的执行
void suspend/resume 好比播放器的暂停和回复，二者必须成对出现，可能造成死锁，不建议使用
3. **线程的优先级**
Thread内部声明的三个常量
MAX_PRIPORITY(10) 最高优先级
MIN_PRIPORITY(1)  最低优先级
NORM_PRIPORITY(5)  普通优先级，默认情况下main线程具有普通优先级

getPriority() 获取线程的优先级
setPriority() 设置线程的优先级 [1-10]
4.  ***多线程的声明周期***
JDK1.5之前：5种状态
就绪<--阻塞<--运行
新建-->就绪<-->运行-->死亡，
阻塞是一个临时状态

JDK1.5之后
        计时等待<--
新建-->准备<--->运行-->死亡
   锁阻塞        无限等待

## 线程安全问题及解决
当我们使用多个线程访问同一资源(可以是同一变量，同一个文件，同一条记录等)的时候，
若多个线程只有读操作，那么不会发生线程安全问题，但是如果多个线程中对资源有读和写的操作
就容易出现安全问题。

线程的安全问题及线程的同步机制
1. 多线程卖票，出现的问题，出现了重票和错票
2. 什么原因导致的？线程1操作ticket的过程中，尚未结束的情况下，其他线程也参与进来，对ticket进行操作
3. 如何解决？必须保证一个线程a在操作ticket的过程中，其他线程必须等待，直到线程a操作ticket结束以后，其他线程才可以操作ticket
4. Java是如何解决线程的安全问题？使用线程的同步机制
方式一，同步代码块
synchronized(同步监视器){
	//需要被同步的代码
}

说明,
> 需要被同步的代码，即为操作共享数据的代码。
> 共享数据，即多个线程都需要操作的数据，比如ticket
> 需要被同步的代码，在被synchronized包裹以后，就使得一个线程在操作这些代码的过程中，其他线程必须等待。
> 同步监视器，俗称锁，那个线程获取了锁，那个线程就能执行需要被同步的代码。
> 同步监视器可以使用任何一个类的对象充当，但是，多个线程必须共用同一个同步监视器

注意：
在实现Runnable接口的方式中，同步监视器按可以考虑使用this
在继承Thread类的方式中，同步监视器要慎用this，可以考虑使用 当前类.class



方式二，同步方法



















# 有意思的问题
1. ==形参不能改变实参的值==
```java
package com.wzy.javawork;

public class javaWork {
	public static void main(String[] args) {
		    fu f = new fu();
	        zi z = new zi();
	        System.out.println(f.getA());//10   
	        z.set(20);
	        System.out.println(z.getA()); // 这里会打印出 20，因为 zi 类的 set 方法修改了父类的 a 值     
	        z.set(20);//实参 这里没变化的原因就是形参不能改变实参的值
	        System.out.println(f.getA()); // 这里会打印出 20，因为 zi 类的 set 方法再次修改了父类的 a 值   
	        f.setA(60);
	        System.out.println(f.getA()); // 这里会打印出 60，因为 f 类自己的 setA 方法修改了 a 值
	        System.out.println(z.getA()); // 这里会打印出 60，因为 f 类自己的 setA 方法修改了 a 值，影响了 zi 类的 a 值
	}
}
class fu{
    int a=10;
    public int getA() {
        return a;
    }
    public void setA(int b) {
        this.a = b;
    }
}
class zi extends fu{
    public void set(int b) {//形参
        super.setA(b); // 正确地调用父类的 setA 方法
    }
}
```


集合迭代器抛出异常的问题
```java
Iterator<String> iterator = ls1.iterator();
	while (iterator.hasNext()) {
	    String item = iterator.next();
	     if ("def".equals(item)) {
	         count++;
	        iterator.remove();
	        //ls1.remove(1);这样写就会报错
	         /**
	         * 需要用iterator内部的remove 
	         * 因为查看源码可知调用List的add 或remove
	         * modCount（被修改的次数）都会+1
	         * 而原本的expectedModCount是暂时不变的
	         * 如果调用外部的remove会使expectedModCount和modCount不相等而抛出异常
	         * 
	         * 所以向遍历容器/集合的元素且同时remove等操作时
	         * 应尽量调用其对应的迭代器
	         * 并通过迭代器的hashNext,next,remove进行操作
	         * 
	         */
	     }
	            
	            
	        }
```