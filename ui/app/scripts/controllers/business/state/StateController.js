/**
 * Created by gcamera on 08/10/15.
 */

'use strict';
angular.module('LetrestApp').controller('StateController', function (LetRestService,
                                                                     $modal,
                                                                     $state) {

  var me = this;

  var stateService = LetRestService.getLetRestService('state');

  me.init = init;
  me.newState = newState;
  me.edit = edit;
  me.remove = remove;
  me.confirmRemove = confirmRemove;
  me.removeCancel = removeCancel;

  me.data = {};
  me.loading = false;

  function init() {
    me.loading = true;

    stateService
      .getAll({FROM: 0, ROWS: 1000})
      .then(stateLoaded)
      .catch(function (err) {
        console.log(err);
      });

    function stateLoaded(res) {
      me.states = res.data;
      me.loading = false;
    }

  }

  function newState() {
    $state.go('home.state.newstate');
  }

  function edit(stateSelected) {
    var modalInstance = $modal.open({
      templateUrl: 'views/business/state/editstate.html',
      backdrop: 'static',
      keyboard: false,
      controller: 'EditStateController',
      controllerAs: 'EditState',
      windowClass: 'assign-modal',
      resolve: {
        stateData: function () {
          return stateSelected;
        }
      }
    });
    modalInstance.result.then(function (res) {
      me.loading = true;
      stateService.save(res).then(function (res) {
        me.loading = false;
        me.init();
      });
    }, function () {
    });
  }

  function remove(key) {
    me.states[key].removeOptions = true;
  }

  function confirmRemove(state) {
    me.loading = true;
    stateService.delete(state).then(function (res) {
      me.loading = false;
      me.init();
    }).catch(function (err) {
      console.log(err);
    });
  }

  function removeCancel(key) {
    me.states[key].removeOptions = false;
  }

  me.init();
});


angular.module('LetrestApp').controller('EditStateController', function ($modalInstance, stateData) {

  var me = this;

  me.closeModal = closeModal;
  me.editItem = editItem;

  me.data = {};

  angular.copy(stateData, me.data);

  function closeModal() {
    $modalInstance.dismiss();
  }

  function editItem() {
    $modalInstance.close(me.data);
  }

});





