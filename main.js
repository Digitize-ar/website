var itemcont = document.getElementById("items-exp-container");
var circles = document.querySelectorAll(".circle-container");

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
