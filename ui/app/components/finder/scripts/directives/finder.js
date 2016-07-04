/**
 * Created by mdellano on 11/2/14.
 */
angular.module('Finder').directive("finder",function(){
    console.log('Finder');
    return {
        restrict: 'E',
        scope:{
            model:"=",
            config:"=",
            provider:"=",
            onChange:"=",
            classInput:"=",
          validations:"="

        },
        controller:function($scope) {
            $scope.filterForTypeAhead=function(value) {
                return $scope.provider($scope.config,value);
            };
            $scope.select=function(item,model,label) {
                var config=$scope.config;

                $scope.model=$scope.model||[];
                var model=$scope.model;
                //Validate that the models is not already charged.
                for (var i=0;i<model.length;i++) {
                    var m=model[i];
                    if (m[config.provider.valueFrom]==item[config.provider.valueFrom]) {
                        return;
                    }

                }

                $scope.model.push(item);
                $scope.newTag="";
                if ($scope.onChange) {
                    $scope.onChange();
                }
            };
            $scope.removeTag=function(index) {
                $scope.model.splice(index,1);
                if ($scope.onChange) {
                    $scope.onChange();
                }
            };
        },
        templateUrl:"components/finder/views/finder.html"
    };
});
