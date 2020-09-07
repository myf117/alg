<template>
  <div>
    <div class="main1 clearfix">
      <div class="main_left">
        <div class="person_info">
          <div class="user_head">
            <img :src="imgurl1?imgurl1:require('../../assets/touxiang.gif')" alt style="width:120px;height:120px" />
          </div>
          <div class="nick_name">
            <a>{{username1}}</a>
          </div>
          <div class="num">
            <span>
              啵币：
              <i>0</i>
            </span>
            <span>
              积分：
              <i>0</i>
            </span>
          </div>
          <div class="info">
            <ul>
              <li>
                <a href>0</a>
                <span>日志</span>
              </li>
              <li>
                <a href>0</a>
                <span>照片</span>
              </li>
              <li>
                <a href>0</a>
                <span>啊呜</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="left_nav">
          <ul>
            <li class="current">
              <a class="icon01" href>我的主页</a>
            </li>
            <li>
              <a class="icon02" href>啊呜</a>
            </li>
            <li>
              <a class="icon03" href>宠日记</a>
            </li>
            <li>
              <a class="icon04" href>相册</a>
            </li>
            <li>
              <a class="icon14" href>百科</a>
            </li>
            <li>
              <a class="icon13" href>评论</a>
            </li>
          </ul>
          <div class="sub_title">
            <span>我的宠物</span>
          </div>
          <ul>
            <li>
              <a class="icon08" href>宠物档案</a>
            </li>
          </ul>
          <div class="sub_title">
            <span>关系</span>
          </div>
          <ul>
            <li>
              <a class="icon10" href>我的关注</a>
            </li>
          </ul>
          <ul>
            <li>
              <a class="icon10" href>我的粉丝</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="plc_main">
        <div class="main_center" id="mainCenter">
          <div class="fn_info">
            <span class="nick_name">{{username1}}</span>
            <span class="area"></span>
            <span>
              <a href>修改资料</a>
            </span>
            <span>
              <a href>设置</a>
            </span>
          </div>
          <div class="talk_box">
            <div class="hd">
              <div class="tab">
                <a class="weibo" href="#">啊呜</a>
                <a class="diary" href>宠日记</a>
              </div>
              <span class="info_word"></span>
            </div>
            <div class="send_cont">
              <input type="hidden" class="imgpad" />
							<textarea maxlength="140" name="textarea" id="bqcom1" cols="45" rows="5" v-model="toketext"></textarea>
							<i class="arr_ico"></i>
							<span class="num" id="bqtexsub">{{textnum}}/140</span>
						</div>
						<div class="send_fun">
							<div class="emot">
								<a href class="face">表情</a>
								<a href class="img3">图片</a>
							</div>
							<div class="pub">
								<input type="submit" :class="abc" name="button2" value=" " @click="tijiaoclick" @mouseover="tijiaopver"
								 @mouseleave="tijiaoleave" />
							</div>
							<div class="sync">
								<span>分享：</span>
								<a href class="qq qq_selected"></a>
								<a href class="sina sina_selected"></a>
							</div>
						</div>
					</div>
					<div class="feed_tab">
						<ul>
							<li class="current">全部动态</li>
							<li class>
								<a href>好友动态</a>
							</li>
							<li>
								<a href>与我有关</a>
							</li>
						</ul>
					</div>
					<div class="feeds">
						<div class="feed">
							<dl class="feed_list">
								<dt class="head"></dt>
								<dd class="content">
									<p class="feed_list_content">
										<span class="tips_txt" v-if="talkn">{{usetalktext}}</span>
										<span class="tips_txt" v-for="item in usetalklist" :key="item.id">
											<p>我的动态{{item.index}}：</p><br>{{item.usetalke}}
										</span>
									</p>
								</dd>
							</dl>
						</div>
					</div>
				</div>
				<div class="main_right" id>
					<div class="baike">
						<div class="hd">
							<h3>百科小知识话题</h3>
						</div>
						<div class="bd">
							<p>
								“当狗狗发烧的时候，一般会伴有精神状态下降、发蔫，饮食欲状态下降或废绝的症状。此时主人可以触摸狗狗的身体、耳朵、腋下、脚底等部位，会发现滚烫的感觉特别明显。有很多狗狗发烧时也可能会有呼吸加快、张嘴喘气、吐舌头、不停散热的表现。甚至会有意识模糊、半昏迷、半休克的表现。”
								<br />
								<br />发寒热时狗狗的嗅觉变得极差，这也是其食欲不振的一个重要因素，针对这种情况，我们可以拿些香味扑鼻的食物给它吃，勾起它的食欲。波奇网提醒您这时候别忘记狗狗可是病着呢，全身机体功效都有所降低，吃太多的肉食很可能会拉肚子。
							</p>
							<p class="source">
								----本期小知识由
								<a href>波奇广播站</a>
								分享
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username1: "",
				imgurl1: "",
				textnum: 0,
				toketext: "",
				usetalktext: "暂无动态",
				usetalklist: [{
					id: 1,
					usetalke: "你好"
				}],
				talkn: true,
				abc: "disable"
			}
		},
		created() {
			this.username1 = this.cookie.getCookie("user")
			let username = this.cookie.getCookie("user")
			this.$http
				.get("/gettouxiang", {
					params: {
						username
					}
				})
				.then((res) => {
					console.log("成功取到头像");
					console.log(res.data);
					this.imgurl1 = res.data[0].head_url;
					console.log(this.imgurl1);
				})
				.catch((err) => {
					console.log(err);
					console.log("ajax出错");
				});
			console.log(this.usetalklist.length)
		
		},
		watch: {
			toketext: function() {
				this.textnum = this.toketext.length
				if (this.textnum < 140) {
					this.textnum = this.toketext.length
				} else {
					this.textnum = 140
				}
			},
			// 监控评论条数显示是不是显示前面暂无评论
			// usetalklist1: function() {
			// 	if (this.usetalklist.length > 0) {
			// 		this.talkn = false
			// 		console.log(123)
			// 	}
			// }


		},
		methods: {
			tijiaopver() {
				this.abc = "disabler"
			},
			tijiaoleave() {
				this.abc = "disable"
			},
			tijiaoclick() {
				this.abc = "disabler"
			},

		}
	};
