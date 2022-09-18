<script setup>
import { onMounted } from 'vue'
import useWebsiteStore from '../store/websiteStrore'
const websiteStrore = useWebsiteStore()

onMounted(() => {
    websiteStrore.init()
})

</script>
<template>
    <div>
        <p class="no-items" v-if="websiteStrore.websites.length <= 0">暂无数据。</p>
        <div class="items" v-else>
            <div class="read-item" v-for='ws in websiteStrore.websites'>
                <img :src="ws.screenshot" alt="ws.title" class="img" />
                <h2>{{ws.title}}</h2>
                <button class="button" @click="websiteStrore.deleteItem(ws.url)">X</button>
            </div>
        </div>

    </div>
</template>
<style lang="less" scoped>
.no-items {
    font-weight: bold;
    color: silver;
    text-align: center;
    width: 100%;
    position: absolute;
    top: 100px;
    z-index: -1;
}

.items {
    .read-item {
        display: flex;
        align-items: center;
        align-content: center;
        border-bottom: lightgray 2px solid;
        background: #fafafa;
        border-left: 10px solid lightgray;
        --webkit-user-select: nono;
        position: relative;
        padding: 10px;
        flex: 1;
        &:hover {
            background: #eee;
        }

        &:hover button {
            display: inline-block;
        }

        &:selected {
            border-left-color: dodgerblue;
        }
        .button {
            position: absolute;
            display: nono;
            right: 10px;
            top: 10px;
            width: 30px;
            background: #f44336;
            border: none;
            border-radius: 50%;
            color: white;
            text-align: center;
            font-size: 16px;
            cursor: pointer;
        }

        .img {
            width: 20%;
            margin-right: 25px;
            border: solid 1px #ccc;
        }
    }
}
</style>
