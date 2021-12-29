//Config
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

//Set Route
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/tweets");

//Config Dotenv
dotenv.config();

//Connect to MongoDB
const uri = 'mongodb+srv://user:pass@albctwitter.mdaoh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//Connect to Mongoose
mongoose.connect(uri, {
  serverSelectionTimeoutMS: 5000
}).catch(err => console.log(err.reason));

//Middleware
app.get("/",(req,res)=>{
    res.send("Welcome to ALBC Project");
})

//EHM
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//Annotation
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

//Listener
app.listen(8800, () => {
  console.log("Backend server is running!");
});
