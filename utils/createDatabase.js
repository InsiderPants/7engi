const mongoose = require("mongoose"),
	  User = require("../models/User.js"),
	  Data = require("./Data.json");

const gradeToNumeric = (grade)=>{
	switch(grade){
		case "O" : return 10;
		case "A+" : return 9;
		case "A" : return 8;
		case "B+" : return 7;
		case "B" : return 6;
		case "C" : return 5;
		case "P" : return 4;
		case "F" : return 0;
		case "DT" : return 0;
	}
}

const mapGrades = (student)=>{
	student["MA102"] = gradeToNumeric(student["MA102"]);
	student["AP102"] = gradeToNumeric(student["AP102"]);
	student["EE102"] = gradeToNumeric(student["EE102"]);
	student["CO102"] = gradeToNumeric(student["CO102"]);
	student["ME102"] = gradeToNumeric(student["ME102"]);
	student["EN102"] = gradeToNumeric(student["EN102"]);
}

const createDatabase = ()=>{
	for(i=0;i<Data.length;i++){
		console.log(i);
		dataObj = Data[i];
		delete dataObj["TC"];
		mapGrades(dataObj);
		User.create(dataObj);
	}
}

// Connecting to database
const db = require('../config/keys.js').mongoURI;
mongoose.connect(db,{useNewUrlParser:true})
		.then(()=> {
			console.log("Connected to database");
			createDatabase();
		})
		.catch((err)=>console.log(err));

module.exports = createDatabase