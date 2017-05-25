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
}