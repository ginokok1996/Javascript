var teller = 0;
var slide = document.getElementById("slider");
slide.style.backgroundImage = "url('img/kat1.jpg')";
slide.style.backgroundSize = "cover";

slide.addEventListener("click", function() {
  foto();
  slide.style.backgroundImage = "url('img/kat" + foto() + ".jpg')";
});

function foto() {
  if (teller >= 9) {
    teller = 1;
  } else {
    teller++;
  }

  return teller;
}
