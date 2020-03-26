<template>
    <div class="goods-list">
        <div class="godds-item" v-for="item in list" :key="item.id" @click="dj(item.id)">
            <div class="goods-title">
            <img :src="item.img">
            <h1 class="zt">{{item.title}}</h1>
            </div>
            <div class="goods-info">
                <p class="goods-price">
                    <span class="now">{{item.nowmoney}}</span>
                    <span class="old">{{item.oldmoney}}</span>
                </p>
                <p class="goods-sell">
                    <span>热卖中</span>
                    <span class="sy">月销{{item.sy}}件</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[
                {id:1,title:'4G全网通水滴全面屏老人学生价游戏智能手机',img:'https://img.alicdn.com/imgextra/i2/457630161/O1CN01mV8PUC1D3mLo7U905_!!0-saturn_solar.jpg_240x240xz.jpg_.webp',nowmoney:'￥388',oldmoney:'￥799',sy:600},
                {id:2,title:'[顺丰包邮]中兴6.53英寸水滴全面屏智能手机',img:'https://img.alicdn.com/imgextra/i3/29286077/O1CN01Pi5mfI1ulJTO4sW50_!!0-saturn_solar.jpg_240x240xz.jpg_.webp',nowmoney:'￥398',oldmoney:'￥799',sy:500},
                {id:3,title:'正品128G大屏游戏智能手机学生4G全网通电信',img:'https://img.alicdn.com/imgextra/i3/128734767/O1CN01P09AbZ1l5KdH0nVPb_!!0-saturn_solar.jpg_240x240xz.jpg_.webp',nowmoney:'￥298',oldmoney:'￥470',sy:1646},
                {id:4,title:'vivo旗舰店官网 vivo手机 vivo旗舰店 vivo',img:'https://img.alicdn.com/imgextra/i3/31676741/O1CN01rxzsKf1zfQT7wZ1AO_!!0-saturn_solar.jpg_240x240xz.jpg_.webp',nowmoney:'￥2498',oldmoney:'￥2698',sy:1651},
                {id:5,title:'新款苹果11promax手机 iphone11promax国行',img:'https://img.alicdn.com/imgextra/i1/16593219/O1CN01lxBool1ZeLWEbrfKD_!!0-saturn_solar.jpg_240x240xz.jpg_.webp',nowmoney:'￥3580',oldmoney:'￥7000',sy:561},
                {id:6,title:'[4G全网通]纽曼 L8S军工三防老人机',img:'https://img.alicdn.com/imgextra/i2/49726536/O1CN01DFGRHi1y9XGX0CMJm_!!0-saturn_solar.jpg_240x240xz.jpg_.webp',nowmoney:'￥58',oldmoney:'￥599',sy:3123},
                {id:7,title:'朵唯X11水滴曲面屏学生价游戏智能手机女性',img:'https://img.alicdn.com/imgextra/i4/211630070/O1CN016cQNZe1CO6JXuxHbt_!!0-saturn_solar.jpg_240x240xz.jpg_.webp',nowmoney:'￥699',oldmoney:'￥2000',sy:1654}
                ]
        }
    },
    methods:{
        dj(id){
            this.$router.push('/home/goodsinfo'+id)
        }
    }
}
</script>
<style scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
}
/* .goods-item{
    width:49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 3px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;

} */
.goods-title{
    height: 210px;
    width: 175px;
    
}
img{
    width: 175px;

}
.goods-title{
    width: 175px;
    border: 1px solid #eee;
    box-shadow: 0 0 7px #eee;
}
.goods-info{
background-color: #eee;
width: 175px;
margin-bottom: 10px;
}
.now{
color: red;
font-weight: bold;
font-size: 16px;
}
.old{
text-decoration: line-through;
font-size: 12px;
margin-left: 10px;
}
p{
margin: 0;
padding: 5px;
}
.goods-sell{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
}
.zt{
    font-size: 13px;
    color: black;
}
</style>


