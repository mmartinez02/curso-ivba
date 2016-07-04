// call the packages we need
var express    = require('express');            // call express
var app        = express();                             // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json());
var port = process.env.PORT || 8080;            // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();                          // get an instance of the express Router

//We configure the server so it can start working
require('letrest').APP.config(app,router);
//We define the base to the requests
app.use('/api', router);



// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server has started on port ' + port);
