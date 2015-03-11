// Get all of our friend data
//var data = require('../data.json');
var models = require('../models');
exports.view = function(req, res){
	//console.log(data);
	//res.render('courses', data);
	
	if(req.query.sort == "course")
	{
		models.Project
		.find()
		.sort("courseName")
		.exec(renderCourses);
	}	
	else if(req.query.sort == "category")
	{
		models.Project
		.find()
		.sort({"category": 1, "courseName": 1})
		.exec(renderCourses);
	}
	else if(req.query.sort =="teacher")
	{
		models.Project
		.find()
		.sort({"last": 1, "courseName": 1})
		.exec(renderCourses);
	}
	else if(req.query.sort=="rating")
	{
		models.Project
		.find()
		.sort({"rating": -1, "courseName": 1})
		.exec(renderCourses);
	}
	else
	{
		models.Project
		.find()
		.sort("courseName")
		.exec(renderCourses);
	}
	function renderCourses(err, course){
		console.log(course);
	res.render('courses', {'courses': course});	
	}
};