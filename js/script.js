function Forecast() {
  this.temp = 0;
  this.precip = 0;
  this.wind = 0;
};
Forecast.prototype.ranTemp = function() {
  this.temp = Math.floor((Math.random() * (62 - 28) + 28));
};
Forecast.prototype.ranPrecip = function() {
  this.precip = Math.floor((Math.random() * 100) + 1);
};
Forecast.prototype.ranWind = function() {
  this.wind = Math.floor((Math.random() * 9) + 1);
};
Forecast.prototype.reset = function() {
  this.temp = 0;
  this.precip = 0;
  this.wind = 0;
};
Forecast.prototype.setImg = function() {
  if ((this.temp <= 35) && (this.precip >= 49)) {
      $("#mondayImg").attr("src", "img/snow-rain.png");
  };
};
var monday = new Forecast();
var tuesday = new Forecast();
var wednesday = new Forecast();
var thursday = new Forecast();
var friday = new Forecast();

$(document).ready(function(){

  $( "#cast" ).click(function() {
    monday.reset();
    monday.ranTemp();
    monday.ranPrecip();
    monday.ranWind();
    $("#mondayTemp").text("Temp: " + monday.temp + "f");
    $("#mondayPrecip").text("Precip: " + monday.precip + "%");
    $("#mondayWind").text("Wind speed: " + monday.wind + "mph");
    monday.setImg();

  });

});
