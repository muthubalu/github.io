// const myImage=document.querySelector("img");

// myImage.addEventListener('click',()=>{

// const imgSrc=myImage.getAttribute("src");

// if(imgSrc === "./images/original.jpg"){

//     myImage.setAttribute("src","./images/ghibili.jpg")
// }
// else{
//     myImage.setAttribute("src","./images/original.jpg")
// }
// })


let mybutton=document.querySelector("button");
let myHeading=document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }

// if(!localStorage.getItem(name)){

//     setUserName();
// }
// else{

//     const getUname=localStorage.getItemItem("name",myName);
//     myHeading.textContent=`mozilla is cool ${getUname}`


// }

mybutton.addEventListener('click',()=>{
    setUserName();
});