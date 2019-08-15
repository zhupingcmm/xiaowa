var tasks =[];
for(var i =0; i<10; i++){
    tasks.push(
        (function (i) {
            return function(){
                console.log(i)
            }
    })(i)
    )
}


tasks.forEach((task)=>{
   task()
});


function test(){
    return ()=>{
        console.log(this)
    };
}


test()();


