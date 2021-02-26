const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express();
const cors = require('cors')

app.use(cors());
app.use('/',serveStatic(path.join(__dirname,'/dist')))

if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));
}

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'dist', 'index.html'));
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

const port = process.env.PORT || 8080

app.listen(port)