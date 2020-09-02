<template>
	<div class="hot-1">
		<h2>热门宠物</h2>
		<div class="himg2">
			<div class="hotimg" v-for="item in himg" :key="item.id">
				<img :src="item.img">
				<div class="hotimg-inf">{{item.content}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data:function(){
			return{
				himg:[
				{id:1,img:require("../../assets/img/hosptal.png"),content:"金毛"},
				{id:2,img:require("../../assets/img/hosptal.png"),content:"金毛"},
				{id:3,img:require("../../assets/img/hosptal.png"),content:"金毛"},
				{id:4,img:require("../../assets/img/hosptal.png"),content:"金毛"},
				{id:5,img:require("../../assets/img/hosptal.png"),content:"金毛"},
				{id:6,img:require("../../assets/img/hosptal.png"),content:"金毛"},
				{id:7,img:require("../../assets/img/hosptal.png"),content:"金毛"},
				{id:8,img:require("../../assets/img/hosptal.png"),content:"金毛"},
				{id:9,img:require("../../assets/img/hosptal.png"),content:"金毛"},
				{id:10,img:require("../../assets/img/hosptal.png"),content:"金毛"},
				{id:11,img:require("../../assets/img/hosptal.png"),content:"金毛"},
				{id:12,img:require("../../assets/img/hosptal.png"),content:"金毛"}					
								]
			}
		}
	}
</script>

<style>
	.hot-1{
		width: 1200px;
		height: 400px;
		/* border: 1px solid red; */
		margin: 0 auto;
	}
	h2{
		text-align: left;
		font-family: "microsoft yahei";
		color: #383838;
		font-size: 26px;
		font-weight: 400;
		margin-bottom: 5px;
	}
	.hotimg{
		width: 180px;
		height: 169px;
		
		margin-bottom: 15px;
	}
	.hotimg img{
		width: 180px;
		height: 135px;
	}
	.himg2{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.hotimg-inf{
		background-color: #EFEFEF;
		height: 34px;
		line-height: 34px;
	}
	.hotimg:hover{
		color: #99cc55;
		transform: translate(0,-10px);
		transition: all 0.5s; 
	}
</style>
