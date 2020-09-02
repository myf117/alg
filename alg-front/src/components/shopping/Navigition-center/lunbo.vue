<template>

   <div class="myblock" style="width:100%">
    <el-carousel  height="360px">
      <el-carousel-item v-for="item in newArray" :key="item.name">
        <h3 class="small"><img id="lunbolarge" :src=item.src ></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
    data:function(){
        return {Array:"",
                newArray:[
                    {
                        name:"number1",
                        src:"http://img.boqiicdn.com/Data/Shop/0/0/0/shoppicpath1584599277.jpg"
                    },
                    {
                        name:"numnber2",
                        src: "http://img.boqiicdn.com/Data/Shop/0/0/0/shoppicpath1595226362.jpg"
                    }
                ]
        }
    },
    created(){
       
    }
}
</script>
<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 360px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  #lunbolarge {
      width: 100%;
      height: 360px;
  }
</style>