</script>

<style >
ul,
ol {
  list-style: none outside none;
}
/* 主体部分 */
body {
  font-size: 12px;
  font-family: tahoma, arial, "宋体", sans-serif;
  line-height: 22px;
  margin: 0;
  padding: 0;
  color: #333;
  background: url(../../assets/bg.jpg) no-repeat center top;
}
.main1 {
  width: 75%;
  margin: 0 auto;
  border: 1px solid #ebebeb;
  border-top: 2px solid #cdebf5;
  margin-top: 20px;
  background: url(../../assets/bg.jpg) no-repeat #fff;
}
.clearfix:after {
  display: block;
  font-size: 0;
  content: ".";
  clear: both;
  height: 0;
  visibility: hidden;
}

/* 左侧开始 */
.main_left {
  width: 17%;
  float: left;
  overflow: hidden;
  zoom: 1;
}
/* 个人信息 */
.person_info {
  zoom: 1;
  margin-right: 2px;
  overflow: hidden;
}
.person_info .user_head {
  width: 120px;
  height: 120px;
  margin: 23px 0 0 23px;
}
.person_info .nick_name {
  text-align: center;
  font-size: 12px;
  padding-top: 10px;
  font-weight: bold;
}
.person_info .nick_name a {
  color: #333;
}
.person_info .nick_name a {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 130px;
  width: 125px;
  margin: 0 auto;
  word-wrap: normal;
}
.person_info .num {
  text-align: center;
  padding-top: 8px;
}
.person_info .num span {
  padding: 0 2px;
}
.person_info .num span i {
  color: #fe730c;
  font-style: normal;
}
.person_info .info {
  padding-top: 10px;
  padding-left: 20px;
  height: 60px;
}
ul,
ol {
  list-style: none outside none;
}
.person_info .info li {
  float: left;
  border-right: 1px solid #ebebeb;
  width: 42px;
  text-align: center;
}
.person_info .info span {
  display: block;
}

