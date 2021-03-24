var texto;

function converter(){
  var input = document.querySelector("#name");
  var tempC = parseFloat(input.value);
  var tempF = (tempC * 1.8) + 32;
   document.getElementById('valorDigitado').innerHTML = tempF;
}
