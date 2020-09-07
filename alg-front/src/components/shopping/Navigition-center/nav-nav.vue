<template>
  <div class="nav-div">
    <div class="nav-left" style="margin-left:-374px">
      <span class="allshopping">全部商品分类</span>
      <div class="divimg"></div>
      <div class="hidden1">
          <div class="hidden1-1">
            <div class="hidden11" style="margin-left:-4px">
              <div class="hidden1-1-1">
              </div>
              <span @click="toDog">狗狗商品</span>
              <a href="javascript:">></a>
              <div class="name1">
              <a class="p1" href="javascript:" @click="toClassGoods(1,101)">主粮</a>
              <a class="p2" href="javascript:" @click="toClassGoods(1,102)">零食</a>
              <a class="p3" href="javascript:" @click="toClassGoods(1,103)">玩具</a>
              </div>
              <div class="floatright1">
                <div id="float1">
                  <a href="javascript:" class="a-top" @click="toClassGoods(1,101)">狗狗主粮</a>                 
                  <a href="javascript:">进口粮</a>
                  <a href="javascript:">国产粮</a>
                  <a href="javascript:">处方粮</a>
                  <a href="javascript:">冻干粮</a>
                </div>
                <div id="float2">
                   <a href="javascript:" class="a-top" @click="toClassGoods(1,102)">狗狗零食</a>                 
                  <a href="javascript:">罐头湿粮</a>
                  <a href="javascript:">肉类零食</a>
                  <a href="javascript:">磨牙洁齿</a>
                  <a href="javascript:">奶酪饼干</a>
                </div>
                <div id="float3">
                   <a href="javascript:" class="a-top" @click="toClassGoods(1,103)">狗狗玩具</a>                 
                  <a href="javascript:">益智玩具</a>
                  <a href="javascript:">磨牙玩具</a>
                  <a href="javascript:">训练玩具</a>
                  <a href="javascript:">漏食玩具</a>
                  <a href="javascript:">互动玩具</a>
                  <a href="javascript:">毛绒玩具</a>
                </div>
              </div>
            </div>
              
          </div>
          <div class="hidden1-2">
            <div class="hidden22" style="margin-left:-4px">
              <div class="hidden2-1-1">
              </div>
              <span @click="toCat" >猫猫用品</span>
              <a href="javascript:">></a>
              <div class="name2">
              <a class="p4" href="javascript:" @click="toClassGoods(2,201)">主粮</a>
              <a class="p5" href="javascript:" @click="toClassGoods(2,202)">零食</a>
              <a class="p6" href="javascript:" @click="toClassGoods(2,203)">猫砂</a>
              <a class="p7" href="javascript:" @click="toClassGoods(2,204)">玩具</a>
              </div>
               <div class="floatright2">
                <div id="float2">
                  <a href="javascript:" class="a-top" @click="toClassGoods(2,201)">猫咪主粮</a>                 
                  <a href="javascript:">进口粮</a>
                  <a href="javascript:">国产粮</a>
                  <a href="javascript:">处方粮</a>
                  <a href="javascript:">冻干粮</a>
                </div>
                <div id="float2">
                   <a href="javascript:" class="a-top" @click="toClassGoods(2,202)">猫咪零食</a>                 
                  <a href="javascript:">罐头湿粮</a>
                  <a href="javascript:">肉类零食</a>
                  <a href="#">猫草薄荷</a>
                  <a href="javascript:">休闲零食</a>
                </div>
                <div id="float3">
                   <a href="javascript:" class="a-top" @click="toClassGoods(2,203)">猫砂猫厕</a>                 
                  <a href="javascript:">膨润土猫砂</a>
                  <a href="javascript:">水晶猫砂</a>
                  <a href="javascript:">松木猫砂</a>
                  <a href="javascript:">矿物猫砂</a>
                  <a href="javascript:">猫咪厕所</a>
                  <a href="javascript:">排便清洁</a>
                </div>
                <div id="float3">
                   <a href="javascript:" class="a-top" @click="toClassGoods(2,204)">猫咪玩具</a>                 
                  <a href="javascript:">猫爬架</a>
                  <a href="javascript:">猫抓板</a>
                  <a href="javascript:">逗猫玩具</a>
                </div>
              </div>
            </div>
              
          </div>
          <div class="hidden1-3">
            <div class="hidden33" style="margin-left:-4px">
              <div class="hidden3-1-1">
              </div>
              <span @click="toMini">奇趣小宠</span>
              <a href="javascript:">></a>
              <div class="name3">
              <a class="p8" href="javascript:" @click="toClassGoods(3,301)">仓鼠</a>
              <a class="p9" href="javascript:" @click="toClassGoods(3,302)">龙猫</a>
              <a class="p10" href="javascript:" @click="toClassGoods(3,303)">天竺鼠</a>
              </div> 
              <div class="floatright3">
                <div id="float2">
                  <a href="javascript:" class="a-top" @click="toClassGoods(3,301)">仓鼠</a>                 
                  <a href="javascript:">仓鼠粮</a>
                  <a href="javascript:">笼窝</a>
                  <a href="javascript:">器具</a>
                  <a href="javascript:">玩具</a>
                  <a href="javascript:">磨牙</a>
                  <a href="javascript:">清洁</a>
                </div>
                <div id="float2">
                   <a href="javascript:" class="a-top" @click="toClassGoods(3,302)">龙猫</a>                 
                  <a href="javascript:">龙猫粮</a>
                  <a href="javascript:">龙猫用品</a>
                  <a href="javascript:">龙猫</a>
                  <a href="javascript:">笼窝</a>
                  <a href="javascript:">用具</a>
                </div>
                <div id="float3">
                   <a href="javascript:" class="a-top" @click="toClassGoods(3,303)">天竺鼠</a>                 
                  <a href="javascript:">天竺鼠粮</a>
                </div>
              </div>
            </div>
              
          </div>
          <div class="hidden1-4">
            <div class="hidden44" style="margin-left:-4px">
              <div class="hidden4-1-1">
              </div>
              <span @click="toWater">水族市场</span>
              <a href="javascript:">></a>
              <div class="name4">
              <a class="p11" href="javascript:" @click="toClassGoods(4,401)">鱼食</a>
              <a class="p12" href="javascript:" @click="toClassGoods(4,402)">鱼缸</a>
              <a class="p13" href="javascript:" @click="toClassGoods(4,403)">器材</a>
              </div>
              <div class="floatright4">
                <div id="float2">
                  <a href="javascript:" class="a-top" @click="toClassGoods(4,401)">鱼粮</a>                 
                  <a href="javascript:">鱼粮</a>
                  <a href="javascript:">喂食器</a>
                </div>
                <div id="float2">
                   <a href="javascript:" class="a-top" @click="toClassGoods(4,402)">鱼缸</a>                 
                  <a href="javascript:">小型鱼缸</a>
                  <a href="javascript:">中型鱼缸</a>
                  <a href="javascript:">大型鱼缸</a>
                </div>
                <div id="float3">
                   <a href="javascript:" class="a-top" @click="toClassGoods(4,403)">器材</a>                 
                  <a href="javascript:">过滤器</a>
                  <a href="javascript:">滤材</a>
                  <a href="javascript:">增氧泵</a>
                  <a href="javascript:">潜水泵</a>
                  <a href="javascript:">温控设备</a>
                  <a href="javascript:">照明设备</a>
                  <a href="javascript:">清洁用具</a>
                </div>
              </div>
            </div>
              
          </div>
      </div>
     
    </div>
    <div class="nav-center">
      <span @click="toDog" id="dogsss">狗狗</span>
      <span @click="toCat">猫猫</span>
      <span @click="toMini">小宠</span>
      <span @click="toWater">水族</span>
    </div>
    <div class="nav-right" @click="toCart">
      <div></div>
      <span class="number1">购物车</span>
      <span class="number2">{{cartNum}}</span>
      <!-- <span class="hiddens">
            请先登录购物车！！！
      </span> -->
    </div>
  </div>
