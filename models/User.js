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
	CGPA:{
		type: Number,
		required: true
	}
})

var User = mongoose.model("users",userSchema)

module.exports = User