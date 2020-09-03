<template>
	<div>
		<div class="bigbox">
			<img src="../../../public/logo.png" alt="" @click="toHome">
			<div>
			<input type="text" class="search" placeholder="请输入词条/问题关键字" v-model="mes">
			<button type="button" @click="searchkey" >点击搜索</button>	
			</div>
			<img src="../../../public/youhui.jpg" alt="" @click="toHome" >
		</div>
	</div>
</template>

<script>
	import Bus from "../../assets/js/Bus.js"
	export default{
		data(){
			return{
				mes:"",
				messlist:[]
			}
		},
		methods: {
			toHome(){
				this.$router.push('/');
			},
			searchkey(){
				this.$http.get("/getsearch",{params:{
					classkey:this.mes
				}}).then(res=>{
					this.messlist=res.data;
	                this.$router.push({
	                	path:"/searchpage",
	                	query:{name:this.messlist}
	                })
				}).catch(err=>{
					console.log("请求失败")
				})
				// Bus.$emit("click",this.messlist)	
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
