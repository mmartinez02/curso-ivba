/**
 * Created by gcamera on 08/10/15.
 */

'use strict';
angular.module('LetrestApp').controller('NewStateController', function (LetRestService,
                                                                        $state) {

  var me = this;

  var stateService = LetRestService.getLetRestService('state');

  me.save = save;
  me.cancel = cancel;

  me.data = {};
  me.loading = false;

  function save() {
    me.loading = true;
    stateService.save(me.data).then(function (res) {
      $state.go('home.state');
      me.loading = false;
    }).catch(function (err) {
      console.log(err);
    });
  }

  function cancel() {
      $state.go('home.state');
  }

});





