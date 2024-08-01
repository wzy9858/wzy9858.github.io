---
title: javaGUi
date: 2024-6-07
tag:
  - javaGUI
category:
  - java
---
# javaGUI
## 布局
```java
//无布局格式
    // 创建窗口
    jf = new JFrame();
    jf.setTitle("公共聊天室");//窗口标题
    jf.setBounds(0,0,600,400);//设置宽高
    jf.setLocationRelativeTo(null);//设置页面剧中
    jf.setLayout(null);//可以按照xy轴坐标添加组件 一定要设置这个，所有GUI均采用无布局格式
    jf.setDefaultCloseOperation(3);//关闭一个窗口就停止运行
    jf.setResizable(false);//设置窗口不可调整
    jf.setResizable(false);//设置窗口不可拖拽
    //jf.getContentPane().setBackground(Color.BLUE);//设置背景颜色

    // 显示窗口
    jf.setVisible(true);

    //采用无布局格式后，要添加按钮，文本框，均需要绑定
    jf.getContentPane().add(对象);
```
## 缩小图标
有时候插入的图标太大了需要缩小以下
```java
//调用
ImageIcon imageLogin = reduceIcon("学生成绩管理系统\\登陆页面\\login.png",4);
JLabel login = new JLabel(imageLogin);//登陆图标
```
下面提供一个缩小的方法来实现
```java
    public ImageIcon reduceIcon(String path,int multiple){
        ImageIcon originalIcon = new ImageIcon(path);
        Image originalImage = originalIcon.getImage();//获取图像对象
        // 获取原始图像的尺寸
        int originalWidth = originalImage.getWidth(null);
        int originalHeight = originalImage.getHeight(null);
        // 计算新的尺寸
        int newWidth = originalWidth / multiple; //缩小multiple倍
        int newHeight = originalHeight / multiple;//缩小multiple倍
        // 等比例缩小图像
        Image scaledImage = originalImage.getScaledInstance(newWidth, newHeight, Image.SCALE_SMOOTH);
        // 创建缩放后的 ImageIcon
        ImageIcon scaledIcon = new ImageIcon(scaledImage);
        // 创建 JLabel 并设置缩放后的图标
        //JLabel label = new JLabel(scaledIcon);
        return scaledIcon;//返回一个缩小后的ICon对象
    }
```
 
# 以前写的
# javaGUI
GUI : Graphcis User interface
AWT : Abstract Window toolkits
Swing : 

## 顶级容器JFrame
1. JFram
2. JFrame 窗口
JDialog 对话框
BorderLayout 边界布局
FlowLayout和GridLayout布局
NullLayoutFrm 无布局
```java
public class jframe extends JFrame {
    public static void createWindow(){
        JFrame frm = new JFrame("我的第一个窗口");//窗口标题
       // frm.setTitle("你好");更改窗口标题名字
        frm.setSize(640,480);//尺寸
        //frm.setResizable(false);//设置窗口不可调整
        frm.setMinimumSize(new Dimension(640,480));//设置窗口最小可以调为多少
        frm.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);//设置x点击退出 不再运行程序
        //frm.setLocation(10,10);//设置窗口初始位置左上角距离(0,0)
        frm.setLocationRelativeTo(null);//传入null相对整个窗口居中
        frm.setVisible(true);//可视
    }
    public static void main(String[] args) {
        jframe.createWindow();
        //JDk8之后流式操作 也可以正常调用
        SwingUtilities.invokeLater(jframe::createWindow);
    }
}
```

