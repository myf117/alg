<template>
    <div class="bgci">
    <div class="bgci2"></div>
    <div class="login-imgs"></div>
    <div class="login-regist">
        <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">用户登录</el-menu-item>
            <el-menu-item index="2">用户注册</el-menu-item>
        </el-menu> -->
        <div class="button" @click="handleClick" style="padding-bottom:60px;margin-bottom:40px">
            <div class="login-box">用户登录</div>
            <div class="regist-box">用户注册</div>
        </div>
       
        <router-view></router-view>
    </div>
     <div class="bgci2"></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeIndex:'1'
            }
        },
        methods: {
            //点击进入登录或注册子路由
            handleClick(e){
                let path;
                if(e.target.innerHTML == "用户登录"){
                    path = '/loginregist/login';
                }else if(e.target.innerHTML == "用户注册"){
                    path = "/loginregist/regist";
                }
                if(this.$route.fullPath!==path){
				    this.$router.push(path)
			    }
            }
        },
    }
</script>
<style  scoped>
    .bgci{
        background-image: url(http://img.boqiicdn.com/Data/U/P/img66745f1539c842029.jpg);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .bgci2{
        height: 1px;
        background-color: rgba(red, green, blue, 0.4);
    }
    .login-regist {
        margin: 70px auto;
        width: 500px;
        height: 470px;
        background-color: rgba(99,200,184, 0.98);
        box-shadow: 2px 2px 10px lightgray;
        padding-top:65px;
        
    }
    .button {
        width: 100%;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        text-align: center;
        /* background-color: lightgrey; */
    }
    .login-box,.regist-box {
        width:  50%;
        height: 50px;
        display: inline-block;
    }
    .login-box{
        border-right: 1px solid lightgrey;
    }
    .login-box:hover,.regist-box:hover {
        color: #1D8A85;
    }
    
</style>