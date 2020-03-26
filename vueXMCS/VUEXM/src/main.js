// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import $ from 'jquery'
import VueResource from 'vue-resource'
import VuePreview from 'vue-preview';
import Vuex from 'vuex'

Vue.use(VuePreview);
Vue.use(VueResource)
Vue.use(ElementUI);
Vue.use(MintUI)
Vue.use(Vuex)


var car=JSON.parse(localStorage.getItem('car')||'[]')
var store=new Vuex.Store({

  state:{
 car:car
  },
  mutations:{
  addToCar(state,goodsinfo){
    var flag=false
    state.car.some(item=>{
      if(item.id==goodsinfo.id){
        item.count+=parseInt(goodsinfo.count)
        flag=true
        return true
      }
    })
    if(!flag){
      state.car.push(goodsinfo);
    }
    localStorage.setItem('car',JSON.stringify(state.car));
  },
  updategoodsinfo(state,goodsinfo){
    state.car.some(item=>{
      if(item.id==goodsinfo.id){
        item.count=parseInt(goodsinfo.count)
        return true
      }
    })
    localStorage.setItem('car',JSON.stringify(state.car));
  },
  removeformcar(state,id){
    state.car.some((item,i)=>{
      if(item.id==id){
        state.car.splice(i,1)
        return true
      }
    })
    localStorage.setItem('car',JSON.stringify(state.car));
  },
  updategoodsselectd(state,info){
    state.car.some(item=>{
      if(item.id==info.id){
        item.selected=info.selected
      }
    })
    localStorage.setItem('car',JSON.stringify(state.car));
  }
  },
  getters:{
    getallcount(state){
      var c=0;
      state.car.forEach(item=>{
        c+=item.count
      })
      return c
    },
    getgoodsselected(state){
      var o ={}
      state.car.forEach(item=>{
        o[item.id]=item.selected
      })
      return o
    },
    getgoodscountandamount(state){
      var o={
        count:0,
        amount:0
      }
        state.car.forEach(item=>{
          if(item.selected)
          {
            o.count+=item.count;
            o.amount+=item.price*item.count;
          }
        })
        return o
    }
  }
})


Vue.http.options.root="http://vue.studyit.io";
Vue.http.options.emulateJSON="true";
Vue.filter('newdate',function(date){
  var date=new Date(date);
  var Y=date.getFullYear().toString().padStart(2,0);
  var M=(date.getMonth()+1).toString().padStart(2,0);
  var D=date.getDate().toString().padStart(2,0);
  var h=date.getHours().toString().padStart(2,0);
  var m=date.getMinutes().toString().padStart(2,0);
  var s=date.getSeconds().toString().padStart(2,0);
  return `${Y}-${M}-${D} ${h}:${m}:${s}`
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render:function(h){return h(App)},
  store
})
