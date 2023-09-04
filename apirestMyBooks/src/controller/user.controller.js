const Books = require ('../models/book');

let books = [new Books(45014882,'La Casa de las sombras','Tapa blanda','Adam Nevill',18,'https://imagessl2.casadellibro.com/a/l/t7/82/9788445014882.jpg'),
            new Books(18945557,'Los crímenes de Hamlet','Tapa dura','Malenka Ramos',20.85,'https://imagessl7.casadellibro.com/a/l/t7/57/9788418945557.jpg'),
            new Books(15618690,'Narraciones Extraordinarias','Tapa blanda','Edgar Allan Poe',15.15,'https://imagessl0.casadellibro.com/a/l/t7/90/9788415618690.jpg'),
            // new Books(10032004,'El viento conoce mi nombre','Tapa dura','Isabel Allende',21.75,'https://imagessl4.casadellibro.com/a/l/t7/04/9788401032004.jpg'),
            // new Books(37638973,'La ciudad y los perros','Tapa dura','Mario Vargas Llosa',15.15,'https://imagessl3.casadellibro.com/a/l/t7/73/9788437638973.jpg'),
            // new Books(20471839,'Cien Años de Soledad','Tapa dura','Gabriel García Marquez',14.15,'https://imagessl9.casadellibro.com/a/l/t7/39/9788420471839.jpg'),
            // new Books(18163152,'El Código Da Vinci','Tapa dura','Dan Brown',17,'https://imagessl2.casadellibro.com/a/l/t7/52/9788408163152.jpg'),
            // new Books(18253129,'A orillas del río piedra me senté y lloré','Tapa blanda','Paulo Coelho',9.45,'https://imagessl9.casadellibro.com/a/l/t7/29/9788408253129.jpg'),
            ]

function getBooks(request, response){
    //console.log("no se porque entra aqui");
    let result;
    
    if (books != null){
        result = {error: false, codigo: 200,mensaje:"Estos son los libros", res: books};
        ;}
    else
        result = {error: true, codigo: 404, mensaje: "No existen libros"};
    
    response.send(result);
    //console.log(result);
}

function getBooksbyId(request, response){
    console.log("TEST");
/*     console.log(request);
    console.log(response); */
    //let idBook = request.query.id_book; 
    let idBook_NOBORRAR = request.body.id_book; 

    let idBook = request.params.id;

    console.log("es esta la id que toca?: " + idBook);
    let book = books.find(book => book.id_book == idBook);

    if (book != 0){
        let result ={
            error: false,
            codigo: 200, 
            mensaje: "Libro encontrado",
            data: book
        }
        response.send(result);
    }else{
        let result={
            error: true,
            codigo: 404,
            mensaje: "El libro no existe"
        }
        response.send(result);
    }
}

function postBooks(request, response){
    let result;
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
            result = {
            error: true,
            codigo: 200,
            mensaje: "El libro ya existe",
            res_book: null
        }
        //response.send(result);

    }else{
        books.push(newBook);

            result = {
                error: false,
                codigo: 200,
                mensaje: "Libro añadido correctamente",
                res_book: newBook
        };
    response.send(result);
    }
}

function putBooks(request,response){
    let bookEdit = request.body.id_book;
    //console.log(bookEdit);
    let bookEdited ={
        id_book: request.body.id_book,
        id_user: request.body.id_user,
        title: request.body.title,
        type: request.body.type,
        author: request.body.author,
        price: request.body.price,
        photo: request.body.photo
    };

    let bookIndex = books.findIndex(book => book.id_book == bookEdit);
    console.log(bookIndex);

    if(bookIndex != -1){
        books[bookIndex] = {
            ...books[bookIndex],
            ...bookEdited
            };
            let result = {
            error: false,
            codigo: 200,
            mensaje: "Libro actualizado",
            res: bookEdited
            }
            response.send(result);
    } else {
        let result ={
            error: true,
            codigo: 404,
            mensaje: "El libro no existe",
            res: null
        }
        response.send(result);
    }
}

function deleteBooks(request, response){
    let deleteBook = request.query.id_book; 
    let bookIndex = books.find(book => book.id_book == deleteBook)

    if (bookIndex != 0){
        books.splice(bookIndex, 1); 
        let result ={
            error: false,
            codigo: 200,
            mensaje: "Libro eliminado",
            data: bookIndex
        }
        response.send(result);
    }else{
        let result ={
            error: true,
            codigo: 404,
            mensaje: "El libro no existe",
            data: null
        }
        response.send(result);
    }
}


module.exports = {getBooks, getBooksbyId, postBooks, putBooks, deleteBooks};