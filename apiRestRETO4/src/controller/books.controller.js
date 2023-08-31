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
function getBooks(req,res)
{
    let respuesta;
    if (books != null) {
        if (req.query.id != undefined) {
            let i = 0;

            while (req.query.id != books[i].id_book && i < books.length) {
                i++;
            }

            if (req.query.id == books[i].id_book) {
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
    res.send(respuesta);
}


function postBooks(req,res)
{
    let book = new Books(req.body.id_book,req.body.id_user,req.body.title,req.body.type,req.body.author,req.body.price,req.body.photo);
    books.push(book)
    let respuesta = "Libro añadido correctamente";
    res.send(respuesta);
}

//-- Modifica los datos del libro cuyo id coincida con los datos enviados por el body de la solicitud PUT.
function putBooks(req,res)
{
    let respuesta;
    let i = 0;
    while (req.body.id_book != books[i].id_book && i < books.length) {
        i++;
    }

    if (req.body.id_book == books[i].id_book) {
        if (req.body.title != undefined) {
            books[i].title = req.body.title;
        }
        if (req.body.type != undefined) {
            books[i].type = req.body.type;
        }
        if (req.body.author != undefined) {
            books[i].author = req.body.author;
        }
        if (req.body.price != undefined) {
            books[i].price = req.body.price;
        }
        if (req.body.photo != undefined) {
            books[i].photo = req.body.photo;
        }
        if (req.body.id_book != undefined) {
            books[i].id_book = req.body.id_book;
        }
        if (req.body.id_user != undefined) {
            books[i].id_user = req.body.id_user;
        }
        respuesta = "Libro modificado correctamente"
    }

    res.send(respuesta);
}

//-- Elimina un libro
function delBooks(req,res)
{
    let respuesta = false;
    let i = 0;
    while (req.body.id_book != books[i].id_book && i < books.length) {
        i++;
    }

    if (req.body.id_book == books[i].id_book) {
        books.splice(i,1);
        respuesta = true;
    }
    res.send(respuesta);
}

module.exports = {getBooks, postBooks,putBooks, delBooks};