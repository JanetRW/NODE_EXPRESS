class Books {
    constructor(id_book, title, type, author, price, photo) {
        this.id_book = id_book;
        this.id_user = 0;
        this.title = title;
        this.type = type;
        this.author = author;
        this.price = price;
        this.photo = photo;
    }
}

module.exports = Books;