const Author = require("../models/authors.model")

module.exports.findAllAuthors = (req, res) => {
    Author.find().sort('name')
        .then(allAuthors => res.json({ authors: allAuthors }))
        .catch(err => res.json({ message: "something went wrong", error: err }))
}

module.exports.findSingleAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(singleAuthor => res.json({ author: singleAuthor }))
        .catch(err => res.status(400).json(err))
}

module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json({ author: newAuthor }))
        .catch(err => res.status(400).json(err)) //res.json({ message: "something went wrong", error: err }))
}

module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body, { new: true,runValidators:true})
        .then(updatedAuthor => res.json({ author: updatedAuthor }))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deletedAuthor => res.json({ author: deletedAuthor }))
        .catch(err => res.json({ message: "something went wrong", error: err }))
}

module.exports.findRandom = (req, res) => {
    Author.countDocuments()
        .then(count => {
            var random = Math.floor(Math.random() * count)
            // skip() to skip docs equal to random number 
            // if random =1 , skip will skip first doc and find one will return second doc
            Author.findOne().skip(random)
                .then(randomAuthor => res.json({ author: randomAuthor }))
                .catch(err => res.json({ message: "something went wrong", error: err }))
        })
        .catch(err => res.json({ message: "something went wrong", error: err }))

}