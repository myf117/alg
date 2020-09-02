<template>
    <div class="nav2">
        
        <div class="lunbo2"><packingone></packingone></div>
        <div class="lunbo2"> <packingtwo></packingtwo></div>
       <div class="lunbo2"> <packingthree></packingthree></div>
       <div class="lunbo2"> <packingfour></packingfour></div>
       <div class="lunbo2"><pagebottom style="margin-top:200px"></pagebottom></div>
    </div>
</template>
<script>

import packingone from "./Navigition-bottom/Navigitionshopping.vue"
import packingtwo from "./Navigition-bottom/Navigitionshopping2.vue"
import packingthree from "./Navigition-bottom/Navigitionshopping3.vue"
import packingfour from "./Navigition-bottom/Navigitionshopping4.vue"
export default {
    components:{
        packingone,
          packingtwo,
        packingthree,
        packingfour
    },
}
</script>
<style scope="this api replaced by slot-scope in 2.5.0+">
    .nav2-1{
        
        margin: 0 50px;
        margin-top:40px ;
        display: flex;
        justify-content: space-around;
        
    }
    .nav-div{
        margin-top:20px ;
    }
    .shopping1div{
        width: 100%;
        height: 137px;
        display: flex;
        justify-content: center;
        background-color: #F3F3F3;
        border:1px solid #DDDDDD;
    }
    .lunbo2{
        width: 100%;
        display: flex;
        justify-content: center;
        margin:20px 0;
    }
</style>