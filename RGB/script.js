var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];
var squares = document.getElementsByClassName("square");
var condition = document.getElementById("condition");
var gameover = document.getElementById("gameover");
var score = 0;
var lifes = 3;
var lostGame = false;

generateColors(colors);

//allocates random color from array to neededColor (Must be done after generateColors()!!)
var neededColor = colors[Math.floor(Math.random() * 6)];

addColors();
showNeededColor();
showScore();
showLifes();

//generates random colors and fills the array with them
function generateColors(array) {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  for (var i = 0; i < colors.length; i++) {
    array[i] = "rgb(" + r + ", " + g + ", " + b + ")";
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
  }
}

//adds the colors and event listeners to the squares
function addColors() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.visibility = "visible";
    squares[i].id = i + 1;
    squares[i].addEventListener("click", function() {
      checkColor(this.id);
    });
  }
}

//gives new random colors
function changeColors() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.visibility = "visible";
  }
}

//shows and updated the color you need to click
function showNeededColor() {
  var color = document.getElementById("neededcolor");
  color.innerHTML = "Choose the color: " + neededColor;
}

//shows and updates the score
function showScore() {
  scoreHolder = document.getElementById("score");
  scoreHolder.innerHTML = score;
}

function showLifes() {
  lifesHolder = document.getElementById("lifes");
  lifesHolder.innerHTML = lifes;
}

//check if the colors are a match
function checkColor(id) {
  var color = document.getElementById(id);
  var clickedColor = color.style.backgroundColor;
  console.log("clicked" + clickedColor);
  console.log("needed" + neededColor);

  if (lostGame == false) {
    if (clickedColor == neededColor) {
      condition.innerHTML = "Correct!";
      score++;
      document.body.style.backgroundColor = neededColor;
      resetAll();
    } else {
      condition.innerHTML = "Wrong!";
      lifes -= 1;
      document.body.style.backgroundColor = "#232323";
      resetAll();
    }
  }
}

//resets the board
function resetAll() {
  if (lifes == 0) {
    endScreen();
  } else {
    generateColors(colors);
    neededColor = colors[Math.floor(Math.random() * 6)];
    changeColors();
    showNeededColor();
    showScore();
    showLifes();
  }
}

function endScreen() {
  var text = "Your score is: " + score + "! Click here to play again";
  lifes = 0;
  lostGame = true;
  showLifes();
  condition.innerHTML = "";
  gameover.innerHTML = text;
  gameover.style.display = "block";
  gameover.addEventListener("click", gameOver);
}

function gameOver() {
  lifes = 3;
  score = 0;
  gameover.style.display = "none";
  lostGame = false;
  resetAll();
}
