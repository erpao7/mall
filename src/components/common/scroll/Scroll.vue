<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'Scroll',
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data() {
    return {
      scroll: null,
      msg:'哈',
    };
  },
    mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
      click:true
    });
    //监听滚动位置
    this.scroll.on('scroll',(position)=>{
      // console.log(position);
      this.$emit('scroll',position)
    })
    //监听上拉事件
    this.scroll.on('pullingUp',()=>{
      // console.log('上拉加载更多');
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo(x,y,time=300){
      this.scroll&&this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll&&this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll&&this.scroll.refresh()
      // console.log(11);
    }
  },
}
</script>

<style scoped>

</style>