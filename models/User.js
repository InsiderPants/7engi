const mongoose = require("mongoose"),
	  Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
	name:{
		type: String,
		required: true
	},
	batchYear:{
		type: Number,
		required: true
	},
	batchName:{
		type: String,
		required: true
	},
	batchRollNo:{
		type: Number,
		required: true
	},
	gradeMA102:{
		type: Number,
		required: true
	},
	gradeAP102:{
		type: Number,
		required: true
	},
	gradeEE102:{
		type: Number,
		required: true
	},
	gradeCO102:{
		type: Number,
		required: true
	},
	gradeME102:{
		type: Number,
		required: true
	},
	gradeEN102:{
		type: Number,
		required: true
	},
	cgpa:{
		type: Number,
		required: true
	}
})

var User = mongoose.model("users",userSchema)

module.exports = User