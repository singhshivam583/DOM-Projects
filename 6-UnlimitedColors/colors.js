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
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

const startChangingColor=function(){ 
    const changeBgColor=function(){
        document.body.style.backgroundColor=randomColor();
    }  
    intervalId= setInterval(changeBgColor,1000)
    start.disabled = true;   
    stop.disabled = false; 
}

const stopChangingColor=function(){
    clearInterval(intervalId);
    intervalId=null;  
    // console.log(intervalId);
    start.disabled = false;   
    stop.disabled = true;  
}

start.addEventListener('click',startChangingColor)

stop.addEventListener('click',stopChangingColor)