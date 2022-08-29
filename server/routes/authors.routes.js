const AuthorController = require("../controllers/authors.controller")

module.exports = app => {
    app.get("/api/authors", AuthorController.findAllAuthors)
    app.get("/api/authors/random", AuthorController.findRandom)
    app.get("/api/authors/:id", AuthorController.findSingleAuthor);
    app.post("/api/authors/new", AuthorController.createNewAuthor)
    app.put("/api/authors/update/:id", AuthorController.updateAuthor)
    app.delete("/api/authors/delete/:id", AuthorController.deleteAuthor)
};