---
title: python
date: 2024-6-07
tag:
  - python
category:
  - 后端
---
# python学习笔记



本笔记大部分参考自《python从入门到精通》(明日科技),一小部分来自网络。<br>

个人笔记,仅供参考!<br>

## 基础知识

* 内置函数type()可以返回变量类型
* 内置函数id()获取变量的内存地址
* 八进制整数以`0o`开头，十六进制`0x`
* 不需要先声明变量名及其类型，直接赋值即可创建各种类型的变量
* `print(r"加上r表示\n字符串内数据，原样输出。")`
* python中`/`除法结果为浮点数
* python中的逻辑运算符主要包括`and or not`

### ***关于注释***

1. 单行注释 `#要注释的内容`
2. 多行注释`'''要注释的内容'''`或者三个双引号也行

```python
print("建议每行不超过80个字符，如果超过，"
      "建议使用小括号()将多行内容隐式的连接起来")
print("也可以通过\\将两段文本\
内容连接起来。")
# 不推荐使用\
```

### ***python中的保留字***

```python
False      class      finally    is         return
None       continue   for        lambda     try
True       def        from       nonlocal   while
and        del        global     not        with 
as         elif       if         or         yield
assert     else       import     pass
break      except     in         raise
```

可通过两行代码查看python中的保留字

```python
import keyword
print(keyword.kwlist)
```

### ***常用类型转换函数***

| 函数                  | 作用                                             |
| :-------------------- | ------------------------------------------------ |
| int（x）              | 将x转换为整数类                                  |
| float(x)              | 将x转换成浮点数类型                              |
| complex(real [,imag]) | 创建一个复数                                     |
| str(x)                | 将x转化为字符串                                  |
| repr(x)               | 将x转化为表达式字符串                            |
| eval(str)             | 计算在字符串中的有效python表达式，并返回一个对象 |
| chr(x)                | 将整数x转化为一个字符                            |
| ord(x)                | 将一个字符x转换为它对应的整数值                  |
| hex(x)                | 将一个整数x转换为一个十六进制的字符串            |
| oct(x)                | 将一个整数x转换为一个八进制的字符串              |

### ***python中的输入***

```pytho
bl = input("请输入一个字符串\n") #输入一个值并赋值给bl
print(bl) # 输入的值都将会被作为字符串读取
```

### 位运算符

按位与(&)<br>

按位或(|)<br>

按位异或(^)<br>

按位取反(~)<br>

左移位(<<)<br>

右移位(>>)<br>

幂(**)<br>

### f-string字符串格式化

```python
name = "hihi"
age = 23
print(f"Hello, my name is {name} and I am {age} years old")
```

### 条件表达式

```pytho
# if-else的简化
a = 10
b = 80
c = a if a>b else b
print(c) # 结果是80
```

### 程序控制语句

#### if-else语句

```python
# 二选一的情况下
if 表达式:
    语句块
else:
    语句块
   
# 多选一的情况
if 表达式:1
    语句块
elif 表达式2:
    语句块
else:
    语句块
```

#### while循环

```python
while 条件表达式:
    循环体
```

#### for循环

```python
for 迭代变量 in 对象:
    循环体
```

#### break,continue,pass

`break`终止当前循环<br>

`continue`跳过当前循环进入下一次循环<br>

`pass`表示空语句，不做任何事情<br>

## 列表与元组

```python
var = ["1","2","3","4"]
print(var[-1])#4
print(var[1])#2
```

* 采用整数索引从0开始往右递增
* 采用负数索引从-1开始往左递减，-1表示最后一个元素

序列相加

```python
a = [1,2,3]
b = ['4',5,6]
c = a+b
print(c)
# 相同的类型的序列可以相加，序列中元素类型不同也可以
# 但列表和元组，列表和字符串不能相加
```

* python中n乘以一个序列，会生成一个新序列，内容重复n次
* 检查某个元素是否是序列的成员`value in sequence`关键字`in`也可以用`not in`
* `len()`返回序列长度`max()`返回最大元素`min()`返回最小元素

#### 切片

```python
var = ["1","2","3","4"]
# var[start:end:step]开始，结束，步长
print(var[0:3:2]);#1,3
```

#### 列表

​	列表中的所有元素都放在一对中括号[] 中，两个相邻元素间用逗号隔开

可以放，整数，实数，字符串，列表，元组等任何类型的内容放入列表中。

***创建列表***

1. 直接复制创建`a = [1,2,3]`
2. 创建数值列表`a = list(range(0,10,1))`

***删除列表***

`del listname`不常使用，python自带的垃圾回收机制会自动销毁不用的列表

***使用enumerate实现输出索引和元素内容***

```python
list1 = [1,2,2,4,5,6]
for index,a in enumerate(list1):
    print(index,a)
```

##### 列表的操作

###### 添加元素

`listname.append(obj)`列表末尾追加<br>

`inser()`向指定位置插入元素，效率不如上面的高<br>

`listname.extend(seq)`将一个列表中的全部元素添加到另一个列表<br>



###### 修改与删除元素

修改:获取索引再重新赋值即可<br>

删除元素<br>

1. 根据索引删除

```python
a = [1,2,3,4]
del a[-1]#删除最后一个元素
print(a)
```

2. 根据元素数值删除

```python
a = [1,2,3,4]
a.remove(1)
```

###### 其他操作

