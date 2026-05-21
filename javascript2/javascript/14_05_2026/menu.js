console.log("Bienvenidos al Menu");
console.log("1. Calcular serie fibonacci");
console.log("2. Calcular Factorial");
console.log("3. Cuantos decimales tiene un numero?")
console.log("4. Convertir de decimal a binario")
let opc=4;

switch (opc){
    case 1: {
        let a=0, b=1, sig=0, c=0, n=5;
        console.log(a);
        console.log(b);
        for (let i=1; i <=0; i++){
            sig=a+b;
            a=b;
            b=sig;
            console.log(sig)
        }
    break;
    }

    case 2:{
        let fact=1, n=6;

        if (n===0||n===1){
            console.log("El factorial es "+fact);
        } else if(n>0){
            for(let i= 1; i <=n; i++){
                fact*=i;
            }
            console.log("El factorial de "+ n +" es:" + fact);
        } else {
            console.log("El factorial de un numero negativo no existe");
        }
    break;
    }

    case 3:{
        let n = 123, r = 0, div = 0, c = 0;
        div=n;
        while(div>1){
            c++;
            r=n % 10;
            console.log(r);
            div= div/10;
        }
        console.log("La cantidad de decimales del numero " + n + " es: " + c);
    break;
    }

    case 4:{
        let n = 12, r = 0, div = 0, binario=0, posicion=1;
        div=n;
        while(div>1){
            r = div % 2;
            let re =Math.floor(r);
            console.log(re);
            div= div/2;
            binario+=re*posicion;
            posicion*=10;
        }
        console.log("el numero" + n + " convertido a binario es: " + binario);
    break;
    }
    default:{
        console.log("La opcion elegida esta errada (1-4)")
        break;
    }
}