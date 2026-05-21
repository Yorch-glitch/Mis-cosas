console.log("Ecuacion de segundo grado");

let a=1, b=9, c=20,
    x1=0, x2=0, det=0;

    det=(b**2-4*a*c);
    if(det===0){
        x=-b/2*a;
        console.log("el polinomio solo tiene una raiz");
    } else if(det>0){
        x1= ((-b)+Math.sqrt(det))/(2*a);
        x2= ((-b)-Math.sqrt(det))/(2*a);
        console.log("Las raices del polinomio son: "+ x1 +" y " + x2);
    } else {
        console.log("No existen raices reales");
    }