var a = prompt("ingrese valor 1 para sumar");

var b = prompt("ingrese valor 2para sumar ");

var valA = a.split ("/");

var valB = b.split ("/");

var denominador = valA[1] * valB[1];

var numerador = (valB[1] * valA[0]) + (valA[1] * valB[0]);

var respuesta = numerador + "/" + denominador; 
 console.log("el resultado de la suma es:" +simplifica(respuesta));


var a = prompt("ingrese valor 1 para restar ");


var b = prompt("ingrese valor 2 para restar");


var valA = a.split ("/");


var valB = b.split ("/");


var denominador = valA[1] * valB[1];


var numerador = (valB[1] * valA[0]) - (valA[1] * valB[0]);


var respuesta = numerador + "/" + denominador;
 
 console.log("el resultado de la resta es:" +simplifica(respuesta));




var a = prompt("ingrese valor 1para multiplicar");


var b = prompt("ingrese valor 2 multiplicar");


var valA = a.split ("/");


var valB = b.split ("/");


var denominador = valA[1] * valB[1];


var numerador = valA[0] * valB[0];


var respuesta = numerador + "/" + denominador; 
 
console.log("el resultado de lamultiplicacion es:" +simplifica(respuesta));



var a = prompt("ingrese valor 1 para dividir");


var b = prompt("ingrese valor 2 para dividir");


var valA = a.split ("/");


var valB = b.split ("/");


var denominador = valA[1] * valB[0];


var numerador = valA[0] * valB[1];


var respuesta = numerador + "/" + denominador; 
 
console.log("el resultado de la division es:" +simplifica(respuesta));


num = (f1[0]+f2[0]);
den = (f1[1]+f2[1]);
res =num+"/"+den;
confirm ("el resultado de la multiplicacion es: " +simplifica(res));




function simplifica(val)
{
   var parteVal = val.split("/");
   var numerador = Number(parteVal[0]);
   var denominador = Number(parteVal[1]);
   var maximo = numerador <= denominador ? numerador : denominador;
   var cont = 2;
   do
   {
       if(numerador % cont === 0 && denominador % cont === 0)
       {
           numerador /= cont; // numerador = numerador / cont;
           denominador /= cont;
           maximo = numerador <= denominador ? numerador : denominador;
       }
       else
       {
           cont++;
           if(cont > maximo)
           {
               break;
           }
       }
   }while(1);
   var respuesta = numerador + "/" + denominador;
   if(denominador === 1)
   {
       respuesta = numerador;
   }
   return respuesta;
};
