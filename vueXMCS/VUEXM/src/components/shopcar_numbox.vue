<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9' style="height:25px;width:110px;">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
</template>
<script>
import mui from '../lib/mui/js/mui.min.js'
export default {
    mounted(){
        mui('.mui-numbox').numbox()
    },
    methods:{
        countChanged(){
            this.$store.commit('updategoodsinfo',{
                id:this.goodsid,
                count:this.$refs.numbox.value
            })
        }
    },
    props:['goodsid']
}
</script>
<style scoped>

</style>