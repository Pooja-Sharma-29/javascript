// // at 
// let arr = [12,42,39 ,56,46];
// console.log(arr.at(1)); // 4
// console.log(arr.at(-1)); // 3

// // concat => if any one of the array is sparse (contain empty values) then the concatenated array will also be sparse.

// let letters = ['a','b',' ','c'];
// let concatArray = arr.concat(letters ,67,45)
// console.log(concatArray);

// // copyWithin
// /*
// copyWithin(target index)
// copyWithin(target index, start)
// copyWithin(target index, start, end)
// start and end are optional
// */

// console.log(arr.copyWithin(1,2,4));
// console.log([1, , 3].copyWithin(2, 1, 2)); // sparse array 

// // entries 
// /*
// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

// */

// for (let element of arr.entries()){
//     console.log(`${element}`);
// }

// // every => it returns boolean value
// // Check if one array is a subset of another array
// const isSubset = (array1, array2) =>
//   array2.every((element) => array1.includes(element));

// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

// // fill
// /*
// fill(value)
// fill(value, start)
// fill(value, start, end) 
// */
// console.log(arr.fill(5,2,4));

// // filter
// // odd no.
// const res = arr.filter(element => element % 2 != 0)
//     console.log(res);


// // find =>returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// duplicate values in an array

// let num = [1,2,3,2,5,2,3,5,6,1];
// let result = {};
//  num.forEach(val => result[val] = (result[val] || 0) + 1);
//  console.log(result);
 // OR

// for(let i in num){
//     result[num[i]] = !result[num[i]] ? 1 : result[num[i]] + 1;
// }
// console.log(result)

// fibonacci series

// function fibonacci (arr,len){
//     let first = arr[0];
//     let second = arr[1];
 
//     let next;
//     let n = 2;

//     while(n < len){
//         next = first + second;
//         first = second;
//         second = next;
//         arr.push(next);
//         n++;
//     }

//     return arr;
// }

// console.log(fibonacci([0,1],15));


// Prime number in an array
// function isPrime(num){
//     if( num <2){
//         return false;
//     }
   
//     for(let i = 2; i<= Math.sqrt(num); i++){
//         if(num % i === 0){
//             return false;
//         }
//     }
//     return true
// }

// console.log(isPrime(541));

// // occurences 
// function count(arr){
//     const sortedArr = arr.sort((a,b)=> a-b);
//     let res = {};
//     let count = 1;
//     for(let i = 0; i<sortedArr.length; i++){
//         if(sortedArr[i] == sortedArr[i+1]){
//             count++;

//         }else{
//             res[sortedArr[i]] = count;
//             count = 1;
//         }
//     }
    
//     return res;
// }

//  console.log(count([2,43,2,3,1,2,3,25,200,50]));

// // Finding all the occurrences of an element

// const indices = [];
// const array = ["a", "b", "a", "c", "a", "d"];
// const element = "a";
// let idx = array.indexOf(element)
// while(idx !== -1){
//     indices.push(idx);
//     idx = array.indexOf(element,idx +1)
// }

// console.log(indices);

// Finding if an element exists in the array or not and updating the array

// function updateVegetablesCollection(veggies, veggie) {
//     if (veggies.indexOf(veggie) === -1) {
//       veggies.push(veggie);
//       console.log(`New veggies collection is: ${veggies}`);
//     } else {
//       console.log(`${veggie} already exists in the veggies collection.`);
//     }
//   }
  
//   const veggies = ["potato", "tomato", "chillies", "green-pepper"];
  
//   updateVegetablesCollection(veggies, "spinach");
//   // New veggies collection is: potato,tomato,chillies,green-pepper,spinach
//   updateVegetablesCollection(veggies, "spinach");
//   // spinach already exists in the veggies collection.

