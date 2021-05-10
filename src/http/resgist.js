import instance from '@/http/http.js'

function resgist(data){
    return new Promise((resolve,reject)=>{
        instance.post('/index/user',data).then(res=>{
            resolve(res)
        }).catch(error=>{
            reject(error)
        })
    })
}

export {resgist}