1. 获取指定元素出现的次数

`listname.count(obj)`

2. 获取指定元素首次出现的下标

`listname.index(obj)`

3. 统计数值列表的元素和

`sum()`

4. 对列表进行排序

`listname.sort(key=None,reverse=False)`

* key表示指定从每个列表元素中提取一个比较键，`eg:key=str,lower`排序不分大小写
* reverse，选择升序还是降序

在pyhton中，提供了一个内置的sorted()函数，用于对列表进行排序<br>

使用该函数进行排序后，原列表的元素顺序不变<br>

`soterd(listname,key,reverse)`同上

5. 列表推导式

```python
#10-100的随机数
rm = [random.randint(10,100) for i in range(10)]

old = [1,2,3]
new = [int(x*10) for x in old]
```



### 元组

元组是不可变序列/不可变列表。

***创建元组***

1. `a = (1，2，3，4)`
2. `b = 1,2,3`小括号也可以去掉
3. 创建元组只包括一个元素`a = ("你好"),`须在后面加一个逗号

可以用type()测试类型

4. `tuple(range(10,10,2))`tuple将range函数循环出来的结果转为数值元组

5. 可通过元素下标访问内容，也可以使用切片获取指定的元素

6. `enumerate()`可将元组组合为一个索引序列

```python
a = (1,2,3,4,5,6)
for i,x in enumerate(a):
    print(i,x)
```

* 元组是不可变序列，不能对某个元素值修改，但可以重新赋值
* 两个元组可以用+组合

***元组推导式***

​	`a = tuple((random.randint(10,100) for i in range(10)))`

### 元组与列表区别

1. 列表属于可变序列，他的元素可以随时删除或修改，而元组只可以整体替换
2. 列表可以使用`append(),extend(),insert(),remove()`元组则没有
3. 列表和元组支持切片，元组需要转换
4. 元组比列表访问速度更快
5. 列表不能作为字典的键，而元组可以



## 字典与集合

python中的字典相当于java中的Map对象。<br>

***特征***

* 通过键而不是索引来读取
* 字典是任意对象的无序集合
* 字典是可变的，并且可以任意嵌套
* 字典中的键必须不可变，键可以使用数字，字符串，或者元组，但不能是列表。

### 字典的创建

`dictionary = {'1':'一','2':'二','3':'三'}`

***通过dict()创建***

1. 通过映射函数创建`d = dict(zip(list1,list2))`

zip():用于将多个列表或元组对应位置的元素组合为元组，并返回包含这些内容的zip对象。<br>

如果想得到元组，可以将zip对象使用`tuple()`函数转换为元组，如果想得到列表可以使用<br>

`list()`函数转换为列表。<br>

list1:表示生成字典的键<br>

list2;表示生成字典的值，如果两者长度不一样则与最短的列表长度相同。

2. 通过给定的键值对创建

`d = dict(key1=value1,key2=value2)`<br>

还可以使用`dict.fromkeys(list1)`创建值为空的字典<br>

```python
a = (1,2,3)
b = ['一','二','三']
d = {a:b}
print(d)
```

***遍历字典***

```python
d = {1:'一',2:'二',3:'三'}
for i in d.items():
    print(i)#打印出的是元组

for k,v in d.items():
    print(k,v)#键值对
```

* `d.get(key)`通过键找到值
* `values()` `keys()`返回字典的值和键的列表

***修改删除***

`d[key] = value`

`del d[1]`根据key删除对应的键值

***字典推导式***

```python
import random

tem = {i:random.randint(10,100) for i in range(1,5)}

print(tem)#{1: 20, 2: 89, 3: 33, 4: 36}

name = ["A","B","C"]
id = [1,2,3]

tem = {i:j for i,j in zip(name,id)}
print(tem)#{'A': 1, 'B': 2, 'C': 3}
```

##### 

### 集合

python中的集合用于保存不重复的元素，有可变集合(set)和不可变集合(frozenset)两种.<br>

***创建集合***

```python
a = {1,2,3,6,1}
print(a)#{1, 2, 3, 6}
```

python中的set集合是无序的，所以每次输出时元素的排列顺序可能与上面的不同。<br>

* 注意一下集合与字典创建的区别

* 可以使用set()函数将列表,元组等其他可迭代对象转换为集合。

```python
a = [1,23,4]
b = set(a)
print(type(b))#<class 'set'>
```

* 创建空集合时只能使用set()实现，`{}`表示创建一个空字典。

***添加元素***

`setname.add(element)`,不能使用列表元组等可迭代对象。

```python
list = set([1,2,3,4])
print(list)
```

```python
list = set([1,2,3,4])

#list.remove(1)
list.pop()#移除第一个元素
list.clear()#清空集合
print(list)
```

***交集，并集，差集***

```python
list1 = set([1,2,3,4])
list2 = set([3,4,5,6])


print(list1 | list2) # 并集{1, 2, 3, 4, 5, 6}
print(list1 & list2)# 交集{3, 4}
print(list1 - list2)#差集{1, 2}
```



## 字符串

python3中，默认采用的编码格式为UTF-8

* str表示Unicode字符(ASCII或其他)
* bytes表示二进制数据(包括编码的文本)

两者之间可以通过encode()和decode()方法进行转换<br>

**encode()**

用于将字符串转换为二进制数据(即bytes)，也称编码

