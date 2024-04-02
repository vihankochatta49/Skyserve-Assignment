const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;

//body parser
app.use(express.urlencoded({ extended: false }));

// Connecting with database
mongoose
  .connect("mongodb+srv://vihankochatta:Vihank%40123@vihan.c7ql4ep.mongodb.net/?retryWrites=true&w=majority" || "mongodb://localhost:27017/blogsite")
  .then(() => console.log("Connection successful..."))
  .catch((err) => console.log(err));


app.use("/",require("./routes/nav"));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});