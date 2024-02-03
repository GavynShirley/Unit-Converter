const inputElement = document.getElementById("number-inpt");
const convertBtn = document.getElementById("convert-btn");
const lengthConversion = document.getElementById("length-conversion");
const volumeConversion = document.getElementById("volume-conversion");
const massConversion = document.getElementById("mass-conversion");

function convertLength(value) {
    const metersToFeet = value * 0.3048;
    const feetToMeters = value * 3.28084;
    return `${value} feet = ${parseFloat(metersToFeet.toFixed(3))} meters | ${value} meters = ${parseFloat(feetToMeters.toFixed(3))} feet`;
}

function convertVolume(value) {
    const gallonsToLiters = value * 3.78541;
    const litersToGallons = value * 0.264172;
    return `${value} gallons = ${parseFloat(gallonsToLiters.toFixed(3))} liters | ${value} liters = ${parseFloat(litersToGallons.toFixed(3))} gallons`;
}

function convertMass(value) {
    const poundsToKilograms = value * 0.453592;
    const kilogramsToPounds = value * 2.20462;
    return `${value} pounds = ${parseFloat(poundsToKilograms.toFixed(3))} kilograms | ${value} kilograms = ${parseFloat(kilogramsToPounds.toFixed(3))} pounds`;
}

convertBtn.addEventListener("click", function () {
    const inputValue = parseFloat(inputElement.value);
    
    if (!isNaN(inputValue)) {
        lengthConversion.textContent = convertLength(inputValue);
        volumeConversion.textContent = convertVolume(inputValue);
        massConversion.textContent = convertMass(inputValue);
    } else {
        alert("Please enter a valid number.");
    }
});