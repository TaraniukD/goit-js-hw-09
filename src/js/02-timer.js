import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  days: document.querySelector('.value[data-days]'),
  hours: document.querySelector('.value[data-hours]'),
  minutes: document.querySelector('.value[data-minutes]'),
  seconds: document.querySelector('.value[data-seconds]'),
  btnStart: document.querySelector('button'),
};


refs.btnStart.setAttribute('disabled', true);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        getTimeValue(selectedDates[0]);
    },
  };

  function getTimeValue(selectedDates) {
    if (selectedDates <= new Date()) {
        return window.alert("Please choose a date in the future")
      } else {
        refs.btnStart.removeAttribute('disabled');
      }
};

const flatpickrValue = flatpickr("input#datetime-picker", options);

const timer = {
  start() {
    const startTime = flatpickrValue.selectedDates[0];

  setInterval(() => {
    const time = timeToDate();
    updateTimer(time);
}, 1000);
  },
}
  function pad(value) {
    return String(value).padStart(2, '0');
}; 

function timeToDate(time) {
  const timeNow = flatpickrValue.selectedDates[0];
  const currentTime = new Date();
    const timeToDate =  timeNow - currentTime;
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
 
    // Remaining days
    const days = pad(Math.floor(timeToDate / day));
    // Remaining hours
    const hours = pad(Math.floor((timeToDate % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((timeToDate % day) % hour) / minute));
    // Remaining seconds
  const seconds = pad(Math.floor((((timeToDate % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
};

function updateTimer({ days, hours, minutes, seconds }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}

  



refs.btnStart.addEventListener('click', () => {
  timer.start()
});

  // function convertMs(ms) {
  //   // Number of milliseconds per unit of time
  //   const second = 1000;
  //   const minute = second * 60;
  //   const hour = minute * 60;
  //   const day = hour * 24;
  
  //   // Remaining days
  //   const days = Math.floor(ms / day);
  //   // Remaining hours
  //   const hours = Math.floor((ms % day) / hour);
  //   // Remaining minutes
  //   const minutes = Math.floor(((ms % day) % hour) / minute);
  //   // Remaining seconds
  //   const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  //   console.log(days)
  //   return { days, hours, minutes, seconds };
  
  // }
  
  // convertMs(ms)
 

//   console.log(convertMs(ms)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(ms)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(ms)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

//   addLeadingZero(value)
//   addLeadingZero(value)