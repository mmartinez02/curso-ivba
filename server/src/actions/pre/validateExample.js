/**
 * Created by mmartinez on 16/9/16.
 */

var LOG = require('uw').log;
var VALIDATOR = require('jsonschema').Validator;
//Defino Schema para validar. VER: https://github.com/tdegrunt/jsonschema/blob/master/examples/all.js
var schema = {
  "id": "/consulta",
  "type": "object",
  "properties": {
    "address": {"type": "string", "required": true, "not": null}
  }
};


var validate = function (service) {
  var v = new VALIDATOR();
  LOG.show("VALIDATOR ", v.validate(service.req.body, schema).valid);

  if (v.validate(service.req.body, schema).valid) {
    return service; //Continua Ejecucion del Servicio
  } else {
    throw new Error('Error de Validacion'); //Se corta la ejecucion.
  }
};

exports.validateInquiry = function (service) {
  //PRE Action
  var Fn = "validateInquiry \t";
  LOG.show(Fn);
  return validate(service);//No tengo .then porque validate(service) no devuelve una promesa.
};
