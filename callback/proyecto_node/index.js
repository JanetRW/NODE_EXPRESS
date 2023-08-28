//RETO 4 DIA 1 CONTINUACIÓN
// • Además la importanción de los módulos creados se debe hacer solo en el fichero index.js. De tal forma
// que con una sola llamada desde index.js obtengamos el mismo resultado que en el ejercicio anterior.
//Importo las funciones readConsole y writeAndRead que provienen de proyecto_node
const writeAndRead = require('./writeAndReadObject');
const readConsole = require('./readConsole');


 //Código que pide a la persona sus datos por consola, registra los datos
 // en un archivo.json (miObjetoPersona.json), los lee de ese archivo creado y los muestra por consola.
 
let path = './miObjetoPersona.json';
readConsole((obj) =>
                    writeAndRead(path,obj)
);