# IoC

- ioC容器

  Spring IoC 容器，负责实例化、配置和组装 bean（组件）核心容器。容器通过读取配置元数据来获取有关要实例化、配置和组装组件的指令。

- **IoC（Inversion of Control）控制反转**

  IoC 主要是针对对象的创建和调用控制而言的，也就是说，当应用程序需要使用一个对象时，不再是应用程序直接创建该对象，而是由 IoC 容器来创建和管理，即控制权由应用程序转移到 IoC 容器中，也就是“反转”了控制权。这种方式基本上是通过依赖查找的方式来实现的，即 IoC 容器维护着构成应用程序的对象，并负责创建这些对象。

- **DI (Dependency Injection) 依赖注入**

  DI 是指在组件之间传递依赖关系的过程中，将依赖关系在容器内部进行处理，这样就不必在应用程序代码中硬编码对象之间的依赖关系，实现了对象之间的解耦合。在 Spring 中，DI 是通过 XML 配置文件或注解的方式实现的。它提供了三种形式的依赖注入：构造函数注入、Setter 方法注入和接口注入。

# 容器实现类

-   **ApplicationContext容器实现类**：



| 类型名                             | 简介                                                         |
| ---------------------------------- | ------------------------------------------------------------ |
| ClassPathXmlApplicationContext     | 通过读取类路径下的 XML 格式的配置文件创建 IOC 容器对象       |
| FileSystemXmlApplicationContext    | 通过文件系统路径读取 XML 格式的配置文件创建 IOC 容器对象     |
| AnnotationConfigApplicationContext | 通过读取Java配置类创建 IOC 容器对象                          |
| WebApplicationContext              | 专门为 Web 应用准备，基于 Web 环境创建 IOC 容器对象，并将对象引入存入 ServletContext 域中。 |

# 基于XML组件管理

**SpringIoc容器接口**：&#x20;

`BeanFactory` 接口提供了一种高级配置机制，能够管理任何类型的对象，它是SpringIoC容器标准化超接口！

`ApplicationContext` 是 `BeanFactory` 的子接口。

**`ApplicationContext`容器实现类**：

| 类型名                               | 简介                                                         |
| ------------------------------------ | ------------------------------------------------------------ |
| `ClassPathXmlApplicationContext`     | 通过读取类路径下的 `XML `格式的配置文件创建` IOC` 容器对象   |
| `FileSystemXmlApplicationContext`    | 通过文件系统路径读取 `XML `格式的配置文件创建` IOC `容器对象 |
| `AnnotationConfigApplicationContext` | 通过读取Java配置类创建` IOC `容器对象                        |
| `WebApplicationContext`              | 专门为 Web 应用准备，基于 Web 环境创建` IOC` 容器对象，并将对象引入存入 `ServletContext` 域中。 |

## 基于静态工厂实例化

组件类

```java
public class ClientService {
  private static ClientService clientService = new ClientService();
  private ClientService() {}
     public static ClientService createInstance() {
    return clientService;
  }
}
```

配置文件

```xml
<bean id="clientService"
  class="examples.ClientService"
  factory-method="createInstance"/>
```



-   class属性：指定工厂类的全限定符！
-   factory-method: 指定静态工厂方法，注意，该方法必须是static方法。

## 基于实例工厂实例化

```java
public class DefaultServiceLocator {
          private static ClientServiceImpl clientService = new ClientServiceImpl();
        
          public ClientService createClientServiceInstance() {
            return clientService;
          }
        }
```

```xml
2.  xml配置文件编写

    文件：resources/spring-bean-01.xml
    ```xml
    <!-- 将工厂类进行ioc配置 -->
    <bean id="serviceLocator" class="examples.DefaultServiceLocator">
    </bean>
    
    <!-- 根据工厂对象的实例工厂方法进行实例化组件对象 -->
    <bean id="clientService"
      factory-bean="serviceLocator"
      factory-method="createClientServiceInstance"/>
