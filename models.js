
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
		"courseName": String,
		"author": String,
		"description": String,
		"courseImageURL": String,
		"courseLink": String,
		"numberOfLectures": Number,
		"lengthOfLectures": Number,
		"studentEnrolled": String,
		"summary": String,
		"image": String
});

var UserSchema = new Mongoose.Schema({
		"email": String,
		"first": String,
		"last": String,
		"image": String,
		"summary": String
});

exports.Project = Mongoose.model('Project', ProjectSchema);
exports.User = Mongoose.model('User', UserSchema);


