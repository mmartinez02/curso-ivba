angular.module('LetrestApp')
  .controller('SplashCtrl', function ( $state, MenuService,LetRestSecurityEvents ) {

    //expongo el $state para que la vista pueda referenciar
    var me=this;
    me.$state = $state;
    me.sections = MenuService.sections;
    me.menu= MenuService.menu;
    me.isActive = function( s ) {
      return $state.is(s.state);
    }

  });

angular.module('LetrestApp')
  .directive('splash', function () {

    return {
      restrict: 'E',
      controller: 'SplashCtrl',
      controllerAs: 'splash',
      replace: true,
      templateUrl: 'views/main/splash.html'
    }

  });
