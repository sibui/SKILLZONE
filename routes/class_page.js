// Get all of our friend data

exports.view = function(req, res){
	console.log(req.query.currentCourse);
	var data = require('../data.json');
	var index = -1;
	for(var i=0; i< data.courses.length; i++)
	{
		if(data.courses[i].courseName == req.query.currentCourse)
		{
			var index = i;
			break;
		}
	}
	console.log(data.courses[index].author);
	res.render('class_page', {"singleCourse":[
		{
			"courseName": data.courses[index].courseName,
			"author": data.courses[index].author,
			"description": data.courses[index].description,
			"courseImageURL": data.courses[index].courseImageURL,
			"courseLink": data.courses[index].courseLink
		}
	]});
};