function convertTemperature() {

    let temperatureInput = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;
    let convertedTemperature;
    
    //when input give wrong number
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }
     //result in exact decimal
    temperatureInput = parseFloat(temperatureInput);

    // Temperature changes
    switch (unit) {
        case "celsius":
            convertedTemperature = (temperatureInput - 32) * (5/9);
            break;
        case "fahrenheit":
            convertedTemperature = (temperatureInput * 9/5) + 32;
            break;
        case "kelvin":
            convertedTemperature = temperatureInput + 273.15;
            break;
    }

    document.getElementById("result").innerHTML = "Converted Temperature: " + convertedTemperature.toFixed(2) + " " + unit;
}
