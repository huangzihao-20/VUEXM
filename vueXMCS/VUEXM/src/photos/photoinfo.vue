<template>
    <div>
        <h3>新闻标题</h3>
        <p class="subtitle">
            <span>发表时间:{{date|newdate}}</span>
            <span>点击：0次</span>
        </p>
        <hr>
<!-- <img class="preview-img" v-for="(item,index) in xlist" :key="item.id" :src="item.img" width="100" height="100" @click="$preview.open(index,xlist)">  -->
<img :id ="item.index" :src="item.img" @click="aaa(item)" v-for="item in xlist" :key="item.index" >
<hr>
        <div class="content">
 <mycom @func="pinglun"></mycom>
        <ul class="list-group">
            <li class="list-group-item" v-for="item in list" :key="item.id">
                <span class="badge">发表人：{{item.user}}</span>
               <span>{{item.content}}</span> 
            </li>
        </ul>
        </div>
    </div>
</template>
<script>
import comment from '@/subcomponent/comment.vue'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Viewer from "../../node_modules/viewerjs/dist/viewer.min.js";
import '../../node_modules/viewerjs/dist/viewer.min.css';
export default {
    data(){
        return {
            date:new Date(),
            list:[],
            xlist:[{index:1,img:require('../assets/1-1.jpg')},
            {index:2,img:require('../assets/2-1.jpg')},
            {index:3,img:require('../assets/3-1.jpg')},
            {index:4,img:require('../assets/4-1.jpg')},
            {index:5,img:require('../assets/5-1.jpg')},
            ]
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
            },
             aaa(item) {
      var viewer = new Viewer(document.getElementById(item.index), {
          url: item.img
   });
        }
}
}
</script>

<style scoped>
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
.subtitle{
color: #226aff;
font-size: 13px;
display: flex;
justify-content: space-between;
}
img{
    margin: 10px;
    box-shadow: 0 0 9px #ccc;
    width: 100px;height: 100px;
    }
</style>

