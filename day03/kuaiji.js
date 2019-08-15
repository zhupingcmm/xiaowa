// if(false){
//     let value ='value'
//     console.log(value)
// }else {
//
// }
//
// console.log(value);

console.log('=======');
console.log(abc);
var abc = 'ds';


let weakSet = new Set();
let key ={};
weakSet.add(key);
console.log(weakSet.has(key));
key = null;
// weakSet.delete(key);
console.log(weakSet.has(key));
