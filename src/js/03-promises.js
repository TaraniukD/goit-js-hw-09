import Notiflix from 'notiflix';

const formEl = document.querySelector(".form");

  function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

function onCreatePromises(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const inputValues = {};

  for (const [key, value] of formData.entries()) {
    inputValues[key] = Number(value);
  }

  let { amount, step, delay } = inputValues;

  for (let i = 1; i <= amount; i += 1) {
    delay += step;

  createPromise(i, delay) 

  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    
    formEl.reset();
  }
};

formEl.addEventListener('submit', onCreatePromises);
