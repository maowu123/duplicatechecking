window.onload=function(){document.getElementById("uname").focus();};
function check() {
			
                if (form1.uname.value == "") {
                	
                	layer.msg('用户名不能为空',{time:1200});
                	/*layer.open({
                		title:'提示',
                		content:'用户名不能为空',
                		skin: 'layui-layer-lan',
                		closeBtn: 0,
                		btn:['确定'],
                		btn1:function(index){layer.close(index);}});*/
                	form1.uname.focus();
                    return false;
                }
                if (form1.uname.value.length<6) {
                    form1.uname.focus();
                    layer.msg('用户名长度不能低于6位',{time:1200});
                    return false;
                }
                if (form1.pw.value == "") {
                    form1.pw.focus();
                    layer.msg('密码不能为空',{time:1200});
                    return false;
                }
                if (form1.pw.value.length<6) {
                    form1.pw.focus();
                    layer.msg('密码长度不能低于6位',{time:1200});
                    return false;
                }
                if (form1.pw1.value == "") {
                    form1.pw1.focus();
                    layer.msg('确认密码不能为空',{time:1200});
                    return false;
                }
                if (form1.pw1.value != form1.pw.value) {
                    form1.pw1.focus();
                    layer.msg('两次密码不一致',{time:1200});
                  
                    return false;
                }
                if(form1.jgdm.value=="")
                {
                	form1.jgdm.focus();
                	layer.msg('机构代码不可为空',{time:1200});
      
                    return false;
                }
                if(form1.jgmc.value=="")
                {
                	form1.jgmc.focus();
                	layer.msg('机构全称不可为空',{time:1200});
                
                    return false;
                }
                if(form1.txdz.value=="")
                {
                	form1.txdz.focus();
                	layer.msg('通讯地址不可为空',{time:1200});
                 
                    return false;
                }
                if(form1.dzxx.value=="")
                {
                	form1.dzxx.focus();
                	layer.msg('电子信箱不可为空',{time:1200});
             
                    return false;
                }
                if(!emailcheck())
    			{
    				form1.dzxx.focus();
    				layer.msg('电子信箱格式错误',{time:1200});
    	
    				return false;
    			}
                if(form1.frdb.value=="")
                {
                	form1.frdb.focus();
                	layer.msg('法人代表不可为空',{time:1200});
                  
                    return false;
                }
                if(!ybcheck())
                {
                	return false;
                }
                if(form1.lxr.value=="")
                {
                	form1.lxr.focus();
                	layer.msg('联系人不可为空',{time:1200});
          
                    return false;
                }
                if(!ghcheck())
                {
                	return false;
                }
                if(form1.sj.value=="")
                {
                	form1.sj.focus();
                	layer.msg('手机不可为空',{time:1200});
              
                    return false;
                }
                if(!sjcheck())
    			{
    				form1.sj.focus();
    				layer.msg('手机格式错误',{time:1200});
    		
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
				form1.dzxx.focus();
				layer.msg('电子信箱格式错误',{time:1200});
				return false;
			}
			return true;
		}
		function ghcheck()
		{
			//固话 至少11位数字
			re=/^\d{11,}$/;
			if(form1.gh.value!="")
			{
				result=re.test(form1.gh.value);
				if(!result)
				{
					form1.gh.focus();
					layer.msg('固话格式错误',{time:1200});
				
					return false;
				}
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
					layer.msg('邮编格式错误',{time:1200});
					form1.yzbm.focus();
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
				form1.sj.focus();
				layer.msg('手机格式错误',{time:1200});
		
				return false;
			}
			return true;
		}