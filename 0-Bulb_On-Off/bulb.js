const bulb=document.querySelector("#bulb");
const button=document.querySelector("button");

var flag=0

button.addEventListener("click",function(){
    if(flag==0){
        
        bulb.style.backgroundColor="yellow"
        button.innerHTML="OFF"
        // button.textContent="OFF"
        // document.replaceWith(button)
        flag=1
        
        
    }else{

        bulb.style.backgroundColor="white"
        button.innerHTML="ON"
        // button.textContent="ON";
        // document.replaceWith(button);
        flag=0
 
    }
})

