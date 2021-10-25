<template>
    <div>
    <el-row>
     <el-col :span="6">
    <el-input-number :min="0" :max="1000" v-model ="块数量限制" size =mini></el-input-number>               
    </el-col>
    <el-col :span="6">
    <custom-attr-constructor
    v-model="列表新属性"
    :属性类型="属性类型"
    @hide="增加列表自定义属性(列表新属性)"
    ></custom-attr-constructor>
    </el-col>
   <el-col :span="6">
    <el-button @click="获取块属性列表(sql+`limit ${块数量限制}`)" size="mini">刷新</el-button>               
    </el-col>
    </el-row>
    <el-table
        :data="块属性列表"
        >
        <el-table-column  
            label="标题"
            prop="content"
            fixed
            >
            </el-table-column>
         <el-table-column  
            label="路径"
            prop="hpath"
            fixed
            >
            <template slot-scope="scope" >
                <el-link @click="窗口内打开(scope.row.id)">{{scope.row.box}}{{scope.row.hpath}}</el-link>
            </template>                
            </el-table-column>
        <el-table-column
        label="基础属性"
        v-if="显示基础属性">
            
           
            <el-table-column  
            label="命名"
            prop="name"
            >
            <template slot-scope="scope" >
                <el-input
                class = "noborder" 
                v-model="scope.row.name"
                @change="设定块属性(scope.row.id,'name',scope.row.name)"
                size = "mini"
                ></el-input>
            </template>                
            </el-table-column>
            <el-table-column  
            label="书签"
            prop="bookmark"
            >
            <template slot-scope="scope" >
                 <el-select
                        size="mini"
                        v-model="scope.row.bookmark"
                        @change="设定块属性(scope.row.id,'bookmark',scope.row.bookmark)"
                        @input="设定块属性(scope.row.id,'bookmark',scope.row.bookmark)"
                        clearable
                        >
                        <el-option
                        v-for="item in 书签列表"
                        :label="item"
                        :value="item"
                        ></el-option>
                </el-select>
            </template>                
            </el-table-column>
            <el-table-column  
            label="别名"
            prop="alias"
            >
            <template slot-scope="scope" >
                <el-input
                class = "noborder" 
                v-model="scope.row.alias"
                @change="设定块属性(scope.row.id,'alias',scope.row.alias)"
                size = "mini"
                ></el-input>
            </template>                
            </el-table-column>
             <el-table-column  
            label="备注"
            prop="memo"
            >
            <template slot-scope="scope" >
                <el-input
                class = "noborder" 
                v-model="scope.row.memo"
                @change="设定块属性(scope.row.id,'memo',scope.row.memo)"
                size = "mini"
                ></el-input>
            </template>                
            </el-table-column>
        </el-table-column>
        <el-table-column
            label="自定义属性"
            v-if="显示自定义属性">
            <template slot="header" slot-scope="scope" >
                <span>自定义属性</span>                             
            </template>
                <el-table-column  
                v-for="(item,i)  in 自定义属性名列表对象 "
                :key = "item['name']"
                :label="item['标签列表'][0]"
                :prop="item['name']"
                >
                 <template slot="header" slot-scope="scope" >

                    <el-popover 
                     placement="right"
                    title="批量设定属性值"
                    width="400"
                    @show="设定全部表头(块属性列表)"
                    trigger="click"
                    >

                    <el-divider></el-divider>
                        <div><span>属性标签</span>
                        <el-select v-model="item['属性标签']"
                        default-first-option
                        size="mini"
                        filterable
                        allow-create
                        >
                            <el-option
                            v-for =  "属性标签 in  item['标签列表']"
                            :label = "属性标签"
                            :value = "属性标签"
                            >
                            </el-option>
                        </el-select>
                        <el-button size="mini" @click="应用全部(item['name'],'label',item['属性标签'])" >应用到全部</el-button>
                        </div>

                        <div><span>属性数值</span>
                        <el-select 
                         default-first-option
                        v-model="item['属性值']"
                        size="mini"
                        filterable
                        allow-create
                        >
                            <el-option
                            v-for =  "属性值 in  item['值列表']"
                            :label = "属性值"
                            :value = "属性值"
                            >
                            </el-option>
                        </el-select>
                        <el-button size="mini" @click="应用全部(item['name'],'value',item['属性值'])" >应用到全部</el-button>
                        </div>

                        <div><span>属性类型</span>
                        <el-select 
                        v-model="item['属性类型']"
                        default-first-option
                        size="mini"
                        >
                            <el-option
                            v-for =  "属性类型 in  属性类型"
                            :label = "属性类型"
                            :value = "属性类型"
                            >
                            </el-option>
                        </el-select>
                        <el-button size="mini"  @click="应用全部(item['name'],'type',item['属性类型'])" >应用到全部</el-button>
                        </div>
                        <el-divider></el-divider>
                        <div>
                        <el-row >
                            <el-col :span="6">
                                <span>
                                <el-button @click="初始化列表自定义属性(item['name'],'初始化空值')" size="mini">初始化空值</el-button>
                                </span>
                            </el-col>
                            <el-col :span="6">
                                <span>
                                <el-button @click="初始化列表自定义属性(item['name'],'全部初始化')" size="mini">全部初始化</el-button>
                                </span>
                            </el-col>
                            
                            <el-col :span="6">
                                <span>
                                <el-button @click="删除列表自定义属性(item['name'])" size="mini">全部删除</el-button>
                                </span>
                            </el-col>
                        </el-row>
                        </div>
                        <div class="dark-on-hover fullfill" slot="reference">
                        <div>{{item['name']}}</div>  
                        <div   v-if="item['属性标签']" style="color:lightblue">{{item['属性标签']}}</div>  
                        </div>
                   </el-popover>                           
                </template>
                <template slot-scope="scope" >
                    <custom-attr-shower
                        :属性类型="属性类型"
                        :属性名="item['name']"
                        v-model="scope.row[item['name']]"
                        :显示原始自定义属性="显示原始自定义属性"
                        :思源伺服地址="hosturl"
                        :apitoken="apitoken"
                        v-if="scope.row[item['name']]"
                        @change="scope.row[item['name']+'对象']=$event"
                        @hide="设定块属性(scope.row.id,'custom-'+item['name'],scope.row[item['name']])"
                        :主界面="主界面"
                        >
                    </custom-attr-shower>
                    <el-input
                        class = "noborder" 
                        :placeholder="'无'+item['name']"
                        @focus="$set(scope.row,item['name'],'default')"
                        size = "mini"
                        v-if="!scope.row[item['name']]"
                    ></el-input>
                     
                </template>                
                </el-table-column>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>

    module.exports={
        name:"custom-block-attr-table",
        components:{
            "custom-attr-shower":"url:components/custom-attr-shower.vue",
            "custom-attr-constructor":"url:components/custom-attr-constructor.vue",
            "cc-block-attr-table":"url:components/cc-block-attr-table.vue"
        },
        props:["sql","显示基础属性","hosturl","apitoken","主界面","显示自定义属性","显示原始自定义属性","属性类型","新属性","书签列表"],
        model:{
            event:"hide",
            prop:"新属性"
        },
        mounted() {
                this.获取块属性列表(this.sql+`limit ${this.块数量限制}`)
        },
        data(){
            return{
                realsql:"",
                块数量限制:32,
                基础属性列表:[
                            {"label":"命名","value":"name"},
                            {"label":"别名","value":"alias"},
                            {"label":"备注","value":"memo"},
                            {"label":"书签","value":"bookmark"},
                            ],
                块属性列表:[],
                自定义属性名列表对象:{},
                列表新属性:this.新属性
            }
        },
        watch:{
            /*块属性列表:{
                handler(新块属性列表){
                    for (i=0;i<新块属性列表.length;i++){
                        let 属性对象 = 新块属性列表[i]
                        for(item in 属性对象){
                            
                        }
                    }
                },
                deep:true
            },*/
            sql(newsql){
                realsql=newsql+`limit ${this.块数量限制}`
                this.获取块属性列表(realsql)
            }
        },
        methods:{
            删除列表自定义属性:async function(属性名){
                let that = this
                let 块属性列表 =  that.块属性列表
                for(i=0;i<块属性列表.length;i++){
                    that.设定块属性(块属性列表[i]["id"],"custom-"+属性名,"")
                }
                that.自定义属性名列表对象[属性名] = undefined
                delete that.自定义属性名列表对象[属性名]
            },
             增加列表自定义属性:async function(新属性){
                let that = this
                let 块属性列表 =  that.块属性列表
                let 新属性名 = 新属性["name"]
                
                while (that.自定义属性名列表对象[新属性名])
                {新属性名="new"+新属性名}
                
                
                
                let 新属性对象 = {"value":新属性["value"],"label":新属性["label"],"type":新属性["type"]}
                let 新属性文本 = JSON.stringify(新属性对象)
                for(i=0;i<块属性列表.length;i++){
                    this.$set(块属性列表[i],新属性名,新属性文本)
                    await that.设定块属性(块属性列表[i]["id"],"custom-"+新属性名,新属性文本)
                    if (!that.自定义属性名列表对象[新属性名]){
                    that.$set(that.自定义属性名列表对象,新属性名,{"name":新属性名,"标签列表":[],"值列表":[],"hide":false})
                    let 属性名对象 = that.自定义属性名列表对象[新属性名]
                    属性名对象["标签列表"].push(新属性对象["label"])
                    属性名对象["值列表"].push(新属性对象["value"])
                    }
                    else{  
                        let 属性名对象 = that.自定义属性名列表对象[新属性名]
                        属性名对象["标签列表"].push(新属性对象["label"])
                        属性名对象["值列表"].push(新属性对象["value"])
                    }
                }
                await that.获取块属性列表(that.sql+`limit ${this.块数量限制}`)
                console.log(that.自定义属性名列表对象)
            },
                校验属性名(属性名){
                属性名=属性名.replace(/[^\a-\z\A-\Z0-9]/g,"")
                this.新属性名=属性名
             //   console.log(属性名)
                },
                返回属性对象:function(){
                    let realvalue={"name":this.新属性名,"value":this.新属性值,"label":this.属性标签,"type":this.新属性类型}
                //    console.log("aaaa",realvalue)
                    this.$emit("hide",JSON.parse(JSON.stringify( realvalue)))
                },
                获取块属性列表:async function (sql){
                    let that = this
                    that.块属性列表 =  await 以sql向思源请求块数据(that.hosturl,that.apitoken,sql)
                    if(that.块属性列表){
                    await that.重组自定义属性(that.块属性列表)}
                },
                重组自定义属性:async function(块列表){
                    let that = this
                    that.自定义属性名列表对象={}
                  //  console.log("块列表",块列表)
                    for(i=0;i<块列表.length;i++){
                        let 块信息 = 块列表[i]
                        let id =  块信息["id"]
                        let 临时属性对象 = await  以id获取思源块属性(that.hosturl,that.apitokn,id)
                     //console.log("临时属性对象",临时属性对象)
                        for(属性名 in 临时属性对象){
                            let 属性值 = 临时属性对象[属性名]
                            if (属性名.slice(0,6)=="custom"){
                            属性名 = 属性名.slice(7)
                            属性值 = that.html转义(属性值)
                                if(!that.自定义属性名列表对象[属性名]){
                                that.$set(that.自定义属性名列表对象,属性名,{"name":"","类型列表":[],"属性类型":"","标签列表":[],"属性标签":"","属性值":"","值列表":[],"hide":false})
                                that.自定义属性名列表对象[属性名]["name"]=属性名
                                that.$set(块列表[i],属性名,属性值)
                                }
                                else{that.$set(块列表[i],属性名,属性值)}
                            }
                            else if (属性名=="bookmark"){
                                that.$set(块列表[i],属性名,属性值)
                                }
                        }
                    }
                    for(i=0;i<块列表.length;i++) {
                        let 块信息 = 块列表[i]
                        for (自定义属性名 in that.自定义属性名列表对象){
                            if(块信息[自定义属性名]){}
                            else (this.$set(块列表[i],自定义属性名,null))
                        }    
                        
                    }
                },
                设定全部表头(块属性列表){
                    let that =this
                    console.log(块属性列表)
                    for(i=0;i<块属性列表.length;i++){
                        let 块信息=块属性列表[i]
                        for (属性名 in 块信息){
                            if (that.自定义属性名列表对象[属性名]){
                                let 属性对象 = 块信息[属性名+"对象"]
                                if(属性对象){
                                this.设定表头(属性对象,属性名)
                                console.log(属性对象,属性名)}
                            }
                        }
                    }
                },
                设定表头(对象,属性名){
                    let that = this
                    if(!that.自定义属性名列表对象[属性名]){
                                that.$set(that.自定义属性名列表对象,属性名,{"name":"","类型列表":[],"属性类型":"","标签列表":[],"属性标签":"","属性值":"","值列表":[],"hide":false})
                                that.自定义属性名列表对象[属性名]["name"]=属性名
                                }
                    let 标签列表 = Array.from(that.自定义属性名列表对象[属性名]["标签列表"])
                    标签列表.push(对象["label"]) 
                    that.自定义属性名列表对象[属性名]["标签列表"]=Array.from(new Set(标签列表))

                    let 值列表= Array.from(that.自定义属性名列表对象[属性名]["值列表"])
                    值列表.push(对象["value"]) 
                    that.自定义属性名列表对象[属性名]["值列表"]=Array.from(new Set(值列表))

                    let 类型列表= Array.from(that.自定义属性名列表对象[属性名]["类型列表"])
                    类型列表.push(对象["type"])
                    that.自定义属性名列表对象[属性名]["类型列表"]=Array.from(new Set(类型列表))
                    console.log(标签列表,值列表,类型列表)
                },
                窗口内打开:async function(id){
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
                设定块属性:async function (id,属性名,属性值){
                    let that =  this
                    let 临时属性对象= {}
                    console.log(属性值)
                    临时属性对象[属性名]=属性值
                    await 设置思源块属性(that.hosturl,that.apitoken,id,临时属性对象)
                },
                 html转义(原始字符串){
                    var 临时元素 = document.createElement("div"); 
                    临时元素.innerHTML = 原始字符串; 
                    var output = 临时元素.innerText || 临时元素.textContent; 
                    临时元素 = null; 
                ///  console.log(output)
                    return output; 
                },
                应用全部(属性名,属性选项名,属性选项值){
                    let 块属性列表= this.块属性列表
                    for (i=0;i<this.块属性列表.length;i++){
                        let id = this.块属性列表[i]["id"]
                        let 属性对象 = this.块属性列表[i][属性名+'对象'] 
                        if(属性对象){
                        属性对象[属性选项名]=属性选项值
                        this.块属性列表[i][属性名] =JSON.stringify(属性对象)
                       // console.log(id,this.块属性列表[i])
                        }
                    }
                },
                初始化列表自定义属性(属性名,选项){
                    let 源属性对象= JSON.parse(JSON.stringify(this.自定义属性名列表对象[属性名]))
                    let 属性对象 ={"label":源属性对象["标签"],"type":源属性对象["属性类型"],"value":源属性对象["属性值"]}
                    console.log('初始化为',属性对象)
                    if(!属性对象["label"]){属性对象["label"]=属性名}
                    if(!属性对象["type"]){属性对象["type"]="原始文本"}
                    if(!属性对象["value"]){属性对象["value"]="default"}
                    for (i=0;i<this.块属性列表.length;i++){
                        if(选项=="全部初始化"){this.块属性列表[i][属性名] =JSON.stringify(属性对象)}
                        else if (选项=="初始化空值"&&!this.块属性列表[i][属性名]){
                        this.块属性列表[i][属性名] =JSON.stringify(属性对象)}
                        }
                }
        }
    }
</script>
<style>
    div.dark-on-hover:hover {
        background-color: rgba(128, 128, 128, 0.329);
    } 
    div.fullfill{
        margin: 0;
        padding:0;
    }  
</style>