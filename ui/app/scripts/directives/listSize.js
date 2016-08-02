/**
 * Created by Ale on 02/08/2016.
 */
'use strict';
angular.module('LetrestApp').directive('listSize', function () {

  function ListSizeController($scope) {
    var me = this;
    me.listSize = $scope.list.length || 0;
  }

  return {
    restrict: 'E', //de elemento
    scope: {list: '='},
    templateUrl: 'views/directives/list-size.html',
    controller: ListSizeController,
    controllerAs: 'ListSize'
  };
});
