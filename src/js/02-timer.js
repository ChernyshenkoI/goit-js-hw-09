import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {

        console.log(selectedDates[0]);

        const selectedDate = selectedDates[0];
        const diff = selectedDate - Date.now();
        const startBTN = document.querySelector('#startButton');

        startBTN.disabled = true;

        if (diff <= 0) {
            alert('Виберіть дату в майбутньому')
        } else {
            startBTN.disabled = false;
        }

        function timerStart() {
            timer.start(selectedDate);
            startBTN.disabled = true;
        };

        startBTN.addEventListener('click', timerStart)
    },
};

flatpickr("#datetime-picker", options)

const timer = {
    deadline: new Date(2023, 0, 10),
    intervalID: null,
    rootSelector: document.querySelector('.timer'),

    start(selectedDate) {
        this.intervalID = setInterval(() => {
            const diff = selectedDate - Date.now();

            if (diff <= 0) {
                clearInterval(this.intervalID)
                return;
            }
            const { days, hours, minutes, seconds } = this.convertMs(diff);

            this.rootSelector.querySelector('[data-days]').innerHTML = this.pad(days),
                this.rootSelector.querySelector('[data-hours]').innerHTML = this.pad(hours),
                this.rootSelector.querySelector('[data-minutes]').innerHTML = this.pad(minutes),
                this.rootSelector.querySelector('[data-seconds]').innerHTML = this.pad(seconds);


        },)
    },

    stop() {
        clearInterval(this.intervalID)
    },

    convertMs(diff) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Remaining days
        const days = Math.floor(diff / day);
        // Remaining hours
        const hours = Math.floor((diff % day) / hour);
        // Remaining minutes
        const minutes = Math.floor(((diff % day) % hour) / minute);
        // Remaining seconds
        const seconds = Math.floor((((diff % day) % hour) % minute) / second);

        return { days, hours, minutes, seconds };
    },

    pad(value) {
        return String(value).padStart(2, 0)
    }

};








