<template>
	<div>
		<div class="topnav">
			<el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect"
			 background-color="#99cc33" text-color="#fff" active-text-color="#ffd04b" router >
			 <div class="topnav-1">
				 <el-menu-item index="/anency">首页</el-menu-item>
				 <el-menu-item index="/dogpage">狗狗</el-menu-item>
				 <el-menu-item index="/catpage">猫猫</el-menu-item>
				 <el-menu-item index="/small">小宠</a></el-menu-item>
				 <el-menu-item index="/fish">水族</a></el-menu-item>
				 <el-menu-item index="6">爬虫</a></el-menu-item>
				 <el-menu-item index="7">植物</a></el-menu-item>
				 <el-menu-item index="8">测评</a></el-menu-item>
			 </div>	
			</el-menu>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1'
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				//console.log(key, keyPath);
			},
		}
		
	}
</script>
<style>
	.topnav{
		
	}
	.el-menu-demo li{
		font-size:20px;
	}
	.topnav-1{
		width: 1200px;
		margin: 0 auto;
		display: flex;
		padding-left: 20px;
	}
</style>
