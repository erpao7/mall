<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
          :titles="['流行', '新款', '精选']"
          @tabClick="tabClick"
          ref="tabControl1"
          class="tab-control"
          v-show="isTabFixed"
        ></tab-control>
    <by-scroll class="content"
     ref="scroll" 
     :probe-type="3"
     @scroll="contentScroll"
     :pull-up-load="true"
     @pullingUp="loadMore">

      <home-swiper :banners="banners" @imageLoad="imageLoad"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control
          :titles="['流行', '新款', '精选']"
          @tabClick="tabClick"
          ref="tabControl2"
        ></tab-control>
        <goods-list :goods="showGoods"></goods-list>
    </by-scroll>
    <!-- .native实现监听组件原生事件 -->
    <back-top @click.native="backClick" v-show="isShow" ></back-top>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import ByScroll from "../../components/common/scroll/Scroll.vue";
import TabControl from "../../components/content/tabControl/TabControl.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import BackTop from "../../components/content/backTop/BackTop.vue";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import { getHomeMultidata, getHomeGoods } from "../../network/home";
import { debounce } from "@/common/utils";
export default {
  name: "Home",
  components: {
    NavBar,
    RecommendView,
    FeatureView,
    HomeSwiper,
    TabControl,
    GoodsList,
    ByScroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow:false,
      tabOffsetTop:0,
      isTabFixed:false
    };
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh=debounce(this.$refs.scroll.refresh,200)
    //使用全局事件总线监听gooditem里面图片加载完成
    this.$bus.$on('itemImageLoad',()=>{
      //console.log(11);  //直接执行refresh，refresh会被执行30次 ，可以将refresh传入防抖debounce函数中，生成一个新的函数
      // this.scroll&&this.$refs.scroll.refresh()
      refresh()
    })

  },
  
  methods: { 
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
      });
    },
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex=index
      this.$refs.tabControl2.currentIndex=index
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
      // this.$refs.scroll.msg;
    },
    contentScroll(position){
      // console.log(position);
      //判断backtop是否显示
      if(-position.y>1000){
        this.isShow=true
      }else{
        this.isShow=false
      }
      //判断tabcontrol是否吸顶（position:fixed）
      this.isTabFixed=(-position.y)>this.tabOffsetTop
    },
    loadMore(){
      //  console.log('上拉加载更多');
      this.getHomeGoods(this.currentType)
    },
    imageLoad(){
    //获取tabControl的offsetTop
    this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
    }
    
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: #fb7299;
  color: #fff;
  /* 浏览器原生滚动，为了不让导航跟着一起滚动 */
  /* position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9; */
}

.content {
  /* height: 300px; */
  overflow: hidden;
  position: absolute;
  top:44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control {
  position: relative;
  z-index: 9;
}
/* .content {
  height:calc(100vh-93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>