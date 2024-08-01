---
title: java数据结构
date: 2024-7-13
tag:
  - Java
category:
  - 算法
---

# 数据结构

算法是程序的灵魂。优秀的程序可以在海量数据计算时,依然保持高速计算。<br/>

数据结构是一门研究组织数据方式的学科,有了编程语言也就有了数据结构,学好数据结构可以编写出更加漂亮,更加有效率的代码。<br/>

程序=数据结构+算法<br/>

数据结构是算法的基础,换言之,想要学好算法,需要把数据结构学到位。<br/>

# 线性结构

线性结构是最常用的数据结构,其特点是数据元素之间存在一对一的线性关系,两种不同的存储结构,即顺序存储结构(数组)和链式存储结构(链表),顺序存储的线性表称为顺序表,顺序表中的存储元素是连续的,链式存储的线性表称为链表,链表中的存储元素不一定是连续的,元素节点中存放数据元素以及相邻元素的地址信息。线性结构常见的有:数组,队列,链表和栈。

---





# 非线性结构

二位数组,多维数组,广义表,树结构,图结构

---





# 稀疏数组

 需求:五子棋存盘退出和续上盘的功能,原始二位数组记录了很多无意义的数据-->压缩

---

当一个数组中大部分元素为0,或者为同一个值的数组时,可以使用稀疏数组来保存该数组。

稀疏数组的处理方法是:

* 记录数组一共有几行几列,有多少个不同的值
* 把具有不同值的元素的行列及值记录在一个小规模的数组中,从而缩小程序的规模。

格式:

```
	row col val
0	11	11	2	原数组11行11列2个有效值
1	1	2	1	第一个有效值位置及其值
2	2	2	2	第二个有效值位置及其值
```

**思路**

1. 遍历,原始的二维数组,得到有效数据的个数sum
2. 根据sum就可以创建稀疏数组`sparaArr =int[sum+1][3]`
3. 将二维数组的有效数据存入到稀疏数组中

**稀疏数组转原始二位数组思路**

1. 先读取稀疏数组第一行,根据第一行的数据创建原始的二维数组,比如上面的`chessArr2 = int[11][11]`
2. 再读取稀疏数组后几行的数据,并赋值给原始的二维数组即可。

## 代码:

```java
public class Main {
    public static void main(String[] args) {
        //0 没有棋子 1 黑子 2 白子
        int chessArr1[][] = new int[11][11];
        chessArr1[1][2] = 1;
        chessArr1[2][4] = 2;
        for (int[] row :chessArr1){
            for (int data : row){
                System.out.printf("%d\t",data);
            }
            System.out.println();
        }
        System.out.println("------------");
        //二维数组转稀疏数组
        int sum=0;
        for(int i=0;i<11;i++){
            for(int j=0;j<11;j++){
                if(chessArr1[i][j] != 0){
                    sum++;
                }
            }
        }
        int sparseArr[][] = new int[sum+1][3];

        sparseArr[0][0]=11;
        sparseArr[0][1]=11;
        sparseArr[0][2]=sum;

        int count = 0;//记录是第几个非零数据
        for (int i=0;i<11;i++){
            for(int j=0;j<11;j++){
                if (chessArr1[i][j] != 0){
                    count++;
                    sparseArr[count][0] = i;
                    sparseArr[count][1] = j;
                    sparseArr[count][2] = chessArr1[i][j];
                }
            }
        }
        System.out.println();
        System.out.println("得到的稀疏数组为:");
        for(int i = 0;i<sparseArr.length;i++){
            System.out.printf("%d\t%d\t%d\t",sparseArr[i][0],sparseArr[i][1],sparseArr[i][2]);
            System.out.println();
        }
        //稀疏数组恢复成二维数组
        int chessArr2[][] = new int[sparseArr[0][0]][sparseArr[0][1]];
        for(int i=1;i<sparseArr.length;i++){
            for(int j=0;j<3;j++){
             chessArr2[sparseArr[i][0]][sparseArr[i][1]] = sparseArr[i][2];
            }
        }
        for (int[] row :chessArr2){
            for (int data : row){
                System.out.printf("%d\t",data);
            }
            System.out.println();
        }

    }
}
```

