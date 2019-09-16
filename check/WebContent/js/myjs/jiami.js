function jiamimd5() {
    var xmlhttp;
    var pwd=document.getElementById("pwd").value;
    if (window.XMLHttpRequest) 
    {
        xmlhttp = new XMLHttpRequest();
    } 
    else 
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //传值到servlet

    xmlhttp.open("post", "../PwdMD5?pwd="+pwd, true);
    xmlhttp.send();
   
    //接收servlet值
    var pwdmd5="";//接收传回的值v0 分割为代码和名称v1  再次分割v1[0]为代码v2 v1[1]名称v3
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
        {
            pwdmd5=xmlhttp.responseText;
            document.getElementById("pwd").value=pwdmd5;
            document.getElementById("pwd1").value=pwdmd5;
        }
    }
}