<template>
    <div class="div1">
<!--     
   <router-link to="/zhujian11/Nav"><span>波奇网</span></router-link>
   <router-link to="/zhujian11/Navv"><span>宠物百科</span></router-link> -->
  <!-- v-model="activeName" @tab-click="handleClick" -->
 
    <el-tabs  @tab-click="handle"  style="height:40px">
    <el-tab-pane label="波奇网" name="first"></el-tab-pane>
    <el-tab-pane label="宠物百科" name="second"></el-tab-pane>
     
  </el-tabs>
    <smallsign style="margin-top:6px"></smallsign>
    <div class="nav2-1" style="margin-top:40px">
            <logo style="margin-left:-35px"></logo>
            <search></search>
            <imgs></imgs>
        </div>
        <menunav></menunav>
        
        <div class="lunbo1"><lunbo></lunbo></div>
        <div class="shopping1div"><shopping1></shopping1>
        </div>
        <!-- <rightfloat></rightfloat> -->
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    
    </div>
    
</template>
<script>
//搜索框
import search from "../components/shopping/Navifation bar/Navigation.vue"
//logo
import logo from "../components/shopping/Navifation bar/Navigation-left.vue"
//右边小图片
import imgs from "../components/shopping/Navifation bar/Navigation-right.vue"
//导航条
import menunav from "../components/shopping/Navigition-center/nav-nav.vue"
//主页轮播图
import lunbo from "../components/shopping/Navigition-center/lunbo.vue"
//主页下边几个小商品
import shopping1 from "../components/shopping/Navigition-center/shopping1.vue"
//顶部右边小标签
import smallsign from "../components/shopping/xiaobiaoqian.vue"
export default {
    components:{
        smallsign,
        search,
        logo,
        imgs,
        menunav,
        lunbo,
        shopping1
        
    },
    methods:{
        handle(tab,event){
            console.log(tab.name);
            var path;
            if(tab.name=='first'){
                if(this.$route.fullPath=='/Nav')
                {
                    this.$router.go(0)

                }else{
                    path='/Nav';
                    this.$router.push(path)
                }
                
            }else if(tab.name=='second'){
                path='/anency';
                this.$router.push(path)
                // if(this.$route.fullPath=='/Nav' || this.$route.fullPath=='/dog' || this.$route.fullPath=='/cat'
                //     || this.$route.fullPath=='/mini' || this.$route.fullPath=='/water'){
                //     path='/anency';
                //     this.$router.push(path)
                // }else{
                //     this.$router.go(0);
                
                // }
                
            }
            
            // let path;
            // if(tab=="tab-0"){
            //     path='/zhujian11/Nav'
            // }  
            //  this.$router.push(path);        
        }
    }
}
</script>
<style>
@media only screen and (max-width: 1200px) {
    body {
        width: 1200px;
    }
}
.div1{
    position: relative;
}
.div1 .nav2-1{
    display: flex;
    width: 1150px;
    margin-left: 100px;
    justify-content: space-between;
}
    .divone{
        position: absolute;
        right: 100px;
        top: 6px;
    }
    #tab-first{
    padding-left: 100px;
    }
</style>