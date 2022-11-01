let varA = 'A' // b
let varB = 'B' // c
let varC = 'C' // a 

let temp =  varA // A

varA = varB // B
varB = varC // C
varC = temp // A

console.log (varA, varB, varC)
