"use strict";

window.addEventListener("load", startApp);
let winner;
let userChoice;
let computerChoice;
const choices = ["rock", "paper", "scissors"];
let sfx = document.querySelector("#sfx");
console.log(sfx);

// sfx.play();

// start();

function startApp() {
  sfx.play();
  console.log("start");
  getPlayerChoice();
}

function start() {
    console.log("start");
    document.querySelector(".rock").addEventListener("click", getPlayerChoice);
    document.querySelector(".paper").addEventListener("click", getPlayerChoice);
    document.querySelector(".scissors").addEventListener("click", getPlayerChoice);
  }

function getPlayerChoice() {
  console.log("getPlayerChoice");
  document
    .querySelector(".rock")
    .addEventListener("click", makeRandomComputerChoice);
  document
    .querySelector(".paper")
    .addEventListener("click", makeRandomComputerChoice);
  document
    .querySelector(".scissors")
    .addEventListener("click", makeRandomComputerChoice);
}

function makeRandomComputerChoice() {
  console.log("makeRandomComputerChoice");
  userChoice = this.classList.value;

  console.log("user choose " + userChoice);

  let randomNumber = Math.floor(Math.random() * 3);
  computerChoice = choices[randomNumber];

  console.log("computer choose " + computerChoice);

  winner = userChoice + computerChoice;
  console.log(winner);

  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");

  showAnimations();
}

function showAnimations() {
  console.log("showAnimations");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document
    .querySelector("#player1")
    .addEventListener("animationend", removeShake);
  document
    .querySelector("#player2")
    .addEventListener("animationend", removeShake);
  determineWinner();
}

function removeShake() {
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player1").classList.value = "";
  document.querySelector("#player1").offsetheight;
  document.querySelector("#player1").classList.add("player");
  document.querySelector("#player1").classList.add(userChoice);

  document.querySelector("#player2").classList.remove("shake");
  document.querySelector("#player2").classList.value = "";
  document.querySelector.offsetheight;
  document.querySelector("#player2").classList.add("player");
  document.querySelector("#player2").classList.add(computerChoice);
  console.log("userChoice");
}

function determineWinner() {
  console.log("determineWinner");

  if (winner === "rockscissors") {
    setTimeout(showWin, 2500);
  } else if (winner === "rockpaper") {
    setTimeout(showLose, 2500);
  } else if (winner === "rockrock") {
    setTimeout(showDraw, 2500);
  }

  if (winner === "paperscissors") {
    setTimeout(showLose, 2500);
  } else if (winner === "paperrock") {
    setTimeout(showWin, 2500);
  } else if (winner === "paperpaper") {
    setTimeout(showDraw, 2500);
  }

  if (winner === "scissorsrock") {
    setTimeout(showLose, 2500);
  } else if (winner === "scissorspaper") {
    setTimeout(showWin, 2500);
  } else if (winner === "scissorsscissors") {
    setTimeout(showDraw, 2500);
  }
}

function showWin() {
  console.log("showWin");
  document.querySelector("#win").classList.remove("hidden");
  document.querySelector("#win").offsetheight;
}

function showLose() {
  console.log("showLose");
  document.querySelector("#lose").classList.remove("hidden");
  document.querySelector("#lose").offsetheight;
}

function showDraw() {
  console.log("showDraw");
  document.querySelector("#draw").classList.remove("hidden");
  document.querySelector("#draw").offsetheight;
}

//background music//

document.querySelector("#mute_button").addEventListener("click", muteSound);
function muteSound() {
  sfx.pause ();
}

function playBackGroundMusic() {
  console.log("function playBackGroundMusic()");
  sfx.play();
  }
  
  function muteSound() {
    console.log("function muteSound()");
    if(sfx.muted == false) {
      sfx.muted = true;
      document.querySelector("#mute_button").textContent = "Unmute";
      console.log("muteSound()");
    } else {
      sfx.muted = false;
      document.querySelector("#mute_button").textContent = "Mute";
      console.log("UnmuteSound()");
    }
  }
  