</template>
<script>
  import Bus from "../../../assets/js/Bus";
  export default {
    data() {
      return {
        cartNum:0
      }
    },
    methods: {
      toDog(){
        // let path = '/Nav/dog';
        // this.checkPath(path);
        this.$router.push('/dog')
      },
      toCat(){
        // let path = '/Nav/cat';
        // this.checkPath(path);
        this.$router.push('/cat')
      },
      toMini(){
        // let path = '/Nav/mini';
        // this.checkPath(path);
        this.$router.push('/mini')
      },
      toWater(){
        // let path = '/Nav/water';
        // this.checkPath(path);
        this.$router.push('/water')
      },
      toCart(){
        this.$router.push('/shopcart')
      },
      checkPath(path){
        if(decodeURI(this.$route.fullPath)===path){
					//$router 进行编程导航，路由跳转
					this.$router.go(0)
				}else{
					this.$router.push(path);
				}
      },
      toClassGoods(class_id,goods_id){
        let path;
        // if(this.$route.path == '/Nav'){
            switch(class_id){
            case 1:path='/dog';break;
            case 2:path='/cat';break;
            case 3:path='/mini';break;
            case 4:path='/water';break;
          }
          this.$router.push({
            path:path,
            query:{
              class_id:class_id,
              goods_id:goods_id
            }
          });
        // }else {
        //   this.$router.go(0);
        // }
        
      },
      getCartNum(){
        this.cartNum = 0;
				if(this.cookie.getCookie('user')){
					this.$http.get('/showlist',{params:{
						username:this.cookie.getCookie('user')
					}}).then(res => {
						for(let i = 0; i < res.data.length; i++){
							this.cartNum += res.data[i].count;
            }
            Bus.$on('shopcount',value => {
							this.cartNum = value + this.cartNum;
							console.log(this.cartNum);
            });
            Bus.$on('cartcount',value => {
							this.cartNum = value + this.cartNum;
							console.log(this.cartNum);
						});
					})
				}
			}
    },
    mounted() {
      this.getCartNum();
    }
    // ,
    // watch: {
    //   'cartNum'(){
    //     this.getCartNum();
    //   }
    // },
  };
