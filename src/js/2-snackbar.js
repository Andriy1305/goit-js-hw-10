console.log(`Sneckbar`);

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');

form.addEventListener('submit',event=> {
  event.preventDefault();
  const delayInput = document.querySelector('input[name="delay"]');
  const jekState = document.querySelector('input[name="state"]:checked');


  
  if (delayInput.value === '') {
    iziToast.show({
      title: 'Caution',
      message: 'You forgot important data',
    });
    event.currentTarget.reset();
    return;
  }

  
  if (!jekState) {
    iziToast.show({
      title: 'Caution',
      message: 'You forgot important data',
    });
    return;
  }

  const numberInput = Number(delayInput.value);
  
  new Promise((res, rej) => {
    setTimeout(() => {
      if (jekState.value === "fulfilled" ) {
         res(numberInput);
      } else {
        rej(numberInput);
      }
    }, numberInput);
  })
    .then(delay => {
      const message = `✅ Fulfilled promise in ${delay}ms`;
      console.log(message);
      return iziToast.success({
        title: 'OK',
        message: message,
      });
    })
    .catch(delay => {
      const message = `❌ Rejected promise in ${delay}ms`;
      console.log(message);
      iziToast.error({
        title: 'Error',
        message: message,
      });
    });
    event.currentTarget.reset();
});