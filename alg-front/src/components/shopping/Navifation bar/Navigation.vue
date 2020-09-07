<template>
    <div class="mysearch">
        <div class="xxxcenter" style="display:inline-block">
            <input type="text" placeholder="搜索商品" id="input" v-model="likeName">
        <button type="button" id="button" @click="productAll">搜索</button>
        </div>
        <div class="sssbottom" style="display:inline-block;margin-right:210px" @click="getProductByA">
            <span class="searchsss">热门搜索：</span>
            <a href="#" style="margin-left:20px">狗粮</a>
            <a href="#" style="margin-left:20px">零食</a>
            <a href="#" style="margin-left:20px">龙猫</a>
            <a href="#" style="margin-left:20px">猫砂</a>
            <a href="#" style="margin-left:20px">玩具</a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            likeName:''
        }
    },
    methods: {
        getProductByA(e){
            // console.log(e.target.innerHTML)
            if(e.target.innerHTML === '狗粮' || e.target.innerHTML === '零食' 
                || e.target.innerHTML === '龙猫' || e.target.innerHTML === '猫砂' 
                || e.target.innerHTML === '玩具'){
                    this.$http.get('/getAllProduct',{
                        params:{
                            keyword:e.target.innerHTML
                        }
                    }).then(res => {
                        console.log(res.data);
                        this.$router.push({path:'/productall',query:res.data});
                    }).catch(err => {
                        console.log(err);
                    })
            }
            
        },
        productAll(){
            this.$http.get('/getAllProduct',{
                params:{
                    keyword:this.likeName
                }
            }).then(res => {
                this.$router.push({path:'/productall',query:res.data});
            }).catch(err => {
                console.log(err);
            })
        }
    },
}
</script>
<style>
.mysearch{
    display: flex; 
    flex-direction: column;
}
    #input{
        width: 414px;
    padding: 5px 10px;
    height: 44px;
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
    border-top:1px solid #e53 ;
    border-bottom: 1px solid #e53;
    margin-bottom: 10px;
    }
    #input:focus{
    outline: none;
    }
    #button:focus{
        outline: none;
    }
    .sssbottom{
        display: flex;
        justify-items: center;
    }
    .sssbottom .searchsss{
        margin-top:10px;
    }
    .sssbottom > span,.sssbottom  a{
        margin-top:0;
        color: #999;
        font-size: 12px;
        font-family: "SimSun";
    }
    .sssbottom > a:hover{
        color: #e53;
    }
</style>