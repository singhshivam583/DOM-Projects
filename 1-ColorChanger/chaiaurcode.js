const body=document.querySelector('body')
const buttons=document.querySelectorAll('.button')


// buttons.forEach(function(button){
//     console.log(button)
//     button.addEventListener('click',function(e){
//         console.log(e);
//         console.log(e.target)
//         if(e.target.id==='grey'){
//             body.style.backgroundColor=e.target.id
//         }
//         else if(e.target.id==='white'){
//             body.style.backgroundColor=e.target.id
//         }
//         else if(e.target.id==='blue'){
//             body.style.backgroundColor=e.target.id
//         }
//         else if(e.target.id==='yellow'){
//             body.style.backgroundColor=e.target.id
//         }
//         else if(e.target.id==='purple'){
//             body.style.backgroundColor=e.target.id
//         }
//     })
// })

// Another Method

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(){
        // if(button.id==='grey'){
        //     body.style.backgroundColor='grey'
        // }
        // else if(button.id==='white'){
        //     body.style.backgroundColor='white'
        // }
        // else if(button.id==='blue'){
        //     body.style.backgroundColor='blue'
        // }
        // else if(button.id==='yellow'){
        //     body.style.backgroundColor='yellow'
        // }
        // else if(button.id==='purple'){
        //     body.style.backgroundColor='purple'
        // }
        switch(button.id) {
            case "grey":
                body.style.backgroundColor='grey'  
                break;
            case "white":
                body.style.backgroundColor='white'
                break;
            case "blue":
                body.style.backgroundColor='blue'
                break;
            case "yellow":
                body.style.backgroundColor='yellow'
                break;
            case "purple":
                body.style.backgroundColor='purple'
                break;
        }
    })
})

