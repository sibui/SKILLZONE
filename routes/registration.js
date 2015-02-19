// Get all of our friend data
var data = require('../data.json');
exports.view = function(req, res){
data["users"].push(
		{
			"email": req.query.email,
			"first": req.query.first,
			"last": req.query.last,
			"image": "broken image",
			"summary": "default summary"
		});
	res.render('registration',{"userData":[
		{
			"email": req.query.email,
		}
	]});
};