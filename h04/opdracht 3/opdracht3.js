var ogen = document.getElementById("ogen");
var neus = document.getElementById("neus");
var mond = document.getElementById("mond");
var teller = 0;

ogen.style.backgroundImage = "url('img/ogen1.jpg')";
neus.style.backgroundImage = "url('img/neus1.jpg')";
mond.style.backgroundImage = "url('img/mond1.jpg')";

ogen.addEventListener("click", function() {
  foto();
  ogen.style.backgroundImage = "url('img/ogen" + foto() + ".jpg')";
});

neus.addEventListener("click", function() {
  foto();
  neus.style.backgroundImage = "url('img/neus" + foto() + ".jpg')";
});

mond.addEventListener("click", function() {
  foto();
  mond.style.backgroundImage = "url('img/mond" + foto() + ".jpg')";
});

function foto() {
  if (teller >= 3) {
    teller = 1;
  } else {
    teller++;
  }

  return teller;
}
