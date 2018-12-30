const express = require("express"),
	  router = express.Router(),
	  knnSearch = require("../../utils/knnSearch.js");

// @route  : POST /api/search/getResults
// @desc   : send similar users from the info user provide
// @access : public route
router.post("/getResults",(req,res)=>{
	// take data from request
	const gradeMA102 = Number(req.body.ma102),
		  gradeAP102 = Number(req.body.ap102),
		  gradeEE102 = Number(req.body.ee102),
		  gradeCO102 = Number(req.body.co102),
		  gradeME102 = Number(req.body.me102),
		  gradeEN102 = Number(req.body.en102),
		  cgpa = (gradeMA102+gradeAP102+gradeEE102+gradeCO102+gradeME102+gradeEN102)/6;
	// concatenate the features
	features = [gradeMA102,gradeAP102,gradeEE102,gradeCO102,gradeME102,gradeEN102,cgpa];
	console.log(features);
	// do similarity search
	results = knnSearch(features);
	// console.log(results);
	Promise.all([results])
		.then((e)=>console.log(e))
		.catch
	// return results in response
	staticObj = [
				{
				"Name": "Ajay",
				"RollNo": "2K17/A4/01"
				},
				{
				"Name": "Manish",
				"RollNo": "2K17/A4/02"
				},
				{
				"Name": "Piyush",
				"RollNo": "2K17/A4/03"
				},
				{
				"Name": "Sahil",
				"RollNo": "2K17/A4/04"
				},
				{
				"Name": "Mohit",
				"RollNo": "2K17/A4/05"
				},
				{
				"Name": "Abhishek",
				"RollNo": "2K17/A4/06"
				},
				{
				"Name": "Anshul",
				"RollNo": "2K17/A4/07"
				}
			]
	res.send(staticObj);
})

module.exports = router