database = [
			[9,8,7,8,10,8,8.19],
			[7,8,7,7,7,8,7.33],
			[8,5,7,0,9,5,4.33],
			[10,6,7,5,8,0,8.5],
			[5,7,8,10,6,8,6.8],
			[6,8,10,7,7,5,7.9],
			[8,6,10,8,7,8,9],
			[8,8,7,6,10,5,7.8],
			[6,5,10,8,7,8,7.52],
			[5,8,6,7,8,10,6.52]
		];

const computeDistance = (x1,x2)=>{
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

const findPosition = (results,distance)=>{
	found = false
	q = 0
	for(;q<results.length;q++){
		if(distance<results[q]){
			found = true;
			break;
		}
	}
	if(found)
		return q;
	return -1;
}

const shiftNeighbors = (results,distance,position)=>{
	for(r=results.length-1;r>position;r--){
		results[r] = results[r-1];
	}
	results[position] = distance;
}

const knnSearch = (xQuery)=>{
	// take out student features from database one by one and compute distance
	numOfNeighbors = 7;

	// sort first k neighbors by distance to xQuery
	results = [];
	i=0
	for(;i<numOfNeighbors;i++){
		distance = computeDistance(xQuery,database[i]);
		if(distance<0)
			return -1;
		results.push(distance);
	}
	results.sort((function(a, b){return a - b}));

	// start the search
	for(;i<database.length;i++){
		distance = computeDistance(xQuery,database[i]);
		position = findPosition(results,distance);
		if(position>=0)
			shiftNeighbors(results,distance,position);
	}

	return results;
}

// xQuery = [7,8,7,7,7,8,7.33];
// results = knnSearch(xQuery);
// console.log(results);

module.exports =  knnSearch;