`str.encode([encoding="utf-8"] [,errors="strict"])`<br>

中括号里面的为可选的<br>

`errors="strict"`用于指定错误处理方式，其可选值可以是strict(遇到非法字符就抛出异常)，ignore(忽略非法字符)，replace(用'?'替换非法字符)或xmlcharrefreplace(使用XML的字符引用)，默认值为strict.<br>

**decode()**

用于将二进制数据转换为字符串。<br>

`bytes.decode([encoding="utf-8"] [,errors="strict"])`在设置解码采用的字符编码时，需要与编码时采用的字符编码一致。<br>

***常见操作***

* 可以使用+拼接字符串，字符串不允许直接与其他类型的数据拼接
* len()方法可以计算字符串的长度，不区分英文，数字和汉字，所有字符都认为是一个。
* `string[start:end:stop]`截取字符串

```python
str = "hello world"
print(str[0])#h
print(str[0:4])#hell
print(str[6:11:1])#world
```

```python
str = "hello world"

print(str.split('o'))#['hell', ' w', 'rld']
```

**分割字符串。**

`str.split(sep,maxsplit)`,sep指定分隔符，可以包含多个字符，maxsplit指定分割次数，不指定或者为-1则分割次数没有限制。<br>

**合并字符串**

合并字符串与凭借字符串不同，它会将多个字符串采用固定底分隔符连接在一起。<br>

`strnew = string.join(iterable)`

iterable可迭代对象，该迭代对象中的所有元素(字符串表示)将被合并为一个新的字符串。

```python
str = "hello*world*i*love*world"
newstr = ' '.join(str)
print(newstr)#h e l l o * w o r l d * i * l o v e * w o r l d
```

***检索字符串***

`str.count(sub[,start[,end]])`<br>

sub:表示要检索的子字符串<br>

start:可选参数，表示检索范围开始位置，不指定从头开始。<br>

```python
str = "hello*world*i*love*world"

n = str.count('h')
print(n)#1
m = str.count('wo',1,100)
print(m)#2
```

***find()方法***

`str.find(sub[,start[,end]])`<br>

该方法用于检索是否包含指定的子字符串。如果检索的字符串不存在，则返回-1，否则返回该子字符串首次出现的索引。<br>

```python
str = "hello*world*i*love*world"
n = str.find('world')
print(str[n])#w
```

如果想要判断字符串是否存在可以使用in<br>

```python
str = "hello*world*i*love*world"

print('w' in str)#True
```

**index()方法**

与find()方法类似，不过如果指定的字符串不存在时会抛出异常.<br>

`str.index(sub[,start[,end]])`

**startswith()方法**

用于检索字符串是否以指定子字符串开头。是返回True否则返回False<br>

`str.startswith(prefix[,start[,end]])`

**endswith()方法**

用于检测字符串是否以指定字符串结尾，同上。<br>

***lower()方法***

将字符串中的全部大写字母转换为小写字母，如果字符串中没有应该被转换的字符，则将原字符返回。

**upper()**

将字符串中全部小写字母转换为大写字母。同上。<br>

**strip()方法**

用于去掉字符串左右两侧的空格和特殊字符。<br>

`str.strip([chars])`chars可选参数，用于指定要去除的字符，可以指定多个。如果不指定，默认去除空格，制表符，回车符，换行符等。<br>

* lstrip()去除左侧，同上
* rstrip()去除右侧，同上

### 格式化字符

```python
str1 = "name=%s,age=%d"
c1 = ('A',66)
print(str1%c1)#name=A,age=66
```

***format()方法***

```python
str1 = "name={:s},age={:d}"

c1 = str1.format('A',29)#name=A,age=29
print(c1)
```

* ``print(r"加上r表示\n字符串内数据，原样输出。")``

## Python中使用正则表达式



`impore re`正则表达式使用到了这个模块<br>

### match

match方法用于从字符串的开始处进行匹配，如果在起始位置匹配成功则返回Match对象，否则返回None<br>

`re.match(pattern,string,[flags])`<br>

patter:表示模式字符串，由要匹配的正则表达式转换而来。

string:表示要匹配的字符串。

flags:可选参数，表示标志位，用于控制匹配方式，如是否区分字母大小写。

| 标志          | 说明                                                         |
| ------------- | ------------------------------------------------------------ |
| A（ASCII）    | 对于/w,/W,/b,/B,/d,/D,/s,/S进行ASCII匹配                     |
| I(IGNORECASE) | 执行不区分大小写的匹配                                       |
| M(MULTILINE)  | 将^和$用于包括整个字符串的开始和结尾的每一行(默认情况下，仅适用于整个字符串的开始和结尾处) |
| S(DOTALL)     | 使用`.`字符匹配所有字符，包括换行符                          |
| X(VERBOSE)    | 忽略模式字符串中未转义的空格和注释。                         |

```python
pattern = r"mr_\w+"
string = "MR_SHOP mr_shop"

re1 = re.match(pattern,string,re.I)
print(re1.string)#MR_SHOP mr_shop

str = "商店 MR_SHOP mr_shop"
re2 = re.match(pattern,str,re.I)
print(re2)#None
```

第二个返回None因为matchh方法从字符串的开始位置开始匹配，当第一个字母不符合条件时，直接返回None

* 可以使用span方法饭hi匹配位置的元组(start,end)匹配的开始和结束位置。

