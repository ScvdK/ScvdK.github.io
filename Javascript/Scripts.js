  function navexpand() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    }
   else if (x.className === "topnav sticky") {
      x.className += " responsive"
    }
  else if (x.className === "topnav responsive") {
    x.className = "topnav"
  }
     else {
      x.className = "topnav sticky";
    }
  }



  window.onscroll = function() {Stickynav()};

var navbar = document.getElementById("myTopnav");
var sticky = navbar.offsetTop;

function Stickynav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
