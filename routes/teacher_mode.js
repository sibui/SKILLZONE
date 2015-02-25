// Get all of our friend data

var data1 = require('../data.json');

exports.view = function(req, res){
	var x = data1.courses.length;
	var data = JSON.parse(JSON.stringify(data1));

	for(var i=x-1; i>-1; i--)
	{
		console.log(data.courses[0]);
		if(req.query.pUser.toLowerCase() != data.courses[i].author)
		{
			console.log("req.Query.pUser is: ["+req.query.pUser+"] data.courses[i] is: ["+data.courses[i].studentEnrolled+"]");
			data.courses.splice(i,1);
			console.log("DELETING AT INDEX "+i);
			
		}
		else{
			console.log("DID NOT DELETE AT "+ i);
		}
	}
	res.render('teacher_mode',data);
};