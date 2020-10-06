import instance from "./http";

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


}function apiDelete() {


}
export {apiSave,apiIndex,apiDelete,apiRead,apiUpdate}