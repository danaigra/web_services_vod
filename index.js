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
	mod.getAllSerieses().then((serieses) => {
	        if(serieses.length)
	        	res.json(serieses);
	        else
	        	console.log("error");
		}, (error) => {
		    console.log(error);
	    });
 });


app.post('/getSeriesData/',
	(req,res) => {
	var sID = req.body.id;
	mod.getSeriesData(sID).then((serieses) => {
	        if(serieses.length)
	        	res.json(serieses);
	        else
	        	console.log("error");
		}, (error) => {
		    console.log(error);
	    });
});

app.put('/getSeriesByEndDate',
	(req,res) => {
	var day = req.body.day,
		month = req.body.month;
		mod.getSeriesByEndDate(day,month).then((serieses) => {
	        if(serieses.length)
	        	res.json(serieses);
	        else
	        	console.log("error");
		}, (error) => {
		    console.log(error);
	    });
});
app.listen(process.env.PORT || 3000)
//app.listen(port, 
//	()=> {
//	console.log(`listening on port ${port}`);