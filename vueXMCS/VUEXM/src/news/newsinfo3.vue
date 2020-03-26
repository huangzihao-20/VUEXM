<template>
    <div class="newsinfo-container">
        <h3 class="title">每日疫情直击：韩国“口罩荒” 民众扎堆抢购</h3>
        <p class="subtitle">
            <span>发表时间：{{date|newdate}}</span>
            <span>点击：2次</span>
        </p>
        <hr>
        <div class="content">
【韩国民众扎堆抢购口罩 】3月3日，人们在韩国首尔的百货商店外排队购买口罩，每人可以购买五只口罩。当日，韩国总统文在寅主持青瓦台国务会议，称“无法迅速足量供应口罩，对民众造成不便，心情沉重”，并敦促与会官员改善口罩供应不平等现象。即日起，韩国将统一调配全国2.3万个药店以统一售价供应口罩，每人限购5个。
<img src="../assets/3-1.jpg">
【“疫”线“清洁卫士”】3月2日，在湖北孝感市中心医院，清洁工人李胜堂（左）和石文勤在病区收集医疗废弃物时乘坐专用电梯。湖北省孝感市中心医院是当地收治新冠肺炎患者的主要医院之一。相较于平时，疫情期间该医院的医疗废弃物大量增加。领班工人程秀娥介绍，工人们主要负责收集、转运各病房产生的医疗废弃物，虽然每天面对高风险，但没有一个人退缩。
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
