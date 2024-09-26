# 以下全部项目均在Springboot下使用



# 拦截器如何使用

定义一个过滤器实现`HandlerInterceptor`接口

```java
@Component
public class LoginProtectInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //在处理请求的目标 handler 方法前执行
        return true;//放行
    }
    
        @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        //// 在目标 handler 方法之后，handler报错不执行!
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        // 渲染视图之后执行(最后),一定执行!
    }
}
```

配置类(实现`WebMvcConfigurer`)中启用拦截器

```java
@EnableWebMvc  //json数据处理,必须使用此注解,因为他会加入json处理器
@Configuration
@ComponentScan(basePackages = {"com.atguigu.controller","com.atguigu.exceptionhandler"}) //TODO: 进行controller扫描，在springboot中可以不加
public class WebMvcConfig implements WebMvcConfigurer {
    @Autowired
    LoginProtectInterceptor loginProtectInterceptor;
    
    //添加拦截器
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(loginProtectInterceptor).addPathPatterns("/**");
    }
    
      //配置jsp对应的视图解析器
    @Override
    public void configureViewResolvers(ViewResolverRegistry registry) {
        //快速配置jsp模板语言对应的
        registry.jsp("/WEB-INF/views/",".jsp");
    }

    //开启静态资源处理 <mvc:default-servlet-handler/>
    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }
    
}
```





# 过滤器如何使用

1. 编写过滤器的类要实现Filter接口

```java
import jakarta.servlet.*;//看一下实现的哪一个Filter
public class MyFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println("初始化方法执行");
    }
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println("doFilter前");
        filterChain.doFilter(servletRequest,servletResponse);//放行
        System.out.println("doFilter后");
    }
    @Override
    public void destroy() {
        System.out.println("销毁方法");
    }
}
```

2. 交给IOC容器管理,在任一配置类中

```java
	@Bean
    public MyFilter myFilter(){
        MyFilter myFilter = new MyFilter();
        return myFilter;
    }
```



# Mybatis如何使用

注意点:

* 启动类中要扫描mapper接口所在的包
* 在配置类中要配置mapper.xml的位置
* 是否使用druid连接池,是用自带的连接池,配置文件写的方式不同

导入相关依赖

```xml
 	<dependency>
        <groupId>org.mybatis.spring.boot</groupId>
        <artifactId>mybatis-spring-boot-starter</artifactId>
        <version>3.0.1</version>
    </dependency>

    <!-- 数据库相关配置启动器 -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-jdbc</artifactId>
    </dependency>

    <!-- druid启动器的依赖  -->
    <dependency>
        <groupId>com.alibaba</groupId>
        <artifactId>druid-spring-boot-3-starter</artifactId>
        <version>1.2.22</version>//用低版本的需要手动加一些东西18
    </dependency>

    <!-- 驱动类-->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>8.0.28</version>
    </dependency>
```

编写配置文件

```java
server:
  port: 80
  servlet:
    context-path: /
spring:
  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    #druid 用druid连接池则需要加 用自带的不加
    druid:
      url: jdbc:mysql:///day01
      username: root
      password: root
      driver-class-name: com.mysql.cj.jdbc.Driver
      
mybatis:
  configuration:  # setting配置
    auto-mapping-behavior: full
    map-underscore-to-camel-case: true
    log-impl: org.apache.ibatis.logging.slf4j.Slf4jImpl
  type-aliases-package: com.atguigu.pojo # 配置别名
  mapper-locations: classpath:/mapper/*.xml # mapperxml位置
```

在启动类中扫描mapper接口

`@MapperScan("com.atguigu.mapper") //mapper接口扫描配置`

## 见过的报错

1. `org.h2.Driver`

`java.lang.ClassNotFoundException: org.h2.Driver`将依赖`druid-spring-boot-3-starter`版本改为22可以解决。

后者加入bean也可解决

```java
   @ConfigurationProperties(prefix = "spring.datasource.druid")//读取配置文件
    @Bean
    public DruidDataSource druidDataSource(){
        DruidDataSource druidDataSource = new DruidDataSource();
        return druidDataSource;
    }
```



# AOP如何使用

