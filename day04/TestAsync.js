

function request() {
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            resolve('111')
        },1000)
    });


}

async function a() {
    var baidu =  await request('www.baidu.com');
    console.log('baidu',baidu)
    return 222;
}

a();


async function b() {
    return 22
}

b().then(res=>{
    console.log(res)
});
