<%-- <%@page import="com.jaovo.msg.model.Namenum"%>
<%@page import="com.jaovo.msg.Util.WordDaoImpl"%> --%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
	<link rel="stylesheet" href="css/bootstrap.css">

	<!-- Magnific Popup -->
	<link rel="stylesheet" href="css/magnific-popup.css">

	<!-- Flexslider  -->
	<link rel="stylesheet" href="css/flexslider.css">

	<!-- Theme style  -->
	<link rel="stylesheet" href="css/style.css">

	<!-- Modernizr JS -->
	<script src="js/modernizr-2.6.2.min.js"></script>
	<script src='https://cdn.bootcss.com/echarts/3.7.0/echarts.simple.js'></script>
   <script src="../echarts-all.js"></script>
    
	<!-- FOR IE9 below -->
	<!--[if lt IE 9]>
	<script src="js/respond.min.js"></script>
	<![endif]-->
 <style>
@import url("http://fonts.googleapis.com/css?family=Open+Sans:400,600,700");
@import url("http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.css");
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  font: 14px/1 'Open Sans', sans-serif;
  color: #555;
  background: #eee;
}

h1 {
  padding: 50px 0;
  font-weight: 400;
  text-align: center;
}

p {
  margin: 0 0 20px;
  line-height: 1.5;
}

main {
  min-width: 1500px;
  max-width: 1500px;
  padding: 50px;
  margin: 0 auto;
  background: #fff;
}

section {
  display: none;
  padding: 20px 0 0;
  border-top: 1px solid #ddd;
}

input {
  display: none;
}

label {
  display: inline-block;
  margin: 0 0 -1px;
  padding: 15px 25px;
  font-weight: 600;
  text-align: center;
  color: #bbb;
  border: 1px solid transparent;
}

label:before {
  font-family: fontawesome;
  font-weight: normal;
  margin-right: 10px;
}

label[for*='1']:before {
  content: '\f1cb';
}

label[for*='2']:before {
  content: '\f17d';
}

label[for*='3']:before {
  content: '\f16b';
}

label[for*='4']:before {
  content: '\f1a9';
}

label:hover {
  color: #888;
  cursor: pointer;
}

input:checked + label {
  color: #555;
  border: 1px solid #ddd;
  border-top: 2px solid orange;
  border-bottom: 1px solid #fff;
}

#tab1:checked ~ #content1,
#tab2:checked ~ #content2,
#tab3:checked ~ #content3,
#tab4:checked ~ #content4 {
  display: block;
}

@media screen and (max-width: 650px) {
  label {
    font-size: 0;
  }

  label:before {
    margin: 0;
    font-size: 18px;
  }
}
@media screen and (max-width: 400px) {
  label {
    padding: 15px;
  }
}

</style>

    <script src="js/prefixfree.min.js"></script>
	</head>
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
									<li class="active"><a href="#">热词搜索</a></li>
									<li><a href="text.jsp">热词解释</a></li>
									
								</ul>
							</div>
							<div class="col-sm-5">
								<ul class="fh5co-social-icons">
									<li><a href="#"><i class="icon-twitter-with-circle"></i></a></li>
									<li><a href="#"><i class="icon-facebook-with-circle"></i></a></li>
									<li><a href="#"><i class="icon-linkedin-with-circle"></i></a></li>
									<li><a href="#"><i class="icon-dribbble-with-circle"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br><br>
	<div id="fh5co-content" class="fh5co-no-pd-top">
		<div class="container">			
			<div class="row">
				<div class="col-md-6 col-md-offset-3">
					<div class="fh5co-staff">
						<form action="text.jsp">
						<div class="form-group row">
							<div class="col-md-6 field">
								 <label for="firstname">请输入</label>
								<input type="text" name="name" id="name" style="float: left;" class="form-control1">
								
							</div>	
							<div class="col-md-3 field">
								<br><br><br>
								<input type="submit" id="submit" class="btn btn-primary" value="搜索">
							</div>	 				
						</div>				
					</form>
					</div>
				</div>
			</div>
		</div>
	</div>
		</div>
	</nav>
	<% %>
	<div style="text-align:center;clear:both">
	<script src="/gg_bd_ad_720x90.js" type="text/javascript"></script>
	<script src="/follow.js" type="text/javascript"></script>
	</div>
	<main>
	  <button onclick="window.location.href='./download.jsp'" class="btn btn-primary" style="margin-left:1300px" value="下载">下载</button>
  <center>

  <input id="tab1" type="radio" name="tabs" checked>
  <label for="tab1">人工智能</label>

  <input id="tab2" type="radio" name="tabs">
  <label for="tab2">大数据</label>

  <input id="tab3" type="radio" name="tabs">
  <label for="tab3">云计算</label>
  
  <section id="content1">
   <div id="fh5co-content" class="fh5co-no-pd-top">
		<div class="container">			
			<div class="row">
				<aside id="sidebar">
					<div class="col-md-3">							
						<div class="side animate-box">
						<br><br>
							<div class="col-md-12 col-md-offset-0 text-center fh5co-heading fh5co-heading-sidebar">
								<h2><span>人工智能</span></h2>
							</div>
							<ul class="category">
								<li>111</li>
								<li>222</li>
							</ul>
						</div>						
					</div>
				</aside>
				<div class="col-md-6 field">
						 <div id="main" style="height:700px;width:1000px"></div>
				</div>						
			</div>									
		</div>
	</div>
  </section>

  <section id="content2">
    <p>
    <div id="fh5co-content" class="fh5co-no-pd-top">
		<div class="container">			
			<div class="row">
				<aside id="sidebar">
					<div class="col-md-3">							
						<div class="side animate-box">
						<br><br>
							<div class="col-md-12 col-md-offset-0 text-center fh5co-heading fh5co-heading-sidebar">
								<h2><span>大数据</span></h2>
							</div>
							<ul class="category">
								<li>111</li>
								<li>222</li>
							</ul>
						</div>						
					</div>
				</aside>
				<div class="col-md-6 field">
						 <div id="main2" style="height:700px;width: 1000px"></div>
				</div>						
			</div>									
		</div>
	</div>
  </section>

  <section id="content3">
    <div id="fh5co-content" class="fh5co-no-pd-top">
		<div class="container">			
			<div class="row">
				<aside id="sidebar">
					<div class="col-md-3">							
						<div class="side animate-box">
						<br><br>
							<div class="col-md-12 col-md-offset-0 text-center fh5co-heading fh5co-heading-sidebar">
								<h2><span>云计算</span></h2>
							</div>
							<ul class="category">
								<li>111</li>
								<li>222</li>
							</ul>
						</div>						
					</div>
				</aside>
				<div class="col-md-6 field">
						 <div id="main3" style="height:700px;width: 1000px"></div>
				</div>						
			</div>									
		</div>
	</div>
  </section>
  </center>
