<template>
   <Tab-Bar>
       <Tab-Bar-Item path="/home" activeColor="#d4237a">
         <img slot="item-icon" src="../../../assets/img/tabbar/首页.svg" alt="" />
         <img slot="item-icon-active" src="../../../assets/img/tabbar/首页_active.svg" alt="" />
         <div slot="item-text">首页</div>
       </Tab-Bar-Item>
       <Tab-Bar-Item path="/category" activeColor="#d4237a">
         <img slot="item-icon" src="../../../assets/img/tabbar/分类.svg" alt="" />
         <img slot="item-icon-active" src="../../../assets/img/tabbar/分类_active.svg" alt="" />
         <div slot="item-text">分类</div>
       </Tab-Bar-Item>
       <Tab-Bar-Item path="/cart" activeColor="#d4237a">
         <img slot="item-icon" src="../../../assets/img/tabbar/购物车.svg" alt="" />
         <img slot="item-icon-active" src="../../../assets/img/tabbar/购物车_active.svg" alt="" />
         <div slot="item-text">购物车</div>
       </Tab-Bar-Item>
       <Tab-Bar-Item path="/profile" activeColor="#d4237a">
         <img slot="item-icon" src="../../../assets/img/tabbar/我的.svg" alt="" />
         <img slot="item-icon-active" src="../../../assets/img/tabbar/我的_active.svg" alt="" />
         <div slot="item-text">我的</div>
       </Tab-Bar-Item>
    </Tab-Bar>
</template>

<script>
import TabBar  from "../../common/tabbar/TabBar.vue";
import TabBarItem  from "../../common/tabbar/TabBarItem.vue";
export default {
    name:'MainTabBar',
    components:{TabBar,TabBarItem}
}
</script>

<style>

</style>