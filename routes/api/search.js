const express = require("express"),
	  router = express.Router(),
	  knnSearch = require("../../utils/knnSearch.js");

// @route  : POST /api/search/getResults
// @desc   : send similar users from the info user provide
// @access : public route
router.post("/getResults",(req,res)=>{
	// take data from request
	const gradeMA102 = req.body.gradeMA102,
		  gradeAP102 = req.body.gradeAP102,
		  gradeEE102 = req.body.gradeEE102,
		  gradeCO102 = req.body.gradeCO102,
		  gradeME102 = req.body.gradeME102,
		  gradeEN102 = req.body.gradeEN102,
		  cgpa = req.body.cgpa;
	// concatenate the features
	features = [gradeMA102,gradeAP102,gradeEE102,gradeCO102,gradeME102,gradeEN102,cgpa];
	
	// do similarity search
	results = knnSearch(features);

	// return results in response
	res.send(results);
})

module.exports = router