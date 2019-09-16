window.onload=function(){
	load2();
	gjzSet();
	xklyhySet();
};
function gjzSet(){
	var gjz=document.getElementById("gjz").value;
	var g=gjz.split(" ");
	var gjz1=document.getElementsByName("gjz1");
	for(var i=0;i<g.length-1;i++)
	{
		gjz1[i].value=g[i];
	}
}

function load2()
{
	//设置 后四个关键字只读
	document.getElementById("gjz2").setAttribute("readOnly", true);
	document.getElementById("gjz3").setAttribute("readOnly", true);
	document.getElementById("gjz4").setAttribute("readOnly", true);
	document.getElementById("gjz5").setAttribute("readOnly", true);
	
	//根据通信地址选择所在地域
	var dz=document.getElementById("txdz").value;
	if(dz!="")
	{
		var dy=dz.substring(3,5);
		
		if(dy!="")
		{
			var select=document.getElementById("dy");
    		var options=select.options;
    		
    		for(var i=0;i<options.length;i++)
    		{
    			if(options[i].text.substring(0,2)==dy)
    			{
    				select.options[i].selected = true; 
    				break;
    			}
    		}
		}	
	}
	
}

//提交表单时检查******************************************************************
function check(){
	if (form1.jgmc.value.trim() == "") {
        form1.jgmc.focus();
        layer.msg('机构全称不可为空',{time:1200});
        return false;
    }
	if(form1.szdy.value=="select")
	{
		form1.szdy.focus();
		layer.msg('请选择所在地域',{time:1200});
        
        return false;
	}
    if (form1.txdz.value.trim() == "") {
        form1.txdz.focus();
        layer.msg('通讯地址不能为空',{time:1200});
  
        return false;
    }
    if(!emailcheck())
    {
    	form1.dzxx.focus();
    	layer.msg('电子信箱格式错误',{time:1200});

    	return false;
    }
    if (form1.frdb.value.trim() == "") {
        form1.frdb.focus();
        layer.msg('法人代表不能为空',{time:1200});

        return false;
    }
    // 填写邮政编码后验证
    if(!ybcheck())
    {
    	return false;
    }
    
    if (form1.lxr.value.trim() == "") {
        form1.lxr.focus();
        layer.msg('联系人不能为空',{time:1200});
 
        return false;
    }
    if(!ghcheck())
    {
    	return false;
    }
    if(!sjcheck())
    {
    	form1.sj.focus();
    	layer.msg('手机格式错误',{time:1200});
      
        return false;
    }
    
    //机构属性
    var first=document.getElementsByName("jgsx");
	var jgsx=""; 
	for (var i = 0; i < first.length; i++) { 
        if(first[i].checked == true){
            jgsx=first[i].value;
        }
    }
	if(jgsx==""){
		layer.msg('请选择机构属性',{time:1200});
		return false;
	}
    
    if (form1.jgjj.value.trim() == "") {
        form1.jgjj.focus();
        layer.msg('机构简介不能为空',{time:1200});
     
        return false;
    }
    if (form1.xqmc.value.trim() == "") {
        form1.xqmc.focus();
        layer.msg('技术需求名称不能为空',{time:1200});
      
        return false;
    }
    if(!xqsx())
    {
    	form1.syear.focus();
    	layer.msg('开始年份格式不正确',{time:1200});
        return false;
    } 
    if(!xqsx2())
    {
    	form1.eyear.focus();
    	layer.msg('结束格式不正确',{time:1200});
        return false;
    }
    if (form1.xqgs1.value.trim() == "") {
        form1.xqgs1.focus();
        layer.msg('技术需求概述 主要问题 不能为空',{time:1200});
        
        return false;
    }
    if (form1.xqgs2.value.trim() == "") {
        form1.xqgs2.focus();
        layer.msg('技术需求概述 技术关键 不能为空',{time:1200});
       
        return false;
    }
    if (form1.xqgs3.value.trim() == "") {
        form1.xqgs3.focus();
        layer.msg('技术需求概述 预期目标 不能为空',{time:1200});
      
        return false;
    }
    if(!gjzcheck())
    {
    	return false;
    }
    //获取所有关键字值  空格  隔开
    var gjz1=document.getElementsByName("gjz1");
    var gjz="";
    for(var i=0;i<gjz1.length;i++)
	{
		if(gjz1[i].value.trim()!="")
		{
			gjz+=gjz1[i].value+" ";
		}
	}
    if(gjz=="")
    {
    	layer.msg('至少输入一个关键字',{time:1200});
   
    	return false;
    }
    document.getElementById("gjz").value=gjz;
  
    //资金总额格式验证
	if(!zjzecheck())
	{
		return false;
	}
    
    //技术需求解决方式
    var third=document.getElementsByName("jjfs");
	var jjfs=""; 
	for (var i = 0; i < third.length; i++) { 
        if(third[i].checked == true){
            jjfs=third[i].value;
        }
    }
	if(jjfs==""){
		layer.msg('请选择技术需求解决方式',{time:1200});

		return false;
	}
	
    //科技活动类型
    var fourth=document.getElementsByName("hdlx");
	var hdlx=""; 
	for (var i = 0; i < fourth.length; i++) { 
        if(fourth[i].checked == true){
            hdlx=fourth[i].value;
        }
    }
	if(hdlx==""){
		layer.msg('请选择科技活动类型',{time:1200});

		return false;
	}
	
	//学科分类
	if(fourth[0].checked == true)
	{
		var yiji=document.getElementById("yiji").value;
		if(yiji=="select")
		{
			layer.msg('请选择一级学科',{time:1200});
		
			form1.yiji.focus();
			return false;
		}
		//设置技术应用行业 为空
		document.getElementById("jsyyhy").value="";
		
	}
    
    if(fourth[0].checked == false)
    {
    	var second=document.getElementsByName("xqly1");
    	var xqly=""; 
    	for (var i = 0; i < second.length; i++) { 
            if(second[i].checked == true){
                xqly=xqly+second[i].value+" ";
            }
        }
    	//当其他（注明） 选中时
    	if(second[second.length-1].checked==true)
    	{
    		if(form1.zm.value.trim()=="")
    		{
    			layer.msg('请填写其他技术内容',{time:1200});
    
    			form1.zm.focus();
    			return false;
    		}
    		var kg=/\s/;
    		if(kg.test(form1.zm.value.trim()))
    		{
    			layer.msg('其他技术不可有空格',{time:1200});
    
    			form1.zm.focus();
    			return false;
    		}
    		xqly=xqly+form1.zm.value;
    	}
    	
    	if(xqly==""){
    		layer.msg('请选择需求技术所属领域',{time:1200});

    		return false;
    	}
    	
    	document.getElementById("xqly").value=xqly;
    	
    	var menlei=document.getElementById("menlei").value;
		if(menlei=="select")
		{
			layer.msg('请选择需求技术应用行业 门类',{time:1200});
			
			form1.menlei.focus();
			return false;
		}
    	//需求技术应用行业 
    	//设置学科分类为空
    	document.getElementById("xkfl").value="";
    	
    }
    return true;
}

