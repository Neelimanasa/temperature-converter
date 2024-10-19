function convertTemperature() {
  const tempValue = parseFloat(document.getElementById('inputTemperature').value);
  const conversionType = document.getElementById('conversionType').value;
  let result = '';

  if (isNaN(tempValue)) {
    result = 'Please enter a valid number!';
  } else {
    if (conversionType === 'Celsius') {
      const toFahrenheit = (tempValue * 9/5) + 32;
      const toKelvin = tempValue + 273.15;
      result = `${tempValue}°C = ${toFahrenheit.toFixed(2)}°F = ${toKelvin.toFixed(2)}K`;
    } else if (conversionType === 'Fahrenheit') {
      const toCelsius = (tempValue - 32) * 5/9;
      const toKelvin = toCelsius + 273.15;
      result = `${tempValue}°F = ${toCelsius.toFixed(2)}°C = ${toKelvin.toFixed(2)}K`;
    } else if (conversionType === 'Kelvin') {
      const toCelsius = tempValue - 273.15;
      const toFahrenheit = (toCelsius * 9/5) + 32;
      result = `${tempValue}K = ${toCelsius.toFixed(2)}°C = ${toFahrenheit.toFixed(2)}°F`;
    }
  }

  document.getElementById('resultDisplay').innerHTML = result;
}
