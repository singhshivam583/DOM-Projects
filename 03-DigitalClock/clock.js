// const clock=document.querySelector('#clock')
const clock=document.getElementById('clock')
const today=document.getElementById('today')


setInterval(function(){
    const date=new Date();
    // console.log(date.toLocaleTimeString())
    clock.innerHTML=`<span>${date.toLocaleTimeString()}</span>`
    today.innerHTML=(date.toLocaleString('default',{
        weekday:"long"}))
},1000)

// let day=new Date()
// today.innerHTML=(day.toLocaleString('default',{
//     weekday:"long"}))


