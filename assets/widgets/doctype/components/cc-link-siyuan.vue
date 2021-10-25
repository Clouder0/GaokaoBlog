<template>
    <el-link @click="窗口内打开(链接id)">{{链接锚文本}}</el-link>
</template>
<script>const vue = require("../../属性面板/static/vue")

    module.exports ={
        mounted: function(){
            let that = this
           // await  that.解析思源块链接(that.链接id)
        },
        props:["思源伺服地址","思源主界面","链接id"],
        data(){
            return{
                链接锚文本:"链接id"
            }
        },
        methods:{

            窗口内打开:function(id){
                let that = this
                id = id.replace("((","").replace("))","")
                let 虚拟链接 =  that.思源主界面.createElement("span")
                虚拟链接.setAttribute("data-type","block-ref")
                虚拟链接.setAttribute("data-id",id)
                let 临时目标 = that.思源主界面.querySelector(".protyle-wysiwyg div[data-node-id] div[contenteditable]")
               // console.log(临时目标)
                临时目标.appendChild(虚拟链接)
                let 点击事件 =  that.思源主界面.createEvent('MouseEvents')
                点击事件.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                虚拟链接.dispatchEvent(点击事件);
                虚拟链接.remove()
            },
            解析思源块链接:async function (链接id){
                let that = this
                that.链接锚文本 = await 获取思源块链接锚文本(that.思源伺服地址,that.apitoken,链接id)
                
                return that.链接锚文本
            },

        }
    }
</script>