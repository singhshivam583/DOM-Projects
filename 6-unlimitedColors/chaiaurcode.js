// Generate Random Color

const randomColor=function(){
    const hex='0123456789ABCDEF';
    let color="#";
    
    for (let i = 0; i < 6; i++) {
        color +=hex[Math.floor(Math.random()*16)]
    }
    return color;
};

// console.log(randomColor());
let intervalId;

const startChangingColor=function(){ 
    const changeBgColor=function(){
        document.body.style.backgroundColor=randomColor();
    }  
    intervalId= setInterval(changeBgColor,1000)
}

const stopChangingColor=function(){
    clearInterval(intervalId);
    intervalId=null;  
    console.log(intervalId);             
}

document.querySelector('#start').
addEventListener('click',startChangingColor)

document.querySelector('#stop').
addEventListener('click',stopChangingColor)