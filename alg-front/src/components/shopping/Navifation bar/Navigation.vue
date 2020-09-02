<template>
    <div class="search">
        <div class="center">
            <input type="text" placeholder="素力高" id="input">
        <button type="button" id="button">搜索</button>
        </div>
        <div class="bottom">
            <span>热门搜索：</span>
            <a href="#" style="margin-left:20px">主粮</a>
            <a href="#" style="margin-left:20px">零食</a>
            <a href="#" style="margin-left:20px">保健</a>
            <a href="#" style="margin-left:20px">猫砂</a>
            <a href="#" style="margin-left:20px">玩具</a>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    #input{
        width: 394px;
    padding: 5px 10px;
    height: 26px;
    font: 16px/26px "Microsoft YaHei";
    color: #ccc;
    border: 3px solid #e53;
    border-top: 4px solid #e53;
    border-right: none;
    }

    #button{
    height: 44px;
    width: 80px;
    font: 18px/40px "Microsoft YaHei";
    background: #e53;
    text-align: center;
    color: #fff;
    cursor: pointer;
    border:1px solid white;
    border-left: none;
    border-bottom: 1px solid #e53;
    margin-bottom: 10px;
    }
    .buttom span{
        text-align: left;
    }
    #input:focus{
    outline: none;
    }
    #button:focus{
        outline: none;
    }
    .bottom > span,.bottom > a{
        margin-top:0;
        color: #999;
        font-size: 12px;
        font-family: "SimSun";
    }
    .bottom > a:hover{
        color: #e53;
    }
</style>