#### search()方法

用于在整个字符串中搜索第一个匹配的值，如果在起始位置匹配成功，则返回Match对象，否则返回None<br>

`re.search(pattern,string,[flags])`

search()不仅仅是在字符串的起始位置搜索，其他位置有符合的匹配也可以。<>

#### findall()方法

findall()方法用于在整个字符串中搜索所有符合正则表达式的字符串，并以列表形式返回。如果匹配成功则返回包含匹配结构的列表，否则返回空列表。

`re.findall(pattern,string,[flags])`

#### sub()方法

sub()方法用于实现字符串的替换。

`re.sub(pattern,repl,string,ount,flags)`repl表示替换的字符串，string表示要被查找替换的原始字符串。count可选参数，表示模式匹配后替换的最大次数，默认值为0，表示替换所有的匹配。<br/>

#### split()

split()方法用于实现根据正则表达式分割字符串，并以列表的形式返回。

`re.split(pattern,string,[maxsplit],[flags])`maxsplit可选参数，表示最大的拆分次数。

```python
pattern = r'[?|&]'
url = 'htt[://wwww,baidu,com?user=a&age=9'

re1 = re.split(pattern,url)
print(re1)#['htt[://wwww,baidu,com', 'user=a', 'age=9']
```

## 函数

格式

```python
def functionname([parameterlist]):# 函数没有参数时必须保留一对空的小括号
    ["""comments"""]
    [functionbody]# 如果定义一个空函数可以使用padd语句占位符
```

* 形式参数
* * 在定义函数时，函数名后面括号中的参数为形式参数
* 实际参数
* * 在调用一个函数时，函数名后面括号中的参数为实际参数

***关键字传参***

关键字参数是指使用形式参数的名字来确定输入的参数值，通过该方式指定实际参数时，不再需要与形式参数的位置完全一致，只要将参数名写正确即可。

```python
def test(name,age):
    print("名字:"+name+"，\n"+"年龄:"+str(age))

test(name='A',age=12)
```

***为参数设置默认值***

调用某个函数时，如果没有指定某个参数将抛出异常，可以为参数设置默认值。

```python
def test(age,name="张三"):
    print("名字:"+name+"，\n"+"年龄:"+str(age))
    #名字:张三，
    #年龄:12

test(age=12)
```

指定默认的形式参数必须在所有参数的最后，否则将产生语法错误。<br/>

可以使用`函数名.__defaults__`查看函数的默认参数的当前值。

为形式参数设置默认值默认参数必须指向不可变对象。

***可变参数***

1. `*parameter`表示接收任意多个实际参数并将其放在一个元组中

如果想要一个已经存在的列表作为函数的可变参数，可以在列表的名称前加`*`

2. `**parameter`表示接受任意多个类似关键字参数一样显示赋值的实际参数，并将其放在一个字典中。

```python
def test(**t):
    for key,value in t.items():
        print(str(key)+": "+str(value))
test(a=3)#a: 3
```

***返回值***

当函数中没有return语句时，或者省略了return语句的参数时，将返回None，即返回空值。<br/>

***变量的作用域***

要想在函数内改变函数外的变量，要使用global关键字定义。

```python
a = 12

def test():
    global a
    a=66
    print(a)

print(a)#12
test()#66
print(a)#66
```

### 匿名函数

`result = lambda [arg1 [,arg2……]]:expression`

```python
import math
r = 10
result = lambda r:math.pi*r*r
print(result(r))#314.1592653589793
```

## 面向对象程序设计

在python中，一切都是对象。

```python
class ClassName:
	statement#类体
#### 如何实例化
t1  = ClassName()
```

***__init__(self)方法***

每当创建一个类的实例时，python都会自动执行它.

该方法中必须包含一个self参数，是指向实例本身的引用，用于访问类中的属性和方法。

```python
class test:
    def __init__(self,name,age):
        print("我叫",str(name))
        print("我"+str(age)+"岁了")
t1 = test("张三",13)
```

***实例方法***

```python
class test:
    def method(self,a):
        print(str(a))
t1 = test()
t1.method("你好")
```

self必要参数，表示类的实例，名称也可以是self以外的单词。

***访问限制***

`_`在属性或方法名前面添加单下划线表示(protected)只允许类本身和子类进行访问。<br>

`__`双下划线表示(private)私有成员，只允许定义该方法的类本身进行访问<br>

`__name__`首尾双下划线表示定义特殊方法，一般是系统定义名字。<br>

### 属性

***@property***

在Python中可以通过@property(装饰器)将一个方法转换为属性，从而实现用于计算的属性。将方法转换为属性后，可以直接通过方法名来访问方法，而不需要再添加一对小括号，让代码更整洁。<br>

```python
@property
def methodname(self)
	block
```

通过`@property`转换后的属性不能重新赋值。可以读取不能修改。

```python
# 如何设置可以修改呢?
class TVshow:
    list_film = ["战狼","红楼梦"]
    def __init__(self,show):
        self.__show = show
    @property
    def show(self):
        return self.__show
    @show.setter
    def show(self,value):
        if value in TVshow.list_film:
            self.__show = "您选择了《"+value+"》,稍后即将播放"
        else:
            self.__show = ("您点播的电影不存在")

tvshow = TVshow("红楼梦")
print(tvshow.show)#红楼梦
tvshow.show="战狼"
print(tvshow.show)#您选择了《战狼》,稍后即将播放
```

