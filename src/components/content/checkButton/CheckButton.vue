<template>
  <div class="ckeck" :class="{check:isChecked}">
      <img src="../../../assets/img/common/对号.svg" alt="">
  </div>
</template>

<script>
export default {
    name:'CheckButton',
    props:{
        isChecked:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style scoped>
.ckeck {
    border-radius: 50%;
    border: 2px solid #aaa;
}
.ckeck img {
    width: 18px;
    height: 18px;
}
.check {
    border-color:red;
    background-color: red;
}
</style>