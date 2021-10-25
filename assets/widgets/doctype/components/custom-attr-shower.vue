<template>
            <div>
             <el-input 
                    v-model="属性字符串"
                    size="mini"
                    type=textarea
                    @change="设定解析后属性(属性对象)" 
                    v-if = "显示原始自定义属性&&属性对象['type']!='原始文本'"
                    clearable
                    ></el-input>
                <el-input 
                    v-model="属性对象['value']"
                    size="mini"
                    type=textarea
                    @change="设定解析后属性(属性对象)" 
                    v-if = "显示原始自定义属性&&属性对象['type']=='原始文本'"
                    clearable
                    ></el-input>
            <el-popover

            placement="right"
            title="设置"
            width="400"
            trigger="click"
            @show="初始化()"
            @hide="设定解析后属性(属性对象)"
            >
                <span slot="reference" v-if="空值" @click="空值=false;初始化();设定解析后属性(默认属性对象)">无</span>
               <div slot="reference" v-if="!空值">
                  
                    <div v-if = "!显示原始自定义属性">
                    <el-input 
                    v-model="属性对象['value']"
                    size="mini"
                    type=textarea
                    @change="设定解析后属性(属性对象)" 
                    v-if = "属性对象['type']=='原始文本'||属性对象['type']=='rawstring'"
                    slot="reference"
                    ></el-input>
                    <el-input 
                    v-model="属性对象['value']"
                    size="mini"
                    type=textarea
                    @change="设定解析后属性(属性对象)" 
                    v-if = "属性对象['type']=='string'||属性对象['type']=='文本'"
                    slot="reference"

                    ></el-input>

                    <el-image 
                    slot="reference"
                    v-model="属性对象['value']"
                    size="mini"
                    :src="属性对象['value']"
                    v-if = "属性对象['type']=='image'||属性对象['type']=='图片'"
                    ></el-image>
                                

                    <el-link 
                    slot="reference"
                    @click="窗口内打开(属性对象['value'])"
                    v-if = "属性对象['type']=='块链接'||属性对象['type']=='block-link'"
                    >
                    {{属性对象['target']}}
                    </el-link>

                    <el-link 
                    slot="reference"
                    @click="打开链接(属性对象['value'])"
                    v-if = "属性对象['type']=='超链接'||属性对象['type']=='link'"
                    >
                    {{属性对象['value']}}
                    </el-link>
                    </div>
                </div>
                <div>
                <el-select 
                v-model="属性对象['type']"
                 @change="设定解析后属性(属性对象)" 
                >

                    <el-option
                    v-for="item in 属性类型"
                    :laebl="item"
                    :value="item"
                    >
                    </el-option>
                </el-select>
                <el-input 
                v-model="属性对象['label']"
                size="mini"
                :disabled="属性对象['type']=='原始文本'||属性对象['type']=='rawstring'"
                @change="设定解析后属性(属性对象)" 
                >
                <template slot="prepend">标签</template>
                </el-input>
                <el-input 
                v-model="属性对象['value']"
                size="mini"
                type=textarea
                @change="设定解析后属性(属性对象)" 
                >
                <template slot="prepend">源</template>
                </el-input>
                </div>
            </el-popover>
            </div>
