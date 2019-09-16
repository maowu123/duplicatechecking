<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%--     <%@page import="com.jaovo.msg.model.Info"%> --%>
<%@page import="java.util.List"%>
<%-- <%@page import="my.webmagic.Test_Baidu"%>
<%@page import="com.jaovo.msg.Util.WordDaoImpl"%> --%>
<!DOCTYPE HTML>
<html>
	<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Paper &mdash; Free Website Template, Free HTML5 Template by freehtml5.co</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Free HTML5 Website Template by freehtml5.co" />
	<meta name="keywords" content="free website templates, free html5, free template, free bootstrap, free website template, html5, css3, mobile first, responsive" />
	

	

  	<!-- Facebook and Twitter integration -->
	<meta property="og:title" content=""/>
	<meta property="og:image" content=""/>
	<meta property="og:url" content=""/>
	<meta property="og:site_name" content=""/>
	<meta property="og:description" content=""/>
	<meta name="twitter:title" content="" />
	<meta name="twitter:image" content="" />
	<meta name="twitter:url" content="" />
	<meta name="twitter:card" content="" />

	<link href="https://fonts.googleapis.com/css?family=Josefin+Slab:400,600,700" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Sacramento" rel="stylesheet">
	
	<!-- Animate.css -->
	<link rel="stylesheet" href="css/animate.css">
	<!-- Icomoon Icon Fonts-->
	<link rel="stylesheet" href="css/icomoon.css">
	<!-- Bootstrap  -->
	<link rel="stylesheet" href="css/bootstrap1.css">

	<!-- Magnific Popup -->
	<link rel="stylesheet" href="css/magnific-popup.css">

	<!-- Flexslider  -->
	<link rel="stylesheet" href="css/flexslider.css">

	<!-- Theme style  -->
	<link rel="stylesheet" href="css/style.css">

	<!-- Modernizr JS -->
	<script src="js/modernizr-2.6.2.min.js"></script>
	<!-- FOR IE9 below -->
	<!--[if lt IE 9]>
	<script src="js/respond.min.js"></script>
	<![endif]-->

	</head>
	<%-- <%

WordDaoImpl namenumImp=new WordDaoImpl();
String name="";
if(request.getParameter("name")!=null)
{
	session.setAttribute("name",request.getParameter("name"));
	name=request.getParameter("name");
}
else
{
	name=(String)session.getAttribute("name");
}
List<Info> rationship=Test_Baidu.getWuMaoW(name);

%> --%>
	<body>
		
	<div class="fh5co-loader"></div>
	
	<div id="page">
	<nav class="fh5co-nav" role="navigation">
		<div class="container-fluid">
			<div class="row">
				<div class="top-menu">
					<div class="container">
						<div class="row">
							<div class="col-sm-7 text-left menu-1">
								<ul>
									<li><a href="home.jsp">热词搜索</a></li>
									<li class="active"><a href="#">热词解释</a></li>									
																
								</ul>
							</div>							
						</div>
					</div>
				</div>
			</div>		
		</div>
	</nav>
	<!-- <aside id="sidebar">
		<div class="col-md-12">		
			 <div class="side animate-box">
				<div class="col-md-12 col-md-offset-0 text-center fh5co-heading fh5co-heading-sidebar">
					<h2><span>Latest Posts</span></h2>
				</div>
			</div>
		</div>
	</aside> -->
	<!-- <div id="fh5co-blog-popular">
		<div class="container">
			<div class="row animate-box">
				<div class="col-md-12 col-md-offset-0 text-center fh5co-heading">
					<h2><span>Popular Post</span></h2>
				</div>
			</div>
		</div>
	</div> -->
	<div id="fh5co-content">
		<div class="container">
			<div class="row">
				<div class="col-md-12 col-padded-right">
					<div class="row">
						<div class="col-md-12">
							<div class="fh5co-blog animate-box" style="width:100%">
								<div class="title title-pin text-center">
									<!-- <span class="posted-on">Nov. 15th 2016</span> -->
									<h3><a href="#"><%-- <%=name %> --%></a></h3>
									<!-- <span class="category">Lifestyle</span> -->
								</div>
								<div class="blog-text text-center">
									<p><%-- <%=rationship.get(0).getText() %> --%></p>
									<!-- <ul class="fh5co-social-icons">
										<li>Share:</li>
										<li><a href="#"><i class="icon-twitter-with-circle"></i></a></li>
										<li><a href="#"><i class="icon-facebook-with-circle"></i></a></li>
										<li><a href="#"><i class="icon-linkedin-with-circle"></i></a></li>
										<li><a href="#"><i class="icon-dribbble-with-circle"></i></a></li>
									</ul> -->
								</div> 
							</div>
						</div>					
					</div>
				</div>
				
				<aside id="sidebar">
					<div class="col-md-12">		
						
						<div class="side animate-box">
							<div class="col-md-12 col-md-offset-0 text-center fh5co-heading fh5co-heading-sidebar">
								<h2><span>参考资料</span></h2>
							</div>
							<ul class="category">
						
									<%-- 	<%
										
										
										for(Info info:rationship){ 
										if(info.getTitle()!=null){
										%>
										<li><a href="<%=info.getT_href() %>"><i class="icon-check"></i><%=info.getTitle() %></a></li>
									<%}
										}
									%> --%>
								
					
							</ul>
						</div>						
					</div>
				</aside>

			</div>
		</div>
	</div>
	</div>

	<div class="gototop js-top">
		<a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
	</div>
	
	<!-- jQuery -->
	<script src="js/jquery.min.js"></script>
	<!-- jQuery Easing -->
	<script src="js/jquery.easing.1.3.js"></script>
	<!-- Bootstrap -->
	<script src="js/bootstrap.min.js"></script>
	<!-- Waypoints -->
	<script src="js/jquery.waypoints.min.js"></script>
	<!-- Flexslider -->
	<script src="js/jquery.flexslider-min.js"></script>
	<!-- Magnific Popup -->
	<script src="js/jquery.magnific-popup.min.js"></script>
	<script src="js/magnific-popup-options.js"></script>
	<!-- Main -->
	<script src="js/main.js"></script>

	</body>
</html>