</script>
<style>
*{
    margin: 0;
    padding:0;
}
.nav-div {
  height: 36px;
  width: 100%;
  background: #e53;
}
.nav-left,
.nav-center,
.nav-right {
  display: inline-block;
}
.nav-left {
  width: 190px;
  background-color: #c20;
  height: 36px;
  padding: 0 10px;
   margin-left: -55px; 
  position: relative;
}
.nav-left .hidden1{
    width: 190px;
    height: 360px;
    border:1px solid #CC2200;
    background-color: white;
    position: absolute;
    top: 36px;
    right:0;
    display: none;
    z-index: 99;
    
}

.nav-left .hidden1 .hidden1-1-1,.nav-left .hidden1 .hidden2-1-1,.nav-left .hidden1 .hidden3-1-1,
.nav-left .hidden1 .hidden4-1-1{
    width: 24px;
    height: 24px;
    background:url(http://b.boqiicdn.com/v2/images/icon.png) no-repeat -195px -171px;
    float: left;
    margin-left: 8px;
    margin-right: 2px;
    margin-top:5px;
}
.nav-left .hidden1 .hidden2-1-1{
  background: url(http://b.boqiicdn.com/v2/images/icon.png) no-repeat -226px -170px;
}
.nav-left .hidden1 .hidden3-1-1{
  background: url(http://b.boqiicdn.com/v2/images/icon.png) no-repeat -262px -171px;
}
.nav-left .hidden1 .hidden4-1-1{
  background: url(http://b.boqiicdn.com/v2/images/icon.png) no-repeat -195px -197px;
}
.nav-left span {
  float: left;
  color: #fff;
  font: 16px/36px "Microsoft YaHei";
}
.nav-left .divimg {
  float: right;
  width: 16px;
  height: 10px;
  background: url(http://b.boqiicdn.com/v2/images/toolbar.png) no-repeat 0 -21px;
  margin-top: 13px;
}
.nav-center span {
  float: left;
  width: 66px;
  height: 36px;
  margin: 0 16px;
  text-align: center;
  line-height: 32px;
  font: 16px/36px "Microsoft YaHei";
  color: #fff;
}
.nav-right {
  float: right;
  background: #c20;
  padding: 0 0 0 10px;
  border: 2px solid #c20;
  position: relative;
  z-index: 999;
  color: #fff;
  height: 36px;
  margin-right: 100px;
}
.nav-right div{
  float: left;
  width: 21px;
  height: 19px;
  background: url(http://b.boqiicdn.com/v2/images/toolbar.png) no-repeat -30px -21px;
  margin: 6px 5px 0 0;
  
}
.nav-right .number1 {
  color: #fff;
  padding: 0 3px;
  text-align: center;
  font: 16px/32px "Tahoma", Arial;
}
.nav-right .number2 {
  color: #fff;
  padding: 0 15px;
  text-align: center;
  font: 16px/32px "Tahoma", Arial;
}
.nav-right .hiddens{
    display: inline-block;
    width:300px;
    height:100px;
    background-color: #FFF3EF;
    border:1px solid #CD2200;
    border-top:1px solid #FFF3EF;
    position: absolute;
    top:34px;
    right:-2px;
    display: none;
    text-align: center;
    line-height:100px ;
}
.nav-right:hover{
    background-color: #FFF3EF;
    border:2px solid #e53;
    border-bottom: 1px solid #FFF3EF;
    cursor: pointer;
}
.nav-right:hover div{
    background-image: url(http://b.boqiicdn.com/v2/images/toolbar.png);
    background-position: -58px -21px;
    cursor: pointer;
}
.nav-right:hover span{
    color:#ee5533;
}
.nav-right:hover .hiddens{
    display: inline-block;
}
.nav-left .hidden1 .hidden11,.nav-left  .hidden1 .hidden22,.nav-left  .hidden1 .hidden33,.nav-left 
.hidden1 .hidden44{
  width: 190px;
  height: 91px;
  display: flex;
  justify-content: left;
  position: relative;
  border-bottom:1px solid #666;
  position: relative;
 
}
a{
  color: #ccc;
  text-decoration: none;
  padding-top: 10px;
  margin-left: 60px;
}
.nav-left .hidden1 span{
  margin-left: 10px;
  color: black;
} 
.nav-left .hidden1 .name1,.nav-left .hidden1 .name2,.nav-left .hidden1 .name3,
.nav-left .hidden1 .name4{
  position: absolute;
  top: 30px;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}
.nav-left .hidden1 .name1 a,.nav-left .hidden1 .name2 a,.nav-left .hidden1 .name3 a,
.nav-left .hidden1 .name4 a{
  margin-left:20px ;   
   font-size: 12px;
    color: #666;
    font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif;
}

.nav-left a:hover{
  cursor: pointer;
}
.nav-left .hidden1 .hidden11 .floatright1,.hidden22 .floatright2,
.hidden33 .floatright3,.hidden44 .floatright4{
  width:580px;
  height: 360px;
  border:1px solid #CC2200;
  background-color: #fff;
    position: absolute;
    top:-2px;
    left: 190px;
    display: none;
}
.nav-left .hidden1 .hidden22 .floatright2{
  top:-92px;
  
}
.nav-left .hidden1 .hidden33 .floatright3{
  top:-183px;
}
.nav-left .hidden1 .hidden44 .floatright4{
  top:-274px;
}
#float1,#float2,#float3{
  height:30px;
  margin-top: 10px;
  border-bottom: 1px dashed #cccccc;
  display: flex;
}
.nav-left .hidden1 a
/* .hidden11  #float1 a */
/* , */
/* .hidden11  #float2 a,
 .hidden11  #float3 a,
 .hidden22  #float1 a,
 .hidden22  #float2 a,
 .hidden22  #float3 a,
 .hidden33  #float1 a,
 .hidden33  #float2 a,
 .hidden33  #float3 a,
  .hidden44  #float1 a,
 .hidden44  #float2 a,
 .hidden44  #float3 a */
 {
   color: #ccc;
  font:14px/16px "Microsoft YaHei";
  margin:0px 13px 0 0;
}
.nav-left .hidden1  a:hover{
   color: #ee5533;
}
.nav-left .hidden1 .hidden11  #float1 .a-top,
 .hidden11  #float2 .a-top,
 .hidden11  #float3 .a-top,
 .hidden22  #float1 .a-top,
 .hidden22  #float2 .a-top,
 .hidden22  #float3 .a-top,
  .hidden33  #float1 .a-top,
 .hidden33  #float2 .a-top,
 .hidden33  #float3 .a-top,
 .hidden44  #float1 .a-top,
 .hidden44  #float2 .a-top,
 .hidden44  #float3 .a-top
{
    color: #ee5533;
    margin-left: 40px;
    margin-right: 40px;
}
.nav-left .hidden1 .hidden11:hover .floatright1{
  display: inline-block;
}
.nav-left .hidden1 .hidden22:hover .floatright2{
  display: inline-block;
}
.nav-left .hidden1 .hidden33:hover .floatright3{
  display: inline-block;
}
.nav-left .hidden1 .hidden44:hover .floatright4{
  display: inline-block;
}

.nav-left:hover{
  color: #c20;
    cursor: pointer;
}
.nav-left:hover  .hidden1{
  display: inline-block;
}
.nav-center span:hover{
  color: #c20;
  cursor: pointer;
}
</style>