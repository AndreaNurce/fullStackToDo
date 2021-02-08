const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
var history = require('connect-history-api-fallback');

const app = express();


var hist = history({
    rewrites: [
        { from: /\*/, to: '/index.html' }
    ]
});


app.use(hist)
app.use('/',serveStatic(path.join(__dirname,'/dist')))


const port = process.env.PORT || 8080

app.listen(port)