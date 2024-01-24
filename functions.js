// Nested function
  // outer fn
// function greet(name){
//     // inner fn
//     function displayName(){
//         console.log(`hi ${name}`);
//     }
//     displayName();
// }

// greet("Pooja");

// Returning a function

// function greet(name){
   
//     function displayName(){
//         console.log(`hi ${name}`);
//     }
//     return displayName();
// }

// greet("Pooja"); 

// Calculator using closures

// function calculator1(){
//     let a = 10;
//     let b = 4;
//     function sum(){
//         console.log(`the sum is ${a + b}`);
//     }
   
//     return sum 
// }

// function calculator2(){
//     let a = 10;
//     let b = 4;
//     function sub(){
//         console.log(`the sub is ${a - b}`);
//     }
//     return sub; 
// }

// function calculator3(){
//     let a = 10;
//     let b = 4;
//     function multiply(){
//         console.log(`the product is ${a * b}`);
//     }
    
//     return multiply;
// }

// function calculator4(){
//     let a = 10;
//     let b = 4;
//     function divide(){
//         console.log(`the quotient is ${a / b}`);
//     }
//     return divide;
// }


// const add = calculator1();
// console.log(add())
// const minus = calculator2()
// console.log(minus());
// const product = calculator3()
// console.log(product());
// const quotient = calculator4()
// console.log(quotient());

// let timerId = setInterval(() =>  {
//   let current = 1;
//   console.log(current)
//     if (current === 5) {
//       setTimeout(() => { clearInterval(timerId);  }, 4000);
//     }
//     current++;
//   }, 1000);



// function printNumbers(a,b) {
//   let current = a;
//   let intervalId = setInterval(function() {
//    console.log(current)
//     if (current === b) {
//       clearInterval(intervalId);
//     }
//     current++;
//   }, 1000);
// }

// printNumbers(1,5);


// function x(){
//     for(let i =1;i<=5;i++){ 
//         setTimeout(()=>{ 
//           console.log(i)
//         },i*1000)
//     }
// }

// x();

// function y(){
   
//       for(var i = 1; i<=5;i++){
//         function close(a){
//             setTimeout(()=>{
//                 console.log(a)
//             },a*1000)
//         }
//         close(i)
//       }
// }

// y();

// closures

// function outest(){
//     var c = 20;
//     function outer(b){
//         // let a = 10;
//         function inner(){
//             console.log(a,b,c);
//         }
//         // let a = 10;
//         return inner;
//     }
//     return outer;
// }
//  let a = 100;

// var close = outest()("hello");
// close();

// data hiding example

// function Counter(){
//     var count = 0;
//     return function incrementCount(){
//     count++;
//     console.log(count)
//     }
// }

// var counter1 = Counter();
// counter1();
// counter1();

// var counter2 = Counter();
// counter2();

// function Counter(){
//     let count = 0;
//     this.incrementCount = function(){
//         count++;
//         console.log(count);
//     }
//     this.decrementCount = function(){
//         count--;
//         console.log(count);
//     }
// }

// let counter1 = new Counter();
// counter1.incrementCount();
// counter1.incrementCount();
// counter1.decrementCount();

// Calculator using function constructor

// function Calculator(){
//     let a = 20 
//     this.sum = function(b){
//         console.log(a+b);
//     }
//     this.sub = function(b){
//         console.log(a-b);  // a>b
//     }
//     this.multiply = function(b){
//         console.log(a*b);
//     }
//     this.divide = function(b){
//         console.log(a/b); // if b !== 0
//     }
// }

// let calculator = new Calculator();
// calculator.sum(15);
// calculator.sub(5);
// calculator.multiply(3);
// calculator.divide(5);

// Group items on the basis of age of given array of object
/*output -
{
'20':[{name:'Alice',age:20},{name:'Max',age:20}],
'25':[{name:'John',age:25}]
}
 */

// const info = [
//   {name:'Alice',age:20},
//   {name:'John',age:25},
//   {name:'Max',age:20},
//   ]

//   const result = info.reduce(function (acc, curr) {
//     acc[curr.age] = acc[curr.age] || [];
//     acc[curr.age].push(curr);
//     return acc;
// }, {});

// console.log(result);



// call,apply,bind

const name1 = {
    firstName : "Pooja",
    lastName : "Sharma"
};

const printFullName = function(hometown , state){
    console.log(`${this.firstName} ${this.lastName} from  ${hometown} ${state}`);
}

const name2 = {
    firstName : "Tannu",
    lastName : "Sharma"
}

// function borrowing // call 
printFullName.call(name1,"New Delhi" , "Delhi");

// apply 
printFullName.apply(name2 , ["Agra","Uttarpradesh"]);

// bind
let printMyName = printFullName.bind(name1,"abc","xyz");
printMyName();

// Currying 

// using bind method

// let multiply = function(x,y){
//     console.log(x*y)
// }

// let multiplyByTwo = multiply.bind(this,2)
// multiplyByTwo(3)

// using closures

// let product = function(x){
//   return function(y){
//     console.log(x*y)
//   }
// }

// product(4)(6)