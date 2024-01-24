// string questions

// 1. counting duplicate characters
// Input: “adsjfdsfsfjsdjfhacabcsbajda”
// Output: { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }

//  let str = "adsjfdsfsfjsdjfhacabcsbajda";
//  let strArr = str.split("");
//  let result = {};
//  console.log(strArr);
//  strArr.forEach(val => result[val] = (result[val]|| 0) + 1 );
//  console.log(result);

// let num = [1,2,3,2,5,2,3,5,6,1];
// // using for each method
// let result = {};
// num.forEach(val => result[val] = (result[val] || 0) + 1);
// console.log(result)

// using reduce method

// let res = num.reduce((acc,curr)=>{
// acc[curr] = (acc[curr] || 0) + 1;
// return acc;
// },{})

// console.log(res)


// function checkStr(str){
//     if(str.length >0){
//       console.log("String is not blank")
//     }else{
//       console.log("String is blank")
//     }
//       return str;
//     }
    
//  checkStr("");


// check strings are anagram of each other
// const isAnagram = (a,b) =>{
//     let len1 = a.length;
//     let len2 = b.length;
//     if(len1!==len2){
//         console.log("invalid input");
//         return;       
//     }
//  let str1 = a.split("").sort().join("");
//  let str2 = b.split("").sort().join("");
//  if(str1 === str2){
//     return true;
//  }else{
// return false;
//  }
// }
// console.log(isAnagram("army","mary"));

