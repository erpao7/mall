<template>
 
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Category",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // probeType:3,
      // pullUpLoad:true,
      click:true
    });
    // this.scroll.on('scroll',(position)=>{
    //   console.log(position);
    // })
    // this.scroll.on('pullingUp',()=>{
    //   console.log('上拉加载更多');
    // })
  },
};
</script>

<style scoped>
.wrapper {
  /* height: 150px; */
  background-color: pink;
  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>