1. 顶级容器JDialog
```java
public class jdialog extends JDialog {
    public jdialog(){
        this.setSize(480,320);
        this.setResizable(false);//设置对话框不可调大小
        //在当前工作目录下新建一个images文件里面放了book.png图标
        this.setIconImage(new ImageIcon("images/book.png").getImage());//在标题左边加载图片
        this.setTitle("这是一个对话框");//没有最大最小化按钮
        this.setLocationRelativeTo(null);//居中
        this.setDefaultCloseOperation(JDialog.DISPOSE_ON_CLOSE);

        this.setVisible(true);
    }
    public static void main(String[] args) {
        new jdialog();
    }
}
```
1. BorderLayout布局
```java
public class jframe extends JFrame {
    public static void createWindow(){
        JFrame frm = new JFrame("我的第一个窗口");//窗口标题
        //JFrame 默认使用BorderLayout 边界布局

        //什么也不写，默认在中间 默认使用BorderLayout
        JButton btnFirst = new JButton("第一个按钮");
        frm.add(btnFirst);//将这个按钮加入当前
        JButton bt2 = new JButton("第二个按钮");
        frm.add(bt2,BorderLayout.NORTH);//将按钮放在北边
        JButton bt3 = new JButton("第3个按钮");
        frm.add(bt3,BorderLayout.SOUTH);//南
        JButton bt4 = new JButton("第4个按钮");
        frm.add(bt4,BorderLayout.WEST);//西
        JButton bt5 = new JButton("第5个按钮");
        frm.add(bt5,BorderLayout.EAST);//东


       // frm.setTitle("你好");更改窗口标题名字
        frm.setSize(640,480);//尺寸
        //frm.setResizable(false);//设置窗口不可调整
        frm.setMinimumSize(new Dimension(640,480));//设置窗口最小可以调为多少
        frm.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);//设置x点击退出 不再运行程序
        //frm.setLocation(10,10);//设置窗口初始位置左上角距离(0,0)
        frm.setLocationRelativeTo(null);//传入null相对整个窗口居中
        frm.setVisible(true);//可视
    }
    public static void main(String[] args) {
        //jframe.createWindow();
        SwingUtilities.invokeLater(jframe::createWindow);
    }
}

```
4. FlowLayout和GridLayout布局
```java
public class jframe extends JFrame {
    public static void createWindow(){
        JFrame frm = new JFrame("我的第一个窗口");//窗口标题
        //frm.setLayout(new FlowLayout());// 使用流式布局 默认居中对齐
        //frm.setLayout(new FlowLayout(FlowLayout.LEFT));//按钮左对齐
        frm.setLayout(new GridLayout(3,2,5,5));//网格布局
        //后面两个5可去，带上表示间距5,5
        JButton btnFirst = new JButton("第一个按钮");
        frm.add(btnFirst);//将这个按钮加入当前
        JButton bt2 = new JButton("第二个按钮");
        frm.add(bt2);
        JButton bt3 = new JButton("第3个按钮");
        frm.add(bt3);
        JButton bt4 = new JButton("第4个按钮");
        frm.add(bt4);
        JButton bt5 = new JButton("第5个按钮");
        frm.add(bt5);
        JButton bt6 = new JButton("第6个按钮");
        frm.add(bt6);


        frm.setSize(640,480);//尺寸
       // frm.setMinimumSize(new Dimension(640,480));//设置窗口最小可以调为多少
        frm.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);//设置x点击退出 不再运行程序

        frm.setLocationRelativeTo(null);//传入null 相对整个窗口居中
        frm.setVisible(true);//可视
    }
    public static void main(String[] args) {
        //jframe.createWindow();
        SwingUtilities.invokeLater(jframe::createWindow);
    }
}

```
## GridBagLayout布局
```java
public class MyGridBagLayoutFrm extends JFrame {
    public MyGridBagLayoutFrm(){
        GridBagLayout layout = new GridBagLayout();

        this.setLayout(layout);
        GridBagConstraints c = new GridBagConstraints();//定义权重
        c.fill = GridBagConstraints.BOTH;
        c.weightx = 1;//权重 两个值加起来占的比值
        c.weighty = 1;

        this.add(new JButton("btn1"),c);
        this.add(new JButton("btn2"),c);
        this.add(new JButton("btn3"),c);
        c.gridwidth = GridBagConstraints.REMAINDER;//填充剩余部分
        this.add(new JButton("btn4"),c);

        c.weightx = 0;
        c.weighty = 0;
        this.add(new JButton("btn5"),c);//没有权重不会去分，在最下面
        c.gridwidth = 1;
        this.add(new JButton("btn6"),c);
       // c.gridwidth = 2;//占两个格子
        c.gridwidth = GridBagConstraints.REMAINDER;//把后面的格子填充满了
        this.add(new JButton("btn7"),c);
        c.gridwidth = 2;
        c.gridheight = 1;
        c.weightx = 1;
        c.weighty = 1;
        this.add(new JButton("btn8"),c);
        c.gridwidth = GridBagConstraints.REMAINDER;
        c.gridheight = 1;
        this.add(new JButton("btn9"),c);
        this.add(new JButton("btn10"),c);

        this.setSize(480,320);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setTitle("网格袋布局");
        this.setLocationRelativeTo(null);
        this.setVisible(true);
    }
    public static void main(String[] args) {
        new MyGridBagLayoutFrm();
    }
}
```
## 无布局
鼠标停留 文字提示
图标按钮
```java
public class NullLayoutFrm extends JFrame {

    public NullLayoutFrm(){

        this.setLayout(null);//界面无布局
        JButton btn1 = new JButton("btn1");
        btn1.setBounds(10,10,120,30);//
        this.add(btn1);

        JButton btn2 = new JButton();//图片按钮一般没有文字
        btn2.setBounds(200,30,220,220);//
        btn2.setIcon(new ImageIcon("images/book.png"));
        btn2.setToolTipText("图书信息管理");//鼠标放上有提示
        this.add(btn2);

        this.setTitle("按位置布局");
        this.setSize(480,320);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLocationRelativeTo(null);
        this.setVisible(true);
    }


    public static void main(String[] args) {
        new NullLayoutFrm();
    }
}

```
# 事件
事件源：按钮，图片，窗体
事件：某些操作，如鼠标点击，鼠标划入
绑定监听：当事件源上发生了某个事件，则执行某段代码
`KeyListener` 键盘监听
`MouseListener` 鼠标监听
`ActionListener` 动作监听 -> 精简版
## 动作监听
```java
public class TestGui2 extends JFrame{
    public TestGui2(){
        this.setTitle("事件演示");
        this.setSize(603,680);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);//点击x停止运行
        this.setAlwaysOnTop(true);//设置页面置顶 盖住其他窗口
        this.setLocationRelativeTo(null);//设置页面居中
        //取消默认的居中放置
        this.setLayout(null);

        //创建一个按钮对象
        JButton jtb = new JButton("点我啊");
        jtb.setBounds(0,0,100,50);
        //给按钮添加动作监听
        //jtb:组件对象，表示你要给那个组件添加事件
        //addActionListener ： 表示我要给组件添加哪个事件监听（动作监听鼠标左键点击，空格也会被识别）
        //参数：表示事件被触发之后要执行的代码
        jtb.addActionListener((e1) -> System.out.println("按钮被点击了"));//lambda表达式 实现了那个接口


        //把按钮添加到界面当中
        this.getContentPane().add(jtb);

        this.setVisible(true);
    }

    public static void main(String[] args) {
        new TestGui2();
    }
}
```
```java
public class TestGui2 extends JFrame implements ActionListener{
    JButton jtb1;
    JButton jtb2;
    public TestGui2(){
        this.setTitle("事件演示");
        this.setSize(603,680);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);//点击x停止运行
        this.setAlwaysOnTop(true);//设置页面置顶 盖住其他窗口
        this.setLocationRelativeTo(null);//设置页面居中
        //取消默认的居中放置
        this.setLayout(null);
        //创建一个按钮对象
        jtb1 = new JButton("按钮1");
        jtb1.setBounds(0,0,100,50);
        //给按钮添加动作监听
        //jtb:组件对象，表示你要给那个组件添加事件
        //addActionListener ： 表示我要给组件添加哪个事件监听（动作监听鼠标左键点击，空格也会被识别）
        //参数：表示事件被触发之后要执行的代码
        jtb1.addActionListener(this);//lambda表达式 实现了那个接口

        jtb2 = new JButton("按钮2");
        jtb2.setBounds(100,0,100,50);

        jtb2.addActionListener(this);
        //把按钮添加到界面当中
        this.getContentPane().add(jtb1);
        this.getContentPane().add(jtb2);

        this.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        //对当前按钮进行判断
        //获取当前被操作的那个按钮对象
        Object source = e.getSource();
        if(source == jtb1){
            jtb1.setSize(200,200);
        }else if(source == jtb2){
            Random r = new Random();
            jtb2.setLocation(r.nextInt(500),r.nextInt(500));
        }
    }
    public static void main(String[] args) {
        new TestGui2();
    }
}
```

