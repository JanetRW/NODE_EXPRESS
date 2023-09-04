const {Router} = require ("express");
const router = Router();
//const {getBooks, getBooksbyId, postBooks, putBooks, deleteBooks} = require('../controller/user.controller')
const usersCtrl = require('../controller/user.controller');

router.get("/books", usersCtrl.getBooks);
router.get("/books/:id", usersCtrl.getBooksbyId);
router.post("/books", usersCtrl.postBooks);
router.put("/books", usersCtrl.putBooks);
router.delete("/books/", usersCtrl.deleteBooks);

module.exports = router;