```
    -   factory-bean属性：指定当前容器中工厂Bean 的名称。
    -   factory-method:  指定实例工厂方法名。注意，实例方法必须是非static的！
##  构造器带参数的注入



```
注入:将交给IoC管理的对象,送到需要它的地方(应用类型,或基本类型都能注入)

在spring配置文件(spring-IoC.xml)里面将类交给IoC容器管理。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    <!--将类com.wzy.ioc_o1.B交给IoC容器管理 -->
	<bean id="B1" class="com.wzy.ioc_01.B"></bean>
    <!-- id可以自己命名-->
    <!-- 如果构造对象时带有参数String name,B b;B是另一个类
	会按照顺序new出来对象并交给IoC容器管理
	-->
     <bean id="B1" class="com.wzy.ioc_01.B"></bean>
    <bean id="A2" class="com.wzy.ioc_01.A">
        <constructor-arg index="0" value="张三"/>
        <constructor-arg index="1" ref="B1"/>
    </bean>
</beans>


```

new 出来带参对象时,参数的填写方式

```xml
 <!-- 场景1: 多参数，可以按照相应构造函数的顺序注入数据 -->
        <beans>
          <bean id="userService" class="x.y.UserService">
            <!-- value直接注入基本类型值 -->
            <constructor-arg  value="18"/>
            <constructor-arg  value="赵伟风"/>
            
            <constructor-arg  ref="userDao"/>
          </bean>
          <!-- 被引用类bean声明 -->
          <bean id="userDao" class="x.y.UserDao"/>
        </beans>

        <!-- 场景2: 多参数，可以按照相应构造函数的名称注入数据 
			不知道为啥,我是用这种方式会出现警告,其他两种方式就没有
		-->
        <beans>
          <bean id="userService" class="x.y.UserService">
            <!-- value直接注入基本类型值 -->
            <constructor-arg name="name" value="赵伟风"/>
            <constructor-arg name="userDao" ref="userDao"/>
            <constructor-arg name="age"  value="18"/>
          </bean>
          <!-- 被引用类bean声明 -->
          <bean id="userDao" class="x.y.UserDao"/>
        </beans>
    
        <!-- 场景3: 多参数，可以按照相应构造函数的角标注入数据 
                   index从0开始 构造函数(0,1,2....)
        -->
        <beans>
            <bean id="userService" class="x.y.UserService">
            <!-- value直接注入基本类型值 -->
            <constructor-arg index="1" value="赵伟风"/>
            <constructor-arg index="2" ref="userDao"/>
            <constructor-arg index="0"  value="18"/>
          </bean>
          <!-- 被引用类bean声明 -->
          <bean id="userDao" class="x.y.UserDao"/>
        </beans>          
```

```xml
    -   constructor-arg标签：指定构造参数和对应的值
    -   constructor-arg标签：name属性指定参数名、index属性指定参数角标、value属性指定普通属性值
```

## 基于Setter方法的注入

```xml;
<bean id="simpleMovieLister" class="examples.SimpleMovieLister">
  <!-- setter方法，注入movieFinder对象的标识id
       name = 属性名(setter方法 去set和首字母小写的值 调用set方法的名)
		ref = 引用bean的id值
   -->
  <property name="movieFinder" ref="movieFinder" />

  <!-- setter方法，注入基本数据类型movieName
       name = 属性名 value= 基本类型值
   -->
  <property name="movieName" value="消失的她"/>
</bean>

<bean id="movieFinder" class="examples.MovieFinder"/>
```

-   property标签： 可以给setter方法对应的属性赋值
-   property 标签： name属性代表**set方法标识**、ref代表引用bean的标识id、value属性代表基本属性值

## 如何实例化IoC容器

```java
//方式1:实例化并且指定配置文件
//参数：String...locations 传入一个或者多个配置文件
ClassPathXmlApplicationContext context = 
           new ClassPathXmlApplicationContext("services.xml", "daos.xml");
           