## 鼠标监听
划入动作
按下动作
松开动作
划出动作
如果想监听一个按钮的单击事件可以用以下几种方式
1. 动作监听
2. 鼠标监听中的单击事件
3. 鼠标监听中的松开事件
```java
public class TestGui2 extends JFrame implements MouseListener {
    JButton jtb1 = new JButton("按钮1");
    public TestGui2(){
        this.setTitle("事件演示");
        this.setSize(603,680);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);//点击x停止运行
        this.setAlwaysOnTop(true);//设置页面置顶 盖住其他窗口
        this.setLocationRelativeTo(null);//设置页面居中
        //取消默认的居中放置
        this.setLayout(null);
        jtb1.setBounds(0,0,100,50);

        //给按钮绑定一个鼠标事件
        jtb1.addMouseListener(this);


        //把按钮添加到界面当中
        this.getContentPane().add(jtb1);
        this.setVisible(true);
    }


    public static void main(String[] args) {
        new TestGui2();
    }

    @Override
    public void mouseClicked(MouseEvent e) {
        System.out.println("单击");
    }

    @Override
    public void mousePressed(MouseEvent e) {
        System.out.println("按下");
    }

    @Override
    public void mouseReleased(MouseEvent e) {
        System.out.println("松开");
    }

    @Override
    public void mouseEntered(MouseEvent e) {
        System.out.println("划入");
    }

    @Override
    public void mouseExited(MouseEvent e) {
        System.out.println("划出");
    }
}
```
## 键盘监听机制
`keyPressed(KeyEvent e)` 按下键时调用
`keyReleased(KeyEvent e)` 当键已被释放时调用
`keyTyped(KeyEvent e)` 键入键时调用

