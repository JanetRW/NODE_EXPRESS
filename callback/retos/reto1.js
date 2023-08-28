//RETO 1 DIA 1
//• Hacer que se imprima un mensaje que indique “Mensaje 1” nada más ejecutar el programa.
//• Pasados tres segundos, se debe imprimir “Mensaje 2”.
//• Y después de que se imprima este mensaje, que se imprima “Mensaje 3”
console.log("Mensaje 1");

setTimeout(() => {
    console.log("Mensaje 2");
    console.log("Mensaje 3");
}, 3000);