const input = document.querySelector(".input")
const button = document.querySelector(".searchBtn")
const result = document.querySelector(".result")

const url='https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

button.addEventListener('click', (e) =>{
    e.preventDefault();
    const value =input.value;
    if(!value){
        result.innerHTML=`<div class='error'>please enter something</div>`
        return;
    }
    infoLoader(value);
});

async function infoLoader(value){
    result.innerHTML = `<div>
                            <div class="loader"></div>
                            <h3>loading....</h3>
                        </div>`
    try {
        const response = await fetch(`${url}${value}`).then((res) => res.json());
        const data = response.query.search;
        if(data.length < 1){
            result.innerHTML=`<div class="error">no result found!</div>`
            return ;
        }
        getDetails(data);
    
    } catch (error) {
        result.innerHTML=`<div class="error">connection failed!</div>`
    }

};

const getDetails = (data) =>{
    const list= data.map((index) => {
        const {title, snippet, pageid} = index;
        return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
                    <h4>${title}</h4>
                    <p>
                        ${snippet}
                    </p>
                </a>`;
    }).join('');
    result.innerHTML = `<div class='articles'>
                            ${list}
                        </div>`;
};