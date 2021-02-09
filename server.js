const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const cors = require('cors')
const app = express();


app.use(cors())
app.use('/',serveStatic(path.join(__dirname,'/dist')))

if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));
}
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
const port = process.env.PORT || 8080

app.listen(port)