//方式2:先实例化，再指定配置文件，最后刷新容器触发Bean实例化动作 [springmvc源码和contextLoadListener源码方式]  
ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext();   
//设置配置配置文件,方法参数为可变参数,可以设置一个或者多个配置
context.setConfigLocations("services.xml", "daos.xml");
//后配置的文件,需要调用refresh方法,触发刷新配置
context.refresh();   
```

```java
//方式1: 根据id获取
//没有指定类型,返回为Object,需要类型转化!
HappyComponent happyComponent = 
        (HappyComponent) iocContainer.getBean("bean的id标识");
        
//使用组件对象        
happyComponent.doWork();

//方式2: 根据类型获取
//ioc的配置一定是实现类,但是可以根据接口类型获取值
//根据类型获取,但是要求,同类型(当前类,或者之类,或者接口的实现类)只能有一个对象交给IoC容器管理
//配置两个或者以上出现: org.springframework.beans.factory.NoUniqueBeanDefinitionException 问题
HappyComponent happyComponent = iocContainer.getBean(HappyComponent.class);
happyComponent.doWork();

//方式3: 根据id和类型获取
HappyComponent happyComponent = iocContainer.getBean("bean的id标识", HappyComponent.class);
happyComponent.doWork();

根据类型来获取bean时，在满足bean唯一性的前提下，其实只是看：『对象 instanceof 指定的类型』的返回结果，
只要返回的是true就可以认定为和类型匹配，能够获取到。
```

## 周期管理

在BeanOne类中声明一个方法init/destory方法(无形参列表的方法),就可以在xml中设置`init-method`/`destory-method`在IoC容器实例化时/销毁时进行调用。

```xml
<beans>
  <bean id="beanOne" class="examples.BeanOne" init-method="init" />
  <bean id="beanTwo" class="examples.BeanTwo" destroy-method="cleanup" />
</beans>
```

### 组件作用域

| 取值      | 含义                                        | 创建对象的时机   | 默认值 |
| --------- | ------------------------------------------- | ---------------- | ------ |
| singleton | 在 IOC 容器中，这个 bean 的对象始终为单实例 | IOC 容器初始化时 | 是     |
| prototype | 这个 bean 在 IOC 容器中有多个实例           | 获取 bean 时     | 否     |



如果是在WebApplicationContext环境下还会有另外两个作用域（但不常用）   

| 取值    | 含义                 | 创建对象的时机 | 默认值 |
| ------- | -------------------- | -------------- | ------ |
| request | 请求范围内有效的实例 | 每次请求       | 否     |
| session | 会话范围内有效的实例 | 每次会话       | 否     |

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    
    <!-- 这样配置每次getBean获得的对象就不是同一个对象了-->
    <bean id="A1" class="com.wzy.ioc_01.A" scope="prototype"/>
</beans>
```

## FactoryBean

`FactoryBean<T>` 接口提供三种方法：

- `T getObject()`:&#x20;

  返回此工厂创建的对象的实例。该返回值会被存储到IoC容器！

- `boolean isSingleton()`:&#x20;

  如果此 `FactoryBean` 返回单例，则返回 `true` ，否则返回 `false` 。此方法的默认实现返回 `true` （注意，lombok插件使用，可能影响效果）。

- `Class<?> getObjectType()`: 返回 `getObject()` 方法返回的对象类型，如果事先不知道类型，则返回 `null` 。

A为自己设置的另一个类

```java
public class FactoryBean1 implements FactoryBean<A> {

    @Override
    public A getObject() throws Exception {
        //使用你自己的方法实例化对象
        A a = new A();
        return a;
    }
    @Override
    public Class<?> getObjectType() {
        return A.class;
    }
}
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    <!-- id是getObiect返回的对象表示
            工厂bean的标识为&+id
如果想要获取FactoryBean对象, 直接在id前添加&符号即可!
        class是factoryBean1标准化工厂类
    -->
    <bean id="A" class="com.wzy.ioc_01.FactoryBean1"/>
</beans>
```

