var itemcont = document.getElementById("items-exp-container");
var circles = document.querySelectorAll(".circle-container");
var navbar = document.getElementById("navbar")
const btnmenu = document.getElementById("btn-menu")
const menu = document.querySelector(".links2")

function toggleDiv(id) {
    var div = document.getElementById(id);
    
    if (div.style.display === "none") {
        itemcont.style.display = "flex";
        div.style.display = "flex"
        for (var i = 0; i < circles.length; i++) {
            circles[i].style.display = "none";
          }
    
    } else {
      div.style.display = "none";
    }
  }
  function closeDiv(id) {
    var div = document.getElementById(id);
    
    if (div.style.display === "flex") {
        itemcont.style.display = "none";
        div.style.display = "none"
        for (var i = 0; i < circles.length; i++) {
            circles[i].style.display = "flex";
          }
    
    }
  }
  
  btnmenu.addEventListener("click", () => {
      menu.classList.toggle("links2-open")
  })

  window.addEventListener('resize', function(event) {
    if (window.innerWidth < 750) {
      navbar.style.display = "none";
    }
  });

  btnmenu.addEventListener("click", animateBars)
  var line1_bars = document.querySelector(".lines1");
  var line2_bars = document.querySelector(".lines2");
  var line3_bars = document.querySelector(".lines3");

  function animateBars (){
    line1_bars.classList.toggle("active_lines1")
    line2_bars.classList.toggle("active_lines2")
    line3_bars.classList.toggle("active_lines3")
  }

  //JS del form//

  const btn = document.getElementById('button');

  document.getElementById('form')
  .addEventListener('submit', function(event) {
  event.preventDefault();

   btn.value = 'Enviando..';

   const serviceID = 'default_service';
   const templateID = 'template_h6p11et';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Enviado');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});