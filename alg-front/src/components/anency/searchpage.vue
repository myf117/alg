<template>
	<div>
		<top></top>
		<h3 style="width: 1200px;margin:0 auto; text-align: left;">为您搜索到以下内容：</h3>
		<div style="width: 1200px;margin: 0 auto;display: flex;flex-wrap:wrap ;">
            <div v-for="item in searchlist" :key="item.id" class="se-1">
				<img :src="item.pet_img" style="width: 200px;height: 200px;">
				<p class="sp-1">{{item.context}}</p>
			</div>		
		</div>

	</div>
</template>

<script>
	import top from "./top.vue";
	import Bus from "../../assets/js/Bus.js";
	export default {
		data(){
			return{
				mess:"",
				searchlist:[],
			}
		},
		components: {
			top: top,
		},
		// mounted(){
		// 	Bus.$on("click",target=>{
		// 		this.mess=target
		// 		console.log(this.mess)
		// 		this.$http.get("/getsearch",{params:{
		// 			classkey:this.mess
		// 		}}).then(res=>{
		// 			this.searchlist=res.data
		// 		}).catch(err=>{
		// 			console.log("请求失败")
		// 		})
		// 	})
		// },
		mounted (){
			
				this.searchlist=this.$route.query.name.splice(0,9)
				
			
			//console.log(this.$route.query.name)
		}
	}
</script>

<style>
.se-1{
	width: 350px;
	height: 200px;
	display: flex;
	margin-bottom: 10px;
	margin-right: 10px;
}
.sp-1{
	height: 170px;
overflow: hidden;
text-overflow: ellipsis;
display:-webkit-box;
/* -webkit-box-orient:vertical; */
-webkit-line-clamp:3;
}
</style>
