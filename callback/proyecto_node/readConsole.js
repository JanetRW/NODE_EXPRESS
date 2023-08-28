//RETO 4 (CONTINUACIÓN)
// • Mete la parte de readline en otra función en readConsole.js, su cabecera debe ser:
// readConsole(callback)
// Esta función debe preguntar por consola por el name, surname y age del usuario. Guardar dichos
// datos en un objeto literal, y aplicarle la callback recibida como parámetro de entrada de readConsole.
// Ejemplo: readConsole(console.log) Debe imprimir por consola el objeto creado.
// • Estas dos funciones deben ser independientes, esto es que si se desea escribir y leer los datos de un
// objeto en un fichero se pueda hacer independiente de si este objeto se ha creado a mano o con el
// módulo readConsole.

const readline = require('readline');
const lectura = readline.createInterface(process.stdin, process.stdout);


// • Mete la parte de readline en otra función en readConsole.js, su cabecera debe ser:
// readConsole(callback)
function readConsole(callback){
    let persona = {
        name: '',
        surname: '',
        age: 0
    }
// Esta función debe preguntar por consola por el name, surname y age del usuario. Guardar dichos
// datos en un objeto literal, y aplicarle la callback recibida como parámetro de entrada de readConsole.
// Ejemplo: readConsole(console.log) Debe imprimir por consola el objeto creado.
    lectura.question('¿Cuál es su nombre? ', (name) => {
        persona.name = name;
        lectura.question('¿Cuál es su apellido? ', (surname) => {
            persona.surname = surname;
            lectura.question('¿Cuántos años tiene? ', (age) => {
                persona.age = age;
                callback(persona);
                lectura.close();
            });
        });
    });
}

/**
 * Exportar función readConsole.
 */
module.exports = readConsole ;