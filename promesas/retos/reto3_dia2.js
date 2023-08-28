// Reto 3 DIA2
// • Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
// módulo readline de node y solicita los valores del name, surname y age a través de la consola.
// • Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método
// readline.
// • Este ejercicio debe hacerse en una única ejecución de JavaScript
const fs = require('fs/promises');
const readline = require('readline');

let persona = {
    name: '',
    surname: '',
    age: 0
};

module.exports = { persona };

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
async function registrarPersona() {
    try {
        persona.name = await pregunta('¿Cuál es su nombre? ');
        persona.surname = await pregunta('¿Cuál es su apellido? ');
        persona.age = await pregunta('¿Cuántos años tiene? ');

        await fs.writeFile('./miPersona.json', JSON.stringify(persona));
        console.log('------------------------------');
        console.log('El archivo se ha creado correctamente');
        console.log('------------------------------');

        const datos = await fs.readFile('./miPersona.json');
        console.log(datos.toString());
        console.log('------------------------------');
        console.log('La Lectura es correcta');
        console.log('------------------------------');
    } catch (error) {
        console.error(error);
    } 
}

registrarPersona();