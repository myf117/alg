<template>
	<div>
		<div class="shopbox">
			<div class="shopleft">
			<!-- 	<fangdajing class="shop-pic"></fangdajing> -->
				<!-- <vue-photo-zoom-pro class="shop-pic" url="https://img-new.boqiicdn.com/Data/Shop/0/13/1392/shoppicpath11584500251_y.jpg?imageView2/2/w/360/h/360/q/100/interlace/0"></vue-photo-zoom-pro> -->
				<div class="shop-smallPic">
					<div @mouseover="picmouseover" @mouseleave="picmouseleave">
						<img src="../assets/shoppicpath11568013747_y.jpg" :style="active">
					</div>
					<!-- <div><img src="../assets/shop/shoppicpath11590564071_y.jpg" alt=""></div>
					<div><img src="../assets/shop/shoppicpath21590564071_y.jpg" alt=""></div> -->
				</div>

			</div>
			<div class="shop-detail">
				<p>宝路Pedigree 牛肉高汤口味成犬妙鲜包 100g 狗湿粮</p>
				<li>天天特价，好货任选2件8折</li>

				<div class="money">
					<dl>波奇价：<i style="color: red;font-size: 30px;"> $3.9</i><i style="color: red;"> 波奇豆抵5%</i></dl><br>
					<dl>厂商指导价：<del style="color: #8C8C8C;">¥4.30</del></dl><br>
					<dl>促销信息：<i style="background-color: red;color: white;">多买多惠</i> <i style="color: red;"> 2件8折</i></dl>
					<br><br>
					<dl>配送至：<xiala></xiala>
					</dl>
					<dl>套装：<taocan></taocan><br></dl>
					<dl>购买数量:<el-input-number v-model="num" @change="handleChange" :min="1"  label="描述文字"></el-input-number>件
					</dl>
					<div >
						<div class="gouwu-buy" @click="goback">返回</div>
						<div class="gouwu-buy" >立即购买</div>
						<div class="gouwu-buy" @click="addToCart">加入购物车</div>
					</div>
				</div>
			</div>
			<div class="shopright">
				<rightlist></rightlist>
			</div>
			<rightfloat></rightfloat>
		</div>

	<fangdajing class="shop-pic"></fangdajing>
	</div>
</template>

<script>
	import fangdajing from "../components/shopping/ProductMsg/fangdajing";
	import xiala from "../components/shopping/ProductMsg/xiala";
	import taocan from "../components/shopping/ProductMsg/taocan";
	import rightlist from "../components/shopping/ProductMsg/rightlist";
	export default {
		components: {
			xiala,
			taocan,
			rightlist,
			fangdajing
		},
		data: function() {
			return {
				active: "",
				num: 1,
				product_id:0
			}
		},
		methods: {
			picmouseover() {
				this.active = "border: 1px solid red;"
			},
			picmouseleave() {
				this.active = ""
			},
			handleChange(value) {
				console.log(value);
			},
			goback(){
				this.$router.go(-1);
			},
			addToCart(){
				//用户是否登录
				if(this.cookie.getCookie('user')){
					this.$http.get('/addToCart',{
						params:{
							user:this.cookie.getCookie('user'),
							id:this.product_id,
							count:this.num
						}
					}).then(res => {
						console.log(res.data);
						this.$alert('添加购物车成功', '成功提示', {
							confirmButtonText: '确定'
						});
					}).catch(err => {
						console.log(err);
					})
				}else {
					this.$router.push('/loginregist/login');
				}
			}
		},
		mounted() {
			this.product_id = this.$route.query.product_id;
			console.log(this.product_id);
		}
	}
</script>

<style>
	/* .back-pre{
		color: lightgrey;
		font-size: 14px;
		cursor: pointer;
	}
	.back-pre:hover {
		color: lightsalmon;
	} */
	.shopbox {
		width: 1190px;
		margin-top: 10px;
		position: relative;
		margin: auto auto;
	}

	.shopleft {
		height: 420px;
		width: 360px;
		border: 1px solid #e6e6e6;
		padding: 19px;
	}

	.shop-pic img {
		height: 360px;
		width: 360px;
	}

	.shop-smallPic {
		padding: 10px 5px 0;
		overflow: hidden;
		height: 67px;
		width: 360px;
	}

	.shop-smallPic div {
		display: inline;


	}

	.shop-smallPic div img {
		height: 50px;
		width: 50px;
		margin-right: 10px;
		cursor: pointer
	}

	.shop-detail {

		position: absolute;
		top: 0px;
		right: 250px;
		height: 470px;
		width: 520px;
		margin-left: 20px;
	}

	.shop-detail p {
		font: 20px/28px "Microsoft YaHei";
		color: #333;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		float: left;
		margin: 0px 0px;

	}

	.shop-detail li {
		font-size: 12px;
		color: red;
		list-style: none;
		float: left;
		padding-top: 8px;
		letter-spacing: 4px;
	}

	.money {
		position: absolute;
		top: 70px;
		height: 134px;
		width: 100%;
		background-color: #fef8f6;
		border-top: 1px solid #e6e6e6;
	}

	.money dl {
		text-align: left;
		margin: 1px 5px;
		font-size: 12px;
	}

	.gouwu-buy {
		display: inline-block;
		height: 40px;
		width: 130px;
		background-color: #e53;
		text-align: center;
		color: white;
		margin-right: 20px;
		line-height: 40px;
		cursor: pointer;
	}
	

</style>
