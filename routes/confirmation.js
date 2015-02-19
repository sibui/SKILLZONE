// Get all of our friend data

exports.view = function(req, res){
	console.log(req.query.lectureURL);
	res.render('confirmation', {"confirmDetails":[
		{
			"courseName": req.query.courseName,
			"author": req.query.pUser,
			"courseDescription": req.query.courseDescription,
			"coursePicture": req.query.coursePicture,
			"lectureURL": req.query.lectureURL
		}
	]} );
};