---
icon: circle-info
cover: /assets/images/cover3.jpg
star: true
sticky: 100
---

# ABOUT ME
***未经允许，禁止转载***  <br/>
查看官方配置文档[博客主页](https://theme-hope.vuejs.press/zh/guide/blog/home.html)。<br>
或者[查看](https://theme-hope.vuejs.press)

本博客网站使用vuepress搭建，主题使用了vuepress-theme-hope<br>

网站内可搭建幻灯片[演示](https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html)<br>

博客内图标设置[链接](https://fontawesome.com/)直接复制名字使用<br>

图标也可以在阿里图标库下载svg文件导入使用<br>

本博客所有笔记内容仅供参考。
如有侵权请联系[邮箱](mailto:wzy9858@qq.com)

尚硅谷文件夹内[笔记](./blogs/尚硅谷相关课程官方笔记/)由尚硅谷官方而来。


**注: 站内文章更新时间仅为上传时间**

# 一些链接
[w3school在线教程](https://www.w3school.com.cn/)<br>

[Axios中文文档 | Axios中文网 (axios-http.cn)](https://www.axios-http.cn/)<br>

尚硅谷全新ssm教程,课件[连接](https://www.wolai.com/v5Kuct5ZtPeVBk4NBUGBWF)

# MarkDown头部配置
```
---
# 这是文章的标题
title: 页面配置
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: file  # lock 加锁图标
# 这是侧边栏的顺序
order: 3
# 设置作者
author: Ms.Hope
# 设置写作时间
date: 2020-01-01
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - 页面配置
  - 使用指南
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在星标文章中
star: true
# 你可以自定义页脚
footer: 这是测试显示的页脚
# 你可以自定义版权信息
copyright: 无版权
---
`more` 注释之前的内容被视为文章摘要。
<!-- more -->
```
### 功能禁用
```
---
title: 布局与功能禁用
icon: gears
order: 4
category:
  - 使用指南
tag:
  - 禁用

navbar: false
sidebar: false

breadcrumb: false
pageInfo: false
contributors: false
editLink: false
lastUpdated: false
prev: false
next: false
comment: false
footer: false

backtotop: false
---

你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。

<!-- more -->

上面就是一个示例，禁用了如下功能:

- 导航栏
- 侧边栏
- 路径导航
- 页面信息
- 贡献者
- 编辑此页链接
- 更新时间
- 上一篇/下一篇 链接
- 评论
- 页脚
- 返回顶部按钮

```


# Home页配置
```
projects:
  - icon: project
    name: 项目名称
    desc: 项目详细描述
    link: https://你的项目链接

  - icon: link
    name: 链接名称
    desc: 链接详细描述
    link: https://链接地址

  - icon: book
    name: 书籍名称
    desc: 书籍详细描述
    link: https://你的书籍链接

  - icon: article
    name: 文章名称
    desc: 文章详细描述
    link: https://你的文章链接

  - icon: friend
    name: 伙伴名称
    desc: 伙伴详细介绍
    link: https://你的伙伴链接

  - icon: https://theme-hope-assets.vuejs.press/logo.svg
    name: 自定义项目
    desc: 自定义详细介绍
    link: https://你的自定义链接
```

