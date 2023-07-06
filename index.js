const express = require('express')
const app = express()
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const cors = require('cors');
const qrRouter = require('./qrcodeRouter');

app.use(express.json());
app.use(cors());
app.use('/api',qrRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})