/* 左侧导航开始 */
.left_nav {
  overflow: hidden;
  zoom: 1;
  padding-bottom: 15px;
}
.left_nav li {
  height: 35px;
  line-height: 35px;
}
.left_nav .current {
  background: url(../../assets/nav_icon.gif) no-repeat 0 -385px;
  font-weight: bolder;
}
.left_nav li a {
  text-align: left;
  display: block;
  width: 122px;
  padding-left: 47px;
  font-size: 14px;
  color: #333;
  background: url(../../assets/nav_icon.gif) no-repeat;
  height: 30px;
  padding-top: 5px;
  line-height: 25px;
  line-height: 28px\9;
  line-height: 27px;
}
.left_nav a.icon01:hover,
.left_nav .current a.icon01 {
  background-position: -153px 8px;
}
.left_nav a.icon01 {
  background-position: 17px 8px;
}
.left_nav a.icon02 {
  background-position: 17px -25px;
}
.left_nav li a:hover {
  color: #fe730c;
  text-decoration: none;
}
.left_nav a.icon03 {
  background-position: 17px -60px;
}
.left_nav a.icon04 {
  background-position: 17px -95px;
}
.left_nav a.icon08 {
  background-position: 17px -249px;
}
.left_nav a.icon10 {
  background-position: 17px -322px;
}
.left_nav a.icon14 {
  background-position: 17px -466px;
}
.left_nav a.icon13 {
  background-position: 17px -430px;
}

/* 我的宠物 */
.left_nav .sub_title {
  border: none;
  border-top: 1px solid #ebebeb;
  margin: 0;
  margin-top: 15px;
  padding-left: 13px;
  height: 35px;
  text-align: left;
}
.left_nav .sub_title span {
  font-weight: bolder;
  color: #666;
}

/* 中间开始 */
.main1 .plc_main {
  float: right;
  background: url(../../assets/right_bg.gif) no-repeat right top;
  background-color: rgb(253, 252, 250);
}
.main1 .main_center {
  width: 75%;
  float: left;
  padding: 20px 20px;
  overflow: hidden;
}
.main1 .main_right {
  float: right;
  width: 185px;
  padding: 20px 17px;
}
.fn_info {
  padding-bottom: 20px;
}
.fn_info .nick_name {
  font-size: 14px;
  font-weight: bold;
}
.fn_info span {
  padding-right: 15px;
}
.fn_info .area {
  color: #a8a8a8;
}
.fn_info span {
  padding-right: 15px;
}
.talk_box .hd {
  height: 30px;
}
.talk_box .send_fun {
  padding-top: 7px;
  width: 540px;
  overflow: hidden;
  zoom: 1;
}
.talk_box .hd .tab {
  width: 125px;
  float: right;
}
.talk_box .hd .info_word {
  float: left;
  width: 277px;
  height: 20px;
  background: url(../../assets/common_bg.png) no-repeat -50px -40px;
}
.talk_box .hd .tab a.weibo {
  background-position: -19px -65px;
  margin-right: 15px;
  color: #545454;
}
.talk_box .hd .tab a.diary {
  background-position: -19px -110px;
  color: #a8a8a8;
}
.talk_box .hd .tab a {
  width: 45px;
  height: 16px;
  padding-left: 22px;
  background: url(../../assets/common_bg.png) no-repeat;
}
.talk_box .send_cont {
  height: 70px;
  width: 540px;
  position: relative;
}
input[type="hidden" i] {
  display: none;
  appearance: initial;
  background-color: initial;
  cursor: default;
  padding: initial;
  border: initial;
}
.talk_box .send_cont textarea {
  width: 528px;
  height: 60px;
  border: 1px solid #e1e1e1;
  overflow: auto;
  padding: 5px;
  max-width: 528px;
  max-height: 60px;
  background: #ffffff;
  resize: none;
}
.talk_box .send_cont textarea:focus{
  outline: none;
}
.talk_box .send_cont .arr_ico {
  width: 15px;
  height: 10px;
  display: inline-block;
  background: url(../../assets/common_bg.png) no-repeat 0 -142px;
  position: absolute;
  top: -9px;
  right: 95px;
}
.talk_box .send_cont .num {
  position: absolute;
  bottom: 5px;
  right: 10px;
  font-weight: bold;
  color: #808080;
}
.talk_box .send_fun .emot {
  text-align: left;
  width: 320px;
  float: left;
  padding-top: 2px;
}
.talk_box .send_fun .pub {
  float: right;
  width: 68px;
}
.talk_box .send_fun .sync {
  float: right;
  width: 90px;
  height: 16px;
  line-height: 16px;
  padding-top: 5px;
}
.face {
  /* width: 25px; */
  height: 16px;
  line-height: 16px;
  display: inline-block;
  padding-left: 22px;
  background: url(../../assets/common_bg.png) no-repeat -19px -159px;
  color: #666;
  margin-right: 18px;
}
.send_fun > .emot > .img3 {
  /* width: 45px; */
  height: 16px;
  line-height: 16px;
  display: inline-block;
  padding-left: 22px;
  background: url(../../assets/common_bg.png) no-repeat -19px -183px;
  color: #666;
  margin-right: 5px;
}
.talk_box .send_fun .pub .disable,
.talk_box .send_fun .pub .disable:hover {
  background-position: 0 -250px;
  cursor: default;
}
	.disabler {
		background-position: 0 -279px;
		cursor: default;
	}

	.talk_box .send_fun .pub input {
		width: 68px;
		height: 28px;
		overflow: hidden;
		background: url(../../assets/common_bg.png) no-repeat 0 -279px;
		cursor: pointer;
		border: none;
	}

	.talk_box .send_fun .sync a.qq_selected {
		background-position: -36px -209px;
	}

	.talk_box .send_fun .sync a.qq {
		/* background-position: 0 -209px; */
		margin-right: 5px;
	}

	.talk_box .send_fun .sync a {
		width: 16px;
		height: 16px;
		display: inline-block;
		background: url(../../assets/common_bg.png) no-repeat;
		vertical-align: top;
	}

	.talk_box .send_fun .sync a.sina_selected {
		background-position: -36px -230px;
	}

