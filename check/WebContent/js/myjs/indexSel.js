
//学科分类*************************************************************************
//一级学科
function getYiji() {
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
        }
    }
    
}
//二级学科
function getErji() {
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
    var yiji = document.getElementById("yiji").value;
    xmlhttp.open("post", "../XuekeEr?yiji="+yiji, true);
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
        }
    }
    
    //label显示一级学科代码
    if(yiji!="select"&&yiji!=""&&yiji!=null)
    {
    	document.getElementById("xkdm").innerHTML=yiji.substring(0,7);
    	document.getElementById("xkfl").value=yiji;
    }
}
//三级学科
function getSanji() {
    var xmlhttp;
    if (window.XMLHttpRequest) 
    {
        xmlhttp = new XMLHttpRequest();
    } 
    else 
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    var erji = document.getElementById("erji").value;
    xmlhttp.open("post", "../XuekeSan?erji="+erji, true);
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
        }
    }
    
    //label显示二级学科代码
    if(erji!="select"&&erji!=""&&erji!=null)
    {
    	document.getElementById("xkdm").innerHTML=erji.substring(0,7);
    	document.getElementById("xkfl").value=erji;
    }
}

function setXkDm(){
	
	var sanji = document.getElementById("sanji").value;
    //label显示三级学科代码
	if(sanji!="select"&&sanji!=""&&sanji!=null)
    {
    	document.getElementById("xkdm").innerHTML=sanji.substring(0,7);
    	document.getElementById("xkfl").value=sanji;
    }
}

//国民经济行业分类*********************************************************************
//门类
function getMenlei(){
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
	   // yiji = document.getElementById("menlei").value;
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
	        }
	    }
}
//大类
function getDalei() {
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
    var menlei = document.getElementById("menlei").value;
    xmlhttp.open("post", "../HyDalei?menlei="+menlei, true);
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
        }
    }
    
    //label显示门类代码
    if(menlei!="select"&&menlei!=""&&menlei!=null)
    {
    	document.getElementById("hydm").innerHTML=menlei.substring(0,5);
    	document.getElementById("jsyyhy").value=menlei;
    }
}
//中类
function getZhonglei() {
    var xmlhttp;
    if (window.XMLHttpRequest) 
    {
        xmlhttp = new XMLHttpRequest();
    } 
    else 
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    var dalei = document.getElementById("dalei").value;
    xmlhttp.open("post", "../HyZhonglei?dalei="+dalei, true);
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
        }
    }
    
    //label显示大类代码
    if(dalei!="select"&&dalei!=""&&dalei!=null)
    {
    	document.getElementById("hydm").innerHTML=dalei.substring(0,5);
    	document.getElementById("jsyyhy").value=dalei;
    }
}
function setHyDm(){
	
	var zhonglei = document.getElementById("zhonglei").value;
    //label显示中类代码
	if(zhonglei!="select"&&zhonglei!=""&&zhonglei!=null)
    {
    	document.getElementById("hydm").innerHTML=zhonglei.substring(0,5);
    	document.getElementById("jsyyhy").value=zhonglei;
    }
}

