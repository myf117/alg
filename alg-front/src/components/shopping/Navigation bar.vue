<template>
    <div class="nav2">
        
        <div class="lunbo2"><packingone></packingone></div>
    </div>
</template>
<script>

import packingone from "./Navigition-bottom/Navigitionshopping.vue"
export default {
    components:{
        packingone
    },
}
</script>
<style >
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
    }
</style>