* 课后练习,尝试一下将数组保存进磁盘并读取。

# 队列

队列是一个有序列表,可以用数组或是链表来实现。

遵循先入后出的原则.

## 使用数组模拟队列(代码)

```java
public class ArrayQueue {
    private int maxSize;//数组最大容量
    private int frot;//队列头
    private int rear;//队列尾
    private int[] arr;

    public ArrayQueue(int arrMaxSize) {
        maxSize = arrMaxSize;
        arr = new int[maxSize];
        frot = -1;//指向队列头部,分析出front是指向队列头的前一个位置
        rear = -1;//指向队列尾,指向队列尾的数据(既就是队列最后一个数据)
    }

    //判断队列是否满
    public boolean ifFull() {
        return rear == maxSize - 1;
    }

    //判断队列是否为空
    public boolean isEmpty() {
        return rear == frot;
    }

    //添加数据到队列
    public void addQueue(int n) {
        //判断队列是否满
        if (ifFull()) {
            System.out.println("队列满,不能加入数据");
            return;
        }
        rear++;
        arr[rear] = n;
    }
    //获取队列的数据,出队列
    public int getQueue() {
        if (isEmpty()) {
            throw new RuntimeException("队列空,不能取数据");
        }
        frot++;
        return arr[frot];
    }

    public void showQueue() {
        if (isEmpty()) {
            System.out.println("队列空的,没有数据");
            return;
        }
        for (int i = 0; i < arr.length; i++) {
            System.out.printf("arr[%d]=%d/n", i, arr[i]);
        }
    }

    //显示队列的头部数据,注意不是取出数据
    public int headQueue() {
        if (isEmpty()) {
            throw new RuntimeException("队列空的,没有数据");
        }
        return arr[frot + 1];
    }
}
```

### 测试main方法

```java
 public static void main(String[] args) {
        ArrayQueue arrayQueue = new ArrayQueue(3);
        char key = ' ';
        Scanner scanner = new Scanner(System.in);
        boolean loop = true;
        while (loop) {
            System.out.println("s(show):显示队列");
            System.out.println("e(exit):退出队列");
            System.out.println("a(add):添加数据到队列");
            System.out.println("g(get):从队列取出数据");
            System.out.println("h(head):查看队列头的数据");
            key = scanner.next().charAt(0);//接收一个字符
            switch (key) {
                case 's':
                    arrayQueue.showQueue();
                    break;
                case 'e':
                    scanner.close();
                    loop = false;
                    break;
                case 'a':
                    System.out.println("输入一个数字");
                    arrayQueue.addQueue(scanner.nextInt());
                    break;
                case 'g':
                    try {
                        int res = arrayQueue.getQueue();
                        System.out.println("取出的数据是:" + res);
                    } catch (Exception e) {
                        System.out.println(e.getMessage());
                    }


                    break;
                case 'h':
                    try {
                        int res = arrayQueue.headQueue();
                        System.out.println("队列的头数据是:" + res);
                    } catch (Exception e) {
                        System.out.println(e.getMessage());
                    }
                    break;
                default:
                    break;
            }
            System.out.println("程序退出");
        }
    }
```

### 问题

数组使用一次就不能用,没有达到复用的效果，<br>

将这个数组使用算法,改进成一个环形的队列 取模。<br>





## 环形队列

**思路:**

1. front变量的含义做一个调整,front就指向队列的第一个元素,也就是或`arr[front]`就是队列的第一个元素,front初始值=0
2. rear变量的含义做一个调整:rear指向队列的最后一个元素的后一个位置。因为希望空出一个空间作为约定。rear的初始值=0
3. 当队列满时,条件是`(rear+1)%maxsize==front`
4. 队列为空的条件,`rear==front`
5. 当我们这样分析,队列中有效的数据的个数==`(rear+maxSize-front)%maxSize`==
6. 在原来的队列上修改得到环形队列。

