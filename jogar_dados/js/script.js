const jogada = Math.floor((Math.random() * 6) + 1)
const img = document.getElementById("dado")
const nome_img = "img/dado_" + jogada + ".png"

console.log(img)
console.log(jogada) 
console.log(nome_img)

img.setAttribute('src', nome_img)