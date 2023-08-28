//RETO 2 DIA1 
//• Crea un objeto con las siguientes propiedades: name, surname, age.
// • Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el
// objeto e imprimelo por consola.
// • Todo ello en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de
// ejecutar el archivo de nuevo.

// declaro una constante para el modulo fs
const fs = require('fs');

// creo el objeto literal persona con las siguientes propiedades: name, surname, age.
let persona = {
    name: 'Janet',
    surname: 'Rojas',
    age: 33
}
// • Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el
// objeto e imprimelo por consola.
// fs.writeFile para escribir el JSON (ruta,callback)
fs.writeFile('./miPersona.json', JSON.stringify(persona), ()=>{
    // callback que lee nuestro jSON (ruta, tipo, callback)
    fs.readFile('./miPersona.json','utf-8', (error,datos)=>{
        
        if (error){
            console.log(error);
        } else {
            persona = JSON.parse(datos);
            console.log(datos);
            }
    })
})