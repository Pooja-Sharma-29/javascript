// Find the sum of array after removing duplicates. Create a function that accepts array as input and returns the output. 

// const arr =  [3, 9, 1, 8, 9, 4, 7, 1];
// const arrayWithNoDuplicates = arr.reduce((acc,curr) => {
//      if(!acc.includes(curr)){
//         return [...acc,curr]
//      }
//      return acc;
// },[]);

// // console.log(arrayWithNoDuplicates);
// const sum = arrayWithNoDuplicates.reduce((acc,curr) =>{

//     acc +=curr;
//     return acc;
// },0);
// console.log(sum)

// rotate array to left and right

 // function rotate(arr){
    //     let firstElement = arr.shift();
    //     arr.push(firstElement);
    //     console.log(arr);

    //     let secondElement = arr.shift();
    //     arr.push(secondElement);
    //     console.log(arr);
    // }
    // rotate([1,2,3])


// Reverse the string and find the number of vowels in the entered string
// const str = "ENGLISH";
// let reversedStr = str.split("").reverse().join("");
// console.log(reversedStr);

// const vowels =['A','E','I' ,'O','U']
// const obj = {
//     A : 0,
//     E : 0,
//     I : 0,
//     O : 0, 
//     U : 0
// };
// function countVowel(str){
//     for(let letters of str.toUpperCase()){
//         if (vowels.includes(letters)){
//            obj[letters] = !obj[letters] ? 1 : obj[letters] +1;
//         }
//     }
//     return obj;
// }
// console.log(countVowel(str));



// Array of Objects

//  let studentList = [
//         {name:"Raju", id: 1, age: 25},
//         {name:"John", id: 2, age: 27},
//         {name:"Kevin", id: 3, age:29},
//         {name:"Dart", id: 4, age: 25},
//         {name:"Kevin", id: 5, age: 29}
//     ];

// let output2= [];
// for(let i = 0; i<studentList.length; i++){
//     for(let j = i+1; j<studentList.length;j++){
//     if(studentList[i]['age'] === studentList[j]['age']){
//   output2.push(studentList[i]['age']);
//         }
//     }
// }
// console.log(output2)

// const output4 = studentList.map(element =>{
//     element.country = "India"
//     return element;
// })
// console.log(output4);

//    const output1 = studentList.filter(x=> x.name === 'John') ;
//    console.log(output1)

// const output3 = studentList.filter(x => x.age > 27);
// console.log(output3);



// Find the missing sequential elements in this array ['A','B','D','F']?

const missingChars = (array) =>{
   // let array1 = [...array];
    let arr = []
    for(let i =1; i< array.length;i++){
        const prev = array[i-1].charCodeAt();
        const current = array[i].charCodeAt();
        if(current - prev !== 1){      
         let res = String.fromCharCode(prev + 1);
         arr.push(res); 
        }
    }
    return arr;
}

console.log(missingChars(['A','B','D','F']));