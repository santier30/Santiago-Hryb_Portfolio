var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// Get the buttons that open the modals
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

// When the user clicks the button, open the modal
btn1.onclick = function () {
  modal1.style.display = "flex";
};

btn2.onclick = function () {
  modal2.style.display = "flex";
};

btn3.onclick = function () {
  modal3.style.display = "flex";
};

// Get all close buttons

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  } else if (event.target == modal3) {
    modal3.style.display = "none";
  }
};
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  menu.classList.toggle('show');
});