<template>
    <div class="dog">
        <div class="numdog"><div class="doglogo" style="display:inline-block"></div>
        <h2>狗狗</h2></div>
        <div class="showtime">
            <div class="show-left">
                 <el-carousel :interval="5000" arrow="always" style="width:360px,height:360px">
                    <el-carousel-item v-for="item in Arrays" :key="item.id">
                 <h3><img :src="item.imgs" alt=""></h3>
                 </el-carousel-item>
                </el-carousel>
            </div>
            <div class="show-right-top"  >
                <div class="shoppings" v-for="item in newsArray" :key="item.id">
                    <img :src="item.imgs" alt="">
                    <span class="span1">{{item.name}}</span>
                </div> 
                <!-- //showClassProduct -->
            </div>
            <div class="show-right-bottom" >
                <div class="jieshaos" v-for="item in dogArray" :key="item.id">
                    <img :src="item.imgs" alt="">
                    <span class="span1">{{item.name}}</span>
                    <span class="span2">{{item.discr}}</span>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            Arrays:[{
                id:"1",
                imgs:""
            },{id:"2",
                imgs:""
            },{id:"3",
                imgs:""
            }
            ],
                newsArray:[
                    {
                        id:"1",
                        imgs:"",
                        name:"",
                        jieshao:""
                    },
                     {
                        id:"2",
                        imgs:"",
                        name:"",
                        jieshao:""
                    },
                     {
                        id:"3",
                        imgs:"",
                        name:"",
                        jieshao:""
                    }
                ],
            dogArray:[
                {
                    id:"1",
                    imgs:"http://img.boqiicdn.com/Data/U/P/img1880567a038801227.jpg",
                    name:"狗狗主粮",
                    discr:"进口粮、国产粮、处方粮、冻干粮"
                },{
                    id:"2",
                    imgs:"http://img.boqiicdn.com/Data/U/P/img5490567a038fd02a2.jpg",
                    name:"狗狗零食",
                    discr:"罐头湿粮、肉类零食、磨牙洁齿、奶酪饼干"
                },{
                    id:"3",
                    imgs:"http://img.boqiicdn.com/Data/U/P/img469567a039597235.jpg",
                    name:"狗狗玩具",
                    discr:"益智玩具、训练玩具、漏食玩具、互动玩具"
                }
            ]
        }
            },
        mounted(){
             this.$http.get('/getlunbo',{
                 params:{
                     class_id:1
                 }
             }).then(res=>{
                 for(let i=0;i<res.data.length;i++){
                     this.Arrays[i].imgs=res.data[i].lunbo_img;
                 }
             }),
             this.$http.get('/showClassProduct',{
                 params:{
                     class_id:1,
                     goods_id:102
                 }
             }).then(res=>{
                //  console.log(res.data);
                 for(let i=0;i<3;i++){
                     this.newsArray[i].imgs=res.data[i].img_url;
                     this.newsArray[i].name=res.data[i].product_name;
                     this.newsArray[i].jieshao=res.data[i].discription;

                 }
             })
        }
    
}
</script>
<style>
.numdog{
    margin: 10px 0;
}
.doglogo{
        width: 50px;
    height: 46px;
    background: url(http://a.boqiicdn.com/Images/sitenew/common.png) no-repeat;
    margin: 0 13px 0 0;
    }
    h2{
        font: 40px/44px "Microsoft YaHei","微软雅黑",tahoma,arial,sans-serif;
    color: #f65;
        display: inline-block;
    }
    .numdog{
        display: flex;
        align-content: center;
    }
    .showtime{
        width: 990px;
        height: 350px;
        border: 1px solid #e6e6e6;
        position: relative;
    }
    .showtime .show-left{
        width: 410px;
        height: 350px;
        padding:20px;
        padding-top: 24px;
        border-right:1px solid #e6e6e6;
    }
    .showtime .show-left img{
        width:100%;
        height: 100%;
    }
    .showtime .show-right-top{
      width: 580px;
      height: 193px;
      display: flex;
      border-left: 1px solid #e6e6e6;
      border-bottom: 1px solid #e6e6e6;
      position: absolute;
      right:0;
      top: 0;
      flex-direction:row;
      box-sizing: none !important;
  } 
  .showtime .show-right-top .shoppings{
      width: 193px;
      height: 180px;
      border-right: 1px solid #e6e6e6 ;
      margin-top:7px;
      text-align: center;
      position: relative;
  }
  .showtime .show-right-top .shoppings img{
      width:100px;
      height: 120px;
      margin-left: 5px;
  }
  .showtime .show-right-top .shoppings .span1{
      position: absolute;
      left: 5px;
      bottom:10px;
      font:10px/18px "Microsoft YaHei", "微软雅黑", tahoma, arial, sans-serif;
      color: #333;  
  }.showtime .show-right-top .shoppings:hover{
      cursor: pointer;
  }
  .showtime .show-right-top .shoppings:hover .span1{
      color: #f65;
  }
  .showtime .show-right-bottom{
      width: 580px;
      height: 153px;
      /* display: inline-block; */
      position: absolute;
      right:0;
      bottom: 0;
      display: flex;
        align-items: center;
        justify-content: space-between;
  }
 
  .showtime .show-right-bottom .jieshaos{
      width: 210px;
      border-right: 1px solid #e6e6e6 ;
      text-align: center;
      position: relative;
  }
  .showtime .show-right-bottom .jieshaos img{
      width: 62px;
      height: 80px;
      padding-bottom:20px;
  }
  .showtime .show-right-bottom .jieshaos .span1{
      font:20px/22px "Microsoft YaHei", "微软雅黑", tahoma, arial, sans-serif;
      color: #333;
      margin-right:2px;
      position: absolute;
      right:20px;
      top:0;
  }
  .showtime .show-right-bottom  .jieshaos:hover{
      cursor: pointer;
  }
  .showtime .show-right-bottom  .jieshaos:hover .span1{
      color: #f65;
  }
  .showtime .show-right-bottom .jieshaos .span2{
      width:86px;
      font-size:10px ;
      display: inline-block; 
      color:#999;
      line-height: 20px;
      margin-top:20px;
      margin-left: 10px;
      left:30px;
      bottom:0;
       }
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  
</style>