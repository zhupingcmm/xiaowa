const Promise = require('es6-promise');

let p1 = new Promise((resolve,reject)=>{
    setTimeout(resolve(1),1000)
});

p1.then((res)=>{
    let p2 = new Promise((resolve,reject)=>{
        resolve(2)
    });
    return p2.then((res)=>{
         return 66
    },error => {
        console.log('p2',error)
    })
}).then((res)=>{
    console.log(res);
    return res
}).then((res)=>{
    console.log(res);
    return 55
}).then((res)=>{
    throw Error(0)
})
    .catch(error => {
    console.log(error);
    return 88
}).then(res=>{
    console.log(res)
});
