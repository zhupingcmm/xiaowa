// // if(false){
// //     let value ='value'
// //     console.log(value)
// // }else {
// //
// // }
// //
// // console.log(value);
//
// console.log('=======');
// console.log(abc);
// var abc = 'ds';
//
//
// let weakSet = new Set();
// let key ={};
// weakSet.add(key);
// console.log(weakSet.has(key));
// key = null;
// // weakSet.delete(key);
// console.log(weakSet.has(key));
//
//
// // let condition = true;
// // if(condition){
// //     console.log(value);
// //     let value = 'blue';
// //     console.log(value);
// // }
//
// // console.log(value);
//
// function outer() {
//     return ()=> arguments[0]
// }
//
// var result = outer(1,23,4);
//
// console.log(result());
//
//
// function demo(name, age) {
//     return{
//         name,
//         age
//     }
// }
//
// var obj = demo('zm',18);
// console.log(obj);
//
//
//
// let person = {
//     getName() {
//         return 'hello'
//     }
// };
//
// let dog = {
//     getName(){
//         return 'world'
//     }
// };
//
// let friend = Object.create(person);
// console.log(friend.getName());
// console.log(Object.getPrototypeOf(friend) === person);
//
// Object.setPrototypeOf(friend,dog);
// console.log(friend.getName());
// console.log(Object.getPrototypeOf(friend) === dog);

let boby = {
    name:'zp',
    age:19
};
let name = 'cmm';
let age = 8;
({name,age ,value = true} = boby);

console.log(name,age, value);


let person = {
    name: 'zhaowa',
    school: {
        primary: {
            start: 2000,
            column: 2007
        },
        middle: {
            start: 2007,
            end: 2010
        },
        university: {
            start: 2010,
            end: 2014
        }
    }
};

let {school:{university}} = person;

console.log(university.start);
console.log(university.end);

let arr = [1,2,3];
[first,second, third =100] =  arr;

console.log(first,second,third);

let aaa = [1,2,3,4,5];
let [frist,...subArr] =aaa;
console.log(frist,subArr);

let set= new Set();
set.add(5);
set.add('a');
set.add(5);
console.log(set);

set.forEach((value,index)=>{
    console.log(value,index)
});

let map = new Map();
map.set('name','zhaowa');
console.log(map.get('name')); // zhaowa
console.log(map.has('name'));

