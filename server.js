const mongoose = require("mongoose")
const express = require("express")
const exp = require("constants")
const app = express()
const cors = require('cors') 



require("./server/config/mongoose.config")
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true}))

const AllAuthorsRoutes = require("./server/routes/authors.routes")
AllAuthorsRoutes(app)

app.listen(8000, () => console.log("This server is fired up on port 8000"))