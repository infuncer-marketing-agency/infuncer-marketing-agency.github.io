const scriptURL = 'https://script.google.com/macros/s/AKfycbw3h_YUWdusgwtSDEW1MCnHbIile7HL8g1dga548pfOM4zlU7W9fzNg4HIQh6RRrRNf7A/exec'
  const form = document.forms['submit-to-google-sheet']
const sus = document.getElementById('ss');
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        let sus ="Your message successfully sent. Someone from our team answer you as soon as possible";
              console.log(sus)
        setTimeout(function()
  {
    sus.innerHTML="";
  },100)
  form.reset();
    })
      .catch(error => console.error('Error!', error.message))
  })
  
  const playSound = () => {
  const audio = new Audio("tap.mp3");
  audio.play();
};

document.querySelector("#submitb").addEventListener("click", playSound);