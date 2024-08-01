<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<script type="text/javascript" src="scripts/jquery-1.7.2.js"></script>
<script type="text/javascript">

	$(function(){
		$("a").click(function(){
			//使用 load 方法处理 Ajax
			var url = this.href;
			var args = {"time":new Date()};
			$("#content").load(url, args);
			
			return false;
		});
	});

</script>
<body>
	
	<a href="helloAjax.txt">HelloAjax</a>
	<div id="content"></div>
	
</body>
</html>