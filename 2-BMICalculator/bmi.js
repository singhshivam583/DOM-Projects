
const form=document.querySelector('form')
// this usecase will give u empty
// const height=parseInt(document.querySelector('#height').value)


form.addEventListener('submit',function(event){
    event.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')

    if(height==="" || height<0 || isNaN(height) ){
        results.innerHTML=`Please give valid height: ${height}`
    }
    else if(weight==="" || weight<0 || isNaN(weight) ){
        results.innerHTML=`Please give valid weight: ${weight}`
    }
    else{
        const BMI=(weight / ((height * height) / 10000)).toFixed(2);
        // show the results
        results.innerHTML=`<span>Result: ${BMI}</span>`;
    }
})