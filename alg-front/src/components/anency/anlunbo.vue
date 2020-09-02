<template>
	<div style="background-color: #EFEFEF;padding: 20px 0;">
		<div style="width: 1200px;margin: 0 auto;display: flex;">
			<div class="block">
				<el-carousel trigger="click" height="340px">
					<el-carousel-item v-for="item in mainimg1" :key="item.id">
					<img :src="item.img" style="width: 880px;height: 340px;">
					</el-carousel-item>
				</el-carousel>
			</div>
			<div class="icon1">
				<div style="border-bottom: 2px solid #99cc55;">
					<p style="color: #99CC55;">宠物专题</p>
				</div>
				<div class="icon1-1">
					<p>狗狗聪明度排行榜TOP30全解析</p>
					<p style="font-size: 14px;color: #999999;">相信养狗的主人一定都会非常关心自家的...</p>
				</div>
				<div class="icon1-1">
					<p>室内养猫安全手册</p>
					<p style="font-size: 14px;color: #999999;">我们都知道猫咪的饲养最好的方式就是圈养...</p>
				</div>
				<div class="icon1-1">
					<p>为什么冬天仓鼠更容易便秘</p>
					<p style="font-size: 14px;color: #999999;">相寒冷的冬天，是仓鼠便秘的高发季...</p>
				</div>
				<div class="icon1-1">
					<p>观赏鱼常见疾病防治大全</p>
					<p style="font-size: 14px;color: #999999;">与野生鱼类不同，观赏鱼对于疾病的抵抗力...</p>
				</div>
			</div>
		</div>
	</div>


</template>

<script>
	export default{
		data:function(){
			return{
				mainimg1:[
					{id:1,img:require("../../assets/img/dimg3.jpg")},
					{id:2,img:require("../../assets/img/dimg2.jpg")},
					{id:3,img:require("../../assets/img/cimg.jpg")},
					{id:4,img:require("../../assets/img/simg.jpg")}
				]
			}
		}
	}
</script>

<style>
	.icon1-1 p:first-of-type:hover {
		color: #99CC55;
		cursor: pointer;
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

	.icon1 {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		text-align: left;
		width: 300px;
		margin-left: 15px;
		background-color: white;
		padding-left: 15px;
	}
</style>
