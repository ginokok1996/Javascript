var mainGrid = document.getElementById("grid");
var teller = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
var blockClicked = null;
var turns = 0;
var chosenCard = [null, null];
var wait = false;
var currentPlayer = Math.floor(Math.random() * 2 + 1);
var player1 = "Speler 1";
var player2 = "Speler 2";
var pointsPlayer1 = 0;
var pointsPlayer2 = 0;
var winner = null;

shuffleArray(teller);
activePlayer();
score();

//shuffles the array to be random
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

//makes containers for the pictures to fit in
for (var i = 0; i < 18; i++) {
  var fotoContainer = document.createElement("div");
  fotoContainer.className = "fotocontainer";
  fotoContainer.id = i;
  fotoContainer.addEventListener("click", pictureClicked);
  mainGrid.appendChild(fotoContainer);
}

//handles what happens when a picture is clicked
function pictureClicked() {
  if (this.id != blockClicked && wait == false) {
    blockClicked = this.id;
    showPicture(this.id);
    turns++;

    if (turns == 2) {
      wait = true;
      checkMatch();
      showNext();
    }
  }
}

//reveals the picture
function showPicture(id) {
  var picture = document.getElementById(id);
  picture.style.background = "url('img/foto" + teller[id] + ".jpg')";

  if (turns == 1) {
    chosenCard[0] = teller[id];
  } else {
    chosenCard[1] = teller[id];
  }
}

//makes the next button visible and clickable
function showNext() {
  button = document.getElementById("nextbutton");

  if (pointsPlayer1 + pointsPlayer2 < 9) {
    button.style.visibility = "visible";
  } else {
    chooseWinner();
  }

  button.addEventListener("click", nextButton);
  chosenCard = [null, null];
}

//actions to take when the next button is clicked
function nextButton() {
  pictures = document.getElementsByClassName("fotocontainer");
  button = document.getElementById("nextbutton");
  button.style.visibility = "hidden";
  turns = 0;
  wait = false;

  //sets pictures back to white
  for (i = 0; i < pictures.length; i++) {
    if (teller[i] != null) {
      pictures[i].style.background = "white";
    }
  }

  changePlayer();
  activePlayer();
  score();
}

//checks if chosen cards match
function checkMatch() {
  var pictures = document.getElementsByClassName("fotocontainer");

  if (chosenCard[0] == chosenCard[1]) {
    var pair = chosenCard[0];
    if (currentPlayer == 1) {
      pointsPlayer1++;
    } else {
      pointsPlayer2++;
    }
    //if pair is made player changes back to the one who made the pair
    changePlayer();
  }

  //removes pair from array
  for (var i = 0; i < teller.length; i++) {
    if (teller[i] == pair) {
      pictures[i].removeEventListener("click", pictureClicked);
      teller[i] = null;
    }
  }
}

//shows which player's turn it is
function activePlayer() {
  player = document.getElementById("currentplayer");
  if (currentPlayer == 1) {
    player.innerHTML = " " + player1;
  } else {
    player.innerHTML = " " + player2;
  }
}

//displays and updates the score
function score() {
  document.getElementById("points1").innerHTML = pointsPlayer1;
  document.getElementById("points2").innerHTML = pointsPlayer2;
}

//changes the current player
function changePlayer() {
  if (currentPlayer == 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
}

//chooses the winner based on points
function chooseWinner() {
  console.log("test");
  button = document.getElementById("nextbutton");

  if (pointsPlayer1 > pointsPlayer2) {
    button.innerHTML = "The winnaar is: " + player1;
  } else {
    button.innerHTML = "The winnaar is: " + player1;
  }

  button.removeEventListener("click", nextButton);
  button.style.visibility = "visible";
}
