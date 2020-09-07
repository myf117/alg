<template>
    <div class="divone">
        <!-- //登录 -->
        <a href="#"  class="a">登录</a>
        <span>|</span>
        <a href="#" style="margin-left:15px" class="a">注册</a>
        <span>|</span>
        <div class="weibo" >
            <div ></div>
            <span >微博</span>
            <span class="tubiao1" >
            <img src="http://a.boqiicdn.com//Images/public/tel.jpg" alt="">
            </span>
        </div>
        <span>|</span>
         <div class="weixin">
             <div></div>
            <span>微信</span>
            <span class="tubiao2" >
            <img src="http://a.boqiicdn.com//Images/public/wb.jpg" alt="">
            </span>
        </div>
        <span>|</span>
         <div class="phone">
             <div></div>
            <span>手机版</span>
              <span class="tubiao3" >
            <img src="http://a.boqiicdn.com//Images/public/wchat.jpg" alt="">
            </span>
        </div>
    </div>
</template>
<script>
let pp=document.getElementsByClassName("tubiao1")
export default {
    methods:{
        checkUser(){
            let a = document.getElementsByClassName('a');
            if(this.cookie.getCookie('user') && this.cookie.getCookie('user') !== 'admin'){
                a[0].innerHTML = this.cookie.getCookie('user');
                a[1].innerHTML = '退出';
                a[1].onclick = ()=>{
                    this.$router.push('/loginregist/login');
                }
                a[0].onclick = ()=>{
                    this.$router.push('/mypage');
                }
            }else {
                a[0].innerHTML = '登录';
                a[1].innerHTML = '注册';
                a[0].onclick = ()=>{
                    this.$router.push('/loginregist/login');
                }
                a[1].onclick = ()=>{
                    this.$router.push('/loginregist/regist');
                }
            }
        }
    },
    mounted() {
        this.checkUser()
    },
}
</script>
<style>
    .divone{
        display: inline-block;
        height:40px;
    }

    .a{ 
        font:14px/14px "Microsoft YaHei";
        color: black;
        margin:0 13px;
    }
    .divone div{
        display: inline-block;
    }
    .weibo,.weixin,.phone{
        padding:0 8px;
        position: relative;
    }
    .weibo span,.weixin span,.phone span{
        font:14px/14px "Microsoft YaHei" ;
        padding-left: 25px;
    }
    .phone span{
        padding-left: 14px;
    }
    .weibo div,.weixin div,.phone div{
        width:20px;
        height: 16px;
        background-image: url(http://a.boqiicdn.com/Images/public/toolbar.png);
        background-repeat: no-repeat;
        position: absolute;
        top:3px;
    }
    
    .weixin div{
        background-position: -34px 0;
    }
    .phone div{
        width:10px;
        height: 16px;
        background-position: -71px 0;
    }
    .weibo .tubiao1 img,.weixin .tubiao2 img,.phone .tubiao3 img{
        width: 40px;
        height: 40px;
        margin-top:10px;
        
    }
    .weibo .tubiao1,.weixin .tubiao2,.phone .tubiao3{
        margin:0;
        padding:0;
        border:1px solid #DDDDDD;
        border-top: 1px solid white;
        width:73px;
        height: 69px;
        position: absolute;
        top:34px;
        right:-1px;
        display: none;
    }
    .phone .tubiao3{
        right:-1px;
    }
    .weibo:hover,.weixin:hover,.phone:hover{
         cursor: pointer;
    }
    .weibo:hover .tubiao1{
        display: inline-block;
       
    }
    .weixin:hover .tubiao2{
        display: inline-block;
    }
    .phone:hover .tubiao3{
        display: inline-block;
    }
</style>