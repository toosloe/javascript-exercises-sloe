const convertToCelsius = function(Far) {
  return Math.round(((Far-32)/1.8)*10)/10;
};

const convertToFahrenheit = function(Cel) {
  return Math.round(((Cel * 1.8)+32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
