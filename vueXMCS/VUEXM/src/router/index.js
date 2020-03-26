import Vue from 'vue'
import Router from 'vue-router'
import member from '@/components/member.vue'
import shopcar from '@/components/shopcar.vue'
import search from '@/components/search.vue'
import home from '@/components/home.vue'
import newlist from '@/news/newlist.vue'
import newsinfo1 from '@/news/newsinfo1.vue'
import newsinfo2 from '@/news/newsinfo2.vue'
import newsinfo3 from '@/news/newsinfo3.vue'
import newsinfo4 from '@/news/newsinfo4.vue'
import newsinfo5 from '@/news/newsinfo5.vue'
import photoslist from '@/photos/photolist.vue'
import photoinfo from '@/photos/photoinfo.vue'
import goodslist from '@/goods/goodslist.vue'
import goodsinfo1 from '@/goods/goodsinfo1.vue'
import goodsinfo2 from '@/goods/goodsinfo2.vue'
import goodsinfo3 from '@/goods/goodsinfo3.vue'
import goodsinfo4 from '@/goods/goodsinfo4.vue'
import goodsinfo5 from '@/goods/goodsinfo5.vue'
import goodsinfo6 from '@/goods/goodsinfo6.vue'
import goodsinfo7 from '@/goods/goodsinfo7.vue'


Vue.use(Router)

export default new Router({
routes:[
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:home
    },
    {
        path:'/member',
        component:member
    },
    {
        path:'/shopcar',
        component:shopcar
    },
    {
        path:'/search',
        component:search
    },
    {
        path:'/home/newlist',
        component:newlist

    },
    {
        path:'/home/newsinfo1',
        component:newsinfo1
    },
    {
        path:'/home/newsinfo2',
        component:newsinfo2
    },
    {
        path:'/home/newsinfo3',
        component:newsinfo3
    },
    {
        path:'/home/newsinfo4',
        component:newsinfo4
    },
    {
        path:'/home/newsinfo5',
        component:newsinfo5
    },
    {
        path:'/home/photolist',
        component:photoslist
    },
    {
        path:'/home/photoinfo',
        component:photoinfo
    },
    {
        path:'/home/goodslist',
        component:goodslist
    },
    {
        path:'/home/goodsinfo1',
        component:goodsinfo1
    },
    {
        path:'/home/goodsinfo2',
        component:goodsinfo2
    },
    {
        path:'/home/goodsinfo3',
        component:goodsinfo3
    },
    {
        path:'/home/goodsinfo4',
        component:goodsinfo4
    },
    {
        path:'/home/goodsinfo5',
        component:goodsinfo5
    },
    {
        path:'/home/goodsinfo6',
        component:goodsinfo6
    },
    {
        path:'/home/goodsinfo7',
        component:goodsinfo7
    },
],
linkActiveClass:'mui-active'
})
