const express = require('express')
const mongoose = require('mongoose');
const routes = require('./routes')
const dotenv = require("dotenv")
const cors = require('cors')

dotenv.config();


mongoose.connect('mongodb+srv://AndreaNurce:<andrea><nurce>@cluster0.wim37.mongodb.net/ToDo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    'useCreateIndex': true,
    'useFindAndModify': false
})
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });


const app = express();
app.use(cors())
app.use(express.json());
app.use(routes) 


app.listen(process.env.PORT, () => console.log('Server up and runnig on port 5000' ));