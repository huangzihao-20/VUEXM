<template>
<div>
<mt-swipe :auto="4000">
  <mt-swipe-item><img src="../assets/1.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="../assets/2.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="../assets/3.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="../assets/4.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="../assets/5.jpg"></mt-swipe-item>
</mt-swipe>

<ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
		                    <img src="../assets/1.png">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                    <img src="../assets/2.png">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                    <img src="../assets/3.png">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../assets/4.png">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../assets/5.png">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../assets/6.png">
		                    <div class="mui-media-body">联系我们</div></a></li>
</ul> 

</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.mint-swipe{
    height: 200px;
}
img{
    width: 375px;
	height: 200px;
}
.mui-grid-view.mui-grid-9{
    border: none;
    background-color: white;
}
.mui-table-view-cell.mui-media{
    border: none;
}
.mui-grid-view.mui-grid-9 img{
    width:60px;
    height: 60px;
}
.mui-media-body{
    font-size: 13px;
} 

</style>



