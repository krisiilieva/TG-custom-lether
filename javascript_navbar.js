// NAVIGATION BAR

/* <--| When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar |-->*/


/* sets the var to be "scrollY"as such, it returns the number of pixels the document is currently scrolled along the vertical axis */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

//sets a condition and if it it's true, sets the top distance to 0px
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav_bar").style.top = "0";

  } 
  //sets a condition if the first is not true, than sets the top distance to be -50px
  else {
    document.getElementById("nav_bar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}



function order() {
  location.href = "indexbooking1.html";
}