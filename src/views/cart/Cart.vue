<template>
    <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
      <cart-list></cart-list>
      <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import CartList from './childCart/CartList.vue'
import CartBottomBar from './childCart/CartBottomBar.vue'
import { mapGetters } from "vuex";
export default {
    name:'Cart',
    components:{NavBar,CartList,CartBottomBar},
    computed:{
      ...mapGetters(['cartLength','cartList'])
    }
}
</script>

<style scoped>
 .cart {
    /* height: 100vh; */
    position: relative;
  }
.nav-bar {
   background-color: #fb7299;
   color: #fff;
}

</style>