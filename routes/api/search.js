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

	// return results in response
	res.send(results);
})

module.exports = router