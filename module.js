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
}