const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

//REQUESTS
//GET


//POST


//UPDATE


//DELETE



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});