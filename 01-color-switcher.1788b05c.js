!function(){var e={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(e){!function(e){e<=Date.now()?Notiflix.Notify.failure("Please choose a date in the future"):(refs.buttonStartEl.removeAttribute("disabled","disabled"),function(e){var a=Date.parse(e)-Date.now(),r=convertMs(a);refs.buttonStartEl.addEventListener("click",(function(){refs.buttonStartEl.setAttribute("disabled","disabled"),refs.inputDateEl.setAttribute("disabled","disabled"),t=setInterval((function(){a<=0?clearInterval(t):(r=convertMs(a),refs.daysEl.textContent=addLeadingZero(r.days),refs.hoursEl.textContent=addLeadingZero(r.hours),refs.minutesEl.textContent=addLeadingZero(r.minutes),refs.secondsEl.textContent=addLeadingZero(r.seconds),a-=n)}),n)}))}(e))}(e[0])}};flatpickr("#datetime-picker",e);refs.buttonStartEl.setAttribute("disabled","disabled");var t=null,n=1e3}();
//# sourceMappingURL=01-color-switcher.1788b05c.js.map