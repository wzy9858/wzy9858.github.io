---
title: java扩展
date: 2024-6-07
tag:
  - java
category:
  - 后端
---

# 网络编程相关

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
## Socket类

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

### Socket相关API

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

#### 聊天室项目

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