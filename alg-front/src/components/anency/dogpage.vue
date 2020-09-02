<template>
	<div>
		<h1>这里是狗狗页面</h1>
		<top></top>
		<topnav></topnav>
		<div style="text-align: left;width: 1200px;margin: 10px auto;padding-left: 40px;">
		<span @click="remain" style="cursor: pointer;">首页</span>><span style="color: #ccc;">狗狗百科</span></div>
	    <anlunbo></anlunbo>
		<animg></animg>
		<div style="width: 1200px;height: 800px; margin: 0 auto;border: 1px solid red;">
			<div style="border-bottom: 3px solid #99cc55;">
				<h2 style="font-size: 24px;">狗狗饲养</h2>
			</div>
			<div style="width: 920px;" class="antip">
				<div class="antip">
					<img src="../../../public/page.png" style="width: 15px;height: 18px;">
					<p>狗狗丢了一般会躲哪里？我们去哪里找？</p>
					<span>2020-9-5</span>
				</div>
				<div class="antip">
					<img src="../../../public/page.png" style="width: 15px;height: 18px;">
					<p>狗狗丢了一般会躲哪里？我们去哪里找？ </p><span>2020-9-5</span>
				</div>
				<div class="antip">
					<img src="../../../public/page.png" style="width: 15px;height: 18px;">
					<p>狗狗丢了一般会躲哪里？我们去哪里找？ </p><span>2020-9-5</span>
				</div>
				<div class="antip">
					<img src="../../../public/page.png" style="width: 15px;height: 18px;">
					<p>狗狗丢了一般会躲哪里？我们去哪里找？ </p><span>2020-9-5</span>
				</div>
				<div class="antip">
					<img src="../../../public/page.png" style="width: 15px;height: 18px;">
					<p>狗狗丢了一般会躲哪里？我们去哪里找？ </p><span>2020-9-5</span>
				</div>
				<div class="antip">
					<img src="../../../public/page.png" style="width: 15px;height: 18px;">
					<p>狗狗丢了一般会躲哪里？我们去哪里找？ </p><span>2020-9-5</span>
				</div>
				<div class="antip">
					<img src="../../../public/page.png" style="width: 15px;height: 18px;">
					<p>狗狗丢了一般会躲哪里？我们去哪里找？ </p><span>2020-9-5</span>
				</div>
				<div class="antip">
					<img src="../../../public/page.png" style="width: 15px;height: 18px;">
					<p>狗狗丢了一般会躲哪里？我们去哪里找？ </p><span>2020-9-5</span>
				</div>
				<div class="antip">
					<img src="../../../public/page.png" style="width: 15px;height: 18px;">
					<p>狗狗丢了一般会躲哪里？我们去哪里找？ </p><span>2020-9-5</span>
				</div>
				<div class="antip">
					<img src="../../../public/page.png" style="width: 15px;height: 18px;">
					<p>狗狗丢了一般会躲哪里？我们去哪里找？ </p><span>2020-9-5</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	 import top from "./top.vue";
	import topnav from "./topnav.vue";
	import anlunbo from "./anlunbo.vue";
	import animg from "./anhot.vue";
	export default{
		components:{
			top:top,
			topnav:topnav,
			anlunbo:anlunbo,
			animg:animg
			},
			methods:{
				remain(){
					this.$router.push("/anency")
				}
			}
		}
</script>

<style>
	.antip{
		display: flex;
		width: 420px;
		height: 38px;
		align-items: flex-end;
		/* justify-content: space-between; */
		flex-wrap: wrap;
	}
	.antip span{
		color: #999999;
		font-size: 14px;
		margin-left: 20px;
	}
</style>
