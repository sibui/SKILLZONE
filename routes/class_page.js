// Get all of our friend data
	//var data = require('../data.json');
var models = require('../models');
exports.view = function(req, res){
	console.log(req.query.currentCourse);

	//console.log(data);
	/*var temp = new Object();
	temp["courseName"] = "added new test course in studentmode";
	temp["author"] = "author";
	temp["description"] ="hi";
	temp["courseImageURL"] = "img";
	temp["courseLink"]="http://dropbox.com";
	temp["numberOfLectures"] = "5";
	temp["lengthOfLectures"] = "4";
	temp["studentEnrolled"] = "john@doe.com";
	data["courses"].push(temp);*/
	/*var index = -1;
	for(var i=0; i< data.courses.length; i++)
	{
		if(data.courses[i].courseName == req.query.currentCourse)
		{
			var index = i;
			break;
		}
	}
	console.log(index);
	console.log(data.courses[index].author);*/
	models.Project
		.find({"courseName": req.query.currentCourse})
		.limit(1)
		.exec(renderCourses);
	/*res.render('class_page', {"singleCourse":[
		{
			"courseName": data.courses[index].courseName,
			"author": data.courses[index].author,
			"description": data.courses[index].description,
			"courseImageURL": data.courses[index].courseImageURL,
			"courseLink": data.courses[index].courseLink
		}
	]});*/
	function renderCourses(err, course){
		console.log(course);

		var random_num = Math.random();

		if(random_num > 0.5){
		  res.render('class_page', {'singleCourse': course});
		}else{
		  res.render('class_page_alternative', {'singleCourse': course})
		}
	};
}


     

