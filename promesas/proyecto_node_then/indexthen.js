//RETO 4 DIA 2 CONTINUACIÓN
// • Además la importanción de los módulos creados se debe hacer solo en el fichero index.js. De tal forma
// que con una sola llamada desde index.js obtengamos el mismo resultado que en el ejercicio anterior.
//Importo las funciones readConsole y writeAndRead que provienen de proyecto_node
const fs = require('fs/promises');
const readline = require('readline');
const wr = require('./writeAndReadthen');
const rc = require('./readConsolethen');


// function pregunta(pregunta) {
//     const question = new Promise((resolve, reject) => {

//         const rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });

//         rl.question(pregunta, (respuesta) => {
//             resolve(respuesta);
//             rl.close();
//         });
//     });

//     return question;
// }


 //Código que pide a la persona sus datos por consola, registra los datos
 // en un archivo.json (miObjetoPersona.json), los lee de ese archivo creado y los muestra por consola.
 let path = './miObjetoPersona.json';
rc.readConsole(persona=>(wr.writeAndRead(path,persona)))


//  async function registrar(path)
//  {
//     let user ={};
//     try{
//         user.name =await pregunta('¿Cuál es su nombre?');
//         user.surname = await pregunta('¿Cual es su apellido?');
//         user.age = await pregunta('¿Cuántos años tiene?');
//         await writeAndRead(path,user);
//     }
//     catch (error) {
//         console.log(error);
//       }
//  }

//   //Main   
  
//   registrar("user.json");