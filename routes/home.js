// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	var subset = {"courses":[data.courses[0],data.courses[1],data.courses[2], data.courses[3]]};
	console.log(subset);
	console.log(data);
	res.render('home', subset);
};