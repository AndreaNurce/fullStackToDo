const express = require('express')
const mongoose = require('mongoose');
var router = express.Router();

let dataSchema = new mongoose.Schema({
    day: { type: String },
    data: { type: String, required: true },
    important: Boolean,
    checked: Boolean

});

let Data = new mongoose.model('Data', dataSchema);

router.post('/', async (req, res) => {
    let dataSchema = new Data({
        day: req.body.day,
        data: req.body.data,
        important: req.body.important,
        checked: false
    });
    await dataSchema.save();
    res.send("saved");
    res.end();
})

router.put('/', async (req, res) => {
    await Data.updateOne({ _id: req.body.id }, { $set: { checked: req.body.checked } });
    let response = await Data.find({ day: req.body.day })
    res.send(response);
    res.end();

});

router.get('/', async (req, res) =>{
    let response = await Data.find({ day: req.query.day})
    res.send(response);
    res.end();
});

router.delete('/' , async (req,res) =>{
    await Data.deleteOne({ _id: req.query.id });
    let response = await Data.find({ day: req.query.day });
    res.send(response);
    res.end();
});

module.exports = router;

