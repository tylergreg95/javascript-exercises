const convertToCelsius = function(fDegree) {
  result = fDegree - 32;
  result *= (5/9);
  return parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function(cDegree) {
  result = cDegree * (9/5);
  result += 32
  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
