---
title: cssFlex
date: 2024-6-07
tag:
  - cssFlex
category:
  - 前端
---
# cssFlex布局

**布局原理**
flex是flexible Box的缩写，意为"弹性布局"，
用来为盒子模型提供最大的灵活性，任何一个容器都可以指定为flex布局
* 当我们为父盒子设置为flex布局以后,子元素的float,clear和vertical-align属性将失效
* 伸缩布局=弹性布局=伸缩盒子布局=flex布局

采用Flex布局的元素,称为Flex容器(Flex container),简称"容器" 它的所有子元素自动成为容器成员，
称为Flex项目(flex item),简称项目。
* 子容器可以横向排列也可以纵向排列

通过给父盒子添加flex属性,来控制子盒子的位置和排列方式.

## flex布局父项常见属性
1. flex-direction: 设置主轴方向
2. justify-content: 设置主轴上的子元素排列方式
3. flex-wrap : 设置子元素是否换行
4. align-content : 设置侧轴上的子元素的排列方式(多行)
5. align-items : 设置侧轴上的子元素排列方式(单行)
6. flex-flow : 复合属性,相当于同时设置了flex-direction 和 flex-wrap

### flex-direction
在flex布局中，是分为主轴和侧轴两个方向,同样的叫法有:行和列.x轴y轴
* 默认主轴方向就是x轴方向,水平向右。
* 默认侧轴方向就是y轴方向,水平向下。

***属性***
1. row 默认值从左到右
2. row-reverse 从右到左
3. column 从上到下
4. column-reverse 从上到下


### justify-content
要先确定主轴是哪一个
***属性值***
1. flex-start  默认值从头部开始,如果主轴是x轴,则从左到右
2. flex-end 从尾部开始排列
3. center 在主轴居中对齐(如果主轴是x轴则水平居中)
4. space-around 平分剩余空间
5. space-between 先两边贴边,再平分剩余空间(重要)

### flex-wrap
一行显示不下，会改变宽度强行塞下
**flex-wrap 设置子元素是否换行**
默认情况下，项目都排在一条线(又称"轴线")上,flex-wrap属性定义,flex布局默认是不换行的。
***属性值***
1. nowrap 默认值，不换行
2. wrap 换行


### align-items 设置侧轴上的子元素排列方式(单行)
该属性是控制子项在侧轴(默认是y轴)上的排列方式,在子项为单项的时候使用
***属性***
1. flex-start 默认值，从上代下
2. flex-end 从下到上
3. center 挤在一起居中(垂直居中)
4. stretch 拉伸
拉伸 子盒子不要给高度

### aligin-content 设置侧轴上子元素的排列方式(多行)
设置子项在侧轴上的排列方式并且智能用于子项出现换行的情况(多行)，在单行下没有效果
1. flex-start 默认值在侧轴的头部开始排列
2. flex-end 在侧轴的尾部开始排列
3. center 在侧轴中间显示
4. space-around 子项在侧轴平分剩余空间
5. space-between 子项在侧轴先分布在两头，再平分剩余空间
6. stretch 设置子项元素高度平分父元素高度

### flex-flow
flex-flow属性是flex-direction和flex-wrap属性的复合属性
`flex-flow:row erap;`


## flex布局子项常见属性
1. flex子项目占的份数
2. align-self控制子项自己在侧轴的排列方式
3. order属性定义子项的排列顺序(前后顺序)

### flex属性
flex属性定义子项目分配剩余空间,用flex来表示占多少份数

`flex:number` 默认0
不给宽度，剩余空间就是整个的宽度

### align-self
align-self允许单个项目有与其他项目不一样的对其方式,可覆盖align-items
默认值为auto,表示继承父元素的align-items属性，如果没有父元素，则等同于stretch

order属性定义项目排列顺序
数值越小，排列越靠前，默认为0
注意: 和z-index不一样




