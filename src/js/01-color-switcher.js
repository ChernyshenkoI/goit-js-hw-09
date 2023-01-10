
const refs = {
    bodyEL: document.querySelector('body'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
};

const color = {
    intervalID: null,

    start() {
       console.log("start")
        this.intervalID = setInterval(() => {
            refs.bodyEL.style.backgroundColor = getRandomHexColor()
        }, 1000)
    },

    stop() {
        clearInterval(this.intervalID);
    },
};

refs.startBtn.addEventListener('click', (event) => {
// event.currentTarget.disabled=true;

refs.startBtn.disabled = true;
refs.stopBtn.disabled = false;

    color.start()
})


refs.stopBtn.addEventListener('click', (event) => {
    // event.currentTarget.disabled = false;

    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;

    color.stop()
})

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}






