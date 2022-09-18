<script setup>
  import {inject,ref} from 'vue'
  const {setIsShow} = inject('dialog-visible')
  const url = ref('http://www.baidu.con')
  const handleClick =  () => { 
    setIsShow(true)
  }
</script>
<template>
  <div class="search-container"> 
    <div class="button" @click="handleClick">+</div>
    <div class="input">
        <input class="" type="text" placeholder="请输入关键字...">
    </div>
  </div>
</template>
<style lang="less">
    .search-container{
        height: 60px;
        background-color: #d3d3d3;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 10px;
        .button{
          width: 40px;
          height: 40px;
          background-color: #1e90ff;
          padding-left: 0;
          border-radius: 5px;
          font-size:30px;
          font-weight: 30px;
          color:#fff;
          text-align: center;
          cursor :default
        }
        .input{
          flex: 1;
          height: 36px;
          padding: 0 10px;
          input{
            height: 100%;
            width: 100%;
            border: solid 1px #ccc;
            border-radius:5px;
            padding :0 10px;
            outline: none; //点击没有边框
          }
        }
    }
  
</style>
