/**
 * Created by matiascourtois on 3/16/16.
 */

////use when needed
//var DB=require('uw').DB;
//var UTIL=require("util");
//var Q=require("q");



exports.messageExample = function(service){
    var LOG=require('uw-log').newInstance('messageExample');
    LOG.verbose(Fn,"testing message");
    return service;
};

exports.answerExample= function(service){
    var LOG=require('uw-log').newInstance('answerExample');
    LOG.verbose("testing static bro");
    return service;
};
