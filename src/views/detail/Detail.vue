<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav"
      @titleClick="titleClick"
      ref="nav"
    ></detail-nav-bar>
    <by-scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info
        :paramInfo="paramInfo"
        ref="params"
      ></detail-param-info>
      <detail-comment-info
        :commentInfo="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </by-scroll>
    <detail-bottom-bar></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShow" ></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from './childComps/DetailBottomBar.vue'
import BackTop from "../../components/content/backTop/BackTop.vue";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "../../network/detail";
import ByScroll from "../../components/common/scroll/Scroll.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import { itemListenerMixin } from "../../common/mixin";
import { debounce } from '../../common/utils';
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    ByScroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTops: [],
      getThemeTop:null,
      currentIndex:0,
      isShow:false,
    };
  },
  created() {
    //保存传入的iid
    this.iid = this.$route.params.iid;
    //根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      //   console.log(res);
      const data = res.result;
      //获取顶部轮播数据
      this.topImages = data.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //创建店铺信息
      this.shop = new Shop(data.shopInfo);
      //保存商品的详情数据
      this.detailInfo = data.detailInfo;
      //获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
      this.getThemeTop=debounce(()=>{
          this.themeTops=[]
        this.themeTops.push(0);
        this.themeTops.push(this.$refs.params.$el.offsetTop);
        this.themeTops.push(this.$refs.comment.$el.offsetTop);
        this.themeTops.push(this.$refs.recommend.$el.offsetTop);
        console.log(this.themeTops);
      },100)

    });
    //请求推荐数据
    getRecommend().then((res) => {
      console.log(res);
      this.recommends = res.data.list;
    });
  },
  mounted() {},
  methods: {
    imageLoad() {
      this.refresh();
      this.getThemeTop()
    },
    titleClick(index) {
      //   console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTops[index], 500);
    },
    contentScroll(position){
        // console.log(position);
        //获取y值
        const Y=-position.y
        let length=this.themeTops.length
        //和主题中值进行对比
        for (let i=0;i<length;i++) {
            if(this.currentIndex!==i&&((i<length-1&&Y>this.themeTops[i]&&Y<this.themeTops[i+1])||(i===length-1&&Y>this.themeTops[i]))){
                this.currentIndex=i
                // console.log(this.currentIndex);
                this.$refs.nav.currentIndex=this.currentIndex
            }
        }
        //是否显示回到顶部
        //判断backtop是否显示
      if(-position.y>1000){
        this.isShow=true
      }else{
        this.isShow=false
      }

    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
      // this.$refs.scroll.msg;
    },
  },
  destroyed() {
    this.$bus.$off("itemImageLoad");
    // console.log(111);
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px);
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>