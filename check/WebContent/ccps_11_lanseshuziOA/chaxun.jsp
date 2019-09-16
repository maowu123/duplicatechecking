<%@page import="com.paqu.Paqu"%>
<%@page import="com.paqu.IPaquDao"%>
<%@page import="com.paqu.PaquDaoImpl"%>
<%@page import="java.util.List"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src = "../js/jquery-3.3.1.js"></script>
  <meta name="renderer" content="webkit">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <link rel="stylesheet" href="../layui/css/layui.css"  media="all">
  <script src="../layui/layui.js" charset="utf-8"></script>
<script type="text/javascript">
	window.onload = function(){
		$(function() {
			$(".uitem").hide();
			$(".litem>a").click(function(){
				$(this).next().toggle();
			});
		});

	}
</script>
<script type="text/javascript">
	
	$(window.ready = function(){
		var li = $("#baobiao li");
		for(var i=0;i<li.length;i++){
             if(i%2===0){
                 //jquery对象，转换成了js对象。
                 li[i].style.backgroundColor = "#ccc";
             }else{
            	 li.get(i).style.backgroundColor = "#ddd";
             }
         }
	});
</script>
<!-- <script type="text/javascript">  
function check()  
{  
  if(form1.ymingcheng.value=="")  
    {alert("请输入内容！");  
     return false;}  
 if(form1.zname.value=="")  
 {alert("请输入内容！")  
 return false;  
 }  
   
  if(form1.youbian.value=="")  
 {alert("请输入内容！")  
 return false;  
 }  
  
}  
</script>   -->
<title>查询报表</title>
<style type="text/css">
body {
	/* background-image: url(../image/loginbg.jpg); */
	background-color: #D3D3D3;
}
*{
			margin: 0;
			padding: 0;
		}
		.wrapper{
			position: relative;
			width: 100%;
			background-color: #ccc;
		}
		.wrapper .head{
			position: absolute;
			width: 100%;
			background-color: #ccc;
		}
		.wrapper .head img{
			width: 100%;
		}
		.wrapper .bottom{
			position: absolute;
			margin-top: 0%;
			width: 100%;
			height: 800px;
			background-color: white;
		}
		.wrapper .bottom .right{
			position: absolute;
			left: 0%;
			width: 100%;
			height: 100%;
			background-color: white;
		}
		.wrapper .bottom .right form{
			margin-top:20px;
		}
		.wrapper .bottom .right ul{
			list-style:none;
			position:absolute;
			top:60px;
		}
		.wrapper .bottom .right ul li{
			margin:auto;
		}
		.wrapper .bottom .right ul li span{
			display:inline-block;
			width:300px;    /* 改条宽度 */
			text-align:center;
		}
</style>
</head>
<body>
<div class = "wrapper">
<div class = "bottom">
	<div class="right">
			<form action="#" name="form1">
				<table border="0">
				<tr>
				<td width="40%" >
				    请输入模糊查询内容：<input type = "text" name = "mohu" onblur="check()"/>
				</td>
				<!-- <td width="20%" >
					平台主任姓名：<input type = "text" name = "zname" onblur="check()"/>
				</td>
				<td width="20%" >
					邮编：<input type = "text" name = "youbian" onblur="check()"/>
				</td>
				<td width="10%" >
					<input type="submit" value="精确查询" class="layui-btn" name="submit" />
				</td> -->
				<td width="10%" >
				<input type="submit" value="模糊查询" class="layui-btn" name="submit" />
				</td>
				</tr>
			<!-- <ul id = "baobiao"> -->
				<!-- <li><span>依托单位名称</span><span>平台主任姓名</span><span>网址名称</span><span>网站地址</span><span>邮编</span></li> -->
				<!-- <tr>
					<td>依托单位名称   </td>
					<td>平台主任姓名   </td>
					<td>平台网站名称 </td>
					<td>平台网站地址</td>
					<td>邮编 </td>
				</tr> -->
				</table>
			</form>
			<fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">
  			<legend>查询结果</legend>
			</fieldset>
 
<div class="layui-form">
  <table class="layui-table">
    <colgroup>
      <col width="150">
      <col width="150">
      <col width="200">
      <col>
    </colgroup>
    <thead>
      <tr>
        <th>名称</th>
        <th>关键词</th>
        <th>内容</th>
        <th>分类</th>
      </tr> 
    </thead>
   	<% 				String mohu = request.getParameter("mohu");
					/* String zname = request.getParameter("zname");
					String youbian = request.getParameter("youbian"); */
					String submit= request.getParameter("submit");
					System.out.println(submit);
					PaquDaoImpl tDao = new PaquDaoImpl();
					 if("模糊查询".equals(submit)){
			
			List<Paqu> ts = tDao.loadb(mohu);
			System.out.println("成功模糊查询");
			for(Paqu t:ts){
		%>
		 <tbody>
      <tr>
       <td> <%=t.getTitle3() %></td>
	   <td> <%=t.getKey1() %></td>
	   <td> <%=t.getContent() %></td>
	   <td> <%=t.getClasss() %></td>
	   
      </tr>
      <%}
			}%>
    </tbody>
  </table>
</div>
</div>
</div>
</div>
<%-- <div style="margin-top:20px;">
    <jsp:include page="chaxun2.jsp" flush="true"></jsp:include>
    </div> --%>
</body>
</html>