<script setup>
import { ref, provide } from 'vue';
import Home from './views/Home.vue';
//窗口显示的状态
const isShow = ref(false)
const setIsShow = (value) => {
  isShow.value = value
}
provide('dialog-visible', {
  isShow,
  setIsShow
})

</script>
<template>
  <div>
    <Home></Home>
  </div>
</template>
<style lang="css">

</style>
