
<template>
	<div class="anhot-1">
		<h2>热门宠物</h2>
		<div class="anhimg2">
			<div class="anhotimg" v-for="item in smallimgarr" :key="item.id">
				<img :src="item.pet_img">
				<div class="anhotimg-inf">{{item.pet_name}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				smallimgarr:[]
			}
		},
		created(){
			this.$http.get("/getClassBaike",{params:{
				class_id:3
			}}).then(res=>{
				this.smallimgarr=res.data.slice(0,12)
				// Bus.$emit('click',this.mainarr)
				//console.log(this.mainarr)
			}).catch(err=>{
				console.log("请求失败")
			})
			// Bus.$on('click',target=>{
			// 	this.mainarr=target.slice(0,12)
			// 	console.log(this.mainarr)
			// })
		}
	}
</script>

<style scoped="">
	.anhot-1{
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
	.anhotimg{
		width: 180px;
		height: 169px;
		
		margin-bottom: 15px;
	}
	.anhotimg img{
		width: 180px;
		height: 135px;
	}
	.anhimg2{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.anhotimg-inf{
		background-color: #EFEFEF;
		height: 34px;
		line-height: 34px;
	}
	.anhotimg:hover{
		color: #99cc55;
		transform: translate(0,-10px);
		transition: all 0.5s; 
	}
</style>