```java
public class CircleArray {
    private int maxSize;//数组最大容量
    private int front;//队列的第一个元素
    private int rear;//最后一个元素的后一个位置
    private int[] arr;
    public CircleArray(int maxSize){//最大有效数据位数-1
        this.maxSize = maxSize;
        arr = new int[this.maxSize];
    }

    public boolean ifFull(){
        return (rear + 1) % maxSize == front;
    }

    public boolean isEmpty(){
        return rear == front;
    }
    public void addQueue(int n){
        if (ifFull()) {
            System.out.println("队列满,不能加入数据");
            return;
        }
        arr[rear] = n;
        rear = (rear+1)%maxSize;
    }
    public int getQueue() {
        if (isEmpty()) {
            throw new RuntimeException("队列空,不能取数据");
        }
        //front是指向队列的第一个元素
        //1.先把front对应的值保留到一个临时变量
        //2. 将front后裔
        //3.将临时保存的变量返回
        int tem = arr[front];
        front = (front +1)%maxSize;
        return tem;
    }
    //求出当前队列有效数据的个数
    public int size(){
        return (rear+maxSize- front)%maxSize;
    }
    public void showQueue() {
        if (isEmpty()) {
            System.out.println("队列空的,没有数据");
            return;
        }
        for (int i=front;i<front+size();i++){
            System.out.printf("arr[%d]=[%d]\n",i%maxSize,arr[i%maxSize]);    
        }
    }
    public int headQueue() {
        if (isEmpty()) {
            throw new RuntimeException("队列空的,没有数据");
        }
        return arr[front];
    }
}
```

# 单链表

链表是以节点的方式来存储的,是链式存储,每个节点包含data域,next域:指向下一个节点，链表的各个节点不一定是连续存放的。<br>

链表分带头节点的链表和没有头节点的链表,根据实际的需求来确定。<br>

head节点不存放具体数据,作用就是表示单链表表头。<br>

***应用实例***

使用带head头的单向链表实现-水浒英雄排行管理

1. 完成对英雄任务的增删改查操作
2. 第一种方法在添加英雄时,直接添加到链表尾部
3. 第二种方式在添加英雄时,根据排名将英雄插入到指定位置(如果有这个排名,则添加失败,并给出提示)



**分析**

添加(创建):

1. 先创建一个head头节点,作用就是表示单链表的头
2. 后面我们每添加一个节点,就直接加入到链表的最后

遍历:

1. 通过一个辅助遍历,帮助遍历整个链表



***第一种,直接添加到链表尾部代码***

```java
public class SingleLinkedListDemo {
    public static void main(String[] args) {
        //先创建几个节点
        HeroNode heroNode1 = new HeroNode(1, "宋江", "及时雨");
        HeroNode heroNode2 = new HeroNode(2, "卢俊义", "玉麒麟");
        HeroNode heroNode3 = new HeroNode(3, "吴用", "智多星");
        HeroNode heroNode4 = new HeroNode(4, "林冲", "豹子头");
        //创建链表
        SingLeLinkedList singLeLinkedList = new SingLeLinkedList();
        //加入
        singLeLinkedList.add(heroNode1);
        singLeLinkedList.add(heroNode2);
        singLeLinkedList.add(heroNode3);
        singLeLinkedList.add(heroNode4);
        singLeLinkedList.list();
    }
}

//定义SingLeLinkedList
class SingLeLinkedList{
    //先初始化一个头节点,头节点不要动
    private HeroNode head = new HeroNode(0,"","");
    //添加节点到单项链表
    //思路，当不考虑编号顺序时,
    //1.找到当前链表最后节点
    //2.将最后这个节点的next指向新的节点
    public void add(HeroNode heroNode){
        //因为head节点不能动,因此我们需要一个辅助遍历temp
        HeroNode temp = head;
        while(true){
            //找到链表的最后
            if(temp.next == null){
                break;
            }
            //如果没有找到最后,就将tem后移
            temp = temp.next;
        }
        //当退出while循环时,temp就指向了链表的最后
        temp.next = heroNode;
    }
    //显示链表[遍历]
    public void list(){
        if(head.next == null){
            System.out.println("链表为空");
            return;
        }
        //因为头节点不能动,因此我们需要一个辅助变量来遍历
        HeroNode temp = head.next;
        while (true){
            //判断是否到链表最后
            if(temp == null){
                break;
            }
            //输出节点信息
            System.out.println(temp);
            //将temp后移
            temp = temp.next;
        }
    }
}
//定义HeroNode,每个HeroNode对象就是一个节点
class HeroNode{
    public int no;
    public String name;
    public String nickname;
    public HeroNode next;//指向下一个节点

    public HeroNode(int hNo,String hName,String hNicknmae){
        this.no = hNo;
        this.name = hName;
        this.nickname = hNicknmae;
    }

    @Override
    public String toString() {
        return "HeroNode{" +
                "no=" + no +
                ", name='" + name + '\'' +
                ", nickname='" + nickname + '\'' +
//                ", next=" + next +
                '}';
    }
}
```

