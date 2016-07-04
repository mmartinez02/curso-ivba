'use strict';

/**
 * @ngdoc object
 * @name MainCtrl
 * @requires $scope
 *
 * @description
 * `MainCtrl` controller is responsible of the Main application logic.
 *
 */

angular.module('LetrestApp').factory('MenuService', function ($state, menuRoutes, LetRestSecurityService, LetRestSecurityEvents) {

  var menu=[];
  angular.forEach( menuRoutes, function(value, index){
    value.data.state = index;
    menu.push( value.data );
  });

  var service = {
    sections: [
    ]
  };
  var findState = function (state) {
    for (var o in service.sections) {
      var s = service.sections[o];
      if (s.state == state)return s;
    }
    return null;
  };
  service.menu={level:0};

  service.processState=function(name) {
      var s=findState(name);

      if (s.movetolevel!=undefined) {
          angular.copy({level:s.movetolevel},service.menu);
      }
  };
  service.findLevel=function(name) {
    var s=findState(name);
    return s.level;
  };
  service.goHome = function () {
    if (!service.userHasPermissionsFor({name: 'home'})) {
      LetRestSecurityEvents.panic(new Error('Home screen does not have permissions'));
      return;
    }
      //This should be a state with the lowest value. Probably it should go to home launcher screen.
    $state.go('home');
  };
  service.userHasPermissionsFor=function(state) {
        var s=findState(state.name);
        if (s) {
            return LetRestSecurityService.validate(s.weight);
        }
        return false;
    };

  LetRestSecurityEvents.bindToSecurity(function(){
     angular.copy(menu,service.sections);
  });



   return service;
});

angular.module('LetrestApp')
    .controller('MenuCtrl', function ($scope, $state,MenuService,LetRestSecurityService,LetRestSecurityEvents) {
        //expongo el $state para que la vista pueda referenciar
        $scope.$state = $state;
        $scope.sections = MenuService.sections;
        $scope.menu=MenuService.menu;
        $scope.session=LetRestSecurityService.session;
        $scope.company='';

        $scope.isActive = function( s ) {
            return $state.is(s.state);
        };
        $scope.login=function() {
            LetRestSecurityEvents.doLogin();
        };
        $scope.logout=function() {
            LetRestSecurityService.logout();
            MenuService.goHome();

        };
    });

angular.module('LetrestApp').run( function ($rootScope, MenuService, LetRestSecurityService, LetRestSecurityEvents ) {

  var secService = LetRestSecurityService;
  var evtService = LetRestSecurityEvents;

  $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){

    function doTheMagic(){
      if (!MenuService.userHasPermissionsFor(toState)) {
        event.preventDefault();
        MenuService.goHome();
      } else {
        MenuService.processState(toState.name);
      }
    }

    if( secService.syncing ){
        //make a promise!
        evtService.bindToSync( doTheMagic );
    } else {
        doTheMagic();
    }

  })
});
