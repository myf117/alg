<template>
	<!-- 我制作了前两个的移入移出点击效果 -->
	<div class="RightFloatNav">
		<div class="RightFloatNavBox">
			<ul class="sbar_oper">
				<li class="i_sbar_my" ref="acp" @mouseover="mouseOver1" @mouseleave="mouseLeave1" @click="mouseClick1" :style="active1">
					<a href="#"><i :style="active1_1"></i></a>
				</li>
				<li class="i_sbar_goods" @mouseover="mouseOver2" @mouseleave="mouseLeave2" @click="mouseClick2" :style="active2">
					<a >
						<i class="i_sbar_goods_top" :style="active2_2"></i>
						<span style="width: 12px;" :style="active2_1">购物车</span>
						<i class="i_sbar_goods_botton">{{cartNum}}</i>
					</a>
				</li>
				<li class="i_sbar_money"><a href="">
						<i></i>
						<span>资产</span></a></li>
				<li class=" i_sbar_collection"><a href=""><i></i>
						<span>收藏</span></a></li>
				<li class=" i_sbar_consult"><a href=""><i></i>
						<span>咨询</span></a></li>
				<li class=" i_sbar_app"><a href=""><i></i>
						<span>APP</span></a></li>
			</ul>
			<div class="sbar_top">
				<a href="javascript:void(0);" @click="goTop">
					<i></i>
					<span>TOP</span></li>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	import Bus from "../assets/js/Bus";
	export default {
		data: function() {
			return {
				active1: "",
				active2: "",
				active1_1: "",
				active2_1: "",
				active2_2: "",
				cartNum:0
			}
		},
		methods: {
			goTop() {
				let top = document.documentElement.scrollTop || document.body.scrollTop;
				// 实现滚动效果 
				const timeTop = setInterval(() => {
					document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
					if (top <= 0) {
						clearInterval(timeTop);
					}
				}, 10);
				// window.pageYOffset = 0; //IE9及以上使用
				// document.documentElement.scrollTop = 0; //有DTD声明 html4.0.1 xHTML1.0
				// document.body.scrollTop = 0; //没有DTD声明  html5
			},
			mouseOver1() {
				this.active1 = "background-color:rgb(255,102,102);"

			},
			mouseLeave1() {
				this.active1 = ""
			},
			mouseClick1() {
				this.$router.push('/mypage/zhuye');	
			},
			mouseOver2() {
				this.active2 = "background-color:rgb(255,102,102);"
				this.active2_1 = "color:white";
				this.active2_2 = "background-position-x:-36px ;";
			},
			mouseLeave2() {
				this.active2 = "";
				this.active2_1 = "";
				this.active2_2 = "";
			},
			mouseClick2() {
				this.$router.push("/shopcart")
			},
			getCartNum(){
				this.cartNum = 0;
				if(this.cookie.getCookie('user')){
				// console.log(1)
					this.$http.get('/showlist',{params:{
						username:this.cookie.getCookie('user')
					}}).then(res => {
						// console.log(res.data)
						for(let i = 0; i < res.data.length; i++){
							// console.log(typeof res.data[i].count)
							// console.log(this.cartNum)
							this.cartNum += res.data[i].count;
						}
						Bus.$on('shopcount',value => {
							this.cartNum = value + this.cartNum;
							console.log(this.cartNum);
						});
						Bus.$on('cartcount',value => {
							this.cartNum = value + this.cartNum;
							console.log(this.cartNum);
						});
						// console.log(this.cartNum)
						// this.$store.commit('modifyData',this.cartNum);
					})
				}
			}
		},
		mounted() {
			this.getCartNum();
		}
		// ,
		// watch: {
		// 	'cartNum'(){
		// 		this.getCartNum();
		// 	}
		// },
	}
</script>

<style>
	a {
		text-decoration: none;

	}

	.RightFloatNav {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 1002;
		width: 36px;
		height: 100%;
		background-color: #0c0c0c;
		opacity: 0.95;
		font-size: 12px;
	}

	.RightFloatNavBox {
		position: absolute;
		top: 10%;

	}

	.sbar_oper {
		padding-inline-start: 0;
	}

	.sbar_oper li {
		color: #666;
		list-style: none;
		border-bottom: 1px solid #343434;
		width: 36px;
	}

	.RightFloatNavBox i {
		display: block;
		width: 36px;
		height: 40px;
		margin: 0 0;
		cursor: pointer;
	}

	.RightFloatNavBox a span {
		display: block;
		width: 70%;
		margin: 0 auto;
		padding-bottom: 9px;
		font-size: 12px;
		text-align: center;
		color: #666;
	}


	.i_sbar_my {
		border-top: 1px solid #343434;
		background: url(../assets/sbar_ico.png) no-repeat;
		background-position: 0 0;
		height: 36px;
		width: 36px;

	}

	.i_sbar_goods_top {
		background: url(../assets/sbar_ico.png) no-repeat;
		background-position: 0 -36px;

	}

	.i_sbar_goods_botton {
		background: url(../assets/sbar_ico.png) no-repeat;
		background-position: 0 -256px;
		color: white;
		font-style: normal;
		font-weight: bold;
		line-height: 25px;
		text-align: center;
	}

	.i_sbar_money i {
		background: url(../assets/sbar_ico.png) no-repeat;
		background-position: 0 -72px;
	}

	.i_sbar_collection i {
		background: url(../assets/sbar_ico.png) no-repeat;
		background-position: 0 -108px;
	}

	.i_sbar_consult i {
		background: url(../assets/sbar_ico.png) no-repeat;
		background-position: 0 -144px;
	}

	.i_sbar_app i {
		background: url(../assets/sbar_ico.png) no-repeat;
		background-position: 0 -180px;
	}

	.sbar_top {
		background-color: #000000;
		position: fixed;
		bottom: 0;
		right: 0;
		border-top: 1px solid #343434;
		border-bottom: 1px solid #343434;
		color: #666;
		width: 36px;

	}

	.sbar_top i {
		background: url(../assets/sbar_ico.png) no-repeat;
		background-position: 0 -290px;


	}
</style>
