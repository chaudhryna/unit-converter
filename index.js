const inputEl = document.getElementById('input-convert');
const convertBtn = document.getElementById('convert-btn');
const lengthResult = document.getElementById('length-result');
const volumeResult = document.getElementById('volume-result');
const massResult = document.getElementById('mass-result');
const errorMsg = document.getElementById('error-msg');

function convertNumber(num) {
  let meters = num * 0.3048;
  let feet = num * 3.28084;
  let liters = num * 3.785412;
  let gallons = num * 0.264172;
  let kilograms = num * 0.45359237;
  let pounds = num * 2.2046226218488;

  displayResult(num, meters, feet, liters, gallons, kilograms, pounds)
}

function displayResult(num, meters, feet, liters, gallons, kilograms, pounds) {
  lengthResult.innerHTML = `${num} meters = ${feet.toFixed(3)} feet | ${num} feet = ${meters.toFixed(3)} meters`;
  volumeResult.innerHTML = `${num} liters = ${gallons.toFixed(3)} gallons | ${num} gallons = ${liters.toFixed(3)} liters`;
  massResult.innerHTML = `${num} kilos = ${pounds.toFixed(3)} pounds | ${num} pounds = ${kilograms.toFixed(3)} kilo`;
}

convertBtn.addEventListener("click", function() {
  if (inputEl.value) {
    errorMsg.innerHTML = "";
    let numToConvert = Number(inputEl.value);
    convertNumber(numToConvert);
  } else {
    console.log("Please enter a number.")
    errorMsg.innerHTML = `Please enter a number.`;
  }
})

