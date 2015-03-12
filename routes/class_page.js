// Get all of our friend data
	//var data = require('../data.json');
var models = require('../models');
exports.view = function(req, res){
	console.log(req.query.currentCourse);
	models.Project
		.find({"courseName": req.query.currentCourse})
		.limit(1)
		.exec(renderCourses);
	function renderCourses(err, course){
		console.log(course);

		  res.render('class_page', {'singleCourse': course});
	};
}


     

