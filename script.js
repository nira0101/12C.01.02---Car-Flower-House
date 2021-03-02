"use strict";
window.addEventListener("DOMContentLoaded", init);
async function init() {
  console.log(init);
  document.querySelector(".closeDoor").addEventListener("click", openTheDoor);
  document.querySelector(".car").addEventListener("click", moveTheCar);
}

function openTheDoor() {
  console.log("door Opened");
  document.querySelector(".closeDoor").classList.add("opDoor");
}
function moveTheCar() {
  console.log("car is moving");
  document.querySelector(".car").classList.add("driveCar");
}
