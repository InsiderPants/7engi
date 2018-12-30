const mongoose = require("mongoose"),
	  Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
	Name:{
		type: String,
		required: true
	},
	RollNo:{
		type: String,
		required: true
	},
	MA102:{
		type: Number,
		required: true
	},
	AP102:{
		type: Number,
		required: true
	},
	EE102:{
		type: Number,
		required: true
	},
	CO102:{
		type: Number,
		required: true
	},
	ME102:{
		type: Number,
		required: true
	},
	EN102:{
		type: Number,
		required: true
	},
<<<<<<< HEAD
	CGPA:{
=======
	gradeEN102:{
		type: Number,
		required: true
	},
	cgpa:{
>>>>>>> 2f2b7d1850f8c6638477f74da2eeaf827781a780
		type: Number,
		required: true
	}
})

var User = mongoose.model("users",userSchema)

module.exports = User