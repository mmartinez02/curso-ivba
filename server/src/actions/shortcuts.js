/**
 * Created by mdellano on 12/2/14.
 */
function moment() {

    return require('moment')(new Date());
}


module.exports.shortcuts =function(entity,req) {

var query=req.query;

    console.log(query);
    if (query.bar) {
        query.bar=parseInt(query.bar);
        switch (query.bar) {

            case 1:
                query.date_from=moment().startOf('day').format('MM/DD/YYYY hh:mm:ss');
                query.date_to=moment().format('MM/DD/YYYY hh:mm:ss');
                break;

            case 2:
                query.date_from=moment().add(-1, 'd').startOf('day').format('MM/DD/YYYY hh:mm:ss');
                //query.date_to=moment().format('MM/DD/YYYY hh:mm:ss');
                query.date_to=query.date_from;
                break;

            case 3:
                query.date_from=moment().startOf('week').format('MM/DD/YYYY hh:mm:ss');
                query.date_to=moment().format('MM/DD/YYYY hh:mm:ss');
                break;
            case 4:
                debugger;
                var weekend=moment().startOf('week').add(-1,'day');
                query.date_from=weekend.startOf('week').format('MM/DD/YYYY hh:mm:ss');
                query.date_to=moment().startOf('week').add(-1,'day').format('MM/DD/YYYY hh:mm:ss');
                break;
            case 5:
                query.date_from=moment().startOf('month').format('MM/DD/YYYY hh:mm:ss');
                query.date_to=moment().format('MM/DD/YYYY hh:mm:ss');
                break;
            case 6:
                var lastdayOfMonth=moment().startOf('month').add(-1,'day');
                query.date_from=lastdayOfMonth.startOf('month').format('MM/DD/YYYY hh:mm:ss');
                query.date_to=lastdayOfMonth.format('MM/DD/YYYY hh:mm:ss');
                break;
            case 7:
                query.date_from=moment().startOf('year').format('MM/DD/YYYY hh:mm:ss');
                query.date_to=moment().format('MM/DD/YYYY hh:mm:ss');
                break;
            case 8:
                var lastYear=moment().startOf('year').add(-1,'day');
                query.date_from=lastYear.startOf('year').format('MM/DD/YYYY hh:mm:ss');
                query.date_to=lastYear.format('MM/DD/YYYY hh:mm:ss');
                break;

        }
    }


    console.log(query);
    return req;

};