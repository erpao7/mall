<template>
  <div>
    <nav-bar class="navclass">
      <div slot="left" class="left" @click="backClick">
          <img src="../../../assets/img/common/返回.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="item.index"
          class="title-item"
          :class="{ active: index === currentIndex }"
          @click="tabclick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",
  components: { NavBar },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    tabclick(index) {
      this.currentIndex = index;
      this.$emit('titleClick',index)
    },
    backClick(){
        this.$router.go(-1)
    }
  },
};
</script>

<style scoped>
.navclass {
  z-index: 10;
}
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.left img {
    width: 30%;
    margin-top: 13px;
}
</style>