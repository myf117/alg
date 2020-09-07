<template>
  <div class="canvasdiv">
    <canvas id="canvas"></canvas>
    <div class="login-div">
      <div class="wel">欢迎来到A&LG后台管理系统！</div>
      <login></login>
    </div>
  </div>
</template>
<script>
import login from "../components/loginregist/login";

export default {
  components: {
    login,
  },
  mounted() {
    //创建对象
      //以一个圆为对象
      //设置随机的 x，y坐标，r半径，_mx，_my移动的距离
      //this.r是创建圆的半径，参数越大半径越大
      //this._mx,this._my是移动的距离，参数越大移动
    class Circle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = Math.random() * 10;
        this._mx = Math.random();
        this._my = Math.random();
      }

      //canvas 画圆和画直线
      //画圆就是正常的用canvas画一个圆
      //画直线是两个圆连线，为了避免直线过多，给圆圈距离设置了一个值，距离很远的圆圈，就不做连线处理
      drawCircle(ctx) {
        ctx.beginPath();
        
        ctx.arc(this.x, this.y, this.r, 0, 360);
        ctx.closePath();
        ctx.fillStyle = "rgba(204, 204, 204, 0.3)";
        ctx.fill();
      }

      drawLine(ctx, _circle) {
        let dx = this.x - _circle.x;
        let dy = this.y - _circle.y;
        let d = Math.sqrt(dx * dx + dy * dy);
        if (d < 150) {
          ctx.beginPath();
          
          ctx.moveTo(this.x, this.y); 
          ctx.lineTo(_circle.x, _circle.y); 
          ctx.closePath();
          ctx.strokeStyle = "rgba(204, 204, 204, 0.3)";
          ctx.stroke();
        }
      }

      // 圆圈移动
      // 圆圈移动的距离必须在屏幕范围内
      move(w, h) {
        this._mx = this.x < w && this.x > 0 ? this._mx : -this._mx;
        this._my = this.y < h && this.y > 0 ? this._my : -this._my;
        this.x += this._mx / 2;
        this.y += this._my / 2;
      }
    }

    
    class currentCirle extends Circle {
      constructor(x, y) {
        super(x, y);
      }

      drawCircle(ctx) {
        ctx.beginPath();
        this.r = 8;
        ctx.arc(this.x, this.y, this.r, 0, 360);
        ctx.closePath();
        ctx.fillStyle = "rgba(255, 77, 54, 0.6)";
        ctx.fill();
      }
    }

    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);
    let circles = [];
    let current_circle = new currentCirle(0, 0);

    let draw = function () {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < circles.length; i++) {
        circles[i].move(w, h);
        circles[i].drawCircle(ctx);
        for (let j = i + 1; j < circles.length; j++) {
          circles[i].drawLine(ctx, circles[j]);
        }
      }
      if (current_circle.x) {
        current_circle.drawCircle(ctx);
        for (var k = 1; k < circles.length; k++) {
          current_circle.drawLine(ctx, circles[k]);
        }
      }
      requestAnimationFrame(draw);
    };

    let init = function (num) {
      for (var i = 0; i < num; i++) {
        circles.push(new Circle(Math.random() * w, Math.random() * h));
      }
      draw();
    };

    window.addEventListener("load", init(60));

    window.onmousemove = function (e) {
      e = e || window.event;
      current_circle.x = e.clientX;
      current_circle.y = e.clientY;
    };

    window.onmouseout = function () {
      current_circle.x = null;
      current_circle.y = null;
    };
  },
};
</script>
<style  scoped>

.wel{
  color: #fff;
  font-size: 30px;
  font-family: "宋体";
  text-align: center;
  margin:15px auto;
}
.login-div {
  width: 450px;
  background-color: #94909094;
  margin: 0px auto;
  height: 400px;
  margin-top: 150px;
  border-radius: 10px;
  padding: 25px;
  position: absolute;
  z-index: 2;
  top: 0px;
  right: 35%;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}
.canvasdiv{
  height: 100%;
}
</style>