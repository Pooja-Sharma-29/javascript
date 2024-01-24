// // map
// const sounds = new Map([
//     ['abc', 'xyz'],
//     ['def','uvw']
// ]);
// sounds.set('dog', 'woof');
// sounds.set('cat','meow');
// sounds.set('elephant','toot');
// console.log(sounds.get('elephant'));
// console.log(sounds.has('bird'));
// console.log(sounds.delete('abc'));
// console.log(sounds.has('abc'));
// console.log(sounds);
// console.log(sounds.size);
// for(const [key,value] of sounds){
//     console.log(`${key} sounds like ${value}`);
// }
// sounds.clear();
// console.log(sounds)

// set

// const mySet = new Set(
//     [2,'x',1]
// );
// mySet.add(1);
// mySet.add("abc");
// console.log(mySet)

// console.log(mySet.has(1));
// console.log(mySet.size);
// mySet.delete('abc');
// console.log(mySet);

// for(const item of mySet){
//     console.log(item)
// }

// // converting set into array
//  // using Array.from()
// const arr = Array.from(mySet);
// console.log(arr)
//  // using spread operator
// const arr1 = [...mySet];
// console.log(arr1)

// Array to set
// var arr = [55, 44, 65,44];
// var set = new Set(arr);
// console.log(set.size === arr.length);
// console.log(set.has(65))