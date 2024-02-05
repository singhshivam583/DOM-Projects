document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.id === 'clear') {
                display.value = '';
            } else if (button.id === 'backspace') {
                display.value = display.value.slice(0, -1);
            } else if (button.id === 'calculate') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else {
                display.value += button.textContent;
            }
        });
    });
});

// Another Method

// const display = document.getElementById('display')
// const buttons = document.querySelectorAll('button')
// const clear = document.getElementById('clear')
// const backspace = document.getElementById('backspace')
// const calculate = document.getElementById('calculate')

// let value;
// buttons.forEach((button) => {
//     button.addEventListener('click', (e) => {
//         value = e.target.button;
//         display.value += value;
//     })
// })

// const DisplayValue = () => {
//     display.innerHTML=display.value
// }

// const Evaluate=() => {
//     if(display.value==''){
//         alert('Enter Values')
//     }else{
//         display.value = eval(display.value);
//     }
// }

// const Clear=() => {
//     display.value="";
// }

// const BackSpace=() => {
//     display.value = display.value.slice(0, -1);
// }

// display.addEventListener('click', DisplayValue);
// clear.addEventListener('click', Clear)
// calculate.addEventListener('click', Evaluate)
// backspace.addEventListener('click', BackSpace)










