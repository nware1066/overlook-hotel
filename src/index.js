// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
// probably don't neeed to import partial file to index.js if you're importing other scss into base.s

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import api from './api.js'

var mloginPopup = document.querySelector(".mlogin-popup");
var mloginTrigger = document.querySelector(".mlogin-trigger");
var mCloseButton = document.querySelector(".mclose-button");

mloginTrigger.addEventListener("click", toggleModal);
mCloseButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

function toggleModal() {
  mloginPopup.classList.toggle("show-modal");
}

function windowOnClick(event) {
  event.preventDefault()
  if (event.target === mloginPopup) {
    toggleModal();
  }
  api.getUsers();
  api.getRooms();
  api.getBookings();
}
