//Constants
const inputUnitResp = document.getElementById('inputUnitResp');
const inputValueResp = document.getElementById('inputValueResp');
const outputUnitResp = document.getElementById('outputUnitResp');
const submitButton = document.getElementById('submit');
const responseElement = document.getElementById('response');

//Vars
let celsius = `°C`;
let fahrenheit = `°F`;
let kelvin = `K`;
let resultStatement = `Converted temperature: `;
let outputValue;

submitButton.addEventListener('click', function() {
    //Fetching the input values
    const inputUnit = inputUnitResp.value;
    //comment out
    console.log(inputUnit);
    const inputValue = parseFloat(inputValueResp.value);
     //comment out
    console.log(inputValue);
    const outputUnit = outputUnitResp.value;
     //comment out
    console.log(outputUnit);

    //Account for same value units
    if (inputUnit === outputUnit) {
        responseElement.textContent = `Input and output units are the same. Please choose different units.`;
        return;
    };

    //Account for no input value
    if (!inputValue) {
        responseElement.textContent = `There's no value to convert. Place place a number.`;
        return;
    };

    //Calculations for conversions
    if (inputUnit === "celsius" && outputUnit === "fahrenheit") {
        outputValue = (inputValue * 9/5) + 32;
        //comment out
        console.log(outputValue);
    } else if (inputUnit === "fahrenheit" && outputUnit === "celsius") {
        outputValue = (inputValue - 32) * 5/9;
        //comment out
        console.log(outputValue);
    } else if (inputUnit === "fahrenheit" && outputUnit === "kelvin") {
        outputValue = (inputValue - 32) * 5/9 + 273.15;
        //comment out
        console.log(outputValue);
    } else if (inputUnit === "kelvin" && outputUnit === "fahrenheit") {
        outputValue = (inputValue - 273.15) * 9/5 +32;
        //comment out
        console.log(outputValue);
    } else if (inputUnit === "celsius" && outputUnit === "kelvin") {
        outputValue = +inputValue + 273.15;
        //comment out
        console.log(outputValue);
    } else if (inputUnit === "kelvin" && outputUnit === "celsius") {
        outputValue = +inputValue - 273.15;
        //comment out
        console.log(outputValue);
    } else {
        responseElement.textContent = `Error`;
        return;
    };

    //Round off output value
    outputValue = outputValue.toFixed(2);

    //Show result
    if (outputUnit === "fahrenheit") {
        responseElement.textContent = resultStatement + outputValue + fahrenheit;
    } else if (outputUnit === "kelvin") {
        responseElement.textContent = resultStatement + outputValue + kelvin;
    } else if (outputUnit === "celsius") {
        responseElement.textContent = resultStatement + outputValue + celsius;
    } else {
        responseElement.textContent = resultStatement + outputValue;
    }; 
});