//   // Array.isArray() => check whther the passed value is array or not
//     // all following calls return true
//     Array.isArray([]);
//     Array.isArray([1]);
//     Array.isArray(new Array());
//     Array.isArray(new Array("a", "b", "c", "d"));
//     Array.isArray(new Array(3));
//     // Little known fact: Array.prototype itself is an array:
//     Array.isArray(Array.prototype);

//     // all following calls return false
//     Array.isArray();
//     Array.isArray({});
//     Array.isArray(null);
//     Array.isArray(undefined);
//     Array.isArray(17);
//     Array.isArray("Array");
//     Array.isArray(true);
//     Array.isArray(false);
//     Array.isArray(new Uint8Array(32));
//     // This is not an array, because it was not created using the
//     // array literal syntax or the Array constructor
//     Array.isArray({ __proto__: Array.prototype });

// join => converts an array to string
// join()
// join(separator)

// keys => The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
// const arr = ['a','b','c'];
// console.log(arr.keys()) // Array iterator object
// // const iterator = arr.keys();
// // for(const keys of iterator){
// //     console.log(keys)
// // }
// for(const keys in arr){
//     console.log(keys)
// }

// Array.of()
// Array.of(7); // [7]
// Array(7); // array of 7 empty slots

// Array.of(1, 2, 3); // [1, 2, 3]
// Array(1, 2, 3); // [1, 2, 3]

/*
reduce edge cases
If the array only has one element (regardless of position) and no initialValue is provided, or if initialValue is provided but the array is empty, the solo value will be returned without calling callbackFn.

If initialValue is provided and the array is not empty, then the reduce method will always invoke the callback function starting at index 0.

If initialValue is not provided then the reduce method will act differently for arrays with length larger than 1, equal to 1 and 0, as shown in the following example:
const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
[1, 100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50

// callback is invoked once for element at index 1
[1, 100].reduce(getMax); // 100

// callback is not invoked
[50].reduce(getMax); // 50
[].reduce(getMax, 1); // 1

[].reduce(getMax); // TypeError


*/

// Remove duplicate items in an array

// const array = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
// const arrayWithNoDuplicates = array.reduce((acc,curr) =>{
//     if(!acc.includes(curr)){
//         return [...acc , curr];

//     }
//     return acc;
// },[])
// console.log(arrayWithNoDuplicates)

// DIFFERENCE
// const a = ["1", "2", "3", "4", "5"];
// const left = a.reduce((prev, cur) => prev + cur);
// const right = a.reduceRight((prev, cur) => prev + cur);

// console.log(left); // "12345"
// console.log(right); // "54321"

// values()
// The values() method returns a new array iterator object that iterates the value of each index in the array.
// const array1 = ['a', 'b', 'c'];
// const iterator = array1.values();

// for (const value of iterator) {
//   console.log(value);
// }

// expected output: "a"
// expected output: "b"
// expected output: "c"

// // using spread operator
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [...arr1,...arr2];
// console.log(arr3)

// // using concat
// let arr4 = arr1.concat(arr2);
// console.log(arr4);

// function merge(arr1,arr2){
//     return [...arr1,...arr2];
// }
// console.log(merge([1,2,3],[4,5,6]));

// map 
// const arr = [5,1,3,2,6];

// function double(x){
//     return x*2;
// }
// function binary(x){
//     return x.toString(2)
// }

// const output = arr.map(binary);
// console.log(output)

// filter
// const result = arr.filter(x => x%2 !== 0) ;
// console.log(result);

// reduce
// const maxValue = arr.reduce((acc,curr)=>{
//     if(curr > acc){
//         acc = curr;
//     }
//     return acc;
// },0);
// console.log(maxValue);

// let studentList = [
//     {name:"Raju", id: 1, age: 25},
//     {name:"John", id: 2, age: 27},
//     {name:"Kevin", id: 3, age: 29},
//     {name:"Dart", id: 4, age: 25},
//     {name:"Kevin", id: 5, age: 29}
// ];

// // list of full name 

// const res = studentList.map(x=>{
//     return x.name;
// })

// console.log(res);



