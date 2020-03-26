<template>
    <div class="newsinfo-container">
        <h3 class="title">内蒙古空中开学礼 开启新学期</h3>
        <p class="subtitle">
            <span>发表时间：{{date|newdate}}</span>
            <span>点击：1次</span>
        </p>
        <hr>
        <div class="content">
3月1日，呼和浩特市赛罕区敕勒川绿地小学学生杨艺冉在空中开学礼上与驰援武汉医疗队的妈妈进行视频通话。当日，内蒙古自治区呼和浩特市赛罕区敕勒川绿地小学举办“最好的偶像，就在当下”主题空中开学礼活动，通过线上升旗仪式、观看战疫感人视频、话说战疫英雄等环节，让学生了解战疫英雄偶像故事，感受战疫英雄偶像精神，在家里开启新学期。　　据了解，从3月2日开始，内蒙古各地中小学校开启线上教学，区别不同地域、不同学段、不同年级的学生特点，分别采取视频互动、直播、录播、点播、电视视频、音频等方式组织学生进入新学期。
<img src="../assets/2-1.jpg">
3月1日，呼和浩特市赛罕区敕勒川绿地小学学生路铭涛在空中开学礼上观看战疫视频。
<img src="../assets/2-2.jpg">
3月1日，呼和浩特市赛罕区敕勒川绿地小学学生吴玥琳在空中开学礼上和同学打招呼。
<img src="../assets/2-3.jpg">
</div>
<mycom @func="pinglun"></mycom>
        <ul class="list-group">
            <li class="list-group-item" v-for="item in list" :key="item.id">
                <span class="badge">发表人：{{item.user}}</span>
               <span>{{item.content}}</span> 
            </li>
        </ul>
    </div>
    
</template>
<script>
import comment from '@/subcomponent/comment.vue'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
export default {
    data(){
        return {
            date:new Date(),
            list:[]
        }
        },
        components:{
            mycom:comment
        },
        created(){
            this.pinglun()
        },
        methods:{
            pinglun(){
                var list=JSON.parse(localStorage.getItem('key')||'[]')
                this.list=list
            }
            }
}
</script>
<style>
.newsinfo-container{
    padding: 0 4px;
}
.title{
    margin:15px 0;
    color:red;
    font-size: 16px;
    text-align: center;
}
.subtitle{
color: #226aff;
font-size: 13px;
display: flex;
justify-content: space-between;
}
.content{
font-size: 13px;
padding: 4px;
}
img{
    width:360px;
}
.list-group-item{
    font-size: 12px;
}
ul{
    margin: 15px 0;
}
.list-group-item{
    display: flex;
    justify-content: space-between;
}
</style>
