//RETO 4.4 DIA2
//Mete la parte de fs en una función en writeAndReadObject, su cabecera debe ser:
//writeAndRead(path, obj)
//En esta función se debe escribir en el fichero cuyo nombre está en el parámetro path el objeto literal
//guardado en el parámetro obj. Y luego leer dicho fichero y mostrarlo
//por consola.
//Ejemplo: writeAndRead(“./miFichero.json”, {calle: “Teruel”, numero: 8})

//Paquete de node fs, para utilizar los métodos para escritura y lectura de ficheros,
// writeFile y readFile.
const fs = require('fs/promises');

function writeAndRead(path, obj) {
    return fs.writeFile(path, JSON.stringify(obj))
        .then(() => {
            console.log('Archivo creado correctamente');
            return fs.readFile(path, "utf8");
        })
        .then((nuevoFichero) => {
            console.log(JSON.parse(nuevoFichero));
            console.log('Lectura correcta');
        })
        .catch((error) => {
            console.log(error);
        });
}

// Uso:
//writeAndRead('./miFichero.json', { name: 'Janet', surname: 'Rojas', age: 33 })


module.exports = { writeAndRead };