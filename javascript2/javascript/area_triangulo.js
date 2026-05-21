let lado1 = 30, lado2 = 40, lado3 = 50;

let semip = (lado1 + lado2 + lado3) / 2;

console.log("El semiperímetro es: " + semip);

let area = Math.sqrt(semip * (semip-lado1) * (semip-lado2) * (semip-lado3));

console.log("El area del triangulo es: " + area);

let altura = 2 * area / lado1;

console.log("La altura del triangulo es: " + altura);
