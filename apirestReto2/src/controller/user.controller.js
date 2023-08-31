//------------------------------------- Reto 2 DIA3
// Crea una API REST para la clase Book de nuestra aplicación MyBooks
// Para ello es necesario que se cree la clase Book en Javascript dentro de la carpeta src/models.
// El recurso del servidor debe ser un objeto de la clase Book.

// Los endpoint son:
// ● GET /book. Obtiene el libro.
// ● POST /book. Crea un nuevo objeto libro.
// ● PUT /book. Modifica los datos del libro.
// ● DEL /book. Elimina un libro.

// Comprobar su funcionamiento con Postman.

// Para una perfecta comunicación entre el front y express es necesario realizar los siguientes pasos:
// • Instalar el middleware CORS en la carpeta donde tengas ubicada tu API REST:

// npm install cors

// • Insertar las dos siguientes líneas de código en el fichero app.js:
// let cors = require('cors’)
// app.use(cors())


let books = null; //{id_book:"102030",id_user:0, title:"Titanic",type: "tapa blanda",author:"Yvan Figueiras",price:17,photo:"https://imagessl0.casadellibro.com/a/l/t5/53/9788416808953.jpg"}

function getStart(request,response)
{
    let respuesta ={error:false,codigo:200,mensaje:"Punto de Inicio"};
    response.send(respuesta);
}

function getBooks(request, response)
{
    let respuesta;

    if (books!=null) 
        respuesta = books;
    else
        respuesta = {error: true, codigo: 404, mensaje: "No existen libros"};
    
    response.send(respuesta);
}

// function getBooks(request,response)
// {
//     console.log(request.query);
//     let idBook =request.query.idBook;
//     let respuesta;
//     if(books !=null && (!idBook || idBook===books.id_book))
//         respuesta = {error: false, codigo:200, data:books}
//     else
//         respuesta = {error: true, codigo:404, mensaje:"El libro no existe"}
//     response.send(respuesta);
// }

//para esto en Postman se escribe GET -->localhost:3000/books?idBook=123
//otra opción en Postman es poner en Params idBook   value 123 en la url ya pone sola la direccion

function postBooks(request, response)
{
    let respuesta;
    console.log(request.body);
    // let  books = {
    //     id_book: request.body.id_book,
    //     id_user: request.body.id_user,
    //     title: request.body.title,
    //     type: request.body.type,
    //     author: request.body.author,
    //     price: request.body.price,
    //     photo: request.body.photo
    // };

    if (books==null || books.id_book != request.body.id_book)
    {
        books ={id_book: request.body.id_book,
                id_user: request.body.id_user,
                title: request.body.title,
                type: request.body.type,
                author: request.body.author,
                price: request.body.price,
                photo: request.body.photo}
        respuesta= {error: false,
                    codigo: 200,
                    mensaje: "Libro añadido correctamente",
                    data: books}
                   
    }
    else
        respuesta = {
                    error: true,
                    codigo: 200,
                    mensaje: "El libro ya existe"
                    };
    
    response.send(respuesta);
    
}

function putBooks(request,response){
    let respuesta;

    // let books ={
    //     id_book: request.body.id_book,
    //     id_user: request.body.id_user,
    //     title: request.body.title,
    //     type: request.body.type,
    //     author: request.body.author,
    //     price: request.body.price,
    //     photo: request.body.photo
    // };


    if(books!=null)
    {
        books.id_book = request.body.id_book1;
        books.id_user = request.body.id_user1;
        books.title   = request.body.title1;
        books.type    = request.body.type1;
        books.author  = request.body.author1;
        books.price   = request.body.price1;
        books.photo   = request.body.photo1;

        respuesta = {
                    error: false,
                    codigo: 200,
                    mensaje: "Libro actualizado",
                    data: books
                    };
    }   
    else
        respuesta = {
                    error: true,
                    codigo: 404,
                    mensaje: "El libro no existe",
                    data: books
                    }
    response.send(respuesta);
    }


function deleteBooks(request, response){
    let respuesta;

    if (books !=null)
    { 
        books = null;
        respuesta ={
                    error: false,
                    codigo: 200,
                    mensaje: "Libro eliminado",
                    data: books
        };
    }
    else
        respuesta ={
                    error: true,
                    codigo: 404,
                    mensaje: "El libro no existe",
                    data: books
        };
    response.send(respuesta);
    
}


module.exports = {getStart,getBooks,postBooks, putBooks, deleteBooks};