console.log("Calcular serie fibonacci")

let a=0, b=1, sig=0, c=0;
let n=3; //Cuantos numeros quieres mostrar ademas de los 2 primeros (0 y 1) 
console.log(a);
console.log(b);
for (let i=1; i<=n; i++){
    sig=a+b;
    a=b;
    b=sig;
    console.log(sig);
}