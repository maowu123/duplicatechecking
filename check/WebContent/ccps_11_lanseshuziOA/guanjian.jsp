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
<title>查询报表</title>
</head>
<body>
<div class = "wrapper">
<div class = "bottom">
	<div class="right">
			<fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">
  			<legend>热门分类</legend>
			</fieldset>
 
<div class="layui-form">
  <table class="layui-table">
    <colgroup>
      <col width="150">
      <col width="150">
      <col width="200">
      <col>
    </colgroup>
		<% 	
			PaquDaoImpl tDao = new PaquDaoImpl();					 
			List<Paqu> ts = tDao.load3();
			System.out.println("成功");
			for(Paqu t:ts){
		%>
	  <tbody>
      <tr>
       <td>
        <div>
    	<button class="layui-btn layui-btn-normal layui-btn-radius" onclick="window.location.href ='fenlei.jsp?button=<%=t.getClasss() %>'"><%=t.getClasss() %></button>
  		</div>
  		<%-- <input type="button" value="不通过" onclick="window.location = '${pageContext.request.contextPath}/Audite?dno=${Application.deviceNo}&sno=${Application.staffNo}&state=3'"/> --%>
  		
  	  </td>
	   
      </tr>
  <%-- <div>
    <button class="layui-btn layui-btn-normal layui-btn-radius"><%=t.getClasss() %></button>
  </div> --%>
      <%}
			%>
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