## FactoryBean和BeanFactory区别

\*\*FactoryBean \*\*是 Spring 中一种特殊的 bean，可以在 getObject() 工厂方法自定义的逻辑创建Bean！是一种能够生产其他 Bean 的 Bean。FactoryBean 在容器启动时被创建，而在实际使用时则是通过调用 getObject() 方法来得到其所生产的 Bean。因此，FactoryBean 可以自定义任何所需的初始化逻辑，生产出一些定制化的 bean。

一般情况下，整合第三方框架，都是通过定义FactoryBean实现！！！

**BeanFactory** 是 Spring 框架的基础，其作为一个顶级接口定义了容器的基本行为，例如管理 bean 的生命周期、配置文件的加载和解析、bean 的装配和依赖注入等。BeanFactory 接口提供了访问 bean 的方式，例如 getBean() 方法获取指定的 bean 实例。它可以从不同的来源（例如 Mysql 数据库、XML 文件、Java 配置类等）获取 bean 定义，并将其转换为 bean 实例。同时，BeanFactory 还包含很多子类（例如，ApplicationContext 接口）提供了额外的强大功能。

总的来说，FactoryBean 和 BeanFactory 的区别主要在于前者是用于创建 bean 的接口，它提供了更加灵活的初始化定制功能，而后者是用于管理 bean 的框架基础接口，提供了基本的容器功能和 bean 生命周期管理。



## 引入配置文件,并使用其值

```xml
   <!-- 引入jdbc.properties配置文件-->
    <context:property-placeholder location="classpath:jdbc.properties"/>
    <!--使用配置文件里设置的值-->
    <bean id="userController2" class="com.wzy.ioc.UserController">
        <property name="name" value="${jdbc.username}"/>
        <property name="password" value="${jdbc.password}"/>
    </bean>
```





# 基于注解组件管理

注解+xml扫描

第三方类(jar包)还是要写xml格式管理和注入，注入后用注解也能使用

| 注解        | 说明                                                         |
| ----------- | ------------------------------------------------------------ |
| @Component  | 该注解用于描述 Spring 中的 Bean，它是一个泛化的概念，仅仅表示容器中的一个组件（Bean），并且可以作用在应用的任何层次，例如 Service 层、Dao 层等。 使用时只需将该注解标注在相应类上即可。 |
| @Repository | 该注解用于将数据访问层（Dao 层）的类标识为 Spring 中的 Bean，其功能与 @Component 相同。 |
| @Service    | 该注解通常作用在业务层（Service 层），用于将业务层的类标识为 Spring 中的 Bean，其功能与 @Component 相同。 |
| @Controller | 该注解通常作用在控制层（如SpringMVC 的 Controller），用于将控制层的类标识为 Spring 中的 Bean，其功能与 @Component 相同。 |

对于Spring使用IOC容器管理这些组件来说没有区别，也就是语法层面没有区别。所以@Controller、@Service、@Repository这三个注解只是给开发人员看的，让我们能够便于分辨组件的作用。
注意：虽然它们本质上一样，但是为了代码的可读性、程序结构严谨！我们肯定不能随便胡乱标记。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">
    <!-- 配置自动扫描的包 -->
    <!-- 1.包要精准,提高性能!
         2.会扫描指定的包和子包内容
         3.多个包可以使用,分割 例如: com.atguigu.controller,com.atguigu.service等
    -->
    <context:component-scan base-package="com.atguigu.components"/>
  
