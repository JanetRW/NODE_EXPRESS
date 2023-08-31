
//-- Importar la clase book
const Books = require('../models/books');

//-- Base de datos hardcoded de libros

let book1= new Books(45014882,'La Casa de las sombras','Tapa blanda','Adam Nevill',18,'https://imagessl2.casadellibro.com/a/l/t7/82/9788445014882.jpg');
let book2= new Books(18945557,'Los crímenes de Hamlet','Tapa dura','Malenka Ramos',20.85,'https://imagessl7.casadellibro.com/a/l/t7/57/9788418945557.jpg');
let book3= new Books(15618690,'Narraciones Extraordinarias','Tapa blanda','Edgar Allan Poe',15.15,'https://imagessl0.casadellibro.com/a/l/t7/90/9788415618690.jpg');
let book4= new Books(10032004,'El viento conoce mi nombre','Tapa dura','Isabel Allende',21.75,'https://imagessl4.casadellibro.com/a/l/t7/04/9788401032004.jpg');
let book5= new Books(37638973,'La ciudad y los perros','Tapa dura','Mario Vargas Llosa',15.15,'https://imagessl3.casadellibro.com/a/l/t7/73/9788437638973.jpg');
let book6= new Books(20471839,'Cien Años de Soledad','Tapa dura','Gabriel García Marquez',14.15,'https://imagessl9.casadellibro.com/a/l/t7/39/9788420471839.jpg');
let book7= new Books(18163152,'El Código Da Vinci','Tapa dura','Dan Brown',17,'https://imagessl2.casadellibro.com/a/l/t7/52/9788408163152.jpg');
let book8= new Books(18253129,'A orillas del río piedra me senté y lloré','Tapa blanda','Paulo Coelho',9.45,'https://imagessl9.casadellibro.com/a/l/t7/29/9788408253129.jpg');


let books = [book1,book2,book3,book4,book5,book6,book7,book8];

//-- Funciones del servidor

//-- Obtiene el libro con la id pasada por parámetro. Si no se le pasa ningún id
//-- devuelve el array completo de libros.
function getBooks(request,response)
{
    let respuesta;
    if (books != null) {
        if (request.query.id != undefined) {
            let i = 0;

            while (request.query.id != books[i].id_book && i < books.length) {
                i++;
            }

            if (request.query.id == books[i].id_book) {
                respuesta = books[i];
            }else{
                respuesta = "No existe ningún libro con la id solicitada"
            }
        }else{
            respuesta = books;
        }
    }else{
        respuesta = "No existe ningún libro";
    }
    response.send(respuesta);
}

function postBooks(request,response)
{
    let newBook = {
        id_book: request.body.id_book,
        id_user: request.body.id_user,
        title: request.body.title,
        type: request.body.type,
        author: request.body.author,
        price: request.body.price,
        photo: request.body.photo
    };

    let bookExist = books.find(book => book.id_book == newBook.id_book);

    if (bookExist){
        let respuesta = {
            error: true,
            codigo: 200,
            mensaje: "El libro ya existe",
            data: null
        }
        response.send(respuesta);

    }else{
        books.push(newBook);

        let respuesta = {
            error: false,
            codigo: 200,
            mensaje: "Libro añadido correctamente",
            data: newBook
        };
        response.send(respuesta);
    }

}
// function postBooks(req,res)
// {
//     let book = new Books(req.body.id_book,req.body.id_user,req.body.title,req.body.type,req.body.author,req.body.price,req.body.photo);
//     books.push(book)
//     let respuesta = "Libro añadido correctamente";
//     res.send(respuesta);
// }

//-- Modifica los datos del libro cuyo id coincida con los datos enviados por el body de la solicitud PUT.
function putBooks(request,response)
{
    let respuesta;
    let i = 0;
    while (request.body.id_book != books[i].id_book && i < books.length) {
        i++;
    }

    if (request.body.id_book == books[i].id_book) {
        if (request.body.title != undefined) {
            books[i].title = request.body.title;
        }
        if (request.body.type != undefined) {
            books[i].type = request.body.type;
        }
        if (request.body.author != undefined) {
            books[i].author = request.body.author;
        }
        if (request.body.price != undefined) {
            books[i].price = request.body.price;
        }
        if (request.body.photo != undefined) {
            books[i].photo = request.body.photo;
        }
        if (request.body.id_book != undefined) {
            books[i].id_book = request.body.id_book;
        }
        if (request.body.id_user != undefined) {
            books[i].id_user = request.body.id_user;
        }
        respuesta = "Libro modificado correctamente"
    }

    response.send(respuesta);
}

//-- Elimina un libro
function delBooks(request, response){
    let deleteBook = request.query.id_book; 
    let bookIndex = books.find(book => book.id_book == deleteBook)

    if (bookIndex != 0){
        books.splice(bookIndex, 1); 
        let respuesta ={
            error: false,
            codigo: 200,
            mensaje: "Libro eliminado",
            data: bookIndex
        }
        response.send(respuesta);
    }else{
        let respuesta ={
            error: true,
            codigo: 404,
            mensaje: "El libro no existe",
            data: null
        }
        response.send(respuesta);
    }
}
// function delBooks(request,response)
// {
//     let respuesta = false;
//     let i = 0;
//     while (request.body.id_book != books[i].id_book && i < books.length) {
//         i++;
//     }

//     if (request.body.id_book == books[i].id_book) {
//         books.splice(i,1);
//         respuesta = true;
//     }
//     response.send(respuesta);
// }

module.exports = {getBooks, postBooks,putBooks, delBooks};