</template>
<script>
    module.exports = {
        props:["属性名","value","显示原始自定义属性","思源伺服地址","apitoken","主界面","属性类型"],
        model:{
            event:"hide",
            prop:"value"
        },
        mounted: function (){
            let that = this
           that.初始化()
        },
        data(){
            return{
                空值:false,
                真实属性值:"",
                属性标签:"",
                链接目标:"",
                显示原始字符串:false,
                属性对象:{},
                属性字符串:"",
                默认属性对象:{"value":"default","type":"原始文本","lable":"属性名"}
            }
        },
        watch:{
         属性字符串(val){
            this.解析属性值(val)
         //   this.设定解析后属性()
         },
         value(val){
             this.解析属性值(val)

         }
        },
        methods:{
            初始化:async function(){
                 let that = this
                await that.解析属性值(that.value)
                if(!that.空值){
                that.属性字符串 = JSON.stringify(that.属性对象)}
                that.$emit("change",that.属性对象)

             //   console.log(that.属性对象)

            },
            设定解析后属性(){
                let that = this
                let 属性字符串=""
                if(that.属性字符串!=""){
                that.属性字符串 = JSON.stringify( that.属性对象)}
                if( that.属性对象["type"]=="rawstring"||that.属性对象["type"]=="原始文本")
                {属性字符串 = that.属性对象["value"]}
                else {属性字符串 = that.属性字符串}
                console.log(属性字符串)
                that.$emit("hide",属性字符串)
                that.$emit("change",that.属性对象)
            },
            解析属性值:function(字符串){
                let that = this
                if (字符串){
                属性名 =  that.属性名
                let 解析属性值=
                console.log("属性名",属性名)
                 console.log("转义",字符串)
                属性字符串 =that.html转义(字符串)
                try {
                    解析属性值 = JSON.parse(属性字符串)
                    console.log("解析",解析属性值)
                        if(!解析属性值["type"]){
                            that.属性对象["type"]="原始文本"
                            that.属性对象["value"]=属性字符串
                            console.log("对象",that.属性对象["type"])
                            }
                        if(!解析属性值["label"]){that.属性对象["label"]=属性名;that.属性对象["value"]=属性字符串}
                        if(!解析属性值["value"]){that.属性对象["value"]=属性字符串}
                        else{that.属性对象=解析属性值}
                        console.log("对象",解析属性值["type"])

                    }
                     catch(e){that.属性对象 = {'label':属性名,'value':属性字符串,'type':'原始文本'}}
                    
                
                console.log("解析为",that.属性对象)
                 that.解析锚文本()
                }
                else {that.空值=true}

            },
            解析锚文本:async  function(){
                let that = this
                 if (this.属性对象["type"]=="块链接"||this.属性对象["type"]=="block-link"){
                  let target = await 获取思源块链接锚文本(that.思源伺服地址,this.apitoken,this.属性对象["value"])
                    that.$set(that.属性对象,"target",target)
                }
            //    that.属性字符串 = JSON.stringify( that.属性对象)
            },
            html转义(原始字符串){
                var 临时元素 = document.createElement("div"); 
                临时元素.innerHTML = 原始字符串; 
                var output = 临时元素.innerText || 临时元素.textContent; 
                临时元素 = null; 
              ///  console.log(output)
                return output; 
            },
            窗口内打开: function(id){
                let that = this
                id = id.replace("((","").replace("))","")
                let 虚拟链接 =  that.主界面.createElement("span")
                虚拟链接.setAttribute("data-type","block-ref")
                虚拟链接.setAttribute("data-id",id)
                let 临时目标 = that.主界面.querySelector(".protyle-wysiwyg div[data-node-id] div[contenteditable]")
              //  console.log(临时目标)
                临时目标.appendChild(虚拟链接)
                let 点击事件 =  that.主界面.createEvent('MouseEvents')
                点击事件.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                虚拟链接.dispatchEvent(点击事件);
                虚拟链接.remove()
            },
             打开链接(link){
                let that = this
                let 虚拟链接 =  that.主界面.createElement("span")
                虚拟链接.setAttribute("data-type","a")
                虚拟链接.setAttribute("data-href",link)
                let 临时目标 = that.主界面.querySelector(".protyle-wysiwyg div[data-node-id] div[contenteditable]")
              //  console.log(临时目标)
                临时目标.appendChild(虚拟链接)
                let 点击事件 =  that.主界面.createEvent('MouseEvents')
                点击事件.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                虚拟链接.dispatchEvent(点击事件);
                虚拟链接.remove()
            },
        }
    }
</script>