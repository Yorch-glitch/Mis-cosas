let numero=35, resto=0, division=0, binario=0, posicion=1;
division = numero;
while(division>1){
    resto = division % 2;
    let re = Math.floor(resto);
    division = division / 2;
    binario += re*posicion;
    posicion *= 10;
}
console.log("el numero " + numero + " convertido a binario es: " + binario);