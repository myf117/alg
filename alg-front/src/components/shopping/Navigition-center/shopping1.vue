<template>
    <div class="hoppingone">
        <div class="shopping1" v-for="item in production" :key="item.id" @click="toXQ(item.myid)">
            <img :src="item.myimg">
            <div class="informations">
            <span id="names">{{item.mynames}}</span>
        </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            production:[
                {   id:"1",
                    myimg:"",
                    mydiscription:"",
                    mynames:"",
                    myid:0
                },{   id:"2",
                    myimg:"",
                    mydiscription:"",
                    mynames:"",
                    myid:0
                },{   id:"3",
                    myimg:"",
                    mydiscription:"",
                    mynames:"",
                    myid:0
                },{   id:"4",
                    myimg:"",
                    mydiscription:"",
                    mynames:"",
                    myid:0
                }
            ]
        }
    },
    mounted(){
        this.$http.get('/getproduct',{

        }).then(res=>{
            for(let i=0;i<res.data.length;i++){
                this.production[i].myimg=res.data[i].img_url;
                this.production[i].mynames=res.data[i].product_name;
                this.production[i].mydiscription=res.data[i].discription;
                this.production[i].myid = res.data[i].id;
            }
            // console.log(this.production);
        })
    },
    methods: {
        toXQ(myid){
            this.$router.push({
                path:'/gouwu',
                query:{
                    product_id:myid
                }
            })
        }
    }
}
</script>
<style>
.shoppingone{
    display: flex;

}
    .shopping1{
        width: 230px;
        height: 135px;
        background-color: #fff;
        border:1px solid #DDDDDD;
        position: relative;
        display: inline-block;
    }
    .informations{
        width: 100px;
        height: 130px;
        background-color:rgba(248, 248, 248, 0.7);
        position: absolute;
        left: 0;
        top:0;
        text-align: right;
        display: flex;
        justify-content: center;
        padding-left: 20px;
    }
    .informations{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
    }
    #names{
            font: 12px/20px "Microsoft YaHei", "微软雅黑", tahoma, arial, sans-serif;
    color: #999;
    padding: 10px 0 0;
    }
    #names:hover{
        color: #f65;
        cursor: pointer;
    }
    .shopping1 img{
        width:140px ;
        height: 100%;
        margin-left: 100px;
    }
</style>