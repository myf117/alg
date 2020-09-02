<template>
	<div class="productLeft">
	                <!-- 左侧中图  -->
	                <div class="mdImg">
	                    <img :src="qall" alt="">
	                </div>
	                <!-- 遮罩层  -->
	                <div v-show="isShow" class="marks" :style="{top:top+'px',left:left+'px'}"></div>
	                <!-- 遮罩层 玻璃板 superMarks -->
	                <div v-if="isPC==false" @touchstart.prevent="enter" @touchend.prevent="leave"  @touchmove.prevent="marks" class="superMarks" ></div>
	
	                <div v-if="isPC==true" @mouseenter="enter" @mouseleave="leave"  @mousemove="marks" class="superMarks" ></div>
	
	                <div v-show="isShow" class="lgImg">
	                    <img :src="qallBig" alt="" :style="{top:topLgImg+'px',left:leftLgImg+'px'}">
	                </div>
				
	            </div>

	
</template>

<script>
	export default{
	        name : 'blog-header',
	        data(){
	            return{
	                isPC:true,
	                // 大图片
	                qall: '../../static/image/土味.jpg',
	                qallBig: '../../static/image/土味Big.jpg',
	                isShow:false,   //控制遮罩层marks和大图片是否显示"
	                left:0,       //marks左移位置
	                top:0,         //marks下移位置
	                leftLgImg:0,       //大图lgImg移动的位置
	                topLgImg:0         //大图lgImg移动的位置
	            }
	            
	        },
	        methods:{
	          //鼠标进入和离开
	        enter(){
	            this.isShow=true;
	        },
	        leave(){
	            this.isShow=false;
	        },
	        //遮罩层放大镜
	        marks(e){
	            var marksWidth=48;//marks的宽
	            var marksHeight=48;//marks的高
	           if(this.isPC==true){
	            //PC端
	                this.left=e.offsetX-marksWidth/2;   
	                this.top=e.offsetY-marksHeight/2;
	                if(this.left<0){
	                    this.left=0;
	                }else if(this.left>160){
	                    this.left=160;
	                }
	                if(this.top<0){
	                    this.top=0;
	                }else if(this.top>160){
	                    this.top=160;
	                }
	                
	                //大d图片除以小的图片的宽高
	                this.leftLgImg=-this.left*320/160;
	                this.topLgImg=-this.top*181/91;
	            }else{
	                //移动端
	                this.left=e.changedTouches[0].clientX-marksWidth/2;   
	                this.top=e.changedTouches[0].clientY-marksHeight/2;
	                if(this.left<0){
	                    this.left=0;
	                }else if(this.left>160){
	                    this.left=160;
	                }
	                if(this.top<0){
	                    this.top=0;
	                }else if(this.top>45){ 
	　　　　　　　　　　　　//45就是小图片的高度的一半，91/2
	                    this.top=45;
	                }
	                
	                //大d图片除以小的图片的宽高
	                this.leftLgImg=-this.left*320/160;
	                this.topLgImg=-this.top*181/91;
	               
	          
	            }
	
	            
	        }
	
	        },
	        mounted(){
	    if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,)) {
	        this.isPC = false; 
	      
	    } else {
	        console.log('PC端')
	
	    }
	
	
	    }
	    }
</script>

<style>
	/* 左侧大小图样式 160*91  320*181*/
	    .productLeft{
	
	        width:160px;
	        position: relative;
	
	    }
	    /* 左侧中图 */
	    .mdImg,.mdImg>img{
	        width:160px;
	        height:91px;
	        margin-left: 15px;
	    }
	    /*遮罩层superMarks */
	    .superMarks{
	        width:160px;
	        height:91px;
	        background-color:rgba(220, 220, 220, 0);
	        position:absolute;
	        top:0px;
	        left:0px;
	
	    }
	    /* 遮罩层 */
	    .marks{
	        width:48px;
	        height:48px;
	        position:absolute;
	        background-color:rgba(220, 220, 220, 0.5);
	        /*top:0px;  //内联设置了动态的top，left
	        left:0px;*/
	    }
	    
	    /* 左侧隐藏大图 */
	    .lgImg{
	        width:160px;
	        height:91px;
	        overflow: hidden;
	        position:absolute;
	        top:0px;
	        left:195px;
	        border:2px solid #aaa;
	        background-color:#fff;
	    }
	    .lgImg img{
	        width:320px;
	        height:181px;
	        position:absolute;
	        /*top:100px;
	        left:100px;*/
	    }
</style>
