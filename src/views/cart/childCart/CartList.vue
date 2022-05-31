<template>
  <div class="cart-list">
    <by-scroll class="content" ref="scroll">
      <cart-list-item v-for="item in cartList" :key="item.index" :itemInfo="item"></cart-list-item>
    </by-scroll>
  </div>
</template>

<script>
import ByScroll from "../../../components/common/scroll/Scroll.vue";
import CartListItem from './CartListItem.vue'
import { mapGetters } from "vuex";
export default {
  name: "CartList",
  components: { ByScroll,CartListItem },
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated() {
    // console.log(11);
    this.$refs.scroll.refresh()
  },
};
</script>

<style scoped>
.cart-list {
  position: relative;
}
.content {
  height: calc(100vh - 44px - 49px - 40px);
  overflow: hidden;
}
</style>