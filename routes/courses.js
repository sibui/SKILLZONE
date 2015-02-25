// Get all of our friend data
//var data = require('../data.json');
var models = require('../models');
exports.view = function(req, res){
	//console.log(data);
	//res.render('courses', data);
		models.Project
		.find()
		.exec(renderCourses);
		
	function renderCourses(err, course){
	res.render('courses', {'courses': course});	
	}
};