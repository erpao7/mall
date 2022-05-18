<template>
  <div id="app">
    <Main-Tab-Bar/>
    <router-view/>
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
</style>
