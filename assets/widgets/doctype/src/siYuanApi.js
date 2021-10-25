async function 向思源请求数据(url,apitoken,data){
    let resData  = null
    await fetch(url,{
        body: JSON.stringify(data),
        method:'POST',
        headers:{'Authorization': 'Token '+ apitoken },
    }).then(function(response){resData= response.json()})
    return resData
}


async function 以sql向思源请求块数据(思源伺服地址,apitoken,sql语句){
    let sqldata =  {"stmt": sql语句}  
    let url = 'http://'+思源伺服地址+'/api/query/sql'
    let 返回信息 = await 向思源请求数据(url,apitoken,sqldata)
    let 返回数据 =  返回信息["data"]
    return 返回数据
}

async function 向思源请求笔记本列表(思源伺服地址,apitoken){
    let sqldata =  {"stmt": sql语句}  
    let url = 'http://'+思源伺服地址+'/api/notebook/lsNotebooks'
    let 返回信息 = await 向思源请求数据(url,apitoken,sqldata)
    let 返回数据 =  返回信息["data"]
    return 返回数据
}

async function 获取思源块链接锚文本(思源伺服地址,apitokn,链接源文本){
    链接源文本 = 链接源文本.replace("((","").replace("))","")
    let sql = `select * from blocks where id = '${链接源文本}'`
    let 临时块属性 = await 以sql向思源请求块数据(思源伺服地址,apitokn,sql)
  //  console.log ("临时块属性",临时块属性)
    let anchor = ""                
    if (临时块属性){
        try{
        if (临时块属性[0]["name"]){anchor = 临时块属性[0]["name"]}
        else if (临时块属性[0]["content"]){anchor = 临时块属性[0]["content"]}
        else { anchor = 链接源文本 }
        }
        catch(e){anchor = "解析错误"      }        
    }
 //   console.log("锚文本",anchor)
    return anchor
}

async function 打开思源笔记本(思源伺服地址,apitokn,笔记本id){
    let data = {"notebook":笔记本id}
    let url = 'http://'+思源伺服地址+'/api/notebook/openNotebook'
    return  向思源请求数据(url,apitokn,data)
    //返回空数据
}

async function 关闭思源笔记本(思源伺服地址,apitokn,笔记本id){
    let data = {"notebook":笔记本id}
    let url = 'http://'+思源伺服地址+'/api/notebook/closeNotebook'
    return  向思源请求数据(url,apitokn,data)
    //返回空数据
}

async function 重命名思源笔记本(思源伺服地址,apitokn,笔记本id,笔记本的新名称){
    let data = {"notebook":笔记本id,"name":笔记本的新名称}
    let url = 'http://'+思源伺服地址+'/api/notebook/renameNotebook'
    return  向思源请求数据(url,apitokn,data)
    //返回空数据
}

async function 新建思源笔记本(思源伺服地址,apitokn,笔记本名称){
    let data = {"name":笔记本名称}
    let url = 'http://'+思源伺服地址+'/api/notebook/createNotebook'
    return 向思源请求数据(url,apitokn,data)
    //返回空数据
}

async function 删除思源笔记本(思源伺服地址,apitokn,笔记本id){
    let data = {"notebook":笔记本id}
    let url = 'http://'+思源伺服地址+'/api/notebook/createNotebook'
    return 向思源请求数据(url,apitokn,data)
    //返回空数据
}

async function 获取思源笔记本配置(思源伺服地址,apitokn,笔记本id){
    let data = {"notebook":笔记本id}
    let url = 'http://'+思源伺服地址+'/api/notebook/getNotebookConf'
    return 向思源请求数据(url,apitokn,data)
    //返回笔记本配置
}

async function 保存思源笔记本配置(思源伺服地址,apitokn,笔记本id){
    let data = {"notebook":笔记本id}
    let url = 'http://'+思源伺服地址+'/api/notebook/setNotebookConf'
    return 向思源请求数据(url,apitokn,data)
    //返回笔记本配置
}

async function 通过Markdown创建思源文档(思源伺服地址,apitokn,笔记本id,新文档路径,markdown){
    let data = {"notebook":笔记本id,"path":新文档路径,"markdown":markdown}
    let url = 'http://'+思源伺服地址+'/api/filetree/createDocWithMd'
    return 向思源请求数据(url,apitokn,data)
    //新笔记id
}

async function 重命名思源文档(思源伺服地址,apitokn,笔记本id,文档路径,文档新标题){
    let data = {"notebook":笔记本id,"path":文档路径,"title":文档新标题}
    let url = 'http://'+思源伺服地址+'/api/filetree/renameDoc'
    return 向思源请求数据(url,apitokn,data)
    //返回空数据
}

async function 删除思源文档(思源伺服地址,apitokn,笔记本id,文档路径){
    let data = {"notebook":笔记本id,"path":文档路径}
    let url = 'http://'+思源伺服地址+'/api/filetree/removeDoc'
    return 向思源请求数据(url,apitokn,data)
    //返回空数据
}

async function 移动思源文档(思源伺服地址,apitokn,源笔记本ID,源路径,目标笔记本ID,目标路径){
    let data = {"fromNotebook":源笔记本ID,"fromPath":源路径,"toNotebook":目标笔记本ID,"toPath":目标路径}
    let url = 'http://'+思源伺服地址+'/api/filetree/moveDoc'
    return 向思源请求数据(url,apitokn,data)
    //返回空数据
}

async function 根据思源路径获取人类可读路径(思源伺服地址,apitokn,笔记本ID,路径){
    let data = {"Notebook":笔记本ID,"Path":路径}
    let url = 'http://'+思源伺服地址+'/api/filetree/getHPathByPath'
    return 向思源请求数据(url,apitokn,data)
    //返回路径
}

//暂缺上传文件

async function 以id获取思源块属性(思源伺服地址,apitokn,内容块id){
    let data = {"id":内容块id}
    let url = 'http://'+思源伺服地址+'/api/attr/getBlockAttrs'
    let res =  await 向思源请求数据(url,apitokn,data)
    return res["data"]    //返回内容块属性
}

async function 设置思源块属性(思源伺服地址,apitokn,内容块id,属性对象){
    let data = {"id":内容块id,"attrs":属性对象}
    let url = 'http://'+思源伺服地址+'/api/attr/setBlockAttrs'
    let res =  await 向思源请求数据(url,apitokn,data)
    return res["data"]
    //返回空数据
}



async function 以id获取文档块markdown(思源伺服地址,apitokn,文档id){
    let data = {"id":文档id}
    let url = 'http://'+思源伺服地址+'/api/export/exportMdContent'
    return 向思源请求数据(url,apitokn,data)
    //文档hepath与Markdown 内容
}

async function 列出指定路径下文档(思源伺服地址,apitokn,路径){
    let data = {"path":路径}
    let url = 'http://'+思源伺服地址+'/api/filetree/listDocsByPath'
    return 向思源请求数据(url,apitokn,data)
    //文档hepath与Markdown 内容
}