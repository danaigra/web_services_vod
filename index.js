const   express = require('express'),
		bodyParser = require('body-parser'),
		mod = require('./module.js'),
		app = express(),
		port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('*',
	(req, res, next) => {
		console.log("runs for all HTTP verbs first");
		next();
	});

app.get('/getAllSerieses',
	(req,res) => {
	res.json(mod.getAllSerieses());
});

app.post('/getSeriesData/',
	(req,res) => {
	var sID = req.body.id;
	var data = mod.getSeriesData(sID);
	if(data == 0){
		res.status(200).json({"err":"no such series"});
	}
	else{
		res.status(200).json(data);
	}
});

app.put('/getSeriesByEndDate',
	(req,res) => {
	var day = req.body.day,
		month = req.body.month,
		data = mod.getSeriesByEndDate(day,month);

	if(data == 0) {
		res.status(200).json({"err":"no such series"});
	}
	else {
		res.status(200).json(data);
	}
});
app.listen(process.env.PORT || 3000)
//app.listen(port, 
//	()=> {
//	console.log(`listening on port ${port}`);
//});