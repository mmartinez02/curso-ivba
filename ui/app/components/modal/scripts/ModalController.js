/**
 * Created with JetBrains WebStorm.
 * User: mgonzalez
 * Date: 14/10/14
 * Time: 10:35
 * To change this template use File | Settings | File Templates.
 */

angular.module('dmx-modal').controller('ConfirmController',function($scope, $modalInstance){
    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

});