导入依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-aop</artifactId>
</dependency>
```

## 方法

直接使用AOP注解即可

```java
package com.atguigu.advice;
// @Aspect表示这个类是一个切面类
@Aspect
// @Component注解保证这个切面类能够放入IOC容器
@Component
public class LogAspect {
    // @Before注解：声明当前方法是前置通知方法
    // value属性：指定切入点表达式，由切入点表达式控制当前通知方法要作用在哪一个目标方法上
    @Before(value = "execution(public int com.atguigu.proxy.CalculatorPureImpl.add(int,int))")
    public void printLogBeforeCore() {
        System.out.println("[AOP前置通知] 方法开始了");
    }
    @AfterReturning(value = "execution(public int com.atguigu.proxy.CalculatorPureImpl.add(int,int))")
    public void printLogAfterSuccess() {
        System.out.println("[AOP返回通知] 方法成功返回了");
    }
    @AfterThrowing(value = "execution(public int com.atguigu.proxy.CalculatorPureImpl.add(int,int))")
    public void printLogAfterException() {
        System.out.println("[AOP异常通知] 方法抛异常了");
    }
    @After(value = "execution(public int com.atguigu.proxy.CalculatorPureImpl.add(int,int))")
    public void printLogFinallyEnd() {
        System.out.println("[AOP后置通知] 方法最终结束了");
    }
}
```



### AfterReturning

在返回通知中，通过 **@AfterReturning**注解的returning属性获取目标方法的返回值！

```java
// @AfterReturning注解标记返回通知方法
// 在返回通知中获取目标方法返回值分两步：
// 第一步：在@AfterReturning注解中通过returning属性设置一个名称
// 第二步：使用returning属性设置的名称在通知方法中声明一个对应的形参
@AfterReturning(
        value = "execution(public int com.atguigu.aop.api.Calculator.add(int,int))",
        returning = "targetMethodReturnValue"
)
public void printLogAfterCoreSuccess(JoinPoint joinPoint, Object targetMethodReturnValue) {
    String methodName = joinPoint.getSignature().getName();
    System.out.println("[AOP返回通知] "+methodName+"方法成功结束了，返回值是：" + targetMethodReturnValue);
}
```

### AfterThrowing

在异常通知中，通过@AfterThrowing注解的throwing属性获取目标方法抛出的异常对象

```java
// @AfterThrowing注解标记异常通知方法
// 在异常通知中获取目标方法抛出的异常分两步：
// 第一步：在@AfterThrowing注解中声明一个throwing属性设定形参名称
// 第二步：使用throwing属性指定的名称在通知方法声明形参，Spring会将目标方法抛出的异常对象从这里传给我们
@AfterThrowing(
        value = "execution(public int com.atguigu.aop.api.Calculator.add(int,int))",
        throwing = "targetMethodException"
)
public void printLogAfterCoreException(JoinPoint joinPoint, Throwable targetMethodException) {
    String methodName = joinPoint.getSignature().getName();
    System.out.println("[AOP异常通知] "+methodName+"方法抛异常了，异常类型是：" + 		targetMethodException.getClass().getName());
}
```

### Before

` @Before`注解：声明当前方法是前置通知方法

### After

AOP后置通知 方法最终结束了

### Around

```java
// 使用@Around注解标明环绕通知方法
@Around(value = "com.atguigu.aop.aspect.AtguiguPointCut.transactionPointCut()")
public Object manageTransaction(
    
        // 通过在通知方法形参位置声明ProceedingJoinPoint类型的形参，
        // Spring会将这个类型的对象传给我们
        ProceedingJoinPoint joinPoint) {
    
    // 通过ProceedingJoinPoint对象获取外界调用目标方法时传入的实参数组
    Object[] args = joinPoint.getArgs();
    
    // 通过ProceedingJoinPoint对象获取目标方法的签名对象
    Signature signature = joinPoint.getSignature();
    
    // 通过签名对象获取目标方法的方法名
    String methodName = signature.getName();
    
    // 声明变量用来存储目标方法的返回值
    Object targetMethodReturnValue = null;
    
    try {
    
        // 在目标方法执行前：开启事务（模拟）
        log.debug("[AOP 环绕通知] 开启事务，方法名：" + methodName + "，参数列表：" + Arrays.asList(args));
    
        // 过ProceedingJoinPoint对象调用目标方法
        // 目标方法的返回值一定要返回给外界调用者
        targetMethodReturnValue = joinPoint.proceed(args);
    
        // 在目标方法成功返回后：提交事务（模拟）
        log.debug("[AOP 环绕通知] 提交事务，方法名：" + methodName + "，方法返回值：" + targetMethodReturnValue);
    
    }catch (Throwable e){
    
        // 在目标方法抛异常后：回滚事务（模拟）
        log.debug("[AOP 环绕通知] 回滚事务，方法名：" + methodName + "，异常：" + e.getClass().getName());
    
    }finally {
    
        // 在目标方法最终结束后：释放数据库连接
        log.debug("[AOP 环绕通知] 释放数据库连接，方法名：" + methodName);
    
    }
    
    return targetMethodReturnValue;
}
```



## 获取通知细节

```java
@Before(value = "execution(public int com.atguigu.aop.api.Calculator.add(int,int))")
public void printLogBeforeCore(JoinPoint joinPoint) {
     //1. 方法的签名：一个方法的全部声明信息
    Signature signature = joinPoint.getSignature();
    // 2.通过方法的签名对象获取目标方法的详细信息
    String methodName = signature.getName();
    // 3.通过JoinPoint对象获取外界调用目标方法时传入的实参列表
    Object[] args = joinPoint.getArgs();
    // 4.由于数组直接打印看不到具体数据，所以转换为List集合
    List<Object> argList = Arrays.asList(args);
}
```

## 切点表达式

![img](./assets/quality,Q_100&file_size=88902.webp)

## 切面优先级

相同目标方法上同时存在多个切面时，切面的优先级控制切面的内外嵌套顺序。(想一个圆)

-   优先级高的切面：外面
-   优先级低的切面：里面

使用 @Order 注解可以控制切面的优先级：

-   @Order(较小的数)：优先级高
-   @Order(较大的数)：优先级低

# 声明式事务

```xml
 <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jdbc</artifactId>
</dependency>
```

注：`SpringBoot`项目会自动配置一个 `DataSourceTransactionManager`，所以我们只需在方法（或者类）加上 `@Transactional` 注解，就自动纳入 Spring 的事务管理了

```java
@Transactional
public void update(){
}
```

# 文件上传



配置文件上传的属性

```xml
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=10MB
```

编写Controller

```java

@RestController
public class FileUploadController {
 
    @PostMapping("/upload")
    public String handleFileUpload(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return "Please select a file to upload.";
        }
        try {
            byte[] bytes = file.getBytes();
            String uploadDir = "/path/to/upload/directory/";
            File uploadedFile = new File(uploadDir + file.getOriginalFilename());
            file.transferTo(uploadedFile);
            return "File uploaded successfully!";
        } catch (IOException e) {
            e.printStackTrace();
            return "File upload failed!";
        }
    }
}
```

