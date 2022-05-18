<template>
  <div class="tab-bar-item" @click="itemClick">
    <template>
      <slot name="item-icon" v-if="!isActive"></slot>
      <slot name="item-icon-active" v-else></slot>
      <!-- v-bind绑定class样式 然后用计算属性计算 -->
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </template>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
      path:String,
      activeColor:{
          type:String
      }
  },
  data() {
    return {
    //   isActive: false,
     };
  },
  methods: {
      itemClick(){
          this.$router.replace(this.path)
      }
  },
  computed:{
      isActive(){
          //判断当前path 和item里面的path是否相等
          return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle(){
          return this.isActive?{color:this.activeColor}:{}
      }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
/* .active {
  color: #d4237a;
} */
</style>