***第二种,按照编号顺序添加***

思路:

1. 首先找到新添加节点的位置,是通过辅助变量(指针),通过遍历
2. 新的节点 `next = temp.next`
3. 将`temp.next=`新的节点

```java
    public void addByOrder(HeroNode heroNode){
        //因为单链表,因为我们找的temp是位于添加位置的前一个节点，否则插入不了
        HeroNode temp = head;
        boolean flag = false;//标志添加的编号是否存在,默认为false
        while(true){
            if(temp.next == null){//说明temp已经在链表最后
                break;
            }
            if(temp.next.no > heroNode.no){//位置找到,就在tem后面添加
                break;
            }else if(temp.next.no == heroNode.no){
                flag = true;//说明编号存在
                break;
            }
            temp = temp.next;//后移
        }
        if(flag){
            System.out.printf("准备插入的英雄的编号%d已经存在,不能加入\n",heroNode.no);
        }else {
            heroNode.next = temp.next;
            temp.next = heroNode;
        }

    }
```

**修改节点信息,根据编号修改,即no编号不变**

```java
  public void update(HeroNode heroNode){
        //判断是否为空
        if(head.next == null){
            System.out.println("链表为空");
            return;
        }
        //找到需要修改的节点
        HeroNode temp = head.next;
        boolean flag = false; //表示是否找到该节点
        while (true){
            if(temp == null){//到了链表的最后
                break;
            }
            if(temp.no == heroNode.no){//找到了
                flag = true;
                break;
            }
            temp = temp.next;
        }
        if(flag){
            temp.name = heroNode.name;
            temp.nickname = heroNode.nickname;
        }else {
            System.out.println("没有找到编号="+heroNode.no+"的节点,不能修改");
        }
    }
```

***删除节点代码***

思路:

1. 我们先找到需要删除的这个节点的前一个节点temp
2. `temp.next=temp.next.next`
3. 被删除的节点将不会有其他引用指向,会被垃圾回收机制回收。

```java
    public void delete(int no){
        HeroNode temp = head;

        boolean flag = false;//标志是否找到待删除节点
        while(true){
            if(temp.next == null){
                break;
            }
            if (temp.next.no == no){//找到了待删除节点的前一个节点
                flag = true;
                break;
            }
            temp = temp.next;
        }
        if(flag){
            temp.next = temp.next.next;
        }else {
            System.out.println("这个节点不存在");
        }
    }
```

## 单链表常见面试题

* 求单链表中有效节点个数

```java
  //方法:获取到单链表的节点个数(如果带头节点,需求不统计头节点)
    public int getLength(HeroNode head){
        if (head.next == null){
            return 0;
        }
        int len = 0;
        HeroNode cur = head.next;//没有统计头节点
        while (cur != null){
            len++;
            cur = cur.next;
        }
        return len;
    }
```