小细节
1. 如果我们按下一个按键没有松开，那么会重复的去调用keyPressed方法
2. 键盘里面那么多按键如进行区分

```java
public class TestGui2 extends JFrame implements KeyListener {
    public TestGui2(){
        this.setTitle("事件演示");
        this.setSize(603,680);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);//点击x停止运行
        this.setAlwaysOnTop(true);//设置页面置顶 盖住其他窗口
        this.setLocationRelativeTo(null);//设置页面居中
        //取消默认的居中放置
        this.setLayout(null);

        //给整个窗口添加键盘监听
        //调用者this 本类对象 当前的界面对象 表示我要给整个界面添加监听
        //addKeyListener 表示要给本界面添加键盘监听
        //参数this 当事件被触发之后，会执行本类中的对应代码
        this.addKeyListener(this);


        this.setVisible(true);
    }
    public static void main(String[] args) {
        new TestGui2();
    }

    @Override
    public void keyTyped(KeyEvent e) {
        System.out.println("不用管这个");
    }

    @Override
    public void keyPressed(KeyEvent e) {
        System.out.println("按下不松");
    }

    @Override
    public void keyReleased(KeyEvent e) {
        System.out.println("松开按键");
        //获取键盘上每一个按键的编号
        int code = e.getKeyCode();
        System.out.println(code);
        //可以之后加上if判断执行相应的程序
    }
}
```



* 先加载的图片在上面，后加载的图片反而在下面
* 刷新页面 `this.getContentPane().repaint()`
* 清空原本已经出现的所有图片`this.getContentPane().removeAll()`

