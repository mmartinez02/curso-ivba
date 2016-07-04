/**
 * Created by gcamera on 08/10/15.
 */

'use strict';
angular.module('LetrestApp').controller('InquiryController', function (LetRestService,
                                                                       LetRestSecurityService,
                                                                       $log,
                                                                       $state,
                                                                       $modal) {

  var me = this;

  var idtypeService = LetRestService.getLetRestService('idtype');
  var stateService = LetRestService.getLetRestService('state');
  var inquirytypeService = LetRestService.getLetRestService('inquirytype');
  var inquirysubtypeService = LetRestService.getLetRestService('inquirysubtype');
  var claimtypeService = LetRestService.getLetRestService('claimtype');
  var memberrelationshipService = LetRestService.getLetRestService('memberrelationship');
  var inquiryService = LetRestService.getLetRestService('inquiry');

  me.init = init;
  me.save = save;
  me.setValues2save = setValues2save;
  me.resetDefaultValues = resetDefaultValues;
  me.resetprocedurenumber = resetprocedurenumber;
  me.resetinquirytype = resetinquirytype;
  me.resetjoined = resetjoined;
  me.resetForm = resetForm;

  me.data = {};
  me.loading = false;
  me.succes = false;

  function init() {
    me.loading = true;

    var stateGetAll = stateService.getAll.bind(stateService, {
      FROM: 0,
      ROWS: 1000
    });
    var inquirytypeGetAll = inquirytypeService.getAll.bind(inquirytypeService, {
      FROM: 0,
      ROWS: 1000
    });
    var inquirysubtypeGetAll = inquirysubtypeService.getAll.bind(inquirysubtypeService, {
      FROM: 0,
      ROWS: 1000
    });
    var claimtypeGetAll = claimtypeService.getAll.bind(claimtypeService, {
      FROM: 0,
      ROWS: 1000
    });
    var memberrelationshipGetAll = memberrelationshipService.getAll.bind(memberrelationshipService, {
      FROM: 0,
      ROWS: 1000
    });

    idtypeService
      .getAll({FROM: 0, ROWS: 1000})
      .then(idtypeLoaded)
      .then(stateGetAll)
      .then(stateLoaded)
      .then(inquirytypeGetAll)
      .then(inquirytypeLoaded)
      .then(inquirysubtypeGetAll)
      .then(inquirysubtypeLoaded)
      .then(claimtypeGetAll)
      .then(claimtypeLoaded)
      .then(memberrelationshipGetAll)
      .then(memberrelationshipLoaded)
      .then(setDefaultData);

    function idtypeLoaded(res) {
      me.idtypes = res.data;
    }

    function stateLoaded(res) {
      me.states = res.data;
    }

    function inquirytypeLoaded(res) {
      me.inquirytypes = res.data;
    }

    function inquirysubtypeLoaded(res) {
      me.inquirysubtypes = res.data;
    }

    function claimtypeLoaded(res) {
      me.claimtypes = res.data;
    }

    function memberrelationshipLoaded(res) {
      me.memberrelationships = res.data;
    }

    function setDefaultData(res) {

      me.idtypeValue = {
        "type": "select",
        "name": "idtype",
        "value": me.idtypeDefault,
        "values": me.idtypes
      };

      me.stateValue = {
        "type": "select",
        "name": "state",
        "value": me.stateDefault,
        "values": me.states
      };

      me.inquirytypeValue = {
        "type": "select",
        "name": "inquirytype",
        "value": me.inquirytypeDefault,
        "values": me.inquirytypes
      };

      me.inquirysubtypeValue = {
        "type": "select",
        "name": "inquirysubtype",
        "value": me.inquirysubtypeDefault,
        "values": me.inquirysubtypes
      };

      me.claimtypeValue = {
        "type": "select",
        "name": "claimtype",
        "value": me.claimtypeDefault,
        "values": me.claimtypes
      };

      me.memberrelationshipValue = {
        "type": "select",
        "name": "memberrelationship",
        "value": me.memberrelationshipDefault,
        "values": me.memberrelationships
      };

      me.loading = false;
    }
  }

  function save() {
    me.loading = true;
    me.setValues2save();
    inquiryService.save(me.data).then(function (res) {
      console.log(res);
      me.resetDefaultValues();
      me.loading = false;
      me.succes = true;
    });
  }

  function setValues2save() {
    me.data.idtypeid = me.idtypeValue.value.idtypeid;
    me.data.stateid = me.stateValue.value.stateid;
    me.data.inquirytypeid = me.inquirytypeValue.value.inquirytypeid;
    me.data.inquirysubtypeid = null;
    me.data.claimtype = null;
    me.data.memberrelationship = null;
    if (me.inquirytypeValue.value.inquirytypeid === '1') {
      me.data.inquirysubtypeid = me.inquirysubtypeValue.value.inquirysubtypeid;
    }
    if (me.inquirytypeValue.value.inquirytypeid === '2') {
      me.data.claimtypeid = me.claimtypeValue.value.claimtypeid;
    }
    if (me.data.joined == 'false') {
      me.data.memberrelationshipid = me.memberrelationshipValue.value.memberrelationshipid;
    }
  }

  function resetDefaultValues() {
    me.idtypeValue = {value: false};
    me.stateValue = {value: false};
    me.inquirytypeValue = {value: false};
    me.inquirysubtypeValue = {value: false};
    me.claimtypeValue = {value: false};
    me.memberrelationshipValue = {value: false};
  }

  function resetprocedurenumber() {
    me.data.procedurenumber = null;
  }

  function resetinquirytype() {
    if (me.inquirytypeValue.value.inquirytypeid === '1') {
      me.data.procedurenumber = null;
      me.data.hasprocedure = null;
      me.data.claimdesc = null;
      me.claimtypeValue = {value: false};
    } else {
      me.inquirysubtypeValue = {value: false};
    }
  }

  function resetjoined() {
    if (me.data.joined === 'true') {
      me.memberrelationshipValue = {value: false};
    } else {
      me.data.membernumber = null;
    }
  }

  function resetForm() {
    me.succes = false;
    me.data = {};
    me.init();
  }

  me.init();
});


