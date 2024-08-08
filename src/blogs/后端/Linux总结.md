---
title: linux
date: 2024-6-07
tag:
  - linux
category:
  - 后端
---
# Linux

linux写的笔记有点杂乱，我决定把自己常用的命令总结到这里!

## 一些常用命令
拿到一台崭新的服务器后你会干什么？
`uname -a`显示所有系统消息
`neofetch` 需要安装，收集系统软硬件消息 并显示

`df -h` 以人类可读方式显示文件系统磁盘使用情况统计
`du` 显示目录或文件大小
`-h `人类可读的形式
`who` 查看当前登录的用户

### 更改密码

`sudo passwd 用户名`

### 后台运行
在命令的末尾+&程序可以在后台运行，退出当前账户该程序就会停止运行
nohup 不挂起的意思
`nohup 程序 &` 退出当前账户的时候程序不会停止

job -l  可以查看当前有多少在后台运行

### 传输下载文件

`yum install lrzsz`

`rz`上传本地文件到linux

`sz` 从linux下载文件到本地



## 快捷键

```
tab 补全终端命令 还可以进行选择目录(在当前目录下)
```
## 关于CentOs防火墙
`firewall-cmd --zone=zone-name --add-service=service-name --permanent`
--zone 指定要添加服务的区域名称
--add-service 指定要添加的服务名称
--permanent 指定该规则永久生效

--list-all 列出所有规则
--reload 重新加载防火墙规则
--delete-service 删除服务
--add-port 添加端口
--remove-port 删除端口
--list-ports 列出所有已添加的端口

eg
`firewall-cmd --zone=public --add-port=80/tcp --permanent`添加端口


## 安装数据库

`rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022` 更新密钥

`rpm -Uvh https://dev.mysql.com/get/mysql80-community-release-el7-2.noarch.rpm` 安装mysql8.x版本 yum库

`yum -y install mysql-community-server`

如果报错试试

`yum module disable mysql`

`yum -y install mysql-community-server --nogpgcheck`

查看运行状态

`systemctl status mysqld`

`grep "temporary password" /var/log/mysqld.log` 获取原始密码

`mysql -uroot -p` -u 登录的用户 -p使用密码登录

`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Kdyq1108！';` 修改密码

`create user 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'Kdyq1108！' ;` 第一次设置远程登录，并配置远程登录密码

`ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '密码 `；

`grant all privileges on on *.* to 'root'@'%' with grant option;` 
grant语法 grant 权限名(所有的权限用all) on 库名(*全部) to '要授权的用户名'@'%'(%表示所有ip，可以只设置一个ip)

`flush privileges;`刷新权限



Kdyq1108

Kdyq1108!


## 终端美化相关

### cowsay相关

`apt install cowsay` 

`cowsay 文本` `cowthink 文本`

`cowsay -l`列出可以打印的图像 `cowsay -f 图像名称 文本` `cowsay -r`随机图像

### 名人名言

`apt install fortune`

'apt install fortunes-zh`安装中文版本

`fortune | cowsay`

### 彩色的牛

`apt install lolcat` lolcat将传过去的文本变为彩色

`fortune | cowsay -r tux | lolcat`

### 添加到配置文件中

在`~/.bashrc`中添加每次启动终端要输出的，这样每次连接都会出现cowsay的图像了

## nginx

cd /etc/nginx/ 在这个目录里面有nginx.conf文件

```xml
events {}
http {
        include       mime.types;  # 文件扩展名与文件类型映射表
        include       self/*.conf; # 独立出不同网站不同配置文件,引入其他的配置文件
        default_type  application/octet-stream; # 默认文件类型
        server {
        listen 80;
        server_name localhost;
        location / {
        root /root/blogs/dist;
        index index.php index.html index.htm default.php default.htm default.html;
        }
        }
}
```

## 安装软件

### ssh

`sudo apt-get install openssh-server`



## vim配置及其命令
vimrc 配置文件
```
 syntax on         "语法高亮
 set nu           "在左侧行号                                                
 set tabstop      "tab 长度设置为 4
 set nobackup     "覆盖文件时不备份
 set cursorline   "突出显示当前行
 set ruler        "在右下角显示光标位置的状态行
 set autoindent   "自动缩进
```
### 一些命令
`0`到行首`$`到行尾
`hjkl`左下右上
`>G` 增加当前行到文档末尾处的缩进层级
`.`重复上一次的操作，重复的是修改操作

# Ubuntu

### 拿到一台崭新的ubuntu服务器你会做什么

更新

`sudo apt update`

`sudo apt upgrade`

安装fish

`sudo apt install fish`

查看剩下多少空间

`df -h`

查看内存

`free -h`

查看详细信息

`sudo apt install neofetch`
