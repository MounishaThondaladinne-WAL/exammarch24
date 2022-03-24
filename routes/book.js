var express = require("express");
var router = express.Router();
const bookController = require("../controllers/books");
router.get("/", bookController.getBooks);
router.post("/", bookController.createBook);
router.get("/bookandauthor", bookController.getBooksWithAuthor);
router.get("/authorandcategory", bookController.getBookWithAuthorAndCategory);
router.get("/bookwithcondition/:name", bookController.getBookWithCondition);
router.get("/:_id", bookController.getBookwithId);
module.exports = router;
