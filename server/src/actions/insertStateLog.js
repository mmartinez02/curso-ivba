/**
 * Created by mmartinez on 29/6/16.
 */

var DB = require('uw').DB;
var UTIL = require("util");
var Q = require("q");
var LOG = require('uw').log;

var insertAction = function (service) {
  var promise = Q.defer();
  var Fn = "insertAction \t";
  var query = "INSERT INTO public.statelog(stateid, name, moment, accountid) VALUES (%s, '%s', now(), %s);";
  query = UTIL.format(query, service.arr.stateid, service.arr.name, service.req.letrest.session.sso);

  LOG.show(Fn, query);
  DB.query(query).then(function (res) {
    promise.resolve(res);
  }).catch(function (err) {
    LOG.error(err);
    promise.reject('Failed to execute query');
  });
  return promise.promise;
};

exports.insertStateLog = function (service) {
  var Fn = "insertStateLog \t";
  LOG.show(Fn);
  return insertAction(service).then(function (res) {
    LOG.show(res);
    return service;
  }).catch(function (err) {
    LOG.error(err);
    return req;
  });
};
