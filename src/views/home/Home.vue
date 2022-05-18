<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- <swiper-view :banners="banners"></swiper-view> -->
    <recommend-view :recommends="recommends"></recommend-view>
    <!-- <home-feature-view :recommends="recommends"></home-feature-view> -->
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
// import SwiperView from "./childComps/Swiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
// import HomeFeatureView from "./childComps/HomeFeatureView.vue";
import { getHomeMultidata } from "../../network/home";
export default {
  name: "Home",
  components: { NavBar,RecommendView,},
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then((res) => {
      // console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.home-nav {
  background-color: #fb7299;
  color: #fff;
}
</style>