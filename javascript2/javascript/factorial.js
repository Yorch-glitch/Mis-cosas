console.log("Calcular el factorial");

let fact=1, n=5;

if(n === 0 || n === 1){
    console.log("El factorial de 1 y 0 es "+fact);
} else if (n>1){
    for (let i =1; i<=n; i ++){
        fact*=i;
    }
    console.log("El factorial de "+n+" es "+fact);
} else {
    console.log("No existe el factorial de un número negativo");
}