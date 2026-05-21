let nombre =prompt("Hola, ¿como te llamas?");

console.log("Hola "+nombre);

let n1 = parseInt(prompt("Ingresa el primer numero: "));

let n2 = parseInt(prompt("Ingresa el segundo numero: "));

let n3 = parseInt(prompt("Ingresa el tercer numero: "));

let media = (n1 + n2 + n3) / 3;

media = media.toFixed(2);

console.log("La media de los 3 numeros es: " + media);