### 继承

```python
class ClassName(baseclasslist):
    """类的帮助信息"""
    Statement# 类体
```

baseclasslist:用于指定要继承的基类，可以有多个。

* 在派生类中定义`__init__()`方法时，不会自动调用基类的`__init()__`方法

```python
class Animal:
    def __init__(self,name="B"):
        Animal.name = name
    def prtName(self):
        print(Animal.name)
class Dog(Animal):
    def __init__(self):
        super().__init__("A")#不加这个就会报错
        print("dogdog")
dog = Dog()
dog.prtName()#A
```



## 模块

一个函数相当于一块积木,而一个模块中可以包括很多函数,也就是很多积木,所以也可以说模块相当于一盒积木。<br>

可以写自定义模块并使用`import`导入模块。<br/>

`import modulename [as alias]`后面为给模块起的别名。<br/>

在调用模块中的变量,函数或者其他类时,需要在变量名,函数名或者类名前添加`模块名.`作为前缀。<br/>

使用`import`语句还可以一次导入多个模块,中间使用逗号进行分隔。<br/>

***from...import语句***

使用这个语句导入模块后,不需要再添加前缀,直接通过具体的变量,函数和类名等访问即可。<br/>

`from modelname import member`member用于指定要导入的变量,函数或者类等,可以同时导入多个定义,各个定义之间使用逗号分隔。<br/>

* 如果使用`*`全部导入后,可以使用`dir()`查看导入了哪些定义。

### 模块搜索

使用`import`语句导入模块后,默认情况下,会按照一下顺序进行查找。<br/>

1. 在当前目录下查找
2. 到`PYTHONPATH`环境变量下的每个目录下查找
3. 到Python的默认安装目录下查找。

可以通过三种方式添加指定的目录到sys.path中

1. 临时添加
2. 增加.pth文件(推荐)
3. 在`PYTHONPATH`环境变量中添加

### Python中的包



## python的内置函数

* `range(start,end,stop)`起始值,结束值,步长 用于生成一系列连续的整数，步长可省略
* `range(end)`一个参数是end是从0开始的到end-1，
* `print(letter,end='')`end默认为`/n`换行，改为空不换行
* `list()`将序列转换为列表
* `str()`将序列转换为字符串
* `sum`计算元素和
* `sorted()`对元素进行排序
* `reversed()`反向序列中的元素
* `enumerate()`将序列组合为一个索引序列，多用于for循环中











## 以前的

1. 如何进行注释

```python
#这是行注释

#也可以多加几个#进行块注释

print("Hello Word !")

#
''' 三个单引号
这是块注释
'''

#
""" 三个双引号
这也是块注释
"""

```

2.输出

```python
#输入和输出

#输入
#name=input()
#print(name)

a="世界"
b="你好 \n"
c=a+b
print(c)

#反斜杠将下面打印为了一行
d="~\n世界"
e="你好"
f="啊"
print(
      d+\
      e+\
      f
)
#
'''
print('let\'s go')
反斜杠转义字符

print("""
ni
hao
!""")
三引号将其自动换行
'''

# 实例 6      
a = True
print(a and 0 or 66)
#会输出66

```

3.python的关键字

```python
False      class      finally    is         return

None       continue   for        lambda     try

True       def        from       nonlocal   while

and        del        global     not        with 

as         elif       if         or         yield

assert     else       import     pass

break      except     in         raise

```

4.条件语句（1）

```python
#if语句
score=int(input("请输入你的成绩："))

if score>=60:
    print("恭喜你没有挂科，去玩吧~")
else:
    print("很抱歉，你还需要补考，加油！")
#elif
score=int(input("请输入你的成绩："))

if score<60:
    print("很遗憾，你需要补考。")
elif 60<=score<70:
    print("恭喜你，你的成绩及格啦!")
elif 70<=score<80:
    print("恭喜你，你的成绩为良好，")
elif 80<=score<90:
    print("恭喜你，你的成绩很好！")
elif 90<=score<=100:
    print("恭喜你，你的成绩为优秀。")
else :
    print("你输入的成绩无效！")
#not and or 对应c语言! && ||
```

4.条件语句(2)

```python
a=int(6)

while (a>1):
    print(a)
    a=a-1
else:#会在while循环结束后执行else
    print("gameover")
print("**********\n")

for name in "hello word":
    print("遍历输出：%s " %name)

names=['h','e','l','l','o']
for n in names:
    pass
    print("遍历输出：%c" %n)
    
for i in range(1,10,2):#rangw(1开始 9结束 每步跨2)
    print(i)#打印出 1 3 5 7 9

#这里pass是一个占位符 当你编写一个函数时没有实现功能就可以使用pass避免错误
#如果是嵌套循环 break跳出最深层的循环
#continue跳出本次循环
```

4.条件语句（3）

```python
print("这是一个求平均值的小程序。")
user_input=input("请输入数字（完成数组输入后，输入q结束程序）")

cout=0;
total=0;
while user_input != "q":
    num=float(user_input)
    cout=cout+1
    total=total+num
    user_input=input("请输入数字（完成数组输入后，输入q结束程序）")

if cout == 0:
    result=0
else:
    result=total/cout

print("所求平均数为 ："+str(result))

###############         

```

5.导入库

