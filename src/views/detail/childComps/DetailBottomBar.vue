<template>
  <div class="bottom-bar">
       <div class="bar-item bar-left">
      <div>
        <div class="img"><img src="../../../assets/img/detail/客服.svg" alt=""></div>
        <span class="text">客服</span>
      </div>
      <div>
        <div class="img"><img src="../../../assets/img/detail/店铺.svg" alt=""></div>
        <span class="text">店铺</span>
      </div>
      <div>
          <div class="img"><img src="../../../assets/img/detail/收藏.svg" alt=""></div>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addCar">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
    name:'DetailBottomBar',
    methods: {
      addCar(){
        this.$emit('addCart')
      }
    },
}
</script>

<style scoped>
.bottom-bar {
    height: 58px;
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: -4px;
    display: flex;
    text-align: center;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
    /*position: relative;*/
    /*bottom: 49px;*/
  }
  .bar-item {
    flex: 1;
    display: flex;
  }
  .bar-item>div {
    flex: 1;
  }
  .bar-left .text {
    font-size: 13px;
  }
  .bar-left .img {
    display: block;
    width: 22px;
    height: 22px;
    margin: 6px auto 3px;
    background-size: 100%;
  }
  .bar-left .service {
    background-position: 0 -54px;
  }
  .bar-left .shop {
    background-position: 0 -98px;
  }
  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }
  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
  }
  .bar-right .buy {
    background-color: #f69;
  }
  .img img{
      width: 100%;
  }
</style>