<template>
    <div class="goodsinfo-container">
				<transition
		@before-enter="beforeenter"
		@enter="enter"
		@after-enter="afterenter"
		>
		<div class="ball" v-show="xs" ref="ball"></div>
		</transition>
        <!-- 轮播图 -->
<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<mt-swipe :auto="4000">
  <mt-swipe-item><img src="https://gd1.alicdn.com/imgextra/i3/3511656384/O1CN01uoywd91x1v4d3BS4Y_!!3511656384.jpg_400x400.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="https://gd4.alicdn.com/imgextra/i4/3511656384/O1CN01kUfzES1x1v4UUG3Cw_!!3511656384.jpg_400x400.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="https://gd3.alicdn.com/imgextra/i3/3511656384/O1CN01Zuct9M1x1v4I1hbk0_!!3511656384.jpg_400x400.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="https://gd1.alicdn.com/imgextra/i1/3511656384/O1CN01rFhQjl1x1v4c7fnfl_!!3511656384.jpg_400x400.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="https://gd2.alicdn.com/imgextra/i2/3511656384/O1CN01Kh2vCl1x1v4F4e7dS_!!3511656384.jpg_400x400.jpg"></mt-swipe-item>
</mt-swipe>
					</div>
				</div>
			</div>

        <!-- 编辑商品购买 -->
			<div class="mui-card">
				<div class="mui-card-header">{{title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="goodsinfo-price">
							市场价：<del>{{oldmoney}}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{nowmoney}}</span>
						</p>
						<p>购买数量:&nbsp;&nbsp;<mycom @getcount="getselectcount"></mycom></p>
						<p>
							<mt-button type="primary" size="small">立即购买</mt-button>
							<mt-button type="danger" size="small" @click="abc">加入购物车</mt-button>
						</p>
					</div>
				</div>
			</div>
			
            <!-- 商品参数 -->
            			<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：12123123204560</p>
						<p>库存情况：60件</p>
						<p>	上架时间：{{date|newdate}}</p>						
					</div>
				</div>
				<div class="mui-card-footer">
					<mt-button class="aaa" type="primary" size="large" plain>图文介绍</mt-button>
					<mt-button class="aaa" type="danger" size="large" plain>商品评论</mt-button>					
				</div>
			</div>
			
    </div>
</template>
<script>
import goodsinfo_numbox from '@/goods/goodsinfo_numbox.vue'
export default {
    data(){
		return {
			date:new Date(),
			xs:false,
			selectcount:1,
 id:3,title:'正品128G大屏游戏智能手机学生4G全网通电信',nowmoney:'298',oldmoney:'￥470',img:'https://img.alicdn.com/imgextra/i3/128734767/O1CN01P09AbZ1l5KdH0nVPb_!!0-saturn_solar.jpg_240x240xz.jpg_.webp'
		}
	},
	components:{
		mycom:goodsinfo_numbox
	},
	methods:{
		abc(){
			this.xs=!this.xs;
			var goodsinfo={id:this.id,count:this.selectcount,price:this.nowmoney,selected:true,img:this.img,title:this.title};
			this.$store.commit('addToCar',goodsinfo);
		},
		beforeenter(el){
			el.style.transform="translate(0,0)"
		},
		enter(el,done){
			el.offsetWidth;
			const ballPosition=this.$refs.ball.getBoundingClientRect();
			const badgePosition=document.getElementById('badge').getBoundingClientRect();

			const xdist=badgePosition.left-ballPosition.left;
			const ydist=badgePosition.top-ballPosition.top;


			el.style.transform=`translate(${xdist}px,${ydist}px)`;
			el.style.transition="all 1s cubic-bezier(.4,-0.3,1,.68)";
			done();

		},
		afterenter(el){
			this.xs=!this.xs;
		},
		getselectcount(count){
			this.selectcount=count;
		}
	}
}
</script>
<style scoped>
.goodsinfo-container{
    background-color: #ccc;
    overflow: hidden;
}
.mint-swipe{
    height: 300px;
}
img{
    width: 320px;
    height: 300px;
}
.now_price{
	color: red;
	font-size: 16px;
	font-weight: bold;
}
.mui-card-footer{
	display: block;
}
.aaa{ 
	margin: 15px 0;
}
.ball{
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: red;
	position: absolute;
	z-index:99;
	top:508px;
	left:148px;
}
</style>

