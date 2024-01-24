// creating an object using object literal

const bio = {
    name : "pooja",
    age : 22,
    address : {
        country : 'India',
        city : 'UttarPradesh'
    },
    getAge : function(){
        return this.age;
    }
};

const {name,age,address : {country,city} ,getAge} = bio;

console.log(getAge())
// console.log(bio);

// bio.job = {
//     company : "Cognizant",
//     designation : "PAT"
// };
// // console.log(bio);

// // Object Methods

//  // Object.assign()
// const target = { a: 1, b: 2 };
// const source1 = { b: 4, c: 5 };
// const source2 = { c: 6 , d : 2}
// const returnedTarget = Object.assign(target, source1,source2);

// console.log(target);
// console.log(returnedTarget === target);


// // Object.create()

// const person = {
//     isHuman: false,
//     printIntroduction: function() {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
//   };
//   const me = Object.create(person);
//   me.name = 'Matthew'; 
//   me.isHuman = true; 
//   me.printIntroduction();

// // Object.keys()
//  console.log(Object.keys(bio))

// // Object.values()
// console.log(Object.values(bio))

// // Object.entries()
// console.log(Object.entries(bio))

// for(const [key,value] of Object.entries(bio)){
//     console.log(`${key} :  ${value}`)
// }

// // Object.fromEntries
//   // convert Map into object

//   const entries = new Map([
//     ['foo', 'bar'],
//     ['baz', 42]
//   ]);
//   const obj = Object.fromEntries(entries);
//   console.log(obj);
