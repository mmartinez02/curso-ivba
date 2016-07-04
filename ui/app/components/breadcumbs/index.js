/**
 * Created by sminutoli on 04/07/14.
 */
angular.module('BreadCrumbs', [ 'ui.router' ] )
    .directive('breadcrumbs', function() {
        return {
            restrict: "E",
            //replace: true, //it'll be deprecated!
            transclude: true,
            templateUrl: "components/breadcumbs/views/breadcrumbs.html",
            controller: function($scope, $state){
                $scope.$state = $state;
            }
        };
    })