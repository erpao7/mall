import Vue from "vue";
import Vuex from "vuex"
import mutations from "./mutation";
import actions from "./action";
import getters from "./getter";
//1、安装插件
Vue.use(Vuex)

//2、创建store对象
const state = {
  cartList: []
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
export default store