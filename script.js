let nickname = document.getElementById("nickname");
let input = document.querySelector(".input");
let herName = document.querySelector(".hername");
let myName = document.querySelector(".myname");
let loveMsg = document.querySelector(".loveMsg");

function addMessage() {
  input.style.display = "none";
  herName.innerHTML = nickname.value;
  loveMsg.classList.remove("hide");
}
