const timer = document.querySelector('#timer');
let isCount = false;
let count = 0;
let interval = null;

window.addEventListener('load', () => {

    buttonStart();
    buttonStop();
    resetButton();

});

const buttonStart = () => {

    const startCount = () => {
        if(isCount === false) {

            isCount = true;
            interval = setInterval(() => {
                timer.textContent = ++count;
            }, 1000);

        }

        return;
    };

    const start = document.querySelector('#start');
    start.addEventListener('click', startCount);

}

const buttonStop = () => {

    const stopCount = () => {
        clearInterval(interval);
        timer.textContent = count;
        isCount = false;
    };

    const stop = document.querySelector('#stop');
    stop.addEventListener('click', stopCount)

}

const resetButton = () => {

    const resetCount = () => {
        timer.textContent = 0;
        isCount = false;
        count = 0;
    }

    const reset = document.querySelector('#reset');
    reset.addEventListener('click', resetCount);
}