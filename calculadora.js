var a = prompt("ingrese valor 1 para sumar");

var b = prompt("ingrese valor 2para sumar ");

var valA = a.split ("/");

var valB = b.split ("/");

var denominador = valA[1] * valB[1];

var numerador = (valB[1] * valA[0]) + (valA[1] * valB[0]);

var respuesta = numerador + "/" + denominador; 
 console.log("el resultado de la suma es:" +respuesta);


var a = prompt("ingrese valor 1 para restar ");


var b = prompt("ingrese valor 2 para restar");


var valA = a.split ("/");


var valB = b.split ("/");


var denominador = valA[1] * valB[1];


var numerador = (valB[1] * valA[0]) - (valA[1] * valB[0]);


var respuesta = numerador + "/" + denominador;
 
 console.log("el resultado de la resta es:" +respuesta);




var a = prompt("ingrese valor 1para multiplicar");


var b = prompt("ingrese valor 2 multiplicar");


var valA = a.split ("/");


var valB = b.split ("/");


var denominador = valA[1] * valB[1];


var numerador = valA[0] * valB[0];


var respuesta = numerador + "/" + denominador; 
 
console.log("el resultado de lamultiplicacion es:" +respuesta);



var a = prompt("ingrese valor 1 para dividir");


var b = prompt("ingrese valor 2 para dividir");


var valA = a.split ("/");


var valB = b.split ("/");


var denominador = valA[1] * valB[0];


var numerador = valA[0] * valB[1];


var respuesta = numerador + "/" + denominador; 
 
console.log("el resultado de la division es:" +respuesta);


num = (f1[0]+f2[0]);
den = (f1[1]+f2[1]);
res =num+"/"+den;
confirm ("el resultado de la multiplicacion es: " +simplifica(res));