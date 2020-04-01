var afbeeldingen = document.getElementsByTagName("img");
var random = Math.floor(Math.random() * 9 + 1);
var getallen = [];

while (getallen.length < 9) {
  random = Math.floor(Math.random() * 9 + 1);
  if (getallen.lastIndexOf(random) == -1) {
    getallen.push(random);
  }
}

for (var i = 0; i < afbeeldingen.length; i++) {
  afbeeldingen[i].src = "img/kat" + getallen[i] + ".jpg";
}
