/**
 * Created by mmartinez on 3/7/16.
 */



'use strict';

angular.module('LetrestApp').directive('listSize', function () {

  function ListSizeController($scope) {

    var me = this;

    me.listSize = $scope.list.length || 0;

  }

  return {
    restrict: 'E',
    scope: {
      list: '='
    },
    templateUrl: 'views/directives/list-size.html',
    controller: ListSizeController,
    controllerAs: 'ListSizeCtrl'
  };


});



