//RETO 4.4 DIA1
//Mete la parte de fs en una función en writeAndReadObject, su cabecera debe ser:
//writeAndRead(path, obj)
//En esta función se debe escribir en el fichero cuyo nombre está en el parámetro path el objeto literal
//guardado en el parámetro obj. Y luego leer dicho fichero y mostrarlo
//por consola.
//Ejemplo: writeAndRead(“./miFichero.json”, {calle: “Teruel”, numero: 8})

//Paquete de node fs, para utilizar los métodos para escritura y lectura de ficheros,
// writeFile y readFile.
const fs = require('fs');



function writeAndRead(path, obj){
    //JSON.stringify()-->convierte un objeto en una cadena de texto JSON
    fs.writeFile(path, JSON.stringify(obj), (error) => {
        if (error){
            console.log(error);
        }else{
            console.log('Archivo creado correctamente');
            fs.readFile(path,(error,datos) => {
                if (error){
                    console.log(error);
                }else{
                    console.log(datos.toString());
                    console.log('Lectura correcta');
                }
            })
        }
    });
}

module.exports = writeAndRead;
//writeAndRead('./miFichero.json', { name: 'Janet', surname: 'Rojas', age:33 });