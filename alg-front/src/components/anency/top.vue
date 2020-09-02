<template>
	<div>
		<div class="bigbox">
			<img src="../../../public/logo.png" @click="toHome">
			<div>
			<input type="text" class="search" placeholder="请输入词条/问题关键字">
			<button type="button">点击搜索</button>	
			</div>
			<img src="../../../public/youhui.jpg" alt="">
		</div>
	</div>
</template>

<script>
	export default{
		methods: {
			toHome(){
				this.$router.push("/");
			}
		},
	}
</script>

<style>
	.bigbox{
		width: 1200px;
		height: 81px;
		margin: 0 auto;
		/* border: 1px solid #000; */
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.bigbox img:first-of-type{
		width: 161px;
		height: 79px;
		cursor: pointer;
	}
	.bigbox img:nth-of-type(2){
		width: 280px;
		height: 60px;
	}
	.search{
		width: 590px;
		height: 40px;
		border: 1px solid #ccc;
		padding: 8px 10px;
		float: left;
		font: 14px/20px "Microsoft YaHei";
		color: #666;
		margin: 0;
		border-right: none;
	}
	.search:focus{
		outline: none;
		border: 1px solid green;
	}
	.bigbox button{
		width: 70px;
		height: 40px;
	}
</style>
