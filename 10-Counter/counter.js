
let count = 0;
const value = document.querySelector('#value')


// const decrease = document.querySelector('.decrease')
// const reset = document.querySelector('.reset')
// const increase = document.querySelector('.increase')

// decrease.addEventListener('click', () => {
//     count--;
//     if (count > 0) {
//         value.style.color = "green";
//     }
//     if (count < 0) {
//         value.style.color = "red";
//     }
//     if(count ===0 ){
//         value.style.color="black" ;
//     }
//     value.innerHTML = count
// })

// increase.addEventListener('click', () => {
//     count++;
//     if (count > 0) {
//         value.style.color = "green";
//     }
//     if (count < 0) {
//         value.style.color = "red";
//     }
//     if(count ===0 ){
//         value.style.color="black" ;
//     }
//     value.innerHTML = count
// })

// reset.addEventListener('click', () => {
//     count = 0;
//     value.style.color = "black"
//     value.innerHTML = count
// })



//Another Method

const btns = document.querySelectorAll(".btn")

btns.forEach((btn) => btn.addEventListener('click', (e) => {
    const event = e.currentTarget.textContent;
    
    if(event == 'decrease'){
        count--;
    }
    if(event == 'reset'){
        count = 0;
    }
    if(event == 'increase'){
        count++;
    }

    if (count > 0) {
        value.style.color = "green";
    }
    if (count < 0) {
        value.style.color = "red";
    }
    if(count ===0 ){
        value.style.color="black" ;
    }

    value.innerHTML = count;

}))