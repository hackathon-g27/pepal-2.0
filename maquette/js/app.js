mobileButton = document.getElementById("mobile-button-toggler");
mobileMenu = document.getElementById("mobile-box");

var myScrollFunc = function() {
  var y = window.scrollY;
    if (y >= 300) {
      mobileButton.classList.add('display-block');
      mobileMenu.classList.add('display-block');
      mobileMenu.classList.remove('display-none');
      mobileButton.classList.remove('display-none');
    } else {
      mobileButton.classList.add('display-none');
      mobileMenu.classList.add('display-none');
      mobileMenu.classList.remove('display-box');
      mobileButton.classList.remove('display-box');
    }



};

window.addEventListener("scroll", myScrollFunc);

function untoggle() {
  document.getElementById("mobile-menu-toggled").classList.add('display-none');
  document.getElementById("mobile-menu-toggled").classList.remove('display-block');
  document.getElementById("mobile-button-toggler").onclick = toggle;
}

function toggle() {
  document.getElementById("mobile-menu-toggled").classList.add('display-block');
  document.getElementById("mobile-menu-toggled").classList.remove('display-none');
  document.getElementById("mobile-button-toggler").onclick = untoggle;
}

function darkMode(){
  document.getElementById("btnDarkMode").style.display = "none";
  document.getElementById("btnLightMode").style.display = "block";
  document.getElementById("darkGradient").style.display = "block";
  document.getElementById("topGradient").style.display = "none";
  document.getElementById("subGradient").style.display = "none";


}

function lightMode(){
  document.getElementById("btnDarkMode").style.display = "block";
  document.getElementById("btnLightMode").style.display = "none";
  document.getElementById("darkGradient").style.display = "none";
  document.getElementById("topGradient").style.display = "block";
  document.getElementById("subGradient").style.display = "block";
}