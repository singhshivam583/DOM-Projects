let count = 0;
const value = document.querySelector('#value')
const reset = document.querySelector('.reset')
const start = document.querySelector('.start')
var flag = 0;

start.addEventListener('click', () => {
   if(flag==0) {
        flag = 1;
        intervalId = setInterval(function(){
            count++;
            value.innerHTML = count
            console.log(intervalId);
        },1000)
        // value.innerHTML = count
        start.innerHTML=`stop`;
    }else{
        clearInterval(intervalId);
        value.innerHTML = count
        start.innerHTML='start'
        flag=0
    }
})

reset.addEventListener('click', () => {
    start.innerHTML ='start'
    clearInterval(intervalId);
    // intervalId=null; 
    count = 0;
    value.innerHTML = count
    flag = 0;
})
