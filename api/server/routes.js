const express = require('express')
const mongoose = require('mongoose');
var router = express.Router();

let dataSchema = new mongoose.Schema({
    day: { type: String },
    data: { type: String, required: true },
    important: Boolean
});

let Data = new mongoose.model('Data', dataSchema);

router.post('/', async (req, res) => {
    let dataSchema = new Data({
        day: req.body.day,
        data: req.body.data,
        important: req.body.important
    });

    await dataSchema.save();

    res.send("saved");
    res.end();
})


router.get('/', async (req, res) =>{
    let response = await Data.find({ day: req.query.day})
    res.send(response);
    res.end();
});

module.exports = router;

