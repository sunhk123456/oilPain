import instance from "./http";
import store from "@/store";
function apiSave() {
    return  new Promise(function (resolve,reject) {
        instance.post('api/detail').then(res=>{

            resolve(res);


        }).catch(error=>{
            reject(error);
        })
    })


}
function apiIndex() {



}
function apiUpdate() {


}
function apiRead(sid) {
    return  new Promise(function (resolve,reject) {
        instance.get('api/detail/'+sid).then(res=>{


            resolve(res);


        }).catch(error=>{
            reject(error);
        })
    })


}
function apiDelete() {


}
function apiList(params) {
    return  new Promise(function (resolve,reject) {
        instance.get('api/lists',
            {params}
       ).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    })


}
function apiResgist(params) {
    return  new Promise(function (resolve,reject) {
        instance.post('api/user',
            params
        ).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    })
}
function apiLogin(params) {
    return  new Promise(function (resolve,reject) {
        instance.post('api/login',params

        ).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    })
}
function apiCollection(data) {
    return  new Promise(function (resolve,reject) {
        // let token =
        resolve,reject
        let token =store.state.token;
        // console.log(token);
        instance.post('api/collection/',
            {token,data}
        ).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    })
}
function apiPerson() {
    return  new Promise(function (resolve,reject) {
        // let token =
        resolve,reject
        instance.get('api/user/1',

        ).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    })
}
function apiCollectionRead(data) {
    return  new Promise(function (resolve,reject) {
        // console.log(data);
        instance.get('api/collection/'+data,{

            }
        ).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    })
}
function apiOrders(data) {
    return new Promise(function (resolve,reject) {
        instance.post('api/orders',{
            data
        }).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        });
    })
}
function apiPay(id) {
    return new Promise(function (resolve, reject) {
        instance.put('api/orders/'+id).then(res=>{
            resolve(res)
        }).catch(error=>{
            reject(error)
        })

    })

}
function apiOrderlists() {
    return new Promise(function (resolve, reject) {
        instance.get('api/orders').then(res=>{
            resolve(res)
        }).catch(error=>{
            reject(error)
        })

    })

}

export {apiSave,apiIndex,apiDelete,apiRead,apiUpdate,apiList,apiResgist,apiLogin,apiCollection,apiPerson,apiCollectionRead,apiOrders,apiPay,apiOrderlists}