
const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

refs.btnStop.setAttribute('disabled', true);

refs.btnStart.addEventListener("click", () => {

  refs.btnStart.setAttribute('disabled', true);
  refs.btnStop.removeAttribute("disabled");
  
 const timeId = setInterval(() => {
    startBodyColor();
        }, 1000);

    refs.btnStop.addEventListener("click", () => {
      clearInterval(timeId);
      refs.btnStart.removeAttribute("disabled");;
      refs.btnStop.setAttribute('disabled', true);
        });
});

refs.btnStop.addEventListener('click', () => {
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function startBodyColor() {
  document.body.style.background = getRandomHexColor()
}



// ------------- Class -------------------
refs.btnStart.classList.add('btnStart');
refs.btnStop.classList.add('btnStop');