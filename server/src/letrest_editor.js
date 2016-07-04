/**
 * Created by mdellano on 11/25/14.
 */

require('./letrest_runner.js');

// START THE EDITOR
// =============================================================================
require('letrest').EDITOR.run();

var express = require("express"),
  app = express(),
  bodyParser = require('body-parser'),
  hostname = process.env.HOSTNAME || 'localhost',
  port = parseInt(process.env.PORT, 10) || 8002,
  publicDir = process.argv[2] || __dirname + '/../node_modules/letrest/lib/editor/ui/dist';

app.get("/", function (req, res) {
  res.redirect("/index.html");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(publicDir));

console.log("Letrest editor running on", hostname, port);
app.listen(port, hostname);