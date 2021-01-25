const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

const app = express()
app.use(cors)


app.listen(process.env.PORT || 5000, () => console.log(`Server up and runnig on port ${process.env.PORT}`));