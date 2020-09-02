<template>
	<div class="bigbox-1">
		<div class="box1">
			<div class="block">
			    <el-carousel trigger="click" height="360px">
			      <el-carousel-item v-for="item in mainimg" :key="item.id">
			       <img :src="item.img" style="width: 880px;height: 360px;">
			      </el-carousel-item>
			    </el-carousel>
			  </div>
			  <div>
				 <div class="icon" v-for="item in icon" :key="item.id">
					<img :src="item.img">
					<div class="p1">
					<p>{{item.content}}</p>
					<p>{{item.content1}}</p>
					</div>
					
				 </div>
			  </div>
		</div>
	</div>
	
	
</template>

<script>
	export default{
		data:function(){
			return{
				icon:[
					{id:1,img:require("../../assets/img/shopcar.png"),content:"宠物大全",content1:"在这里，我们用相识和他结缘"},
					{id:2,img:require("../../assets/img/cart.png"),content:"宠物饲养",content1:"在这里，我们用安全伴他成长"},
					{id:3,img:require("../../assets/img/message.png"),content:"宠物交流",content1:"在这里，我们用鼓励陪它同行"},
					{id:4,img:require("../../assets/img/hosptal.png"),content:"宠物医疗",content1:"在这里，我们用呵护保他健康"}
				],
				mainimg:[
					{id:1,img:require("../../assets/img/main.jpg")},
					{id:2,img:require("../../assets/img/main1.jpg")},
					{id:3,img:require("../../assets/img/main3.jpg")},
					{id:4,img:require("../../assets/img/main4.jpg")}
				]
			}
		}
	}
</script>

<style>
	.bigbox-1{
		background-color: #EFEFEF;
		padding: 20px 0;
	}
	.icon{
		display: flex;
		align-items: center;
		width: 300px;
		height: 90px;
		margin-left: 15px;
		background-color: white;
		padding-left: 15px;
	}
	.p1{
		text-align: left;
		margin-left: 20px;
	}
	.p1 p:first-of-type{
		font-size: 24px;
	}
	.icon img{
		width: 43px;
		height: 35px;
	}
	.box1{	
		width: 1200px;
		margin: 0 auto;
		/* margin-top: 20px; */
		display: flex;
	}
	.block{
		width:880px;
	}
	 .el-carousel__item h3 {
	    color: #475669;
	    font-size: 14px;
	    opacity: 0.75;
	    line-height: 150px;
	    margin: 0;
	  }
	
	  .el-carousel__item:nth-child(2n) {
	     background-color: #99a9bf;
	  }
	  
	  .el-carousel__item:nth-child(2n+1) {
	     background-color: #d3dce6;
	  }
</style>
