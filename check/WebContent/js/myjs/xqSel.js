//var XKFL=document.getElementById("xkfl").value;  全局变量不管用

//学科分类 需求技术所属领域 应用行业 设置初始化
function xklyhySet(){
	var kl=document.getElementById("kl").value;
	if(kl=="基础研究")//基础研究 选中时
	{
		//隐藏 需求技术所属领域 和 应用行业
		document.getElementById("ly").style.display="none";
		document.getElementById("hy").style.display="none";
		setYiji();
		setErji();
		setSanji();
	}
	else
	{
		//隐藏 学科分类
		document.getElementById("xf").style.display="none";
		setLy();
		setMenlei();
		setDalei();
		setZhonglei();
	}
	/*
	//设置一级学科
	var select1 = document.getElementById("yiji");
	alert(select1.options.length);//为什么是0 ？
	for(var i=0; i<select1.options.length; i++){  
	    if(select1.options[i].value.substring(0,3) == xkfl.substring(0,3)){  
	        select1.options[i].selected = true;  
	        break;  
	    }  
	}*/  
}

//学科分类*************************************************************************
//一级学科
function setYiji() {
  var xmlhttp;
  var yiji;
  if (window.XMLHttpRequest) 
  {
      xmlhttp = new XMLHttpRequest();
  } 
  else 
  {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  //传值到servlet

  xmlhttp.open("post", "../XuekeYi", true);
  xmlhttp.send();
 
  //接收servlet值
  var v0,v1,v2,v3;//接收传回的值v0 分割为代码和名称v1  再次分割v1[0]为代码v2 v1[1]名称v3
  xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
      {
          v0=xmlhttp.responseText;
          v1=v0.split("#");
          v2=v1[0].split(" ");
          v3=v1[1].split(" ");

          var select = document.getElementById("yiji");
          select.options.add(new Option("请选择","select"));
          for(var i=0;i<v2.length-1;i++)
          {
          	select.options.add(new Option(v3[i],v2[i]+" "+v3[i]));
          }
          //设置下拉列表 默认值
          var xkflval=document.getElementById("xkfl").value;
          for(var i=0; i<select.options.length; i++){  
      	    if(select.options[i].value.substring(0,3) == xkflval.substring(0,3)){  
      	        select.options[i].selected = true;  
      	        break;  
      	    }  
      	}
      }
  }
}

//二级学科
function setErji() {
  var xmlhttp;
  if (window.XMLHttpRequest) 
  {
      xmlhttp = new XMLHttpRequest();
  } 
  else 
  {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  //获得一级学科值
  var xkflval=document.getElementById("xkfl").value;
  var code = xkflval.substring(0,7);
  
  xmlhttp.open("post", "../XuekeEr?yiji="+code, true);
  xmlhttp.send();
  
  //接收servlet值
  var v0,v1,v2,v3;//接收传回的值v0 分割为代码和名称v1  再次分割v1[0]为代码v2 v1[1]名称v3
  xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
      {
          v0=xmlhttp.responseText;
          v1=v0.split("#");
          v2=v1[0].split(" ");
          v3=v1[1].split(" ");

          var select = document.getElementById("erji");
          //清空原有内容
          document.getElementById("erji").innerHTML = "";
          document.getElementById("sanji").innerHTML = "";
          
          select.options.add(new Option("请选择","select"));
          for(var i=0;i<v2.length-1;i++)
          {
          	select.options.add(new Option(v3[i],v2[i]+" "+v3[i]));
          }
          for(var i=0; i<select.options.length; i++){  
        	    if(select.options[i].value.substring(0,5) == xkflval.substring(0,5)){  
        	        select.options[i].selected = true;  
        	        break;  
        	    }  
        	}
      }
  }
}

//三级学科
function setSanji() {
  var xmlhttp;
  if (window.XMLHttpRequest) 
  {
      xmlhttp = new XMLHttpRequest();
  } 
  else 
  {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  var xkflval=document.getElementById("xkfl").value;
  var code = xkflval.substring(0,7);
  
  xmlhttp.open("post", "../XuekeSan?erji="+code, true);
  xmlhttp.send();
  
  //接收servlet值
  var v0,v1,v2,v3;//接收传回的值v0 分割为代码和名称v1  再次分割v1[0]为代码v2 v1[1]名称v3
  xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
      {
          v0=xmlhttp.responseText;
          v1=v0.split("#");
          v2=v1[0].split(" ");
          v3=v1[1].split(" ");

          var select = document.getElementById("sanji");
          //清空option原有内容
          document.getElementById("sanji").innerHTML = "";
          //添加 option选项
          select.options.add(new Option("请选择","select"));
          for(var i=0;i<v2.length-1;i++)
          {
          	select.options.add(new Option(v3[i],v2[i]+" "+v3[i]));
          }
          for(var i=0; i<select.options.length; i++){  
      	    if(select.options[i].value.substring(0,7) == xkflval.substring(0,7)){  
      	        select.options[i].selected = true;  
      	        break;  
      	    }  
      	}
      }
  }
  
}

