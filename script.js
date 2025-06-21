const numberTime = document.querySelector('.time');
const buttonStart = document.querySelector('.start');
const buttonStop = document.querySelector('.stop');

let interval;

function timer(){
    let i = 0;
    function update() {
        numberTime.textContent = i;
        i++
    }
    update()
    interval = setInterval(update, 1000);
    buttonStart.disabled = true;
    buttonStop.disabled = false;
}

buttonStart.addEventListener('click', () => {
    timer()
})

buttonStop.addEventListener('click', () => {
    clearInterval(interval)
    buttonStart.disabled = false;
    buttonStop.disabled = true;
})