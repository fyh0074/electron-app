import {defineStore} from 'pinia'
import store from 'store2'
import _ from 'lodash'

const useWebsiteStore = defineStore('websiteStore',{
    state(){
        return {
            websites:[]
        }
    },

    actions:{
        add(item){
            if(_.find(this.websites,{url:item.url})){
                myApi.alert("网站已经添加")
            }else{
                this.websites.unshift(item)
                store('websites',this.websites)
            }
        },
        init(){
            this.websites = store.get('websites')
        },
        deleteItem(url){
            //移除指定url 的元素并返回新数组
            // const result = _.dropWhile(this.websites,{url})
            // this.websites = result
            const result = this.websites.filter( (value) => {
                return value.url !== url
             })
             this.websites = result

        }
    }
})

export default useWebsiteStore