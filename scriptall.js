document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});                 // copia incolla da internet per scorrimento smooth

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }               // copia incolla per mostrare freccina pulsanti

  function revealfreccia() {
    var revealfreccia = document.querySelectorAll(".revealfreccia");
  
    for (var i = 0; i < revealfreccia.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = revealfreccia[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        revealfreccia[i].classList.add("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  window.addEventListener("scroll", revealfreccia);


function Scrolldown() {
    window.scroll(0,1);
}

window.onload = Scrolldown;

function etikett() {
  window.localStorage.setItem('controlla',  "2");   // creo in locale "controlla" e la imposto a 2
}
function stil() {
  window.localStorage.setItem('controlla',  "2");
}