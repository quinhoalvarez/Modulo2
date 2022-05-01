const inicioJogoBrasil = new Date(2002, 5, 30, 8)
const inicioJogoBrasilTimestamp = +inicioJogoBrasil

const primeiroGol = (1000 * 60 * 82)
const segundoGol = (1000 * 60 * 94)

const timeStampprimeiroGol = inicioJogoBrasilTimestamp + primeiroGol
const timeStampSegundoGol = inicioJogoBrasilTimestamp + segundoGol

const dataPrimeiroGol = new Date(timeStampprimeiroGol)
const dataSegundoGol = new Date(timeStampSegundoGol)

console.log(dataPrimeiroGol, dataSegundoGol)