</beans>
```

5. 情况2：指定排除组件

   ```xml
   <!-- 情况三：指定不扫描的组件 -->
   <context:component-scan base-package="com.atguigu.components">
       
       <!-- context:exclude-filter标签：指定排除规则 -->
       <!-- type属性：指定根据什么来进行排除，annotation取值表示根据注解来排除 -->
       <!-- expression属性：指定排除规则的表达式，对于注解来说指定全类名即可 -->
       <context:exclude-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
   </context:component-scan>
   ```

   情况3：指定扫描组件

   ```xml
   <!-- 情况四：仅扫描指定的组件 -->
   <!-- 仅扫描 = 关闭默认规则 + 追加规则 -->
   <!-- use-default-filters属性：取值false表示关闭默认扫描规则 -->
   <context:component-scan base-package="com.atguigu.ioc.components" use-default-filters="false">
       
       <!-- context:include-filter标签：指定在原有扫描规则的基础上追加的规则 -->
       <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
   </context:component-scan>
   ```

   

组件名字默认为类的首字母小写,要改名`@Controller(value="name")`或者`@Controller("name")`

## 作用域和周期方法

周期方法命名随意,要没有形参

在初始化方法前加上注解`@PostConstruct`在销毁方法之前添加注解`@PreDestory`

组件作用域可参考xml组件管理的组件作用域。

```xml
@Scope(scopeName = ConfigurableBeanFactory.SCOPE_SINGLETON) //单例,默认值
@Scope(scopeName = ConfigurableBeanFactory.SCOPE_PROTOTYPE) //多例  二选一
public class BeanOne {

  //周期方法要求： 方法命名随意，但是要求方法必须是 public void 无形参列表
  @PostConstruct  //注解制指定初始化方法
  public void init() {
    // 初始化逻辑
  }
}
```

多例模式不管destory方法

## 引用类型自动装配(DI)

参与自动装配的组件（需要装配、被装配）全部都必须在IoC容器中。

@Autowired注解

在成员变量上直接标记@Autowired注解即可，不需要提供setXxx()方法。以后我们在项目中的正式用法就是这样。

* 如何装配:

1. 能够找到唯一的 bean：直接执行装配

2. 和所需类型匹配的 bean 不止一个(多个)

> 方案1:成员属性指定@Autowired多个组件的时候,默认会根据成员属性名查找
>
> 方案2:使用@Qualifier注解,不能单独使用必须配合@Autowired，指定bean的id

```java
@Controller(value = "tianDog")
public class SoldierController {
    
    @Autowired
    @Qualifier(value = "maomiService222")
    // 根据面向接口编程思想，使用接口类型引入Service组件
    private ISoldierService soldierService;
```

佛系装配(装不上不报错，不推荐)

```java
@Controller(value = "tianDog")
public class SoldierController {

