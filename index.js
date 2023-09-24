function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let convertedTemp;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        convertedTemp = (inputTemp * 9/5) + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        convertedTemp = (inputTemp - 32) * 5/9;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        convertedTemp = inputTemp + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        convertedTemp = inputTemp - 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        convertedTemp = (inputTemp - 32) * 5/9 + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        convertedTemp = (inputTemp - 273.15) * 9/5 + 32;
    } else {
        convertedTemp = inputTemp;
    }

    document.getElementById("result").style.opacity = 1; // Show the result
    document.getElementById("convertedTemp").textContent = convertedTemp.toFixed(2);
}
