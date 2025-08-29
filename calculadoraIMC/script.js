
let peso = parseFloat(prompt("Ingrese peso en kg:"))
let altura = parseFloat(prompt("Ingrese altura en metros:"))
let imc = peso / (altura * altura)  

let estado;
if (imc < 18.5) estado = "Bajo peso"
else if (imc < 25) estado = "Normal"
else if (imc < 30) estado = "Sobrepeso"
else estado = "Obesidad"

console.log(`IMC: ${imc.toFixed(2)} - Estado: ${estado}`)