</main>
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
 <script type="text/javascript">
  function createRandomItemStyle() {
	    return {
	        normal: {
	            color: 'rgb(' + [
	                Math.round(Math.random() * 160),
	                Math.round(Math.random() * 160),
	                Math.round(Math.random() * 160)
	            ].join(',') + ')'
	        }
	    };
	}

        // 基于准备好的dom，初始化echarts图表
        var chart = echarts.init(document.getElementById('main')); 
        var option = {
        	    title: {
        	        text: '近期AI热词',
        	        link: ''
        	    },
        	    tooltip: {
        	        show: true
        	    },
        	    series: [{
        	        name: '近期AI热词',
        	        type: 'wordCloud',
        	        size: ['100%', '100%'],
        	        gridSize: 1,
                    sizeRange: [12, 50],
                    rotationRange: [-90, 90],
        	        shape: 'pentagon',
        	        width: 600,
                    height: 400,
        	        drawOutOfBound: true,
        	        emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    },
                   
        	        data: [      			
        	             <%--   <%    
        	               
        	               
        				
        				for(int i=0;i<lists.size();i++){
        					
        				%> --%>
        				 {
        					 name: '1',
        	                value: 11,
        	                itemStyle: createRandomItemStyle()        	               
        	            },
        	        	<%-- <%
        				}
        	        	%> --%>

        	        ]
        	    }]
        	};
       
        // 为echarts对象加载数据 
        chart.setOption(option); 
        window.onresize = chart.resize;
        
        var chart2 = echarts.init(document.getElementById('main2')); 
        var option2 = {
        	    title: {
        	        text: '近期大数据热词',
        	        link: ''
        	    },
        	    tooltip: {
        	        show: true
        	    },
        	    series: [{
        	        name: '近期大数据热词',
        	        type: 'wordCloud',
        	        size: ['100%', '100%'],
        	        gridSize: 1,
                    sizeRange: [12, 50],
                    rotationRange: [-90, 90],
        	        shape: 'pentagon',
        	        width: 600,
                    height: 400,
        	        drawOutOfBound: true,
        	        emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    },
                   
        	        data: [      			
        	             <%--   <%    
        	               
        	                   				
           			
        				
        				for(int i=0;i<lists2.size();i++){
        					
        				%> --%>
        				 {
        					 name: '2',
        	                value: 22,
        	                itemStyle: createRandomItemStyle()        	               
        	            },
        	        	<%-- <%
        				}
        	        	%> --%>

        	        ]
        	    }]
        	};
       
        // 为echarts对象加载数据 
        chart2.setOption(option2); 
        window.onresize = chart2.resize;
        
        var chart3 = echarts.init(document.getElementById('main3')); 
        var option3= {
        	    title: {
        	        text: '近期云计算热词',
        	        link: ''
        	    },
        	    tooltip: {
        	        show: true
        	    },
        	    series: [{
        	        name: '近期云计算热词',
        	        type: 'wordCloud',
        	        size: ['100%', '100%'],
        	        gridSize: 1,
                    sizeRange: [12, 50],
                    rotationRange: [-90, 90],
        	        shape: 'pentagon',
        	        width: 600,
                    height: 400,
        	        drawOutOfBound: true,
        	        emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    },
                   
        	        data: [      			
        	            <%--    <%    
        	               
        	              		
           			
        				
        				for(int i=0;i<lists3.size();i++){
        					
        				%> --%>
        				 {
        					 name: '3',
        	                value: 33,
        	                itemStyle: createRandomItemStyle()        	               
        	            },
        	        	<%-- <%
        				}
        	        	%> --%>

        	        ]
        	    }]
        	};
       
        // 为echarts对象加载数据 
        chart3.setOption(option3); 
        window.onresize = chart3.resize;
        
        chart.on("click", function (param){  
      	  var name=param.name;
      	window.location.href="text.jsp?name="+name;
      });
        chart2.on("click", function (param){  
        	  var name=param.name;
        	window.location.href="text.jsp?name="+name;
        });
        chart3.on("click", function (param){  
        	  var name=param.name;
        	window.location.href="text.jsp?name="+name;
        });
    </script>
	</body>
</html>

