<template>
  <div class="bottom-bar">
    <div class="check-count">
      <check-button
        class="check-button"
        :isChecked="isCheckedAll"
        @click.native="checkClick"
      ></check-button>
      <span>全选</span>
    </div>
    <div class="price">合计{{ total }}</div>
    <div class="caculate">去计算:{{ checkLength }}</div>
  </div>
</template>

<script>
import CheckButton from "../../../components/content/checkButton/CheckButton.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "CartBottomBar",
  components: { CheckButton },
  computed: {
       ...mapGetters(['cartList']),
    total() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
      );
    },
    checkLength() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
    isCheckedAll() {

    if (this.cartList.length === 0)  return false;//因为当一开始没有数据的时候是underfined !underfined=true
    //先找到有没有不被选中的长度，有就取反
    //   return !(this.cartList.filter(item=>!item.checked).length)

    //查找到不选中的时候取反
    // return !this.cartList.find(item=>!item.checked) 
    //   return this.cartList.every((item) => item.checked);

    for(let item of this.cartList){
        if(!item.checked){
            return false
        }
    }
    return true
    },
  },
  methods: {
      checkClick(){
        //   console.log(2);
        if(this.isCheckedAll){//全部选中
            this.cartList.forEach(item =>item.checked=false);
        }else{
            this.cartList.forEach(item =>item.checked=true);
        }
      }
  },
};
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  position: fixed;
  display: flex;
  bottom: 49px;
  left: 0;
  right: 0;
  background-color: #eee;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
}
.check-count {
  width: auto;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  display: flex;
}
.price {
  text-align: center;
  flex: 2;
  /*height: 40px;*/
  line-height: 40px;
}
.caculate {
  height: 40px;
  line-height: 40px;
  background-color: #fb7299;
  color: #fff;
  text-align: center;
  flex: 1;
}
</style>