    // 设置cookie
    import Base64 from "./base64.js";
    function setCookie(c_name,value){
        if(c_name === 'pwd'){
            //对密码加密，采用base64方式进行加密
            document.cookie = c_name + "=" + Base64.encode(value);
        }else {
            //不加密用户名
            document.cookie= c_name + "=" + escape(value);
        }
    };
    
    // 读取cookie
    function getCookie(c_name){
        if (document.cookie.length>0)
        {
            var c_start=document.cookie.indexOf(c_name + "=");
            if (c_start!=-1)
            { 
            c_start=c_start + c_name.length+1;
            var c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) 
                c_end = document.cookie.length;
                if(c_name === 'pwd'){
                    //解密密码
                    return Base64.decode(document.cookie.substring(c_start, c_end))
                }else {
                    return unescape(document.cookie.substring(c_start, c_end))
                }
            }
        }
        return ""   
    };
    
    // 删除cookie
    function delCookie(c_name){
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(c_name);
        if(cval!=null){
            document.cookie = c_name + "=" + cval + ";expires=" + exp.toGMTString();
        }
    };
    export default {setCookie,getCookie,delCookie};