// Get all of our friend data
//var data = require('../data.json');
var models = require('../models');
exports.view = function(req, res){
/*data["users"].push(
		{
			"email": req.query.email,
			"first": req.query.first,
			"last": req.query.last,
			"image": "broken image",
			"summary": "default summary"
		});
*/
var newUser = new models.User({
	"email": req.query.email,
	"first": req.query.first,
	"last": req.query.last,
	"image": "broken image",
	"summary": "default summary"
});
	newUser.save(afterSaving);
	
	function afterSaving(err)
	{
		if(err)
		{
			console.log(err);
			res.send(500);
		}
		res.render('registration',{"userData":[
		{
			"email": req.query.email,
		}
	]});
	}
	
};