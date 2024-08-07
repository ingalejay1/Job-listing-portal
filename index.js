const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const authRoutes = require("./routes/auth");
dotenv.config();
const PORT = process.env.PORT;

//log every incoming request
// app.use((req, res, next) => {
//     console.log(`${req.method} - ${req.url} - ${new Date()}`);
// });




app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
    res.send("Hello World");
});

//error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    console.log(`${req.method} - ${req.url} - ${new Date()}`);
    res.status(500).send("Something broke!");
})

app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`);
    mongoose.connect('mongodb+srv://ingalejay1:wKcF5sTl8RvUwvE6@cluster0.ebyv0tl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => "MongoDb connected").catch(err => console.log(err));
});