Test
```java
public class TestGUI extends JFrame {

    /**
     * 这里写登录页面
     */
    //只需要在main函数里面new对象就可以调用
    public TestGUI(){
        initJFrame();//初始化页面

        initJMenuBar();//初始化菜单那

        initImage();

        this.setVisible(true);//让界面显示出来，放在最后

    }

    private void initImage() {
        //创建一个图片ImageIco的对象
        ImageIcon icon = new ImageIcon("C:\\Users\\菜鸟拯救世界\\IdeaProjects\\GUI\\images\\book.png");
        //创建一个Jlabel的对象 (管理容器)
        JLabel jLabel = new JLabel(icon);
        //指定图片位置
        jLabel.setBounds(0,0,242,200);//没有按照xy放置还需要在initJFrame()取消默认居中

        //把管理容器添加到页面中
        //this.add(jLabel);//默认放在正中央
        this.getContentPane().add(jLabel);//这样图片才会按照xy轴放置
    }
    private void initJMenuBar() {
        //创建整个菜单对象
        JMenuBar jMenuBar = new JMenuBar();
        //创建菜单上面两个选项的对象(功能，关于我们)
        JMenu  functionIJMenu = new JMenu("功能");
        JMenu  aboutJMenu = new JMenu("关于我们");

        //创建选项下面的条目对象
        JMenuItem replatItem = new JMenuItem("重新游戏");
        JMenuItem reLoginIteam = new JMenuItem("重新登录");
        JMenuItem closeItem = new JMenuItem("关闭游戏");

        JMenuItem accountIteam = new JMenuItem("公众号");

        //将每一个选项下的条目添加到选项当中
        functionIJMenu.add(replatItem);
        functionIJMenu.add(reLoginIteam);
        functionIJMenu.add(closeItem);

        aboutJMenu.add(accountIteam);

        //将菜单里面的两个选项添加到菜单当中
        jMenuBar.add(functionIJMenu);
        jMenuBar.add(aboutJMenu);

        //给整个界面设置菜单
        this.setJMenuBar(jMenuBar);
    }
    private void initJFrame() {
        this.setTitle("学生登录管理系统");
        this.setSize(603,680);

        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);//点击x停止运行
        //this.setDefaultCloseOperation(0);//带x什么都不做
        //this.setDefaultCloseOperation(1);//默认的，点击x不会停止运行
        //this.setDefaultCloseOperation(2);//多个界面全部关闭才会停止运行 所有界面都要这样设置才会有效
        //因为程序中通常只会显示一个页面，所以下面这个比较常用
        //this.setDefaultCloseOperation(3);//只要关闭一个窗口虚拟机就会停止运行 所有界面都要这样设置

        this.setAlwaysOnTop(true);//设置页面置顶 盖住其他窗口
        this.setLocationRelativeTo(null);//设置页面居中

        //取消默认的居中放置，只有取消了才会按照Xy轴的形式添加组件
        this.setLayout(null);

    }
    public static void main(String[] args) {
        new TestGUI();
    }

}

```

