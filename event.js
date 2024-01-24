const grandDiv = document.querySelector('#grandparent');
grandDiv.addEventListener('click',()=>{
    console.log("GrandParent clicked!")
})

const parentDiv = document.querySelector('#parent');
parentDiv.addEventListener('click',(e)=>{
    console.log("Parent clicked!")
    // e.stopPropagation();
   
})

const childDiv = document.querySelector('#child');
childDiv.addEventListener('click',()=>{
    console.log("Child clicked!")
   
})

// const imgContainer = document.getElementById('img-container');
// imgContainer.addEventListener('click',()=>{
//     console.log("image container clicked");
//    imgContainer.style.border = "1px solid red";
// })

// const imgTitle = document.getElementById('title');
// imgTitle.addEventListener('click',(e)=>{
//     console.log("image title clicked");
//     imgTitle.style.border = "1px solid blue";
//     // e.stopPropagation();
// })

// const image = document.getElementById('img');
// image.addEventListener('click',(e)=>{
//     console.log("image clicked");
//     image.style.border = "1px solid green";
//     // e.stopPropagation();
// })