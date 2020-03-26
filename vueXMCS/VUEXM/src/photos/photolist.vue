<template>
<div>
    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<!-- <a :class="['mui-control-item',item.id==0? 'mui-active':'']" v-for="item in cates" :key="item.id">
							推荐
						</a> -->
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							全部
						</a>
						<a class="mui-control-item" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
					</div>
				</div>
			</div>	
			<ul>
  <router-link v-for="item in list" :key="item.id" to="/home/photoinfo" tag="li">
    <img v-lazy="item.img">
	<div class="info-a">
		<h1 class="info-title">{{item.title}}</h1>
		<div class="info-body">{{item.content}}</div>
	</div>
  </router-link>
</ul>
</div>
</template>
<script>
import mui from '../lib/mui/js/mui.min.js'
export default {
    data(){
        return {
			// cates:[],
			list:[{id:0,img:require('../assets/1-1.jpg'),title:'武汉火神山医院里的温情漫画',content:"3月2日，武汉火神山医院病区内，一幅幅励志漫画，一首首信心满满的诗歌，让原本素色冷清的走廊变得温暖起来，也传递着白衣战士们战胜疫情的决心和勇气。"},
			      {id:1,img:require('../assets/1-2.jpg'),title:'武汉火神山医院里的温情漫画',content:"3月2日，武汉火神山医院病区内，一幅幅励志漫画，一首首信心满满的诗歌，让原本素色冷清的走廊变得温暖起来，也传递着白衣战士们战胜疫情的决心和勇气。"},
				  {id:2,img:require('../assets/1-3.jpg'),title:'武汉火神山医院里的温情漫画',content:"3月2日，武汉火神山医院病区内，一幅幅励志漫画，一首首信心满满的诗歌，让原本素色冷清的走廊变得温暖起来，也传递着白衣战士们战胜疫情的决心和勇气。"},
				  {id:3,img:require('../assets/2-1.jpg'),title:'内蒙古空中开学礼 开启新学期',content:"3月1日，呼和浩特市赛罕区敕勒川绿地小学学生杨艺冉在空中开学礼上与驰援武汉医疗队的妈妈进行视频通话。当日，内蒙古自治区呼和浩特市赛罕区敕勒川绿地小学举办“最好的偶像，就在当下”主题空中开学礼活动，通过线上升旗仪式、观看战疫感人视频、话说战疫英雄等环节，让学生了解战疫英雄偶像故事，感受战疫英雄偶像精神，在家里开启新学期。　　据了解，从3月2日开始，内蒙古各地中小学校开启线上教学，区别不同地域、不同学段、不同年级的学生特点，分别采取视频互动、直播、录播、点播、电视视频、音频等方式组织学生进入新学期。"},
				  {id:4,img:require('../assets/2-2.jpg'),title:'内蒙古空中开学礼 开启新学期',content:"3月1日，呼和浩特市赛罕区敕勒川绿地小学学生杨艺冉在空中开学礼上与驰援武汉医疗队的妈妈进行视频通话。当日，内蒙古自治区呼和浩特市赛罕区敕勒川绿地小学举办“最好的偶像，就在当下”主题空中开学礼活动，通过线上升旗仪式、观看战疫感人视频、话说战疫英雄等环节，让学生了解战疫英雄偶像故事，感受战疫英雄偶像精神，在家里开启新学期。　　据了解，从3月2日开始，内蒙古各地中小学校开启线上教学，区别不同地域、不同学段、不同年级的学生特点，分别采取视频互动、直播、录播、点播、电视视频、音频等方式组织学生进入新学期。"},
				  {id:5,img:require('../assets/2-3.jpg'),title:'内蒙古空中开学礼 开启新学期',content:"3月1日，呼和浩特市赛罕区敕勒川绿地小学学生杨艺冉在空中开学礼上与驰援武汉医疗队的妈妈进行视频通话。当日，内蒙古自治区呼和浩特市赛罕区敕勒川绿地小学举办“最好的偶像，就在当下”主题空中开学礼活动，通过线上升旗仪式、观看战疫感人视频、话说战疫英雄等环节，让学生了解战疫英雄偶像故事，感受战疫英雄偶像精神，在家里开启新学期。　　据了解，从3月2日开始，内蒙古各地中小学校开启线上教学，区别不同地域、不同学段、不同年级的学生特点，分别采取视频互动、直播、录播、点播、电视视频、音频等方式组织学生进入新学期。"},
				  {id:6,img:require('../assets/3-1.jpg'),title:'每日疫情直击：韩国“口罩荒” 民众扎堆抢购',content:"【韩国民众扎堆抢购口罩 】3月3日，人们在韩国首尔的百货商店外排队购买口罩，每人可以购买五只口罩。当日，韩国总统文在寅主持青瓦台国务会议，称“无法迅速足量供应口罩，对民众造成不便，心情沉重”，并敦促与会官员改善口罩供应不平等现象。即日起，韩国将统一调配全国2.3万个药店以统一售价供应口罩，每人限购5个。"},
				  {id:7,img:require('../assets/4-1.jpg'),title:'出鞘：从密码机看现代国家间的电信对抗',content:"据德国ZDF电视台披露，CIA和前西德情报部门自上世纪七十年代以来，一直通过瑞士Crypto AG公司拦截、监视其他国家的加密通讯，Crypto AG的通讯加密机（也叫密码机）销售到了120多个国家，其中就不乏伊朗、巴基斯坦、印度、梵蒂冈这种热点国家。"},
				  {id:8,img:require('../assets/4-2.jpg'),title:'出鞘：从密码机看现代国家间的电信对抗',content:"据德国ZDF电视台披露，CIA和前西德情报部门自上世纪七十年代以来，一直通过瑞士Crypto AG公司拦截、监视其他国家的加密通讯，Crypto AG的通讯加密机（也叫密码机）销售到了120多个国家，其中就不乏伊朗、巴基斯坦、印度、梵蒂冈这种热点国家。"},
				  {id:9,img:require('../assets/5-1.jpg'),title:'菲律宾首都商场遭劫持人质全部获释',content:"3月2日，在菲律宾圣胡安市，安保人员疏散获救民众。 菲律宾警方2日晚说，当天中午在首都马尼拉发生的劫持人质事件结束，劫持者已向警方投降，约30名人质均安全获释。"}
			]
		}
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
	},
	methods:{
		// getall(){
		// 	this.$http.get('api/getimgcategory').then(result=>{
		// 		if(result.body.status===0){
		// 			result.body.message.unshift({title:'全部',id:0});
		// 			this.cates=result.body.message;
		// 		}
		// 		else{
		// 			alert("获取数据失败");
		// 		}
		// 	})
		// }
	},
	created(){
		// this.getall();
	}
}
</script>

<style scoped>
*{
    touch-action: pan-y;
}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
ul{
	list-style: none;
	padding: 10px;
	margin: 0;
	padding-bottom: 0;
}
li{
	background-color: #ccc;
	text-align: center;
	margin-bottom: 10px;
	box-shadow: 0 0 9px #999;
	position: relative;
}
img{
	width:360px;
	vertical-align: middle;
}
.info-a{
	color: white;
	text-align: left;
	position:absolute;
	bottom: 0;
	background-color: rgba(0,0,0,0.4);
	max-height: 84px;
}
.info-title{
font-size: 14px;
}
.info-body{
font-size: 13px;
}
a:hover{
	text-decoration:none;
}
</style>

