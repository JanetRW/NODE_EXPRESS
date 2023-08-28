// Reto 3 DIA1
// • Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
// módulo readline de node y solicita los valores del name, surname y age a través de la consola.
// • Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método
// readline.
// • Este ejercicio debe hacerse en una única ejecución de JavaScript

const fs = require('fs');

const readline = require('readline');

//necesario el metodo createInterface para el uso del paquete readline
 
const lectura = readline.createInterface(process.stdin, process.stdout);


//Crea un objeto con las siguientes propiedades: name, surname, age.
let persona = {
    name: '',
    surname: '',
    age: 0
}
module.exports = {persona};


/**
 * Obtener los datos por consola para crear el objeto persona.
 */
lectura.question('¿Cuál es su nombre? ', (respuesta) => {
    persona.name = respuesta;
    lectura.question('¿Cuál es su apellido? ', (respuesta) => {
        persona.surname = respuesta;
        lectura.question('¿Cuántos años tiene? ', (respuesta) => {
            persona.age = respuesta;
            
            //ahora creo un archivo json que contenga al objeto persona
            // • Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el
            // objeto e imprimelo por consola.
            fs.writeFile('./miPersona.json', JSON.stringify(persona), (error) => {
                if (error){
                    console.log(error);
                }else{
                    console.log('------------------------------');
                    console.log('El archivo se ha creado correctamente');
                    console.log('------------------------------');
                    
                     //Lee datos de un archivo json y lo muestra por pantalla.
                     
                    fs.readFile('./miPersona.json',(error,datos) => {
                        if (error){
                            console.log(error);
                        }else{
                            console.log(datos.toString());
                            console.log('------------------------------');
                            console.log('La Lectura es correcta');
                            console.log('------------------------------');
                            lectura.close();
                        }
                    })
                }
            });
        });
    });
});