const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express();



app.use('/',serveStatic(path.join(__dirname,'/dist')))

if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));
}
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'dist', 'index.html'));
});

app.use(function (req, res, next) {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
    );
    next();
});

const port = process.env.PORT || 8080

app.listen(port)