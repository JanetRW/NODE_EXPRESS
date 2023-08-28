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
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
}

async function readConsole(callback) {
    let persona = {
        name: '',
        surname: '',
        age: 0
    };

    try {
        persona.name = await pregunta('¿Cuál es su nombre?');
        persona.surname = await pregunta('¿Cuál es su apellido?');
        persona.age = await pregunta('¿Cuántos años tiene?');

        //await callback(persona);
        await fs.writeFile("miPersona.json", JSON.stringify(persona));

       
        // console.log('-------------------------------');
        // console.log('El archivo se ha creado correctamente');
        // console.log('-------------------------------');
        const datos = await fs.readFile("miPersona.json", "utf-8");
        console.log('-------------------------------');
        callback(JSON.parse(datos));
        // console.log(datos.toString());
        console.log('La Lectura es correcta');
        console.log('-------------------------------');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { readConsole };