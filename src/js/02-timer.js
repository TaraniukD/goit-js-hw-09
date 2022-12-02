import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btn = document.querySelector('button');
btn.setAttribute('disabled', true);

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
        btn.removeAttribute('disabled');
        startTimerToDate(selectedDates);
      }
  }
  
  flatpickr("input#datetime-picker", options)
  let timeId = null;
  const INTERVAL = 1000;

  function startTimerToDate(selectedDates) {
    const ms = Date.parse(selectedDates) - Date.now();
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    console.log(days)
    return { days, hours, minutes, seconds };
  }



  const daysRef = document.querySelector('.value [data-days]');
  const hoursRef = document.querySelector('.value [data-hours]');
  const minutesRef = document.querySelector('.value [data-minutes]');
  const secondsRef = document.querySelector('.value [data-seconds]');

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    console.log(days)
    return { days, hours, minutes, seconds };
  
  }
  
  convertMs(ms)
//   daysRef.textContent = days;
//   hoursRef.textContent = hours;
//   minutesRef.textContent = minutes;
//   secondsRef.textContent = seconds;

//   console.log(convertMs(ms)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(ms)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(ms)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

//   addLeadingZero(value)
//   addLeadingZero(value)