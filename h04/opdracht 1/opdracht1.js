var auto = {
  kleur: "zwart",
  merk: "ford",
  snelheid: 0,
  gasgeven: function() {
    this.snelheid += 5;
    console.log(this.snelheid);
  },
  toeteren: function() {
    console.log("Toet!");
  }
};

console.log(auto.merk);
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.toeteren();
