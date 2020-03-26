<template>
<div class="shopcar-container">
    <div class="goods-list">
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner" v-for="item in $store.state.car" :key="item.id">
						<mt-switch v-model="$store.getters.getgoodsselected[item.id]" @change="selectchanged[item.id,$store.getters.getgoodsselected[item.id]]"></mt-switch>
						<img :src="item.img">
						<div class="info">
							<h1>{{item.title}}</h1>
							<p>
								<span class="price">{{item.price}}</span>
								<mycom :goodsid="item.id"></mycom>
								<a href="#" @click.prevent="remove(item.id)">删除</a>
							</p>
						</div>
					</div>
				</div>
			</div>
    </div>
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
							<p>总价{不含运费}</p>
							<p>已选商品<span class="red">{{this.$store.getters.getgoodscountandamount.count}}</span>件，总价<span class="red">￥{{$store.getters.getgoodscountandamount.amount}}</span></p>
						</div>
						<mt-button type="danger" style="margin-left:60px;">去结算</mt-button>
					</div>
				</div>
			</div>
    </div>
</template>
<script>
import numbox from '@/components/shopcar_numbox.vue'
export default {
    data(){
		return {
		}
	},
	components:{
		mycom:numbox
	},
	methods:{
	remove(id){
		this.$store.commit('removeformcar',id);
	},
	selectchanged(id,val){
		this.$store.commit('updategoodsselectd',{id,selected:val})
	}
	}
}
</script>
<style scoped>
.shopcar-container{
    background-color: #eee;
    overflow: hidden;
}
img{
	width: 60px;
	height: 60px;
	margin: 0 10px;
}
h1{
	font-size: 12px;
}
.price{
	color: red;
	font-size: 13px;
}
.mui-card-content-inner{
	display: flex;
	align-items: center;
}
.info{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.mui-card-content-inner jiesuan{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.red{
	color: red;
	font-size: 16px;
	font-weight: bold;
}
.left{
	width: 200px;
}
</style>