```python
#用以下格式导入库函数
import math
#使用时 math.sqrt()

from math import sqrt
#使用时sqrt()

from math import*
#全部引用过来 但引入库过多时 容易造成命名的混乱
#使用时 sqrt()

a=math.sqrt(4)
print(a)
#
'''
a=2**3   2的三次方
print(a)
'''
```

6.类型

```python

#len求长度 下面打印出3
a="你好啊"
print(len(a))

#通过索引取值 2为数组下标
print(a[2])

#布尔类型
A=True
B=False

#空类型
n=None

#type函数 返回变量的类型
print(type(a))
print(type(A))
print(type(n))
```

7.输入

```python
#input 一律返回字符串

age=input("请输入你的年龄")
print(age)

#可以强制类型转化
str(5)
int("9")
float(3)

#print内的类型要保持一致 不一致要强制类型转换

```

8.列表

```python
#列表
shopping_list = [] #定义一个新的列表
shopping_list.append("键盘") #往列表里添加内容
shopping_list.append("键帽")
shopping_list.append("音箱")
shopping_list.append("电竞椅")

shopping_list.remove("键帽")#移除列表所存在内容

shopping_list[1]="硬盘" #替换

print(shopping_list)
print(len(shopping_list))
print(shopping_list[0]) #查看列表第一个内容
     
price=[799,1024,200,800]
max_price=max(price) #最大值
min_price=min(price) #最小值
shorted_price=sorted(price) #排序 从大到小
print(max_price)
print(min_price)
print(shorted_price)

```

9.字典

```python
#字典 dictionary
contact={ "小明" : "137878",
          "张三" : "2134435"}
contact["李四"]="345665346" #添加元素 也可以进行更新
del contact["小明"] #删除
len(contact) #多少对
#元组 tuple ()
#元组不可变 不能添加删除元素 这是与列表的区别
#而列表是可变的对列表可以执行添加 删除
#字典的键也不可变 
s="hello"
print(s.upper()) #转大写
print(s)
#字符串也是不可变的 转大写并没有改变s内容

###########
mean={"小" : "small"}
mean["大"] = "big"
mean["蓝"] = "blue"
mean["白"] = "white"
mean["黑"] = "black"

query=input("请输入要查询的词语 ： \n")
if query in mean: #输入的内容在字典里面会返回True
    print("您查询的"+query+"意思是：")
    print(mean[query])
else:
    print("您查询的值不在本字典中")
    print("当前词典收录数为"+str(len(mean)))

#字典名.keys()  返回所有键 
#字典名.values()  返回所有值
#字典名.items()  返回所有键值对

```

10.format方法

```python
#format() 方法

year="龙"
time="周二"
messsge="""
{0}年大吉
恭喜发财
红包拿来
今天是{1}
""".format(year,time)
#year会替换{0} time会替换{1}的内容
#也可以用下面这种方法
messsge="""
{current_year}年大吉
恭喜发财
红包拿来
今天是{current_time}
""".format(current_year=year,current_time=time)
#更简洁的
messsge="""
{year}年大吉
恭喜发财
红包拿来
今天是{time}
""".format(year=year,time=time)

##另一种方法字符串前加f
m=f"""
{year}年大吉
恭喜发财
红包拿来
今天是{time}"""
#加了f 里面的内容会被直接求值

score={"小明" : 66.2,
       "大明" : 78.3,
       "张三" : 67.4}
for name,total in score.items():#用items方法返回的是键值对
    print("{0}您好，您的成绩为{1:.3f}".format(name,total))
    #:.3f 表示保留三位小数
    
    
```

11.函数

```python
#函数
def calculate_BMI(weight,hight):
    BMI=weight/hight ** 2
    if BMI<=18.5:
        category="偏瘦"
    elif BMI<=25:
        category="正常"
    elif BMI<=30:
        category="偏胖"
    else:
        category="肥胖"
    print(f"您的BMI结果为{category}")
    return BMI

calculate_BMI(95,1.8)

```

12.面向对象编程OOP

c'语言就是面向过程的，c++添加了class来进行面向对象编程。

面向过程可以理解为把要实现的内容拆分成一个一个的步骤，依次完成

比如我们要往ATM里面存50，取100，我们就可以写存钱和取钱两个函数来实现。但传的参数多了不利于理解。

面向对象编程并不会拘泥于具体步骤，而是会比较现实的模拟，

比如你要去ATM存钱和取钱，我们就可以提取ATM的性质，来定义一个ATM的类，然后用类来创建对象

类是创建对象的模板，对象是类的实例。

可以把类想象成建筑图纸，而对象就是根据这个图纸来建造的建筑

这样我们就可以定义ATM和钱两个类，存多少钱，ATM编号，钱的编号就能清晰的表示出来



方法就是放在类里面的函数

面向对象有三个被反复提及的特性 封装 继承 和多态

封装指写类的人将内部实现细节隐藏起来，使用类的人只通过外部接口访问和使用

比如有人写了洗衣机这个类 你只需要知道如何使用洗衣机 而不用知道洗衣机内部如何运转

继承是指面向对象编程允许创建有层次的类。比如要创建小学生和大学生两个类 我们就可以先创建一个学生的父类，让小学生和大学生去继承学生这个父类，这样父类的属性和方法都可以继承，不需要重复定义。

多态是指同样的接口因为对象具体类的不同而有不同的表现，

