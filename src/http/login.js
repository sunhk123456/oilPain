import instance from '@/http/http.js'


function login(data){
    delete data.code;
    return new Promise((resolve,reject)=>{
        instance.post('/index/login',data).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    })
}

export {login}