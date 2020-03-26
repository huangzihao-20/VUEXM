<template>
<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
					<!-- <router-link :to="'/home/newsinfo'+item.id"> -->
                    <div @click="dianji(item.id)">
						<img class="mui-media-object mui-pull-left" :src="item.img">
						<div class="mui-media-body">
							<h5>{{item.title}}</h5>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{item.date|newdate}}</span>
                                <span>点击：{{item.count}}次</span>
                            </p>
						</div>
                        </div>
					<!-- </router-link> -->
				</li>		
			</ul>
</template>
<script>
export default {
    data(){
        return {
                 list:[
                     {id:1,title:'武汉火神山医院里的温情漫画',date:new Date(),count:0,img:require('../assets/1.jpg')},
                     {id:2,title:'内蒙古空中开学礼 开启新学期',date:new Date(),count:1,img:require('../assets/2.jpg')},
                     {id:3,title:'每日疫情直击：韩国“口罩荒” 民众扎堆抢购',date:new Date(),count:2,img:require('../assets/3.jpg')},
                     {id:4,title:'出鞘：从密码机看现代国家间的电信对抗',date:new Date(),count:3,img:require('../assets/4.jpg')},
                     {id:5,title:'菲律宾首都商场遭劫持人质全部获释',date:new Date(),count:4,img:require('../assets/5.jpg')}
                     ]
        }
    },
    methods:{
        dianji(id){
            this.$router.push('/home/newsinfo'+id)
        }
        },
        // filters:{
        //     newdate:function(date){
        //         var date=new Date(date);
        //         var Y=date.getFullYear().toString().padStart(2,0);
        //         var M=(date.getMonth()+1).toString().padStart(2,0);
        //         var D=date.getDate().toString().padStart(2,0);
        //         var h=date.getHours().toString().padStart(2,0);
        //         var m=date.getMinutes().toString().padStart(2,0);
        //         var s=date.getSeconds().toString().padStart(2,0);
        //         return `${Y}-${M}-${D} ${h}:${m}:${s}`
        //     }
        // }
}
</script>
<style scoped>
.mui-ellipsis{
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
}
</style>


