<script setup>
import { inject, ref } from 'vue'
import useWebsiteStore from '../store/websiteStrore'
const { isShow, setIsShow } = inject('dialog-visible')
const websiteStrore = useWebsiteStore()
const isSubmit = ref(false)

const url = ref('https://www.baidu.com/')
const handleAddClick = async () => {
    isSubmit.value = true
    const result = await window.myApi.sendUrl(url.value)
    websiteStrore.add(result)
    isSubmit.value= false
    setIsShow(false)
}
</script>
<template>
    <div>
        <div class="dialog-wrap" v-if="isShow">
            <div class="content">
                <div class="input">
                    <input type="text" v-model="url" placeholder="请输入网址。。。" :disable="isSubmit">
                </div>
                <div class="btns">
                    <button @click="handleAddClick" :disable="isSubmit">添加</button>
                    <button @click="setIsShow(false)" :disable="isSubmit">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less">
.dialog-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0, 0, 0, 0, 8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;

    .content {
        width: 100%;
        padding: 1 20px;

        input {
            height: 30px;
            width: 100%;
            outline: none;
            margin-bottom: 10px;
            font-size: 12px;
        }

        .btns {
            button {
                height: 30px;
                margin-right: 10px;
                font-size: 12px;
                padding: 0 20px;
            }
        }
    }
}
</style>