* 查找单链表中的倒数第k个节点 [新浪面试题]

```java
   /*
    思路:
    1.编写一个方法,接收head节点,同时接收一个index
    2.index表示的是倒数index个节点
    3.先把链表从头到尾遍历,得到链表的总的长度getLength
    4.得到size之后,我们链表的第一个开始遍历(size-index)个，就可以得到
    5.找到返回该节点,找不到返回空
     */
    public HeroNode findLastIndex(HeroNode head,int index){
        if (head.next == null){
            return null;
        }
        int size = getLength(head);
        //做一个校验
        if (index<=0 || index>size){
            return null;
        }
        HeroNode cur = head.next;
        for (int i=0;i<size - index;i++){
            cur = cur.next;
        }
        return cur;
    }
```



* 单链表的反转[腾讯面试题]

```java
    //单链表的反转思路
    /**
     * 1.先定义一个节点reverseHead = new HeroNode();
     * 2.从头到尾遍历原来的链表,每遍历一个节点,就将其取出,并放在新的链表reverseHead的最前端
     * 3.原来的链表head.next=reverseHead.next
     */
    public void reverseLsit(HeroNode head){
        //如果当前链表为空,或者只有一个节点,无需反转,直接返回
        if (head.next == null || head.next.next == null){
            return;
        }
        //定义一个辅助的指针(变量),帮助我们遍历原来的链表
        HeroNode cur = head.next;
        HeroNode next = null;//定义当前节点的下一个节点
        HeroNode reverseHead = new HeroNode(0,"","");

        //遍历原来的链表
        while (cur != null){
            next = cur.next;//暂时保存当前节点的下一个节点,后面需要使用
            cur.next = reverseHead.next;
            reverseHead.next = cur;
            cur = next;
        }
        head.next = reverseHead.next;
    }
```



* 从头到尾打印单链表[百度,要求方式1:反向遍历,方式2:Stack栈]

```java
 //思路
    /***
     * 1.逆序打印单链表
     * 2. 方式1,先将单链表进行反转,然后遍历即可,这样做的问题是会破坏原来的单链表的结构,不建议
     * 3. 方式2,可以利用栈这个数据结构,将各个节点压入到栈中,利用栈的先进后出的特点就实现了逆序打印效果
     *
     */
    //使用方式2实现逆序打印
    public void reverseListPrint(HeroNode head){
        if (head.next == null){
            return;
        }
        //创建一个栈,将各个节点压入栈中
        Stack<HeroNode> stack = new Stack<HeroNode>();
        HeroNode cur = head.next;
        //将链表的所有节点压入栈中
        while (cur != null){
            stack.push(cur);
            cur = cur.next;
        }
        //将栈中的节点进行打印
        while (stack.size() > 0){
            System.out.println(stack.pop());
        }
    }
```



* 合并两个有序的单链表,合并之后的链表依然有序[自己完成]

下面代码是自己写的(想了老半天)

```jav
public HeroNode hebing(HeroNode h1, HeroNode h2) {
		//合并到第三个链表中
		HeroNode newHead = new HeroNode(0, "", "");
		if(h1.next == null) {
			newHead.next = h2.next;
			return newHead;
		}else if(h2.next == null) {
			newHead.next = h1.next;
			return newHead;
		}
		
		if(h1.next.no >= h2.next.no) {
			newHead.next = h2.next;
			h2 = h2.next;
		}else {
			newHead.next = h1.next;
			h1 = h1.next;
		}
		
		HeroNode curh1 = h1.next;
		HeroNode curh2 = h2.next;
		
		HeroNode curNew = newHead.next;
		
		while(curh1 != null && curh2 != null) {
			if(curh1.no >= curh2.no) {
				curNew.next = curh2;
				curh2 = curh2.next;
				curNew = curNew.next;
			}else {
				curNew.next = curh1;
				curh1 = curh1.next;
				curNew = curNew.next;
			}
		}
		if (curh1 == null) {
			curNew.next = curh2;
		}else {
			curNew.next = curh1;
		}
		return newHead;
	}
```



