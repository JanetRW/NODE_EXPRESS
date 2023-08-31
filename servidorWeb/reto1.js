// Reto 1 DIA3
// Los retos se deben hacer en la rama dia3 subir los cambios y hacer el merge con la rama master.
// Crea un servidor web con el módulo express que realice las siguientes tareas:
// 1. Debe mostrar por consola ‘Petición recibida del cliente’ por cada conexión que se haga desde el
// cliente.
// 2. Debe mostrar por consola la url, método y el user-agent por el que se está haciendo la petición.
// 3. Le retorne al usuario un mensaje del tipo application/json con el status code 200 y un mensaje con
// este contenido: { ok: true, message: ‘Recibido!’ }
// 4. Si alguien entra en /bye debe devolver un mensaje del tipo application/json, statusCode: 200 y un
// mensaje con este contenido: { ok: true, message: ‘Adios!’ }
// 5. Comprobar su funcionamiento con Postman.

const express = require('express');
const app = express();

//Debe mostrar por consola ‘Petición recibida del cliente’ por cada conexión que se haga desde el
// cliente
// Debe mostrar por consola la url, método y el user-agent por el que se está haciendo la petición.
app.get("/",function(req, res)
{
    console.log("Petición recibida del cliente");
    console.log("URL: ", req.url);
    console.log("Metodo: ", req.method);
    console.log("User-agent: ", req.headers ['user-agent']);
    //res.send("Petición recibida del cliente");

//  Le retorne al usuario un mensaje del tipo application/json con el status code 200 y un mensaje con
// este contenido: { ok: true, message: ‘Recibido!’ }
    res.status(200).json({ ok: true, message: 'Recibido!' });
    
    
});

//Ruta principal que devuelve un mensaje JSON
// app.get('/', (req, res) => {
//  

// Si alguien entra en /bye debe devolver un mensaje del tipo application/json, statusCode: 200 y un
// mensaje con este contenido: { ok: true, message: ‘Adios!’ } 
//Ruta /bye que devuelve un mensaje JSON de despedida
app.get('/bye', (req, res) => {
  res.status(200).json({ ok: true, message: 'Adios!' });
});


app.listen(3000);