    // 给@Autowired注解设置required = false属性表示：能装就装，装不上就不装
    @Autowired(required = false)
    private ISoldierService soldierService;
```

整合注解

`@Resource(name="userServiceImpl")=@Autowried(required = true) + @Qualifier(value = "userServiceImpl")`

需要导入依赖(高于JDK11或低于JDK8需要引入以下依赖)

```xml
<dependency>
    <groupId>jakarta.annotation</groupId>
    <artifactId>jakarta.annotation-api</artifactId>
    <version>2.1.1</version>
</dependency>
```

## 基本属性赋值

1. 直接赋值
2. 注解赋值`@Value("19")` 通常用于注入外部化属性,读取配置文件.

## 引入配置文件并使用其值

1. 引入配置文件

```xml
   <context:property-placeholder location="classpath:jdbc.properties"/>
```

2. 在对应的属性上面使用

```java
   //情况1: ${key} 取外部配置key对应的值!
   //情况2: ${key:defaultValue} 没有key,可以给与默认值
	@Value("${jdbc.username}")
    public String name;
```

# 基于配置类方式管理Bean

完全替代xml配置

配置类

使用 @Configuration 注解将一个普通的类标记为 Spring 的配置类。

```java
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

//标注当前类是配置类，替代application.xml    
@Configuration
//使用注解读取外部配置，替代 <context:property-placeholder标签
@PropertySource("classpath:application.properties")
//使用@ComponentScan注解,可以配置扫描包,替代<context:component-scan标签
@ComponentScan(basePackages = {"com.atguigu.components"})
public class MyConfiguration {
    
}
```

**总结：**

@Configuration指定一个类为配置类，可以添加配置注解，替代配置xml文件

@ComponentScan(basePackages = {"包","包"}) 替代\<context:component-scan标签实现注解扫描

@PropertySource("classpath:配置文件地址") 替代 \<context:property-placeholder标签

配合IoC/DI注解，可以**总结：**

@Configuration指定一个类为配置类，可以添加配置注解，替代配置xml文件

@ComponentScan(basePackages = {"包","包"}) 替代\<context:component-scan标签实现注解扫描

@PropertySource("classpath:配置文件地址") 替代 \<context:property-placeholder标签

配合IoC/DI注解，可以进行完整注解开发！进行完整注解开发！

##  @Bean定义组件

**场景需求**：将Druid连接池对象存储到IoC容器

**需求分析**：第三方jar包的类，添加到ioc容器，无法使用@Component等相关注解！因为源码jar包内容为只读模式！

**xml方式实现**：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">


    <!-- 引入外部属性文件 -->
    <context:property-placeholder location="classpath:jdbc.properties"/>

    <!-- 实验六 [重要]给bean的属性赋值：引入外部属性文件 -->
    <bean id="druidDataSource" class="com.alibaba.druid.pool.DruidDataSource">
        <property name="url" value="${jdbc.url}"/>
        <property name="driverClassName" value="${jdbc.driver}"/>
        <property name="username" value="${jdbc.user}"/>
        <property name="password" value="${jdbc.password}"/>
    </bean>

</beans>
```

**配置类方式实现**：

`@Bean` 注释用于指示方法实例化、配置和初始化要由 Spring IoC 容器管理的新对象。对于那些熟悉 Spring 的 `<beans/>` XML 配置的人来说， `@Bean` 注释与 `<bean/>` 元素起着相同的作用。

```java
//标注当前类是配置类，替代application.xml    
@Configuration
//引入jdbc.properties文件
@PropertySource({"classpath:application.properties","classpath:jdbc.properties"})
@ComponentScan(basePackages = {"com.atguigu.components"})
public class MyConfiguration {

    //如果第三方类进行IoC管理,无法直接使用@Component相关注解
    //解决方案: xml方式可以使用<bean标签
    //解决方案: 配置类方式,可以使用方法返回值+@Bean注解
    @Bean
    //下面的属性也可以单独声明成属性
    public DataSource createDataSource(@Value("${jdbc.user}") String username,
                                       @Value("${jdbc.password}")String password,
                                       @Value("${jdbc.url}")String url,
                                       @Value("${jdbc.driver}")String driverClassName){
        //使用Java代码实例化
        DruidDataSource dataSource = new DruidDataSource();
        dataSource.setUsername(username);
        dataSource.setPassword(password);
        dataSource.setUrl(url);
        dataSource.setDriverClassName(driverClassName);
        //返回结果即可
        return dataSource;
    }
}
```

## 高级特性：@Bean注解细节

Bean源码

```java
public @interface Bean {
    //前两个注解可以指定Bean的标识
    @AliasFor("name")
    String[] value() default {};
    @AliasFor("value")
    String[] name() default {};
  
    //autowireCandidate 属性来指示该 Bean 是否候选用于自动装配。
    //autowireCandidate 属性默认值为 true，表示该 Bean 是一个默认的装配目标，
    //可被候选用于自动装配。如果将 autowireCandidate 属性设置为 false，则说明该 Bean 不是默认的装配目标，不会被候选用于自动装配。
    boolean autowireCandidate() default true;

    //指定初始化方法
    String initMethod() default "";
    //指定销毁方法
    String destroyMethod() default "(inferred)";
}
```

周期方法如何指定

原有注解方案:PostConstruct + PreDestroy 注解指定

bean属性指定:initMethod / destoryMethod 指定



`@Bean` 注释注释方法。使用此方法在指定为方法返回值的类型的 `ApplicationContext` 中注册 Bean 定义。缺省情况下，Bean 名称与方法名称相同。下面的示例演示 `@Bean` 方法声明：

```java
@Configuration
public class AppConfig {
  @Bean
  public TransferServiceImpl transferService() {
    return new TransferServiceImpl();
  }
}
```

前面的配置完全等同于下面的Spring XML：

```java
<beans>
  <bean id="transferService" class="com.acme.TransferServiceImpl"/>
</beans>
```

**@Bean 初始化和销毁方法指定**

1. `@Bean` 注解支持指定任意初始化和销毁回调方法，非常类似于 Spring XML 在 `bean` 元素上的 `init-method` 和 `destroy-method` 属性，如以下示例所示：

