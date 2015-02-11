// Get all of our friend data

exports.view = function(req, res){
	console.log(req.query.lectureURL);
	res.render('confirmation', {"confirmDetails":[
		{
			"courseName": req.query.courseName,
			"courseAuthor": "default Author name for now",
			"courseDescription": req.query.courseDescription,
			"coursePicture": req.query.coursePicture,
			"lectureURL": req.query.lectureURL
		}
	]} );
};