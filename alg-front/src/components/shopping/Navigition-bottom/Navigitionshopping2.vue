<template>
    <div class="catshoppsss">
        <div class="numcat"><div class="catlogo" style="display:inline-block"></div>
        <h2>猫咪</h2></div>
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
                    imgs:"http://img.boqiicdn.com/Data/U/P/img7166567a04b16967e.jpg",
                    name:"猫咪主粮",
                    discr:"进口粮、国产粮、处方粮、冻干粮"
                },{
                    id:"2",
                    imgs:"http://img.boqiicdn.com/Data/U/P/img68535682418eed7a3.jpg",
                    name:"猫咪零食",
                    discr:"罐头湿粮、肉类零食、猫草薄荷、休闲零食"
                },{
                    id:"3",
                    imgs:"http://img.boqiicdn.com/Data/U/P/img313356824196eec7f.jpg",
                    name:"猫咪玩具",
                    discr:"猫爬架、猫抓板、逗猫玩具"
                }
            ]
        }
            },
        mounted(){
             this.$http.get('/getlunbo',{
                 params:{
                     class_id:2
                 }
             }).then(res=>{
                 for(let i=0;i<res.data.length;i++){
                     this.Arrays[i].imgs=res.data[i].lunbo_img;
                 }
             }),
             this.$http.get('/showClassProduct',{
                 params:{
                     class_id:2,
                     goods_id:201
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
.catshoppsss{
   text-align: left;
}
 .numcat{
    margin: 10px 0;
}
.catlogo{
    width: 54px;
    height: 45px;
    background: url(http://a.boqiicdn.com/Images/sitenew/common.png) no-repeat  -79px 0;
    margin: 0 13px 0 0;
    }
.showtime .show-right-top{
        box-sizing: none;
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
