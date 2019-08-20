function a() {
    var myname ='a';
    return function b () {
        //var myname = 'b'
        console.log(myname)
    }
}

function c() {
    var myname = 'c';
    b();
}

var b = a();
c();
