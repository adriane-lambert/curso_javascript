const numero = Number(prompt('digite um numero'))

const raizQuadrada = numero ** (1/2)
const eUmInteiro = Number.isInteger (numero)
const nan = Number.isNaN(numero)
const numeroTitulo = document.getElementById ("numero-titulo")
const baixo = Math.floor (numero)
const texto = document.getElementById ("texto")
const cima = Math.ceil (numero)
numeroTitulo.innerHTML = numero
const decimal = numero.toFixed (2)
texto.innerHTML = `
  <p>Seu numero -2 é ${numero - 2}.</p>
  <p>A raiz quadrada de ${numero} é ${raizQuadrada}</p>
  <p>${numero} é inteiro = ${eUmInteiro}</p>
  <p> É NaN = ${nan}</p> 
  <p>${numero} arredondando para baixo = ${baixo}</p>
  <p> ${numero} arredondando para cima = ${cima}</p>
  <p> ${numero} com duas casas decimais = ${decimal}<p>
`  