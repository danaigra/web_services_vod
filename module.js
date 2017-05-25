<<<<<<< HEAD
const data = require("./data/serieses.json");

const mongoose = require('mongoose'),
seriesesSchema = require('./seriesesMLAB');

var consts = require('./consts'),
conn = mongoose.connection;

mongoose.connect(consts.MLAB_KEY);
app = conn.model('serieses', seriesesSchema);

conn.on('error', (err)=> {
        console.log('connection error: ${err}');
});
conn.once('open',()=> {
        console.log('Connected');
});

exports.getAllSerieses = function() {
    return app.find();
}

exports.getSeriesData = function(sID) {
        return app.find({id:sID});
}

exports.getSeriesByEndDate = function(day,month) {
    return app.find({day:day, month:{$gt:month}});
=======
const data = require("./data/serieses.json");

exports.getAllSerieses = function() {
    return data;
}

exports.getSeriesData = function(sID) {
    let findSeries = false;
    for(let i in data.serieses){
        var series = data.serieses[i];
        if(series.id == sID){
            console.log(`${data.serieses[i].name} has been found`);
            findSeries = true;
            return series;
        }
    }
    return 0;
}

exports.getSeriesByEndDate = function(day,month) {
    var returnData = '[';
    let findData = false;
    for(let i in data.serieses){
        var series = data.serieses[i];
        if(series.day == day && series.month >= month){
            console.log(`${data.serieses[i].name} has been found`);
            findData = true;
            returnData += JSON.stringify(series);
            returnData += `,`;
        }
    }
    if(!findData){
        return 0;
    }
    else {
        returnData = returnData.substr(0,returnData.length-1);
        returnData += ']';
        returnData = JSON.parse(returnData);
        return returnData;
    }
>>>>>>> 4d0b2c11c1eb7409ef567fb69dab6ecdc02976e3
}