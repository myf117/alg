<template>
    <div class="login-regist">
        <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">用户登录</el-menu-item>
            <el-menu-item index="2">用户注册</el-menu-item>
        </el-menu> -->
        <div class="button" @click="handleClick">
            <div class="login-box">用户登录</div>
            <div class="regist-box">用户注册</div>
        </div>
        <router-view></router-view>
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
    .login-regist {
        margin: 20px auto;
        width: 500px;
        box-shadow: 2px 2px 10px lightgray;
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
        color: #409EFF;
    }
    
</style>