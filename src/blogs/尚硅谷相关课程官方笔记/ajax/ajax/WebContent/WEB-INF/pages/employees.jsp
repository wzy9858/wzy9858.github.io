<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="scripts/jquery-1.7.2.js"></script>
<script type="text/javascript" src="scripts/jquery.blockUI.js"></script>

<!--  
1. 获取 #city, 添加 change 响应函数
2. 使 #department 只保留第一个 option 子节点
3. 获取 #city 选择的值, 若该值为 "", 即选择的是 "请选择...", 此时不需要发送 Ajax 请求
4. 若值不为  "", 说明的确是 city 发生了改变. 准备 Ajax 请求
4.1 url: EmployeeServlet?method=listDepartments
4.2 args: locationId, time
5. 返回的是一个 JSON 数组
5.1 若返回的数组中的元素为 0: 提示: "当前城市没有部门"
5.2 若返回的数组中元素不为 0: 遍历, 创建 <option value='departmentId'>departmentName</option>,
并把新创建的 option 节点加为 #department 的子节点.
-->

<script type="text/javascript">
	
	$(function(){
		
		//使用 blockUI
		$(document).ajaxStart(function(){
			$.blockUI({             
				message: $('#loading'),             
				css: {
					top:  ($(window).height() - 400) /2 + 'px',                 
					left: ($(window).width() - 400) /2 + 'px',                 
					width: '400px',
					border: 'none'
				},
				overlayCSS: { backgroundColor: '#fff' } 
			})	
		}).ajaxStop($.unblockUI);
		
		$("#city").change(function(){
			$("#department option:not(:first)").remove();
			var city = $(this).val();
			
			if(city != ""){
				var url = "EmployeeServlet?method=listDepartments";
				var args = {"locationId":city,"time":new Date()};
				
				$.getJSON(url, args, function(data){
					if(data.length == 0){
						alert("当前城市没有部门");
					}else{
						for(var i = 0; i < data.length; i++){
							var deptId = data[i].departmentId;
							var deptName = data[i].departmentName;
							
							$("#department").append("<option value='" + deptId + "'>" + deptName + "</option>")
						}
					}
				});
			}
		});
	})
	
</script>
</head>
<body>
	<img alt="" id="loading" src="images/loading.gif" style="display:none">
	<center>
		<br><br>
		City: 
		
		<select id="city">
			<option value="">请选择...</option>
			<c:forEach items="${locations }" var="location">
				<option value="${location.locationId }">${location.city }</option>
			</c:forEach>
		</select>
		
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		
		Department:
		<select id="department">
			<option value="">请选择...</option>
		</select>
		
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		
		Employee:
		<select id="employee">
			<option value="">请选择...</option>
		</select>
		
		<br><br>
		<table id="empdetails" border="1" cellspacing="0" cellpadding="5" style="display:none">
			<tr>
				<th>Id</th>
				<th>Name</th>
				<th>Email</th>
				<th>Salary</th>
			</tr>
			<tr>
				<td id="id"></td>
				<td id="name"></td>
				<td id="email"></td>
				<td id="salary"></td>
			</tr>
		</table>
		
	</center>
	
</body>
</html>