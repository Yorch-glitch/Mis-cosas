let numero=1234, resto=0, division=0, c=0;
division=numero;
while(division>1){
    c++;
    resto=numero%10;
    console.log(resto);
    division=division/10;
}
console.log("La cantidad de decimales que tiene el numero "+numero+" es "+c);