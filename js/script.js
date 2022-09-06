// create function to process conversions

function convertTemperature() {
  userInput = parseInt(prompt('enter a value'))
  //The kelvin temp should not change
  const kelvin = userInput
  console.log(`You entered ${userInput} kelvin. See conversions below`)

  // kelvin-celsius temperature relationship
  let celsius = kelvin - 273

  // Celsius-fahrenheit relationship
  let fahrenheit = celsius * (9 / 5) + 32

  // round down
  fahrenheit = Math.floor(fahrenheit)

  // Newton-celsius temperature relationship
  let newton = celsius * (33 / 100)
  // round down
  newton = Math.floor(newton)
  console.log(`The temperature is ${celsius} degrees celsius`)

  console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
  console.log(`The temperature is ${newton} degrees newton.`)
}

const kelvinTemp = document.querySelector('#kelvin')
kelvinTemp.addEventListener('input', kelvin)

// function getKelvinValue() {}

// console.log(kelvinTemp.addEventListener('oninput', getKelvinValue))

const celsiusInput = document.querySelector('#celsius')
const newtonInput = document.querySelector('#newton')
const fahrenheitInput = document.querySelector('#fahrenheit')

// function celsius() {
//   let celsius = temperature
//   let kelvin = celsius + 273
//   let fahrenheit = celsius * (9 / 5) + 32
//   let newton = celsius * (33 / 100)
// }

function kelvin() {
  let temperature = parseInt(kelvinTemp.value)
  let kelvin = temperature
  let celsius = kelvin - 273.15
  celsiusInput.setAttribute('value', Math.round(celsius* 1000)/1000);
  let fahrenheit = 1.8*(kelvin- 273.15) + 32;
  fahrenheitInput.setAttribute('value', Math.round(fahrenheit *1000)/1000);
  let newton = (kelvin-273.15)* (33 / 100)
  newtonInput.setAttribute('value', Math.round(newton * 1000) / 1000)
}

// function fahrenheit(temperature) {
//   let fahrenheit = temperature
//   let celsius = (fahrenheit - 32) / 1.8
//   let kelvin = (f - 32) * 1.8 + 273
//   let newton = (fahrenheit - 32) * (11 / 60)
// }

// function newton(temperature) {
//   let newton = temperature
//   let celsius = (100 / 33) * temperature
//   let kelvin = temperature * (100 / 33) + 273
//   let fahrenheit = temperature * (60 / 11) + 32
// }