//需求时限开始 结束年份
function xqsx()
{
	var date=new Date();
	re=/^\d{4}$/;
	result=re.test(form1.syear.value);
	if(!result)
	{
		form1.syear.focus();
		layer.msg('开始年份格式不正确',{time:1200});
		
		return false;
	}
	if(Number(form1.syear.value)<Number(date.getFullYear()))
	{
		form1.syear.focus();
		layer.msg('开始年份格式不正确 ',{time:1200});
		
		return false;
	}
	return true;
}
function xqsx2()
{
	var re=/^\d{4}$/;
	result=re.test(form1.eyear.value);
	if(!result)
	{
		form1.eyear.focus();
		layer.msg('结束年份格式不正确 ',{time:1200});
		return false;
	}
	if(Number(form1.eyear.value)<=Number(form1.syear.value))
	{
		layer.msg('结束年份格式不正确 ',{time:1200});
		form1.eyear.focus();
		return false;
	}
	return true;
}

function emailcheck()
{
	//电子信箱 
	var re=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var result=re.test(form1.dzxx.value);
	if(!result)
	{
		
		layer.msg('电子信箱格式错误 ',{time:1200});
		form1.dzxx.focus();
		return false;
	}
	return true;
}
function ybcheck()
{
	//邮编6位
	re=/^\d{6}$/;
	if(form1.yzbm.value!="")
	{
		result=re.test(form1.yzbm.value);
		if(!result)
		{
			layer.msg('邮编格式错误 ',{time:1200});
			form1.yzbm.focus();
			return false;
		}
	}
	return true;
}
function ghcheck()
{
	//固话 至少11位数字
	var re=/^\d{11,}$/;
	if(form1.gd.value!="")
	{
		result=re.test(form1.gd.value);
		if(!result)
		{
			
			layer.msg('固话格式错误 ',{time:1200});
			form1.gd.focus();
			return false;
		}
	}
	return true;
}

