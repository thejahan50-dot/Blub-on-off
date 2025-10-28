let onBtn = document.querySelector('.onBtn');
let offBtn = document.querySelector('.offBtn');
let blub = document.querySelector('.blub');

function turnOnBlub(){
    blub.src="./image/offBlub.png"
}

function turnOffBlub(){
    blub.src="./image/onBlub.png"
}

onBtn.addEventListener("click", turnOnBlub);
offBtn.addEventListener("click", turnOffBlub);