//国民经济行业分类*********************************************************************
//门类
function setMenlei(){
	 
	 var xmlhttp;
	    if (window.XMLHttpRequest) 
	    {
	        xmlhttp = new XMLHttpRequest();
	    } 
	    else 
	    {
	        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	    }
	    //传值到servlet
	    xmlhttp.open("post", "../HyMenlei", true);
	    xmlhttp.send();
	    
	    //接收servlet值
	    var v0,v1,v2,v3;//接收传回的值v0 分割为代码和名称v1  再次分割v1[0]为代码v2 v1[1]名称v3
	    xmlhttp.onreadystatechange = function () {
	        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
	        {
	            v0=xmlhttp.responseText;
	            v1=v0.split("#");
	            v2=v1[0].split(" ");
	            v3=v1[1].split(" ");
	            
	            var select = document.getElementById("menlei");
	            select.options.add(new Option("请选择","select"));
	            for(var i=0;i<v2.length-1;i++)
	            {
	            	select.options.add(new Option(v3[i],v2[i]+" "+v3[i]));
	            }
	            
	            var hyval=document.getElementById("jsyyhy").value;
	           
	            for(var i=0; i<select.options.length; i++){  
	        	    if(select.options[i].value.substring(0,1) == hyval.substring(0,1)){  
	        	        select.options[i].selected = true;  
	        	        break;  
	        	    }  
	        	}
	        }
	    }
}
//大类
function setDalei() {
  var xmlhttp;
  if (window.XMLHttpRequest) 
  {
      xmlhttp = new XMLHttpRequest();
  } 
  else 
  {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  //获得门类值
  var hyval=document.getElementById("jsyyhy").value;
  var code=hyval.substring(0,5);
  
  xmlhttp.open("post", "../HyDalei?menlei="+code, true);
  xmlhttp.send();
  
  //接收servlet值
  var v0,v1,v2,v3;//接收传回的值v0 分割为代码和名称v1  再次分割v1[0]为代码v2 v1[1]名称v3
  xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
      {
          v0=xmlhttp.responseText;
          v1=v0.split("#");
          v2=v1[0].split(" ");
          v3=v1[1].split(" ");

          var select = document.getElementById("dalei");
          //清空原有内容
          document.getElementById("dalei").innerHTML = "";
          document.getElementById("zhonglei").innerHTML = "";
          
          select.options.add(new Option("请选择","select"));
          for(var i=0;i<v2.length-1;i++)
          {
          	select.options.add(new Option(v3[i],v2[i]+" "+v3[i]));
          }
          
          for(var i=0; i<select.options.length; i++){  
      	    if(select.options[i].value.substring(0,3) == hyval.substring(0,3)){  
      	        select.options[i].selected = true;  
      	        break;  
      	    }  
      	}
      }
  }
}
//中类
function setZhonglei() {
  var xmlhttp;
  if (window.XMLHttpRequest) 
  {
      xmlhttp = new XMLHttpRequest();
  } 
  else 
  {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  var hyval=document.getElementById("jsyyhy").value;
  var code=hyval.substring(0,5);
  
  xmlhttp.open("post", "../HyZhonglei?dalei="+code, true);
  xmlhttp.send();
  
  //接收servlet值
  var v0,v1,v2,v3;//接收传回的值v0 分割为代码和名称v1  再次分割v1[0]为代码v2 v1[1]名称v3
  xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
      {
          v0=xmlhttp.responseText;
          v1=v0.split("#");
          v2=v1[0].split(" ");
          v3=v1[1].split(" ");

          var select = document.getElementById("zhonglei");
          //清空option原有内容
          document.getElementById("zhonglei").innerHTML = "";
          //添加 option选项
          select.options.add(new Option("请选择","select"));
          for(var i=0;i<v2.length-1;i++)
          {
          	select.options.add(new Option(v3[i],v2[i]+" "+v3[i]));
          }
          
          for(var i=0; i<select.options.length; i++){  
      	    if(select.options[i].value.substring(0,5) == hyval.substring(0,5)){  
      	        select.options[i].selected = true;  
      	        break;  
      	    }  
      	}
      }
  }
}

//需求技术所属领域*********************************************************************
function setLy(){
	var xqly=document.getElementById("xqly").value;
	var xl=xqly.split(" ");
	var ly=document.getElementsByName("xqly1");
	//设置 复选框选中
	for (var i = 0; i < ly.length; i++) {
		for(var j=0;j<xl.length;j++)
		{
			if(ly[i].value==xl[j])
			{
				ly[i].checked=true;
			}
		}
    }
	
	if(xl.length>1)
	{
		
		if(xl[xl.length-2]=="其他（注明）")//当 其他（注明） 选中时 
		{
			document.getElementById("zm").value=xl[xl.length-1];
		}
		else
		{
			document.getElementById("zm").style.display="none";
		}
	}
}