function sjcheck()
{
	//手机号 11位
	re=/^\d{11}$/;
	result=re.test(form1.sj.value);
	if(!result)
	{
		layer.msg('手机格式错误 ',{time:1200});
		form1.sj.focus();
		return false;
	}
	return true;
}
//资金总额验证
function zjzecheck()
{
	if(form1.zjze.value != "")
	{
		//资金 为整数或小数
		re=/^[0-9]+([.]{1}[0-9]+){0,1}$/;
    	result=re.test(form1.zjze.value);
    	if(!result)
    	{
    		layer.msg('资金需求总额格式不正确 ',{time:1200});
    		form1.zjze.focus();
    		return false;
    	}
	}
	return true;
}
//关键字输入验证
function gjzcheck()
{
	//判断关键字内部是否有空格
	var kg=/\s/;
	for(var i=1;i<6;i++)
	{
		var gjz=document.getElementById("gjz"+i).value.trim();
		if(gjz!=""&&kg.test(gjz))
		{
			layer.msg('关键字内部不可以有空格 ',{time:1200});
	
			document.getElementById("gjz"+i).focus();
			return false;
		}
	}
	return true;
}
//关键字 输入框 可读写
function readWrite()
{
	//判断关键字内部是否有空格
	var kg=/\s/;
	
	for(var i=2;i<6;i++)
	{
		var gjz=document.getElementById("gjz"+(i-1)).value.trim();
		if(gjz!=""&&!kg.test(gjz))
		{
			document.getElementById("gjz"+i).readOnly=false;
		}
	}
}

//其他（注明） 点击事件
function selLimit4()
{
	var second=document.getElementsByName("xqly1");
	
	if(second[second.length-1].checked==true)
	{
		document.getElementById("zm").style.display="block";
	}
	else
	{
		document.getElementById("zm").style.display="none";
	}
}

//科技活动类型 选择限制
function selLimit()
{
	var yl=document.getElementsByName("hdlx");
	//选择 基础研究
	if(yl[0].checked==true)
	{
		//隐藏 需求技术所属领域 和 应用行业
		document.getElementById("ly").style.display="none";
		document.getElementById("hy").style.display="none";
		//显示 学科分类
		document.getElementById("xf").style.display="block";
		getYiji();
	}
	else
	{
		document.getElementById("ly").style.display="block";
		document.getElementById("hy").style.display="block";
		document.getElementById("xf").style.display="none";
		getMenlei();
	}
}

//技术需求解决方式  合作意向单位显示与隐藏
function selLimit2()
{
	var hs=document.getElementsByName("jjfs");
	if(hs[0].checked==true)
	{
		document.getElementById("hzyxdw").style.display="none";
	}
	else
	{
		document.getElementById("hzyxdw").style.display="block";
	}
}