<template>
    <div class="newsinfo-container">
        <h3 class="title">出鞘：从密码机看现代国家间的电信对抗</h3>
        <p class="subtitle">
            <span>发表时间：{{date|newdate}}</span>
            <span>点击：3次</span>
        </p>
        <hr>
        <div class="content">
据德国ZDF电视台披露，CIA和前西德情报部门自上世纪七十年代以来，一直通过瑞士Crypto AG公司拦截、监视其他国家的加密通讯，Crypto AG的通讯加密机（也叫密码机）销售到了120多个国家，其中就不乏伊朗、巴基斯坦、印度、梵蒂冈这种热点国家。
<img src="../assets/4-1.jpg">
现在重要的通信，加密机是必需的。运用微型计算机进行高位加密，虽然也会被超级计算机破解，但破解时间非常长，超过了消息所需保守的期限，这就是现代密码机的价值。密码本是加密机的远古祖先，那最早的加密机是什么呢？它就是大名鼎鼎的恩尼格玛密码机。对于恩尼格玛，英国在二战宁愿牺牲考文垂这个城市，也不能让德国人怀疑恩尼格玛被破解。
<img src="../assets/4-2.jpg">
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