比如小学生和大学生都需要写作业，但写作业的内容肯定不同，所以我们要把写作业这个方法定义在子类里面，这样大学生和小学生里面可以定义两个不同的方法。这样调用写作业方法时就会因为所属类的不同而调用不同的类。执行不同的写作业方法。

```python
#类定义属性
#下面这个在创造实例时就会已经返回了定义好的值
class Cutecat:
    def __init__(self):
        self.name="Lambton"
cat1 = Cutecat()
print(cat1.name)

#下面这个在创造实例时会根据传进去的值而相应的改变
class Cutecat:
    def __init__(self,CatName,Cat_age,Cat_color):
        self.name=CatName
        self.age=Cat_age
        self.color=Cat_color
cat1 = Cutecat("我叫小白",23,"白色")
print(cat1.color)
```



```python
#定义方法
class Cutecat:
    def __init__(self,CatName,Cat_age,Cat_color):
        self.name=CatName
        self.age=Cat_age
        self.color=Cat_color
    def speak(self):#第一个参数被占用表示对象自身  这是定义方法
        print("喵" * self.age)#字符串乘以数字表示把字符串重复那么多次
    def think(self,content):
        print(f"小猫{self.name}在思考{content}..")

cat1 = Cutecat("小白",23,"白色")
cat1.think("我要吃鱼")
cat1.speak()
print(cat1.color)
```

```python
#实战
class Student:
    def __init__(self,name,student_id):
        self.student_id=student_id
        self.name=name
        self.grades={"语文":0,"数学":0,"英语":0}

    def set_grade(self,course,grade):
        if course in self.grades:
            self.grades[course]=grade
    def print_grades(self):
        print(f"学生{self.name} (学号：{self.student_id})的成绩为：")
        for course in self.grades:
            print(f"{course}:{self.grades[course]}分")

chen=Student("小陈","100618")
zeng=Student("小曾","100622")
chen.set_grade("语文",98)
chen.set_grade("数学",100)
chen.set_grade("英语",120)
chen.print_grades()
print("chen.name")
zeng.set_grade("数学",95)
print(zeng.grades)
```

继承

```py
#类继承练习：人力系统
#-员工分为两类：全职员工 FullTimeEmployee,兼职员工 PartTimeEmployee
#-全职和兼职都有“姓名 name”，“工号 id ”属性
#-都具备"打印信息 print_info"（打印姓名工号方法）。
#-全职有”月薪 monthly_salary“属性
#-兼职有”日薪 daily_salary”属性，“每月工作天数 work_days”的属性
#-全职和兼职都有“计算月薪 calculate_monthly_pay”的方法，但具体计算过程不一样

class Employee:
    def __init__(self, name, id):
        self.name=name
        self.id=id
    def print_info(self):
        print(f"员工名字；{self.name},工号：{self.id}")

class FullTimeEmployee(Employee):#继承父类
    def __init__(self,name,id,monthly_salary):
        super().__init__(name,id)#用父类的初始化 个人理解将name id 传过去
        self.monthly_salary=monthly_salary

    def calculate_monthly_pay(self):
        return self.monthly_salary

class PartTimeEmployee(Employee):
    def __init__(self,name,id,daily_salary,work_days):
        super().__init__(name,id)
        self.daily_salary=daily_salary
        self.work_days=work_days

    def calculate_monthly_pay(self):
        return self.daily_salary*self.work_days

zhangsan = FullTimeEmployee("张三","1001",6000)
lisi=PartTimeEmployee("李四","1002",230,15)
zhangsan.print_info()#这是调用的父类里面的方法
lisi.print_info()

print(zhangsan.calculate_monthly_pay())#这是调用的子类里面的方法
print(lisi.calculate_monthly_pay())

```

读文件

```python
#绝对路径:c:\home\data\a.py

#相对路径从一个是参考位置出发：.当前目录 ..当前目录的上一级目录          

f=open("./data.txt","r",encoding="utf-8")#.当前目录 r可读 encooding 编码格式
content=f.read()#f.read 会讲文件所有内容以字符串返回
print(content)
f.close()#关闭文件 释放资源

with open("./data.txt","r",encoding="utf-8") as f:#这样写会自动关闭文件
    content=f.read()
    print(content)

with open("./data.txt","r",encoding="utf-8") as f:
    print(f.readline())#打印出第一行
    print(f.readline())#打印出第二行

with open("./data.txt","r",encoding="utf-8") as f:
    print(f.readlines())#会返回一个列表 全部内容 结合for循环使用

with open("./data.txt","r",encoding="utf-8") as f:
    lines=f.readlines()
    for line in lines:
        print(line)
```

写文件

```python
#w如果文件已经存在 就会把原有的文件内容清空 不想清空可以用a附加模式 也可以用r+进行读写操作会以追加的模式进行写入
with open("./poem.txt","w",encoding="utf-8") as f:
    f.write("我欲乘风归去，\n又恐琼楼玉宇，\n高处不胜寒。\n")

with open("./poem.txt","a",encoding="utf-8") as f:
    f.write("起舞弄清影，\n")
    f.write("何似在人间。")
```

捕捉异常

