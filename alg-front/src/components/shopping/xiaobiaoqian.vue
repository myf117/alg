<template>
    <div class="divone">
        <!-- //登录 -->
        <a href="#" @click="tologin" class="a">登录</a>
        <span>|</span>
        <a href="#" style="margin-left:15px" @click="toregist" class="a">注册</a>
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
        tologin(){
            if(this.cookie.getCookie('user')){
                let a = document.getElementsByClassName('a');
                a[0].innerHTML = this.cookie.getCookie('user');
                a[1].innerHTML = '退出';
                a[1].onclick = function(){
                    this.$router.push('/loginregist/login');
                }
                this.$router.push('/mypage')
            }else {
                this.$router.push('/loginregist/login');
            }
            
        },
        toregist(){
            if(!this.cookie.getCookie('user')){
                this.$router.push('loginregist/regist');
            }
        }
    }
}
</script>
<style>
    .divone{
        display: inline-block;
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
        width: 50px;
        height: 50px;
        padding:20px;
    }
    .weibo .tubiao1,.weixin .tubiao2,.phone .tubiao3{
        margin:0;
        padding:0;
        border:1px solid #DDDDDD;
        border-top: 1px solid white;
        width:90px;
        height: 90px;
        position: absolute;
        top:34px;
        right:-1px;
        display: none;
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