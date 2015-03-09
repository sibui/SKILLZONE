// Get all of our friend data

exports.view = function(req, res){
	console.log(req.query.numLectures);
	console.log(req.queryfirstName);
	console.log(req.querylastName);
	res.render('confirmation', {"confirmDetails":[
		{
			"courseName": req.query.courseName,
			"author": req.query.pUser,
			"courseDescription": req.query.courseDescription,
			"coursePicture": req.query.coursePicture,
			"summary": req.query.courseSummary,
			"first": req.query.firstName,
			"last": req.query.lastName,
			"numberOfLectures": req.query.numLectures,
			"lengthOfLectures": req.query.lectureLength
		}
	]} );
};