/* 动态列表 */
.feed_tab {
  height: 26px;
  border-bottom: 1px solid #ebebeb;
  margin-top: 15px;
}
.feed_tab a {
  color: #333;
}
.feed_tab .current {
  border: 1px solid #ebebeb;
  border-bottom: 1px solid #fff;
  background-color: #fff;
  font-weight: bold;
}
.feed_tab li {
  background-color: #f5f4f5;
  border: 1px solid #ebebeb;
  float: left;
  height: 22px;
  line-height: 20px;
  line-height: 22px\9;
  _line-height: 20px;
  padding: 3px 12px 0 12px;
  margin-right: 2px;
  text-align: center;
  position: relative;
  margin-bottom: -1px;
}

/* 全部动态 */
.feed {
  padding: 10px 0 0 0;
  overflow: hidden;
  zoom: 1;
}
.feed .feed_list {
  overflow: hidden;
  zoom: 1;
  border-bottom: 1px dotted #e6e6e6;
  padding: 15px 0;
}
.feed_list .head {
  /* width: 60px; */
  overflow: hidden;
  /* float: left; */
  display: inline;
  padding: 3px 0 6px 0;
}
.feed_list .content {
  margin-left: 60px;
  font-size: 14px;
  line-height: 22px;
  word-wrap: break-word;
}
.feed_list .content .feed_list_content {
  line-height: 38px;
}
.feed_list .content .feed_list_content {
  font-size: 14px;
  padding-bottom: 10px;
  word-wrap: break-word;
  white-space: normal;
  overflow: hidden;
}
.feed_list .content .feed_list_content .tips_txt {
  padding: 0 8px;
  color: #a8a8a8;
}

/* 右侧开始 */
.baike {
  overflow: hidden;
  zoom: 1;
  padding-bottom: 15px;
}
.baike .hd {
  border-bottom: 1px solid #ebebeb;
  height: 28px;
}
.baike .hd h3 {
  font-size: 12px;
  float: left;
  color: #666;
}
.baike .bd {
  text-align: left;
  overflow: hidden;
  zoom: 1;
  padding-top: 10px;
}
.baike .bd .source {
  color: #a8a8a8;
  text-align: left;
  padding-top: 5px;
}
</style>