```python
#捕捉异常
#可以提前预判由于用户输入不规范而产生的错误 避免程序报错（不执行）
try:#有可能产生错误的代码
    user_weight=float(input("请输入您的体重（单位u:kg）："))
    user_height=float(input("请输入您的身高（单位u:m）："))
    user_BMI=user_weight/user_height ** 2
except ValueError: #产生值错误时会运行
    print("输入的不是合理数字，请重新运行程序，并输入正确的数字。")
except ZeroDivisionError: # 产生除零错误时会执行
    print("身高不能为0，请重新运行程序，并输入正确的数字")
except : #产生其他错误时执行
    print("发生了未知错误，请重新运行程序。")
else:#没有错误时执行
    print("您的BMI值为："+str(user_BMI))
finally: #不管反发生错误与否都会执行
    print("程序运行结束。")
    
```

assert断言和unittest(不想写了 自行百度)



爬虫

1.不要爬取公民数据

2.不要爬取受著作权保护的内容

3.不要爬取国家事务，国防建设尖端科学技术领域的计算机系统等

你还要确保自己写的爬虫是一只温柔善良的爬虫

1.它的请求数量和频率不能过高 否则可能无异于DDos攻击

2.有反爬机制或验证码登录 不要去强行突破

3.可以通过查看网站的robots.txt文件了解可爬取的网页路径范围



打开pycharm编辑器在终端输入pip install requests 下载这个外部库

```py
import requests
"""
URL="https://www.bilibili.com/"
resopnse=requests.get(URL)#会返回一个Response实例
print(resopnse)
print(resopnse.status_code)#这个实例包括这个状态码

if resopnse.ok:#也可以根据状态码来判断 不过这个更简洁
    print("请求成功")
else :
    print("请求失败")
"""
#上面的无法访问 可以伪装成用户去访问
url1="https://movie.douban.com/top250"
headers = {
    #在浏览器检查代码里面找到User-Agent 将其内容复制下来
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0"
}#用请求头进行伪装
response1=requests.get(url1,headers=headers)
print(response1.text)#拿到了那个页面的HTML源码
```

html练习

```html
<!DOCTYPE html>
<html>
    <head>
       <title>这是一个网页标题</title>
    </head>
    <body>
        <div style="background-color: red;">
        <h1>我是一级标题</h1>
        <h2>我是二级标题</h2>
        <h6>我是最小号六级标题</h6>
        </div>
        <p>这是一个文本段落这是一个文本段落
            这是一个<br>换行文本段落
            <b>加粗字体</b>
            <i>斜体</i>
            <u>这样可以加下划线</u>
        </p>
        <p>这样<span style="background-color: red;">这是一块红色</span>也可以换行 下面加载图片</p>
        <img src="https://tse2-mm.cn.bing.net/th/id/OIP-C.7KW5GT7NQ8yUGlBbCHEm0gHaNK?rs=1&pid=ImgDetMain" width="500 px">
        <a href="https://www.baidu.com">百度</a>

        <ol>
            <li>我是第一项</li>
            <li>我是第二项</li>
            <li>我是第三项</li>
        </ol>
        <ul>
            <li>我是无序的1</li>
            <li>我是无序的2</li>
            <li>我是无序的3</li>
        </ul>

        <table border="1" calss="data-table">
            <thead>
                <tr>
                    <td>头部1</td>
                    <td>头部2</td>
                    <td>头部3</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>111</td>
                    <td>222</td>
                    <td>333</td>
                </tr>
                <tr>
                    <td>444</td>
                    <td>555</td>
                    <td>666</td>
                </tr>
                <tr>
                    <td>777</td>
                    <td>888</td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
```

bs库

```py
#这是外部库 解析HTML
#安装命令 pip install bs4
from bs4 import BeautifulSoup
import requests
content=requests.get("http://books.toscrape.com/").text
soup=BeautifulSoup(content,"html.parser") #后面这个是指定解析器
#这个库函数有很多实用的方法 比如可以根据html中的某一个值获得对应的属性（键值对）
#print(soup.p)#就能看到这个HTML中里的第一个<p>元素 即文本段落元素
#print(soup.img)#第一个img元素
all_prices=soup.findAll("p",attrs={"class":"price_color"})
#源网页代码 <p calss ="price_color">$53.74</p>
#第一个参数p表示找p标签 可选参数arrars赋值为一个字典 键值对就对应你想找的属性和值
#findAll返回一个可迭代对象 可通过for循环打印
#如果我们只想要中间的价格 可以用方法string 会把标签包围的文字返回给我们
for price in all_prices:
    print(price.string[2:])#切片操作 能获得索引值大于等于2所有剩下的字符串
all_titles=soup.findAll("h3")
for title in all_titles:
    link = title.find("a")#find 返回的不是可迭代对象
    print(link.string)
```

爬取豆瓣电影

```py
import requests
from bs4 import BeautifulSoup

#豆瓣电影top250
#url1="https://movie.douban.com/top250"
headers = {
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0"
}

for start_num in range(0,250,25):
    response1=requests.get(f"https://movie.douban.com/top250?start={start_num}",headers=headers)
    html=response1.text
    soup=BeautifulSoup(html,"html.parser")#传入bs函数搜寻
    #分析想提取信息特点 在网页检查
    #看到所有标题都是sapan元素并且它们的class值都是title
    #我们就可以根据这个条件提取

    all_titles=soup.findAll("span",attrs={"class":"title"})#返回一个可迭代对象
    for title in all_titles:
        title_string=title.string
        if "/" not in title_string:
            print(title_string)
```

