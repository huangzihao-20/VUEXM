<template>
    <div class="newsinfo-container">
        <h3 class="title">武汉火神山医院里的温情漫画</h3>
        <p class="subtitle">
            <span>发表时间：{{date|newdate}}</span>
            <span>点击：0次</span>
        </p>
        <hr>
        <div class="content">
3月2日，武汉火神山医院病区内，一幅幅励志漫画，一首首信心满满的诗歌，让原本素色冷清的走廊变得温暖起来，也传递着白衣战士们战胜疫情的决心和勇气。
<img src="../assets/1-1.jpg">
武汉火神山医院病区内，一幅幅励志漫画，一首首信心满满的诗歌，让原本素色冷清的走廊变得温暖起来，也传递着白衣战士们战胜疫情的决心和勇气。图为一名医务人员利用工作间隙在自己的防护服上作画.
<img src="../assets/1-2.jpg">
<img src="../assets/1-3.jpg">
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
