<template>
  <div id="app">
    <Main-Tab-Bar class="tabbar"/>
    <keep-alive>
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar  from "./components/content/MainTabBar/MainTabBar.vue";
export default {
  name:'app',
  components:{MainTabBar}
}
</script>

<style>
@import url(./assets/css/base.css);
.tabbar {
  z-index: 9;
}
</style>
