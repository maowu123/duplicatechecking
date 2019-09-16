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
				<td width="80%" >
				    <!-- 请输入模糊查询内容：<input type = "text" name = "mohu" onblur="check()"/> -->
				    <div class="layui-form-item">  			
   					 <div class="layui-input-block">
    				  <input type="text" name="mohu" lay-verify="title" autocomplete="off" placeholder="请输入内容" class="layui-input">
    				</div>
  					</div>
				</td>
				<td width="10%" >
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
      <%-- <tr>
       <td> <%=t.getTitle3() %></td>
	   <td> <%=t.getKey1() %></td>
	   <td> <%=t.getContent() %></td>
	   <td> <%=t.getClasss() %></td>
	   
      </tr> --%>
<div style="padding: 20px; background-color: #F2F2F2;">
  <div class="layui-row layui-col-space15">
    <div class="layui-col-md12">
      <div class="layui-card">
        <div class="layui-card-header">标题：<%=t.getTitle3() %></div>
        <div class="layui-card-header">分类：<%=t.getClasss() %></div>
        <div class="layui-card-header">关键词：<%=t.getKey1() %></div>
        <div class="layui-card-body">
         <%=t.getContent() %>
        </div>
      </div>
    </div>
  </div>
</div> 
      <%}
			}%>
    </tbody>
  </table>
<!-- <div style="padding: 20px; background-color: #F2F2F2;">
  <div class="layui-row layui-col-space15">
    <div class="layui-col-md12">
      <div class="layui-card">
        <div class="layui-card-header">标题</div>
        <div class="layui-card-body">
          内容
        </div>
      </div>
    </div>
  </div>
</div>  -->
 
</div>
</div>
</div>
</div>
<script src="../layui/layui.js" charset="utf-8"></script>
<!-- 注意：如果你直接复制所有代码到本地，上述js路径需要改成你本地的 -->
<script>
layui.use(['element', 'layer'], function(){
  var element = layui.element;
  var layer = layui.layer;
  
  //监听折叠
  element.on('collapse(test)', function(data){
    layer.msg('展开状态：'+ data.show);
  });
});
</script>
<script>
layui.use(['form', 'layedit', 'laydate'], function(){
  var form = layui.form
  ,layer = layui.layer
  ,layedit = layui.layedit
  ,laydate = layui.laydate;
  
  //日期
  laydate.render({
    elem: '#date'
  });
  laydate.render({
    elem: '#date1'
  });
  
  //创建一个编辑器
  var editIndex = layedit.build('LAY_demo_editor');
 
  //自定义验证规则
  form.verify({
    title: function(value){
      if(value.length < 5){
        return '标题至少得5个字符啊';
      }
    }
    ,pass: [
      /^[\S]{6,12}$/
      ,'密码必须6到12位，且不能出现空格'
    ]
    ,content: function(value){
      layedit.sync(editIndex);
    }
  });
  
  //监听指定开关
  form.on('switch(switchTest)', function(data){
    layer.msg('开关checked：'+ (this.checked ? 'true' : 'false'), {
      offset: '6px'
    });
    layer.tips('温馨提示：请注意开关状态的文字可以随意定义，而不仅仅是ON|OFF', data.othis)
  });
  
  //监听提交
  form.on('submit(demo1)', function(data){
    layer.alert(JSON.stringify(data.field), {
      title: '最终的提交信息'
    })
    return false;
  });
 
  //表单初始赋值
  form.val('example', {
    "username": "贤心" // "name": "value"
    ,"password": "123456"
    ,"interest": 1
    ,"like[write]": true //复选框选中状态
    ,"close": true //开关状态
    ,"sex": "女"
    ,"desc": "我爱 layui"
  })
  
  
});
</script>
</body>
</html>