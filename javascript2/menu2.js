console.log("Menu2");
console.log("1. Opcion 1");
console.log("2. Opcion 2");
console.log("3. Opcion 3");
console.log("4. Opcion4");

let op = 6;

switch (op) {
    case 1:
        let monto = parseInt(prompt("Ingrese el monto de su compra:"));

        console.log("Categoria 1: VIP");
        console.log("Categoria 2: Regular");
        console.log("Categoria 3: Nuevo");
        let categ = prompt("Ingrese el numero de su categoria:");

        let compra = 0;
        let categoria = "1";

        if (categ === "1"){
            compra = monto - (20 * (monto/100));
            categoria = "VIP";
        } else if (categ === "2"){
            compra = monto - (10 * (monto/100));
            categoria = "Regular";
        } else if (categ === "3"){
            compra = monto;
            categoria = "Nuevo";
        } else {
            console.log("ALERTA. Categoria no valida");
        }

        if (compra > 500){
            compra = compra - (5 * (compra/100));
            console.log("El total de su compra es de: "+ compra);
        } else if (compra <= 500 && compra > 0){
            console.log("El total de su compra es de: "+ compra);
        } else {
            console.log("No se proceso la venta");
        }
        break;
    case 2:
        let edad = parseInt(prompt("Ingrese su edad en años: "));
        if (edad <= -1){
            console.log(("Edad no válida"));
        } else if (edad <=2) {
            console.log("Eres un bebe");
        } else if(edad <= 12) {
            console.log("Eres un niño");
        } else if (edad <= 17){
            console.log("Eres un adolescente");
        } else if(edad <=60){
            console.log("Eres un adulto");
        } else if (edad > 60){
            console.log("Eres un adulto mayor");
        }
        break;
    case 3:
        let a=0, b=1, sig=0, c=0;

        let n = parseInt(prompt("Ingrese cuando numeros quieres calcular: "));

        console.log(a);
        console.log(b);

        for (let i = 0; i <=n; i++){
            sig = a+b;
            a = b;
            b=sig;
            console.log(sig);
        }
        break;
    case 4:
        console.log("1. Convertir a Grados Celsius a Farenheit");
        console.log("2. Convertir Grados Farenheit a Celsius");
        let op2 = parseInt(prompt("Ingrese la opcion deseada: "))

        let grados = parseInte(prompt("Ingrese los grados a convertir: "));

        if (op2 === 1 ){
            let faren = (grados*1.8) + 32;
            console.log(grados + "° Celsius a Farenheit son:" + faren + "° Farenheit"); 
        } else if (op2 === 2){
            let cel = (grados - 32) / 1.8;
            console.log(grados + "° Farenheit a Celsius son:" + cel +"° Celsius");
        }
        break;
    case 5:
        let num = parseInt(prompt("Ingrese un número: "));
        let pares = 0;
        let impares = 0;
        for (let i = 1; i <=num; i++){
            if (i % 2 == 0){
                pares++;
            } else {
                impares++;
            }
        }
        console.log("Hay "+pares+" numeros pares del 1 al "+num);
        console.log("Hay "+impares+" numeros impares del 1 al "+num);
        break;
    case 6:
        let sum = 0;
        let cont = 0;

        for (let i = 2; cont<100; i++){

            let primo = 1;

            for (let j = 2; j*j <=i; j++){
                primo= primo * (i % j !=0);
            }

            sum = sum + (i * primo);

            cont = cont + primo;
        }

        console.log("La suma de los primeros 100 numeros primos es:", sum);
        break;

    default:
        console.log("Opcion no valida");
        break;
}