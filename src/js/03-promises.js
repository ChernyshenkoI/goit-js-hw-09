import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const refs = {
//   formEL: document.querySelector('form'),
// } 
// refs.formEL.addEventListener('submit', event=>{
//   event.preventDefault();

// const delay = event.target.elements.delay.value;
// const count = event.target.elements.amount.value;
// const interval = event.target.elements.step.value;

// setTimeout(()=>{
//   for (let i=0; i<count; i++){
// setTimeout(callback, interval * i, interval* i + +delay)
//   }
// },delay);

// });
// function callback (data){
//   console.log(data);
// }

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}


createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });