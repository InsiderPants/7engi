const express = require("express"),
	  router = express.Router();

// @route  : POST /api/search/getResults
// @desc   : send similar users from the info user provide
// @access : public route
router.post("/getResults",(req,res)=>{
	// take data from request
	// do similarity search
	// return results in response
})

module.exports = router