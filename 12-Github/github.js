 const url = 'https://api.github.com/users//followers?per_page=100'

const input = document.querySelector(".input")
const button = document.querySelector(".searchBtn")
const result = document.querySelector(".result")

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
        const response = await fetch(`https://api.github.com/users/${value}/followers?per_page=100`).then((res) => res.json());
        const data = response;
        if(data.length < 1){
            result.innerHTML=`<div class="error">no result found!</div>`
            return ;
        }
        getDetails(data);
    
    } catch (error) {
        result.innerHTML=`<div class="error">Enter Correct username!</div>`
    }

};

const getDetails = (data) =>{
    const list= data.map((index) => {
        const { avatar_url, login, html_url } = index
        return`
            <article class='card'>
              <img src="${avatar_url}" alt='person' />
                <h3>${login}</h3>
              <a href="${html_url}" class="btn" target="_blank">view profile</a>
            </article>
            `
    }).join('');
    result.innerHTML = `<h2>Your GitHub Followers</h2>
                        <div class='articles'>
                            ${list}
                        </div>`;
};