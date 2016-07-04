    'use strict';

/**
     * @ngdoc object
     * @name HeaderCtrl
     * @requires $scope
     * @requires $state
     * @requires Search
     * @requires Server
     *
     * @description
     * `HeaderCtrl` controller is responsible of the application logic for the search bar in the header of the page.
     *
     */
    angular.module('LetrestApp').controller('HeaderCtrl', function ($scope,$state,$rootScope,LetRestSecurityEvents,$modal) {
      $scope.$state=$state;
      $scope.doLogin=function() {
        LetRestSecurityEvents.doLogin();
      };

      $scope.password =function(){
        var modalInstance = $modal.open({
          //backdrop:'static',
          templateUrl: 'views/main/password.html',
          controller: 'ChangePassCtrl',
          controllerAs: 'chpass',
          windowClass:'assign-modal'
        });
        modalInstance.result.then(function(){},function(){
          //TODO problems inform to the user (?)
        });
      };
      $scope.mail =function(){
        var modalInstance = $modal.open({
          //backdrop:'static',
          templateUrl: 'views/main/mail.html',
          controller: 'ChangeMailCtrl',
          controllerAs: 'chgmail',
          windowClass:'assign-modal'
        });

        modalInstance.result.then(function(){},function(){
          //TODO problems inform to the user (?)
        });
      };

    });

    angular.module('LetrestApp').controller('ChangePassCtrl', function ($scope,$state,$modalInstance,LetRestService) {

      var me = $scope;
      $scope.changepassword = {};
      me.confirmValid = true;
      me.currentValid = true;

      $scope.validChange = function(){
        me.confirmValid = true;
        me.currentValid = true;
        if(me.changepassword.new!=me.changepassword.newvalidation){
          me.confirmValid =false;
        }

        if(me.changepassword.current!= me.current){

          me.currentValid= false;
        }

        return (me.passwordForm.$valid && me.confirmValid && me.currentValid);
      };

      $scope.save = function(){

        me.working=true;
        //validate the actual pass
        var Rest = LetRestService.getLetRestService('changepassword');
        Rest.getAll({FROM:0,ROWS:1}).then(function(res){
            me.current = res.data[0].new;
          me.changepassword.accountid = res.data[0].accountid;
          me.working=false;
            if(me.validChange()) {
              me.working = true;
              Rest.save(me.changepassword).then(function (res) {
                me.working = false;
                me.saved = true;
              });
            }
        });

      };

      $scope.cancel = function(){
        $modalInstance.dismiss();
      };
      $scope.confirmclose = function(){
        $modalInstance.close();
      };
    });


    angular.module('LetrestApp').controller('ChangeMailCtrl', function ($scope,$state,$modalInstance,LetRestService) {
      var me = $scope;
      //$scope.working = false;
      $scope.saved = false;
     $scope.newemail= {};

      $scope.save = function(){

        if(this.mailForm.$valid) {

          var Rest = LetRestService.getLetRestService('changeemail');
          me.working= true;
          Rest.getAll({FROM:0,ROWS:1}).then(function(res){
            me.newemail.accountid = res.data[0].accountid;
              Rest.save(me.newemail).then(function (res) {
                me.working=false;
                me.saved=true;
              });
          });
        }
      };

      $scope.cancel = function(){
        $modalInstance.dismiss();
      };

      $scope.confirmclose = function(){
        $modalInstance.close();
      };

    });