   ```java
   public class BeanOne {
   
     public void init() {
       // initialization logic
     }
   }
   
   public class BeanTwo {
   
     public void cleanup() {
       // destruction logic
     }
   }
   
   @Configuration
   public class AppConfig {
   
     @Bean(initMethod = "init")
     public BeanOne beanOne() {
       return new BeanOne();
     }
   
     @Bean(destroyMethod = "cleanup")
     public BeanTwo beanTwo() {
       return new BeanTwo();
     }
   }
   ```

2. **@Bean Scope作用域**

作用域:和以前一样@Scope注解,默认单例，可以在配置类的方法上面标注

## Bean方法之间的依赖

1. 方案1：

   直接调用方法返回 Bean 实例：在一个 `@Bean` 方法中直接调用其他 `@Bean` 方法来获取 Bean 实例，虽然是方法调用，也是通过IoC容器获取对应的Bean，例如：

   ```java
   @Configuration
   public class JavaConfig {
   
       @Bean
       public HappyMachine happyMachine(){
           return new HappyMachine();
       }
   
       @Bean
       public HappyComponent happyComponent(){
           HappyComponent happyComponent = new HappyComponent();
           //直接调用方法即可! 
           happyComponent.setHappyMachine(happyMachine());
           return happyComponent;
       }
   
   }
   ```

   方案2：

   参数引用法：通过方法参数传递 Bean 实例的引用来解决 Bean 实例之间的依赖关系，例如：

