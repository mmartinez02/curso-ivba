/**
 * Created with JetBrains WebStorm.
 * User: mgonzalez
 * Date: 14/10/14
 * Time: 10:38
 * To change this template use File | Settings | File Templates.
 */

angular.module('dmx-modal').factory('ModalService',function($modal,MOODAL_K){
    var modals={};

    //TODO real generic modal
    var modalForAction = function(params,onSuccess){
        var modalInstance = $modal.open(params);
        modalInstance.result.then(onSuccess,function(){
            //TODO problems inform to the user (?)
        });
    };


    modals.getConfirm = function(onSuccess){
        var baseUrl = MOODAL_K.views;

        modalForAction({
            backdrop:'static',
            templateUrl: baseUrl+'confirm.html',
            controller: 'ConfirmController',
            controllerAs: 'confirm'
        }, onSuccess);

    };

    modals.getAlert = function(){
        //this return a modal for confirm propouse
    };

    modals.getInformation = function(){
        //this return a modal for confirm propouse
    };

    //modals.getCustomized(onSuccess)

    return modals;
});