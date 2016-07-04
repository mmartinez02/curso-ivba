

(function() {'use strict';
  angular.module("Date", ['ui.bootstrap']).directive("datefield", [
    "$parse"
    , function($parse) {

      return {
        restrict: "E",
        replace: true,
        template: '<input type="text" class="form-control" datepicker-popup="{{format}}"  is-open="CRUD.isOpened" min-date="minDate" max-date="\'2015-06-22\'" datepicker-options="dateOptions" date-disabled="disabled(date, mode)" ng-required="true" close-text="Close" />',
        link: function($scope, element, attrs) {
          $scope.CRUD.isOpened=true;
          var l=$parse(attrs.isOpen);
          debugger;
        }
      };
    }
  ]);
})();
