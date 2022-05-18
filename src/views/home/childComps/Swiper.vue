<template>
   <swiper-view>
      <swiper-item v-for="item in banners" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper-view>
</template>

<script>
 import { Swiper, SwiperItem } from "../../../components/common/swiper";
export default {
    name:'SwiperView',
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components: { Swiper, SwiperItem },
   
}
</script>

<style>

</style>