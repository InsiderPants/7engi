const mongoose = require("mongoose"),
	  User = require("../models/User.js");

function computeDistance (x1,x2){
	if(x1.length!=x2.length){
		return -1;
	}else{
		sum=0;
		for(p=0;p<x1.length;p++){
			sum = sum + (x1[p]-x2[p])*(x1[p]-x2[p]);
		}
		sum = Math.sqrt(sum);
		return Number(sum.toPrecision(4));
	}
}

function findPosition (results,distance){
	found = false
	q = 0
	for(;q<results.length;q++){
		if(distance<results[q]["distance"]){
			found = true;
			break;
		}
	}
	if(found)
		return q;
	return -1;
}

function shiftNeighbors (results,student,position){
	for(r=results.length-1;r>position;r--){
		results[r] = results[r-1];
	}
	results[position] = student;
}

// using bubble sort
function sortFirstkNN (results){
	for(s=0;s<results.length-1;s++){
		for(t=0;t<results.length-s-1;t++){
			if(results[t]["distance"]>results[t+1]["distance"]){
				temp = results[t];
				results[t] = results[t+1];
				results[t+1] = temp;
			}
		}
	}
	return results;
}

async function knnSearch(xQuery){
	// take out student features from database one by one and compute distance
	numOfNeighbors = 7;

	// sort first k neighbors by distance to xQuery
	results = [];
	i=0
	for(;i<numOfNeighbors;i++){
		const students = await User.find().skip(i).limit(1);
		student = await students[0];
		xi = [student["MA102"],student["AP102"],student["EE102"],student["CO102"],student["ME102"],student["EN102"],student["CGPA"]]
		distance = await computeDistance(xQuery,xi);
		if(distance<0)
			return -1;
		student["distance"] = distance;
		results.push(student);
	}
	results = await sortFirstkNN(results);
	info = await User.collection.stats()
	databaseSize = info["count"]
	// start the search
	for(;i<databaseSize;i++){
		students = await User.find().skip(i).limit(1);
		student = await students[0];
		xi = [student["MA102"],student["AP102"],student["EE102"],student["CO102"],student["ME102"],student["EN102"],student["CGPA"]]
		distance = await computeDistance(xQuery,xi);
		if(distance<0)
			return -1;
		student["distance"] = distance;
		position = await findPosition(results,distance);
		if(position>=0)
			await shiftNeighbors(results,student,position);
	}
	return await results;
}

// ---TESTING---
// Connecting to database
// const db = require('../config/keys.js').mongoURI;
// mongoose.connect(db,{useNewUrlParser:true})
// 		.then(async function(){
// 			console.log("Connected to database");
// 			results = await knnSearch([8,9,7,7,5,8,6.53]);
// 		})
// 		.catch((err)=>console.log(err));

module.exports =  knnSearch;