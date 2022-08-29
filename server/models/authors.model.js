const mongoose = require("mongoose")

const AuthorScheme = new mongoose.Schema(
    {
        name: {
            type:String,
            required:[true,'Name is required'],
            minlength:[3,"Name should be at least 3 characters"]
        },
       
    },
    {
        // this will create createAt and updateAt directly
        timestamps: true
    })

const Author = mongoose.model("Author", AuthorScheme)

module.exports = Author