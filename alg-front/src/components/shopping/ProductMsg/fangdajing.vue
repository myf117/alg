<template>
	<div id="move">
		<div class="move" @mouseover="over()" @mouseout="out()" @mousemove="mousemove($event)">
			<div id="small">
				<!-- //小图片以及遮罩层容器 -->
				<div id="float"></div>
				<!-- //遮罩层 -->
				<img :src="imgUrl" id="smallimg">
				<!-- //需要放大的图片 -->
			</div>
		</div>
		<div id="big">
			<img :src="imgUrl">
			<!-- //放大以后的图片 -->
		</div>
	</div>
</template>

<script>
	var float, smallimg, big, bigImg, small, float_maxJL_t, float_maxJL_l, bigImg_maxJL_t, bigImg_maxJL_l, movebox;

	export default {
		// props: {
		// 	item: "",
			
		// },
		props:['imgUrl'],
		mounted() {
			float = document.getElementById("float"); //左侧遮罩层
			smallimg = document.getElementById("smallimg"); //左边的小图
			big = document.getElementById("big"); //右侧可视区域
			bigImg = big.getElementsByTagName("img")[0]; //右侧大图
			small = document.getElementById("small"); // 左侧的容器
			movebox = document.getElementById("move");
			//得到右侧可视区的宽高
			// console.log(big.clientWidth, big.clientHeight, bigImg.offsetWidth, bigImg.offsetHeight)
			var bigW = big.clientWidth;
			var bigH = big.clientHeight;

			//右侧大图的宽高
			var bigImgW = bigImg.offsetWidth;
			var bigImgH = bigImg.offsetHeight;

			//左侧的小图的宽高
			var smallImgW = smallimg.offsetWidth;
			var smallImgH = smallimg.offsetHeight;

			//左侧遮罩层的宽高
			float.style.width = bigW / bigImgW * smallImgW + "px";
			float.style.height = bigH / bigImgH * smallImgH + "px";

			//遮罩层运动的最大距离
			float_maxJL_l = small.clientWidth - float.offsetWidth;
			float_maxJL_t = small.clientHeight - float.offsetHeight;

			//右侧图片运动的最大距离
			bigImg_maxJL_l = bigImg.clientWidth - big.offsetWidth;
			bigImg_maxJL_t = bigImg.clientHeight - big.offsetHeight;

			big.style.display = "none";
			float.style.visibility = "hidden"; //鼠标未移入左侧区域使遮罩层以及右侧大图均不可见
		},

		methods: {
			//鼠标移入左侧区域使遮罩层以及右侧大图可见
			over: function() {
				float.style.visibility = "visible";
				big.style.visibility = "visible";
				big.style.display = "block";
			},

			//鼠标移出左侧区域使遮罩层以及右侧大图不可见
			out: function() {
				float.style.visibility = "hidden";
				big.style.display = "none";
			},

			//鼠标移动时遮罩层随鼠标的移动而移动
			mousemove: function(ev) {


				var getOffsetLeft = function(obj) {
					var tmp = obj.offsetLeft;
					var node = obj.offsetParent;
					while (node != null) {
						tmp += node.offsetLeft;
						node = node.offsetParent;
					}
					return tmp;
				}
				// console.log(getOffsetLeft(small))
				var getOffsetTop = function(obj) {
					var tmp = obj.offsetTop;
					var node = obj.offsetParent;
					while (node != null) {
						tmp += node.offsetTop;
						node = node.offsetParent;
					}
					return tmp;
				}

				let l = ev.clientX - small.offsetLeft - float.offsetWidth / 2 - (getOffsetLeft(small) - document.documentElement.scrollLeft);
				var t = ev.clientY - small.offsetTop - float.offsetHeight / 2 - (getOffsetTop(small) - document.documentElement.scrollTop);
// console.log(l,t)
				if (l < 0) l = 0; // 超出左边界赋值为0
				if (t < 0) t = 0; // 超出上边界赋值为0
				// console.log(movebox.offsetTop)
				if (l > float_maxJL_l) l = float_maxJL_l; //限制其运动范围在容器之内
				if (t > float_maxJL_t) t = float_maxJL_t;

				//求出来一个比例

				var scaleL = l / float_maxJL_l;
				var scaleT = t / float_maxJL_t;


				//遮罩层运动位置

				float.style.left = l  + "px";
				float.style.top = t + "px";

				//右侧大图运动位置
				bigImg.style.left = -scaleL * bigImg_maxJL_l + "px";
				bigImg.style.top = -scaleT * bigImg_maxJL_t + "px";
			},
		},
	}
</script>

<!-- //css样式 -->
<style lang="scss" rel="stylesheet/scss" scoped>
	#float {
		width: 120px;
		height: 120px;
		position: absolute; //必须
		background-color: #ccc;
		border: 1px solid #ccc;
		opacity: 0.5;
		cursor: move;
	}

	#big {
		position: absolute; //必须
		top: 0px;
		left: 360px;
		width: 340px;
		height: 340px;
		overflow: hidden;
		border: 1px solid #ccc;
		background: #ffffff;
		z-index: 1;
		visibility: hidden;
		margin-top: 10px;
	}

	#small {
		position: relative;
		top: 0px; //必须
		z-index: 1;

		img {
			width: 320px;
			height: 320px;
		}
	}

	#big img {
		position: absolute; //必须
		z-index: 5;
		width: 700px;
		height: 700px;
	}
</style>
