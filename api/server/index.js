const express = require('express')
const mongoose = require('mongoose');
const routes = require('./routes')


mongoose.connect('mongodb://localhost:27017/ToDo', {
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
app.use(express.json());
app.use(routes)

app.listen(5000, () => console.log(`Server up and runnig on port ${process.env.PORT}`));