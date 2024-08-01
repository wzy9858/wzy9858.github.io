---
title: java8
date: 2024-7-13
tag:
  - Java
category:
  - 后端
---

# 前言

笔记根据视频`2019-尚硅谷-宋红康系列-java8新特性`个人总结，仅供参考。

学习的思维方式:

1. "大处着眼，小处着手"
2. 逆向思维，反证法
3. 透过现象看本质

两句话:

1. 小不忍则乱大谋
2. 识时务者为俊杰

## JAVA8新特性

Java8于2014年3月发布，可以看成是自Java5以来最具革命性的版本。Java8为Java语言，编译器，类库，开发工具与JVM带来了大量的新特性。

* 速度更快
* 代码更少
* 强大的Stream API
* 便于并行
* 最大化减少空指针异常:Optional
* Nashorm引擎，允许JVM上运行JS应用

# Lambda表达式

 Lambda是一个匿名函数。

```java
    public void test1(){
        Runnable r1 = new Runnable() {
            public void run() {
                System.out.println("hello world!");
            }
        };
        r1.run();
        System.out.println("*****************");
        Runnable r2 = () -> System.out.println("世界你好!");
        r2.run();
    }
```

```java
   public void test1(){
        Comparator<Integer> com1 = new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return Integer.compare(o1,o2);
            }
        };
        int compara1 = com1.compare(12,21);
        System.out.println(compara1);//-1
        System.out.println("------------");//lambda表达式写法
        Comparator<Integer> com2 = (o1,o2) -> Integer.compare(o1,o2);
        int compara2 = com2.compare(32,21);
        System.out.println(compara2);//1
        System.out.println("---------");//方法引用
        Comparator<Integer> com3 = Integer :: compare;
        int compare3 = com3.compare(32,21);
        System.out.println(compare3);//1
    }
```

## Lamda表达式的使用

1. 举例:(o1,o2) -> Integer.compare(o1,o2);
2. 格式；

* * ->:lambda操作符 或 箭头操作符
  * ->左边:lambda形参列表(其实就是接口中的抽象方法的形参列表)
  * ->右边:lambda体(其实就是重写的抽象方法的方法体)

3. lambda使用(分为六种情况)
4. lambda表达式的本质:作为接口的实例

***格式1:无参数,无返回值***

`Runnable r1 = () -> {system.out.println("hello lambda");};`

***格式2:Lambda需要一个参数,但没有返回值***

`Consumer<String> con = (String str) -> {System.out,println(str);};`

***格式3:数据类型可以省略,因为可以由编译器推断得出,称类型推断***

`Consumer<String> con = (str) -> {System.out.println(str);};`

***格式4:lambda若只需要一个参数时,参数的小括号可以省略***

`Consumer<String> con = str -> {System.out,println(str);};`

***格式5:lambda需要两个或以上的参数,多条执行语句,并且可以有返回值***

`Comparator<Integer> com = (x,y) ->{//多条语句，可带返回值}`

```java
    public void test1(){
        Comparator<Integer> com1 = new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                System.out.println(o1);
                System.out.println(o2);
                return o1.compareTo(o2);
            }
        };
        System.out.println(com1.compare(12,21));

        System.out.println("---------------");
        Comparator<Integer> com2 = (o1,o2) -> {
            System.out.println(o1);
            System.out.println(o2);
            return o1.compareTo(o2);
        };
        System.out.println(com2.compare(12,21));

    }
```

******



***格式6:当lambda体只有一条语句时,return与大括号若有,都可以省略***

`Comparator<Integer> com = (x,y) -> Integer.compare(x,y);`

***总结***

* ->左边:lambda形参列表的参数类型可以省略(类型推断),如果参数列表只有一个参数,其一对()也可以省略,
* ->右边:lambda体应该使用一对{}包裹,如果lambda体只有一条执行语句(可能时return语句),省略这一对{}和return,
* lambda表达式的本质:作为函数式接口的实例

 # 函数式(Functional)接口

只包含一个抽象方法的接口,成为函数式接口。

| 函数式接口              | 参数类型 | 返回类型 | 用途                                                         |
| ----------------------- | -------- | -------- | ------------------------------------------------------------ |
| `Consumer<T>`消费型接口   | T        | void     | 对类型为T的对象应用操作,包含方法`void accept(T t)`           |
| `Supplier<T>`供给型接口   | 无       | T        | 返回类型T的对象,包含方法`T get()`                            |
| `Function<T,R>`函数型接口 | T        | R        | 对类型为T的对象应用操作,并返回结果,结果是R类型的对象,包含方法`R apply(T t)` |
| `Predicate<T>`断定式接口  | T        | boolean  | 确定类型T的对象对否满足某约束,返回boolean包含方法`boolean test(T t)` |

还有很多其他函数式接口....

**消费型**

原来的写法

```java
@Test
    public void test1(){
        happyTime(500, new Consumer<Double>() {
            @Override
            public void accept(Double aDouble) {
                System.out.println(aDouble+"元");
            }
        });
    }
    public void happyTime(double money, Consumer<Double> con){
        con.accept(money);
    }
```

lambda写法

```java
   @Test
    public void test1(){
        happyTime(500, money -> System.out.println(money+"元"));
    }
    public void happyTime(double money, Consumer<Double> con){
        con.accept(money);
    }
```

**断定式**

```java
    @Test
    public void test2(){
        List<String> list = Arrays.asList("北京","南京","西京","河南");
//        List<String> list2 = filterString(list, new Predicate<String>() {
//            @Override
//            public boolean test(String string) {
//                return string.contains("京");
//            }
//        });
        List<String> list2 = filterString(list,str -> str.contains("京"));
        System.out.println(list2);
    }
    //根据给定的规则过滤集合中的字符串,此规则由Predicate的方法决定
    public List<String> filterString(List<String> list, Predicate<String> pre){
        ArrayList<String> filterList = new ArrayList<>();
        for(String s:list){
            if(pre.test(s)){
                filterList.add(s);
            }
        }
        return filterList;
    }
```

# 方法引用与构造器引用

# Stream API

# Optional类

