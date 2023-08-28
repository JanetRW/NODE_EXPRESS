//RETO 4 DIA 2(CONTINUACIÓN)
// • Mete la parte de readline en otra función en readConsole.js, su cabecera debe ser:
// readConsole(callback)
// Esta función debe preguntar por consola por el name, surname y age del usuario. Guardar dichos
// datos en un objeto literal, y aplicarle la callback recibida como parámetro de entrada de readConsole.
// Ejemplo: readConsole(console.log) Debe imprimir por consola el objeto creado.
// • Estas dos funciones deben ser independientes, esto es que si se desea escribir y leer los datos de un
// objeto en un fichero se pueda hacer independiente de si este objeto se ha creado a mano o con el
// módulo readConsole.

const fs = require('fs/promises');
const readline = require('readline');


function pregunta(pregunta) {
    const question = new Promise((resolve, reject) => {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });

    return question;
}
function readConsole(callback){

let persona = {
    name: '',
    surname: '',
    age: 0
}

pregunta('¿Cuál es su nombre?')
    .then(respuesta => {
        persona.name = respuesta;
        return pregunta('¿Cuál es su apellido? ')
    })
    .then(respuesta => {
        persona.surname = respuesta;
        return pregunta('¿Cuántos años tiene?')
    })
    .then(respuesta => {
        persona.age =  respuesta;
        //return callback(persona);
        return fs.writeFile("miPersona.json", JSON.stringify(persona))


        // fs.writeFile('./miPersona.json', JSON.stringify(persona));
        // console.log('-------------------------------');
        // console.log('El archivo se ha creado correctamente');
        // console.log('-------------------------------');

        // return fs.readFile('./miPersona.json', 'utf-8');
    })
    .then(() => {
        return fs.readFile("miPersona.json", "utf-8")
    })
    .then(datos => {
        console.log('-------------------------------');
        // console.log(datos);
        callback(JSON.parse(datos));
        console.log('La Lectura es correcta');
        console.log('-------------------------------');
    })
    .catch(error => {
        console.log(error);
    })

}
module.exports={readConsole};