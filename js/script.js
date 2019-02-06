function Forecast(day) {
  this.temp = 0;
  this.precip = 0;
  this.wind = 0;
  this.day = day;
};
Forecast.prototype.ranTemp = function() {
  this.temp = Math.floor((Math.random() * (62 - 28) + 28));
  $("#" + this.day + "Temp").text("Temp: " + this.temp + "f");
};
Forecast.prototype.ranPrecip = function() {
  this.precip = Math.floor((Math.random() * 100) + 1);
  $("#" + this.day + "Precip").text("Precip: " + this.precip + "%");
};
Forecast.prototype.ranWind = function() {
  this.wind = Math.floor((Math.random() * 9) + 1);
  $("#" + this.day + "Wind").text("Wind speed: " + monday.wind + "mph");
};
Forecast.prototype.reset = function() {
  this.temp = 0;
  this.precip = 0;
  this.wind = 0;
};
Forecast.prototype.setImg = function() {
  if ((this.temp <= 35) && (this.precip >= 49)) {
      $("#" + this.day + "Img").attr("src", "img/snow-rain.png");
  } else if ((this.temp >= 35) && (this.precip >= 49)) {
    $("#" + this.day + "Img").attr("src", "img/rain-cloudy.png");
  } else if ((this.precip >= 25) && (this.precip <= 48)) {
    $("#" + this.day + "Img").attr("src", "img/partly-cloudy.png");
  }  else {
    $("#" + this.day + "Img").attr("src", "img/sunny.png");
  };
};

var monday = new Forecast("monday");
var tuesday = new Forecast("tuesday");
var wednesday = new Forecast("wednesday");
var thursday = new Forecast("thursday");
var friday = new Forecast("friday");
var days = [monday, tuesday, wednesday, thursday, friday]

$(document).ready(function(){

  $( "#cast" ).click(function() {
    days.forEach(function(day){
      day.reset();
      day.ranTemp();
      day.ranPrecip();
      day.ranWind();
      day.setImg();
    });
  });

});
