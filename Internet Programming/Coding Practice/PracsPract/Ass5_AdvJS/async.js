let promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Promise resolved')},4000);
    });

async function asyncf(){
    try{
        //wait till promise resolves
        let result = await promise;
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
asyncf();