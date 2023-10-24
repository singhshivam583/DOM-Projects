const btn = document.querySelectorAll('.button-option');
const popup = document.querySelector('.popup');
const newGameBtn = document.getElementById('new-game');
const resetBtn = document.getElementById('reset');
const messageBtn = document.getElementById('message');

const winArr = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 4, 8], 
    [2, 4, 6], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8],
];

const winnerCheck = () => {
    for(let i of winArr){
        let [e1, e2, e3] = [
            btn[i[0]].innerText,
            btn[i[1]].innerText,
            btn[i[2]].innerText,
        ];

        if (e1 != '' && e2 != '' && e3 != ''){
            if (e1 == 'X' && e2 == 'X' && e3 == 'X'){
                winFunction(e1);
            }
            else if (e1 == 'O' && e2 == 'O' && e3 == 'O'){
                winFunction(e1);
            }
        }
    }
}

const disableButtons = () => {
    btn.forEach((element) => (element.disabled = true));
    setTimeout(() => {
        popup.classList.remove('hide')
    }, 1000);
}

const enableButtons = () => {
    btn.forEach((element) => {
        element.innerText = '';
        element.disabled = false;
    });

    popup.classList.add('hide');
};

newGameBtn.addEventListener('click', () => {
    count = 0;
    enableButtons();
})
resetBtn.addEventListener('click', () => {
    count = 0;
    enableButtons();
})

const winFunction = (e) => {
    disableButtons()
    messageBtn.innerText = `Winner is ${e}`;

}

const drawFunction = () => {
    disableButtons();
    messageBtn.innerText = `It's Draw`;
}

let gameOver = false;
let currentPlayer = 'X';
let count;

btn.forEach((element) => {
    element.addEventListener('click', () => {
        if (currentPlayer === 'X'){

            currentPlayer = 'O';
            element.innerText = 'X';
            element.disabled = true;
        }
        else if (currentPlayer === 'O'){

            currentPlayer = 'X';
            element.innerText = 'O';
            element.disabled = true;
        }
        
        count +=1;
        if (count === 9) {
            drawFunction()
        }

        winnerCheck();
    });
});