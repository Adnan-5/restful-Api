const express = require("express")
const app = express();
const cors =  require("cors")
const bodyParser = require("body-parser")
const booksRoute = require("./routes/books");
const mongoose = require("mongoose");
app.use(cors());
app.use(bodyParser.json())
app.use('/books', booksRoute)
// app.get('/', (req, res) => {
//     res.send("Hello World!")
// })
mongoose.connect("mongodb+srv://admin:admin1@testuser.lfkxw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" , 
(err) =>{
if(err){ console.log(err.message)};
console.log("connected with database ...");
})
app.listen(4000)