function Forecast() {
  this.temp = 0;
  this.precip = 0;
  this.wind = 0;
}
Forecast.prototype.ranTemp = function() {
  this.temp = Math.floor((Math.random() * (62 - 28) + 28));
}
Forecast.prototype.ranPrecip = function() {
  this.precip = Math.floor((Math.random() * 100) + 1);
}
Forecast.prototype.ranWind = function() {
  this.wind = Math.floor((Math.random() * 9) + 1);
}
Forecast.prototype.reset = function() {
  this.temp = 0;
  this.precip = 0;
  this.wind = 0;
}
var monday = new Forecast();


$(document).ready(function(){

  $( "#cast" ).click(function() {
    monday.reset();
    monday.ranTemp();
    monday.ranPrecip();
    monday.ranWind();
    alert(monday.temp);
    alert(monday.precip);
    alert(monday.wind);

  });

});
