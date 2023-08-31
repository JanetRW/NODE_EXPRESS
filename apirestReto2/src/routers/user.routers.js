const {Router} = require ("express");
const router = Router();
const usersCtrl = require('../controller/user.controller');

router.get("/", usersCtrl.getStart);
router.get("/books", usersCtrl.getBooks);
router.post("/books", usersCtrl.postBooks);
router.put("/books", usersCtrl.putBooks);
router.delete("/books", usersCtrl.deleteBooks);

module.exports = router;