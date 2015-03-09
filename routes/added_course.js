// Get all of our friend data

//var data = require('../data.json');
var models = require('../models');

exports.view = function(req, res){
	console.log("THE LINK IS: " +req.query.coursePicture+"\n");
	var newCourse = new models.Project({
		"courseName": req.query.courseName,
		"author": req.query.pUser,
		"description": req.query.courseDescription,
		"courseImageURL": req.query.coursePicture,
		"lengthOfLectures": req.query.lengthOfLectures,
		"numberOfLectures": req.query.numberOfLectures,
		"summary": req.query.courseSummary,
		"first": req.query.firstName,
		"last": req.query.lastName
	});
	console.log(newCourse);
	newCourse.save(afterSaving);
	
	function afterSaving(err)
	{
		if(err)
		{
			console.log(err);
			res.send(500);
		}
		res.render('added_course', {"courseDetails":[
		{
			"courseName": req.query.courseName,
			"author": req.query.pUser,
			"description": req.query.courseDescription,
			"courseImageURL": req.query.coursePicture,
			"lengthOfLectures": req.query.lectureLength,
			"numberOfLectures": req.query.numLectures,
			"summary": req.query.courseSummary,
			"first": req.query.firstName,
			"last": req.query.lastName
		}
	]} );
	}

	
};