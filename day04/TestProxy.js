let target = {};
let proxy = new Proxy(target,{
    get:function(){
        return '111'
    },
    // set(target, p, value, receiver) {
    //     console.log(target, p, value, receiver)
    //     target[p] = value
    // }
});

proxy.msg = 'zhaowa';
console.log(proxy.msg);
console.log(target.msg);
