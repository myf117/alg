function all() {
	let canvas = document.getElementsByClassName("clockC");
	let ctx = canvas.getContext("2d");
	let deg = Math.PI / 180;
	console.log(deg)
	window.onload = function () {
		round();
	}
	//画圆
	function round() {
		setInterval(function () {

			//清屏
			canvas.width = canvas.width;
			watch();


			//画针
			//每一格的弧度 360*deg/60=6*deg
			//15:40:45
			//每一秒秒针的变化量：45*6*deg+（-90*deg）
			//每一秒分针的变化量：(40*60+45)/60*6*deg+(-90*deg);
			//每一秒时针的变化量：(15*60*60+40*60+45)/60/60*6*deg+(-90*deg);
			//获取当前时间
			let date = new Date();
			let hour = date.getHours();
			let min = date.getMinutes();
			let sec = date.getSeconds();

			let sRank = {
				x: Math.cos(sec * 6 * deg + (-90 * deg)) * 160 + 250,
				y: Math.sin(sec * 6 * deg + (-90 * deg)) * 160 + 250
			}
			//绘制秒针
			ctx.beginPath();
			ctx.moveTo(250, 250);
			ctx.lineTo(sRank.x, sRank.y);
			ctx.strokeStyle = "dodgerblue";
			ctx.lineWidth = 1;
			ctx.stroke();

			let mRank = {
				x: Math.cos((min * 60 + sec) / 60 * 6 * deg + (-90 * deg)) * 130 + 250,
				y: Math.sin((min * 60 + sec) / 60 * 6 * deg + (-90 * deg)) * 130 + 250
			}
			//绘制分针
			ctx.beginPath();
			ctx.moveTo(250, 250);
			ctx.lineTo(mRank.x, mRank.y);
			ctx.strokeStyle = "red";
			ctx.lineWidth = 3;
			ctx.stroke();

			let hRank = {
				x: Math.cos((hour * 60 * 60 + min * 60 + sec) / 60 / 60 * 6 * 5 * deg + (-90 * deg)) * 100 + 250,
				y: Math.sin((hour * 60 * 60 + min * 60 + sec) / 60 / 60 * 5 * 6 * deg + (-90 * deg)) * 100 + 250
			}
			//绘制时针
			ctx.beginPath();
			ctx.moveTo(250, 250);
			ctx.lineTo(hRank.x, hRank.y);
			ctx.strokeStyle = "blue";
			ctx.lineWidth = 5;
			ctx.stroke();

		}, 1000)
	}

	//画刻度
	function watch() {
		let img = new Image();
		img.src = "../img/logo.png"

		//画圆,加背景图
		ctx.beginPath();
		ctx.arc(250, 250, 200, 0, 2 * Math.PI);
		ctx.lineWidth = 2;
		ctx.clip(); //裁剪上面的圆形
		ctx.drawImage(img, 25, 100, 480, 300); // 在刚刚裁剪的园上画图
		ctx.stroke()
		//画一个圆心
		ctx.beginPath();
		ctx.arc(250, 250, 5, 0, 2 * Math.PI);
		ctx.fillStyle = 'beige';
		ctx.fill();


		let r1;
		let r2 = 200; //外部圆半径
		for (let i = 0; i < 60; i++) {
			let angel = i * 6 * deg + (-90 * deg);
			ctx.beginPath();
			if (i % 5 == 0) {
				r1 = 180;
				ctx.lineWidth = 3;
			} else {
				r1 = 190;
				ctx.lineWidth = 1;
			}
			//内部圆上的点
			let p1 = {
				x: Math.cos(angel) * r1 + 250,
				y: Math.sin(angel) * r1 + 250
			};
			//外部圆上的点
			let p2 = {
				x: Math.cos(angel) * r2 + 250,
				y: Math.sin(angel) * r2 + 250
			};
			ctx.moveTo(p1.x, p1.y);
			ctx.lineTo(p2.x, p2.y);
			ctx.stroke();
			let p3 = {
				x: Math.cos(angel) * (r1 - 10) + 250,
				y: Math.sin(angel) * (r1 - 10) + 250
			};

			if (i % 5 == 0) {
				if (i == 0) {
					ctx.beginPath();
					ctx.font = "12px '宋体'";
					ctx.fillStyle = "red";
					ctx.textAlign = "center";
					ctx.textBaseline = "hangins";
					ctx.fillText(12, p3.x, p3.y);
				} else {
					ctx.beginPath();
					ctx.font = "12px '宋体'";
					ctx.fillStyle = "red";
					ctx.fillText(i / 5, p3.x, p3.y);
				}
			}
		}
	}

}
export default all;