```java
public class TestGUI extends JFrame implements ActionListener, MouseListener {

    /**
     * 这里写登录页面
     */
    //只需要在main函数里面new对象就可以调用
    public TestGUI(){
        initJFrame();//初始化页面

        initJMenuBar();//初始化菜单

        initImage();

        this.setVisible(true);//让界面显示出来，放在最后

    }

    private void initImage() {
        //创建一个图片ImageIco的对象
        ImageIcon icon = new ImageIcon("C:\\Users\\菜鸟拯救世界\\IdeaProjects\\GUI\\images\\book.png");
        //创建一个Jlabel的对象 (管理容器)
        JLabel jLabel = new JLabel(icon);
        //指定图片位置
        jLabel.setBounds(0,0,242,200);//没有按照xy放置还需要在initJFrame()取消默认居中

        JLabel str = new JLabel("步数");//也可以设置文字
        str.setBounds(200,200,100,200);
        this.getContentPane().add(str);
        //把管理容器添加到页面中
        //this.add(jLabel);//默认放在正中央
        this.getContentPane().add(jLabel);//这样图片才会按照xy轴放置
    }
    //创建选项下面的条目对象
    JMenuItem replatItem = new JMenuItem("重新游戏");
    JMenuItem reLoginIteam = new JMenuItem("重新登录");
    JMenuItem closeItem = new JMenuItem("关闭游戏");
    JMenuItem accountIteam = new JMenuItem("公众号");
    private void initJMenuBar() {
        //创建整个菜单对象
        JMenuBar jMenuBar = new JMenuBar();
        //创建菜单上面两个选项的对象(功能，关于我们)
        JMenu  functionIJMenu = new JMenu("功能");
        JMenu  aboutJMenu = new JMenu("关于我们");

        //将每一个选项下的条目添加到选项当中
        functionIJMenu.add(replatItem);
        functionIJMenu.add(reLoginIteam);
        functionIJMenu.add(closeItem);

        //绑定事件
        aboutJMenu.add(accountIteam);
        functionIJMenu.add(replatItem);
        functionIJMenu.add(reLoginIteam);
        functionIJMenu.add(closeItem);


        //将菜单里面的两个选项添加到菜单当中
        jMenuBar.add(functionIJMenu);
        jMenuBar.add(aboutJMenu);

        //给条目绑定事件
        replatItem.addActionListener(this);//点击后执行这个抽象方法
        reLoginIteam.addActionListener(this);
        closeItem.addActionListener(this);
        accountIteam.addActionListener(this);

        //给整个界面设置菜单
        this.setJMenuBar(jMenuBar);
    }
    private void initJFrame() {
        this.setTitle("学生登录管理系统");
        this.setSize(603,680);

        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);//点击x停止运行
        //this.setDefaultCloseOperation(0);//带x什么都不做
        //this.setDefaultCloseOperation(1);//默认的，点击x不会停止运行
        //this.setDefaultCloseOperation(2);//多个界面全部关闭才会停止运行 所有界面都要这样设置才会有效
        //因为程序中通常只会显示一个页面，所以下面这个比较常用
        //this.setDefaultCloseOperation(3);//只要关闭一个窗口虚拟机就会停止运行 所有界面都要这样设置

        this.setAlwaysOnTop(true);//设置页面置顶 盖住其他窗口
        this.setLocationRelativeTo(null);//设置页面居中

        //取消默认的居中放置，只有取消了才会按照Xy轴的形式添加组件
        this.setLayout(null);

    }
    public static void main(String[] args) {
        new TestGUI();
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        //组件点击之后
        //获取当前被点击的条目对象
        Object obj  = e.getSource();
        if(obj == replatItem){
            System.out.println("重新游戏");
        }else if(obj == reLoginIteam){
            System.out.println("重新登录");
        }else if(obj == closeItem){
            System.out.println("关闭游戏");
        }else if(obj == accountIteam){
            System.out.println("公众号");
        }

    }

    @Override
    public void mouseClicked(MouseEvent e) {

    }

    @Override
    public void mousePressed(MouseEvent e) {

    }

    @Override
    public void mouseReleased(MouseEvent e) {

    }

    @Override
    public void mouseEntered(MouseEvent e) {

    }

    @Override
    public void mouseExited(MouseEvent e) {

    }
}

```
## 文本框
输入框  `JTestFiled` 明文显示的输入框
输入框 `JPasswordFiled` 密文显示的输入框

```java
public class TestGui2 extends JFrame implements ActionListener {
    JTextField id;
    JPasswordField pass;
    public TestGui2(){
        this.setTitle("事件演示");
        this.setSize(603,680);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);//点击x停止运行
        this.setAlwaysOnTop(true);//设置页面置顶 盖住其他窗口
        this.setLocationRelativeTo(null);//设置页面居中
        //取消默认的居中放置
        this.setLayout(null);

        //输入账户
        id = new JTextField(6);
        //设置文本框大小为6个字符
        id.setBounds(0,0,120,30);
        this.getContentPane().add(id);

        //输入密码
        pass = new JPasswordField();//看不见输入的啥
        pass.setBounds(0,40,120,30);
        this.getContentPane().add(pass);

        JButton jbt = new JButton("登陆");
        jbt.setBounds(0,80,120,30);
        this.getContentPane().add(jbt);
        jbt.addActionListener(this);

        this.setVisible(true);
    }
    public static void main(String[] args) {
        new TestGui2();
    }


    @Override
    public void actionPerformed(ActionEvent e) {
        System.out.println(id.getText());
        System.out.println(pass.getText());
    }
}

```