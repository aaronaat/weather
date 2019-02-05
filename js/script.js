function Forecast() {
  this.temp = 0;
  this.precip = 0;
  this.wind = 0;
}
Forecast.prototype.ranTemp = function() {
  this.temp = Math.floor(Math.random() * 62) + 28;
}
Forecast.prototype.ranPrecip = function() {

}
Forecast.prototype.ranWind = function() {

}

var monday = new Forecast();
monday.ranTemp();