# 双链表

使用带head头的双向链表实现-水浒英雄排行榜管理单项链表缺点分析:

1. 单项链表,查找方向只能是一个方向,而双向链表可以向前向后查找
2. 单项链表不能自我删除,需要靠辅助节点,而双向链表,则可以自我删除,所以前面我们单链表删除节点时,总是找到temp(temp是待删除节点的前一个节点)的下一个节点来删除的



```java
public class HeroNode2 {
    public int no;
    public String name;
    public String nickname;
    public HeroNode2 next;//指向下一个节点 默认为null
    public HeroNode2 pre;//指向前一个节点 默认为null

    public HeroNode2(int hNo, String hName, String hNicknmae){
        this.no = hNo;
        this.name = hName;
        this.nickname = hNicknmae;
    }

    @Override
    public String toString() {
        return "HeroNode{" +
                "no=" + no +
                ", name='" + name + '\'' +
                ", nickname='" + nickname + '\'' +
//                ", next=" + next +
                '}';
    }
}
```



```java
public class DoubleLinkedList {
    private HeroNode2 head = new HeroNode2(0, "", "");

    public HeroNode2 getHead() {
        return head;
    }

    //遍历双向链表的方法,与单链表类似
    public void list() {
        if (head.next == null) {
            System.out.println("链表为空");
            return;
        }
        //因为头节点不能动,因此我们需要一个辅助变量来遍历
        HeroNode2 temp = head.next;
        while (true) {
            //判断是否到链表最后
            if (temp == null) {
                break;
            }
            //输出节点信息
            System.out.println(temp);
            //将temp后移
            temp = temp.next;
        }
    }
    //在链表尾部添加,与单链表非常类似
    public void add(HeroNode2 heroNode){
        //因为head节点不能动,因此我们需要一个辅助遍历temp
        HeroNode2 temp = head;
        while(true){
            //找到链表的最后
            if(temp.next == null){
                break;
            }
            //如果没有找到最后,就将tem后移
            temp = temp.next;
        }
        //当退出while循环时,temp就指向了链表的最后
        temp.next = heroNode;
        heroNode.pre = temp;
    }
    //修改一个节点的内容,与单链表相同
    public void update(HeroNode2 heroNode){
        //判断是否为空
        if(head.next == null){
            System.out.println("链表为空");
            return;
        }
        //找到需要修改的节点
        HeroNode2 temp = head.next;
        boolean flag = false; //表示是否找到该节点
        while (true){
            if(temp == null){//到了链表的最后
                break;
            }
            if(temp.no == heroNode.no){//找到了
                flag = true;
                break;
            }
            temp = temp.next;
        }
        if(flag){
            temp.name = heroNode.name;
            temp.nickname = heroNode.nickname;
        }else {
            System.out.println("没有找到编号="+heroNode.no+"的节点,不能修改");
        }
    }
    //删除一个节点
    //对于双向链表可以直接找到要删除的这个节点
    //找到后自我删除即可
    public void delete(int no){
        if (head.next == null){
            System.out.println("链表为空,无法删除");
            return;
        }
        /*
        下面是直接找到待删除的那一个节点,所以用.next,
        而单链表中需要找到待删除链表的前一个
         */
        HeroNode2 temp = head.next;

        boolean flag = false;//标志是否找到待删除节点
        while(true){
            if(temp == null){
                break;
            }
            if (temp.no == no){
                flag = true;
                break;
            }
            temp = temp.next;
        }
        if(flag){
            temp.pre.next = temp.next;
            //如果是最后一个节点呢?
            if(temp.next != null) {
                temp.next.pre = temp.pre;
            }
        }else {
            System.out.println("这个节点不存在");
        }
    }
}
```



* 双向链表的第二种添加方式,按照编号顺序[自己完成]

按照单链表的顺序添加,稍作修改即可。
