<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript">
	
	window.onload = function(){
		
		//1. 获取 a 节点, 并为其添加 onclick 响应函数
		document.getElementsByTagName("a")[0].onclick = function(){
			
			//3. 创建一个 XMLHttpRequest 对象
			var request = null;
			request = new XMLHttpRequest();
			
			//4. 准备发送请求的数据: url
			var url = this.href + "?time=" + new Date();
			var method = "POST";
			
			//5. 调用 XMLHttpRequest 对象的  open 方法
			request.open(method, url);
			
			request.setRequestHeader("ContentType", "application/x-www-form-urlencoded");
			
			//6. 调用 XMLHttpRequest 对象的 send 方法
			request.send("name='atguigu'");
			
			//7. 为 XMLHttpRequest 对象添加 onreadystatechange 响应函数
			request.onreadystatechange = function(){
				//alert(request.readyState);
				
				//8. 判断响应是否完成: XMLHttpRequest 对象的 readyState 属性值为 4 的时候
				if(request.readyState == 4){
					//9. 再判断响应是否可用: XMLHttpRequest 对象 status 属性值为 200
					if(request.status == 200 || request.status == 304){
						//10. 打印响应结果: responseText
						alert(request.responseText);
					}
				}
			}
			
			//2. 取消 a 节点的默认行为
			return false;
		}
	}

</script>
</head>
<body>
	
	<a href="helloAjax.txt">HelloAjax</a>
	
</body>
</html>