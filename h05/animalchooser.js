div = document.getElementById("picture");
createfotocontainer();
createPetImage();

function createfotocontainer() {
  for (var i = 0; i < 9; i++) {
    fotoContainer = document.createElement("div");
    fotoContainer.className = "nieuwediv";
    fotoContainer.id = "foto-container-" + i;
    div.appendChild(fotoContainer);
  }
}

function createPetImage() {
  fotoContainers = document.getElementsByClassName("nieuwediv");

  for (var i = 0; i < fotoContainers.length; i++) {
    favoriet = document.createElement("div");
    favoriet.className = "favoriet";
    favoriet.id = "favoriet_" + (i + 1);

    plaatje = document.createElement("img");
    plaatje.src = "img/pet" + (i + 1) + ".jpg";
    plaatje.id = i + 1;

    plaatje.addEventListener("click", function() {
      maakFavoriet(this.id);
    });

    fotoContainers[i].appendChild(favoriet);
    fotoContainers[i].appendChild(plaatje);
  }
}

function maakFavoriet(id) {
  favoriet = document.getElementById("favoriet_" + id);
  geenFavoriet = document.getElementsByClassName("favoriet");

  for (var i = 0; i < geenFavoriet.length; i++) {
    geenFavoriet[i].style.backgroundImage = "none";
  }

  favoriet.style.backgroundImage = "url('img/hartje.png')";
}
