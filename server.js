const express = require("express"),
	  app = express(),
	  mongoose = require("mongoose"),
	  bodyParser = require('body-parser');

const searchAPI = require("./routes/api/search.js")

// Body Parser middleware to parse request
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()) // if there's a json object in request, it'll populate it

// Home
app.get('/',(req,res)=>{
	res.send("You reached Home!");
})

// Use Routes, instead of using app.get()
app.use('/api/search',searchAPI);

// For any unexpected get route
app.get('*',(req,res)=>{
	res.send("Page Not Found");
})
// For any unexpected post rout
app.post('*',(req,res)=>{
	res.send("Page Not Found");
})

const port = process.env.PORT || "8000";
const ip = process.env.IP;

app.listen(port,ip,()=>{
	// template strings - `` and not ""
	console.log(`Server running on port ${port} and ip ${ip}`);
})