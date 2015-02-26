// Get all of our friend data
var models = require('../models');
exports.view = function(req, res){
	console.log(req.query.courseName);
	/*var data = require('../data.json');
	var index = -1;
	for(var i=0; i< data.courses.length; i++)
	{
		if(data.courses[i].courseName == req.query.courseName)
		{
			var index = i;
			break;
		}
	}
	data.courses[index].studentEnrolled= decodeURIComponent(req.query.pUser);
	console.log(data.courses[index].studentEnrolled)*/
	
	/*models.Project
		.find({"courseName": req.query.courseName})
		.update({$set:{"studentEnrolled": req.query.pUser}})
		.exec(afterUpdating);
		
	function afterUpdating(err)
	{
		
		res.render('enroll_in_class');
	}*/
	
	models.Project
		.find({"courseName": req.query.courseName})
		.remove()
		.exec(afterRemoving);
		
	function afterRemoving(err)
	{
		res.render('delete_class');
	}
	
};