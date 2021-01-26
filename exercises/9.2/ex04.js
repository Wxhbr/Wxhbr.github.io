const messageDelay = () => Math.floor(Math.random() * 5000)

const getMarsTemperature = () => {
  const maxTemperature = 58
  return Math.floor(Math.random() * maxTemperature)
}

const sendMarsTemperature = (string) => {
  setTimeout (() =>
  console.log (`Mars temperature is: ${getMarsTemperature()} degree Celsius`), messageDelay())
}


sendMarsTemperature() // imprime "Mars temperature is: 20 degree Celsius", por exemplo