   ```java
   package com.atguigu.config;
   
   import com.atguigu.ioc.HappyComponent;
   import com.atguigu.ioc.HappyMachine;
   import org.springframework.context.annotation.Bean;
   import org.springframework.context.annotation.Configuration;
   
   /**
    * projectName: com.atguigu.config
    * description: 配置HappyComponent和HappyMachine关系
    */
   
   @Configuration
   public class JavaConfig {
   
       @Bean
       public HappyMachine happyMachine(){
           return new HappyMachine();
       }
   
       /**
        * 可以直接在形参列表接收IoC容器中的Bean!
        *    情况1: 直接指定类型即可
        *    情况2: 如果有多个bean,(HappyMachine 名称 ) 形参名称等于要指定的bean名称!
        *           例如:
        *               @Bean
        *               public Foo foo1(){
        *                   return new Foo();
        *               }
        *               @Bean
        *               public Foo foo2(){
        *                   return new Foo()
        *               }
        *               @Bean
        *               public Component component(Foo foo1 / foo2 通过此处指定引入的bean)
        */
       @Bean
       public HappyComponent happyComponent(HappyMachine happyMachine){
           HappyComponent happyComponent = new HappyComponent();
           //赋值
           happyComponent.setHappyMachine(happyMachine);
           return happyComponent;
       }
   
   }
   ```

## Import多个配置类合并

`@Import` 注释允许从另一个配置类加载 `@Bean` 定义，如以下示例所示：

```java
@Configuration
public class ConfigA {

  @Bean
  public A a() {
    return new A();
  }
}

@Configuration
@Import(value={ConfigA.class})
public class ConfigB {

  @Bean
  public B b() {
    return new B();
  }
}
```

现在，在实例化上下文时不需要同时指定 `ConfigA.class` 和 `ConfigB.class` ，只需显式提供 `ConfigB` ，如以下示例所示：

```java
public static void main(String[] args) {
  ApplicationContext ctx = new AnnotationConfigApplicationContext(ConfigB.class);

  // now both beans A and B will be available...
  A a = ctx.getBean(A.class);
  B b = ctx.getBean(B.class);
}
```

此方法简化了容器实例化，因为只需要处理一个类，而不是要求您在构造期间记住可能大量的 `@Configuration` 类。

可以建一个根配置类,进行导入。

# 总结三种

#### 4.5.1 XML方式配置总结

1.  所有内容写到xml格式配置文件中
2.  声明bean通过\<bean标签
3.  \<bean标签包含基本信息（id,class）和属性信息 \<property(set方法) name value / ref
4.  引入外部的properties文件可以通过\<context:property-placeholder
5.  IoC具体容器实现选择ClassPathXmlApplicationContext对象

#### 4.5.2 XML+注解方式配置总结

1.  注解负责标记IoC的类和进行属性装配
2.  xml文件依然需要，需要通过\<context:component-scan标签指定注解范围
3.  标记IoC注解：@Component,@Service,@Controller,@Repository&#x20;
4.  标记DI注解：@Autowired @Qualifier @Resource @Value
5.  IoC具体容器实现选择ClassPathXmlApplicationContext对象

#### 4.5.3 完全注解方式配置总结

1.  完全注解方式指的是去掉xml文件，使用配置类 + 注解实现
2.  xml文件替换成使用@Configuration注解标记的类
3.  标记IoC注解：@Component,@Service,@Controller,@Repository&#x20;
4.  标记DI注解：@Autowired @Qualifier @Resource @Value
5.  \<context:component-scan标签指定注解范围使用@ComponentScan(basePackages = {"com.atguigu.components"})替代
6.  \<context:property-placeholder引入外部配置文件使用@PropertySource({"classpath:application.properties","classpath:jdbc.properties"})替代
7.  \<bean 标签使用@Bean注解和方法实现
8.  IoC具体容器实现选择AnnotationConfigApplicationContext对象



# 整合测试环境

1. 整合测试环境作用

   好处1：不需要自己创建IOC容器对象了

   好处2：任何需要的bean都可以在测试类中直接享受自动装配

2. 导入相关依赖

   ```xml
   <!--junit5测试-->
   <dependency>
       <groupId>org.junit.jupiter</groupId>
       <artifactId>junit-jupiter-api</artifactId>
       <version>5.3.1</version>
   </dependency>
   <dependency>
       <groupId>org.springframework</groupId>
       <artifactId>spring-test</artifactId>
       <version>6.0.6</version>
       <scope>test</scope>
   </dependency>
   ```

3. 整合测试注解使用

   ```java
   //@SpringJUnitConfig(locations = {"classpath:spring-context.xml"})  //指定配置文件xml
   @SpringJUnitConfig(value = {BeanConfig.class})  //指定配置类
   public class Junit5IntegrationTest {
       
       @Autowired
       private User user;
       
       @Test
       public void testJunit5() {
           System.out.println(user);
       }
   }
   ```



# 遇到过的报错

1. 空指针异常

命名注入依赖了,测试的时候总是报出空指针异常

原因:不能使用junit4且这两个包版本要相容

```xml
<!--junit5测试-->
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter-api</artifactId>
    <version>5.3.1</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>6.0.6</version>
    <scope>test</scope>
</dependency>
```

