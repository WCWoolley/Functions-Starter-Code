function addTwo(num1,num2){
  return num1 + num2;
}

function addThree(num1,num2,num3){
  return num1 + num2 + num3;
}

function multiplyTwo(num1,num2){
  return num1 * num2;
}

function reverseWord(str){
  return str.split("").reverse().join("");
}

function increaseByPercentage(per,inc){
  return per + per * (inc / 100);
}

function celciusToFahrenheit(cel){
  return cel * 9 / 5 + 32;
}

function fahrenheitToCelcius(far){
  return (far - 32) * 5 / 9;
}

function stripVowels(str){
  return str.replace(/[aeiou]/gi,'');
}

// do not delete
runTests();
