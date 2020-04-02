var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];
var squares = document.getElementsByClassName("square");
var hasWon = false;
var score = 0;

generateColors(colors);

var neededColor = colors[Math.floor(Math.random() * 6)];
addColors();
showNeededColor();
showScore();

//generates random colors and fills the divs with them
function generateColors(array) {
  var random1 = Math.floor(Math.random() * 255 + 1);
  var random2 = Math.floor(Math.random() * 255 + 1);
  var random3 = Math.floor(Math.random() * 255 + 1);

  for (var i = 0; i < colors.length; i++) {
    array[i] = "rgb(" + random1 + ", " + random2 + ", " + random3 + ")";
    random1 = Math.floor(Math.random() * 255 + 1);
    random2 = Math.floor(Math.random() * 255 + 1);
    random3 = Math.floor(Math.random() * 255 + 1);
  }
}

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
function changeColors() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.visibility = "visible";
  }
}

function showNeededColor() {
  var color = document.getElementById("neededcolor");
  color.innerHTML = "Choose the color: " + neededColor;
}

function checkColor(id) {
  var color = document.getElementById(id);
  var clickedColor = color.style.backgroundColor;
  var condition = document.getElementById("condition");
  console.log("clicked" + clickedColor);
  console.log("needed" + neededColor);
  if (hasWon == false) {
    if (clickedColor == neededColor) {
      condition.innerHTML = "Correct!";
      score++;
      document.body.style.backgroundColor = neededColor;
      resetAll();
    } else {
      condition.innerHTML = "Fout!";
      score = 0;
      document.body.style.backgroundColor = "#232323";
      resetAll();
    }
  }
}

//shows and updates the score
function showScore() {
  scoreHolder = document.getElementById("score");
  scoreHolder.innerHTML = score;
}

//resets the board
function resetAll() {
  generateColors(colors);
  neededColor = colors[Math.floor(Math.random() * 6)];
  changeColors();
  showNeededColor();
  showScore();
}
