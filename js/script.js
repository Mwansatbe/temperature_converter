const kelvinTemp = document.querySelector('#kelvin')
kelvinTemp.addEventListener('input', kelvin)

const celsiusInput = document.querySelector('#celsius')
celsiusInput.addEventListener('input', celsius)

const newtonInput = document.querySelector('#newton')
newtonInput.addEventListener('input', newton)

const fahrenheitInput = document.querySelector('#fahrenheit')
fahrenheitInput.addEventListener('input', fahrenheit)
// Conversation function from celsius
function celsius() {
  let temperature = parseInt(celsiusInput.value)
  let celsius = temperature
  let kelvin = celsius + 273.15
  kelvinTemp.value = Math.round(kelvin * 1000) / 100
  let fahrenheit = 1.8 * celsius + 32
  fahrenheitInput.value = Math.round(fahrenheit * 1000) / 1000
  let newton = celsius * (33 / 100)
  newtonInput.value = Math.round(newton * 1000) / 1000
}
// conversion function from Kelvin
function kelvin() {
  let temperature = parseInt(kelvinTemp.value)
  let kelvin = temperature
  let celsius = kelvin - 273.15
  celsiusInput.value = Math.round(celsius * 1000) / 1000
  let fahrenheit = 1.8 * (kelvin - 273.15) + 32
  fahrenheitInput.value = Math.round(fahrenheit * 1000) / 1000
  let newton = (kelvin - 273.15) * (33 / 100)
  newtonInput.value = Math.round(newton * 1000) / 1000
}

// conversation function from fahrenheit
function fahrenheit() {
  let temperature = parseInt(fahrenheitInput.value)
  let fahrenheit = temperature
  let celsius = (fahrenheit - 32) / 1.8
  celsiusInput.value = Math.round(celsius * 1000) / 1000
  let kelvin = (fahrenheit + 459.67) * (5 / 9)
  kelvinTemp.value = Math.round(kelvin * 1000) / 1000
  let newton = (fahrenheit - 32) * (11 / 60)
  newtonInput.value = Math.round(newton * 1000) / 1000
}

// Conversation function from newton
function newton() {
  temperature = newtonInput.value
  let newton = temperature
  let celsius = (100 / 33) * temperature
  celsiusInput.value = Math.round(celsius * 1000) / 1000
  let kelvin = temperature * (100 / 33) + 273
  kelvinTemp.value = Math.round(kelvin * 1000) / 1000
  let fahrenheit = temperature * (60 / 11) + 32
  fahrenheitInput.value = Math.round(fahrenheit * 1000) / 1000
}
