<template>
    <div class="newsinfo-container">
        <h3 class="title">菲律宾首都商场遭劫持人质全部获释</h3>
        <p class="subtitle">
            <span>发表时间：{{date|newdate}}</span>
            <span>点击：4次</span>
        </p>
        <hr>
        <div class="content">

3月2日，在菲律宾圣胡安市，安保人员疏散获救民众。 菲律宾警方2日晚说，当天中午在首都马尼拉发生的劫持人质事件结束，劫持者已向警方投降，约30名人质均安全获释。
<img src="../assets/5-1.jpg">
经过10个小时左右的相持以及谈判，劫持者已交出武器、向警方投降，约30名人质均安全获释。图为3月2日，在菲律宾圣胡安市，安保人员疏散获救民众。
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