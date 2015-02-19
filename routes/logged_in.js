// Get all of our friend data

exports.view = function(req, res){
	console.log(req.query.pUser);
	res.render('logged_in',{"userData":[
		{
			"email": encodeURIComponent(req.query.pUser),
		}
	]});
};