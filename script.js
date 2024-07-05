const toggleButton = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigation.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});

let btn = document.querySelectorAll('.get_data');

btn.forEach(butt => {
  butt.addEventListener('click', function (){
    let h3 = this.closest('div').querySelector('h3');
    if(h3){
      localStorage.setItem("data" , h3.textContent)
      window.location = '/inqary-form.html'
    }
  })
})


