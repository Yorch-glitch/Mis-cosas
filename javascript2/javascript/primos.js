console.log("Numeros Primos");

let n=8, r=0, c=0;

if (n > 0){
for (let i=1; i<= n; i++){

    r = n % i;

    if(r===0){
        c++;
    }
}

if (c<=2){
    console.log("El numero "+n+" es primo")
} else {
    console.log("El numero "+n+" no es primo")
}
}else{
    console.log("No existen numeros negativos")
}