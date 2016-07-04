(function(){

  'use strict';

  angular
    .module('LetrestApp')
    .config(['$translateProvider', function($translateProvider){
      var es = { //jshint ignore:line
        'MENU'                    : 'Menu',
        'CONFIRM'                 : 'Confirmar',
        'CANCEL'                  : 'Cancelar',
        'DASHBOARD'               : 'Panel de tareas',
        'ADMIN'                   : 'Admin',
        'COUNTRY'                 : 'País',
        'ALERTS'                  : 'Alertas',
        'USERS'                   : 'Usuarios',

        'CHANGE_PASSWORD'         : 'Cambiar contraseña',
        'CURRENT_PASSWORD'        : 'Contraseña actual',
        'NEW_PASSWORD'            : 'Nueva contraseña',
        'CONFIRM_NEW_PASSWORD'    : 'Confirmar nueva contraseña',
        'INVALID_EMAIL_PASSWORD'  : 'Usuario o contraseña invalida',
        'EMPTY_EMAIL_PASSWORD'    : 'Usuario y contraseña no pueden estar vacios',
        'PASSWORD'                : 'contraseña',

        'CHANGE_MAIL'             : 'Cambiar email',
        'NEW_MAIL'                : 'Nuevo email'
      };
      var en = { //jshint ignore:line
        'MENU'                    : 'Menu',
        'CONFIRM'                 : 'Confirmar',
        'CANCEL'                  : 'Cancelar',
        'DASHBOARD'               : 'Panel de tareas',
        'ADMIN'                   : 'Admin',
        'COUNTRY'                 : 'País',
        'ALERTS'                  : 'Alertas',
        'USERS'                   : 'Usuarios',

        'CHANGE_PASSWORD'         : 'Cambiar contraseña',
        'CURRENT_PASSWORD'        : 'Contraseña actual',
        'NEW_PASSWORD'            : 'Nueva contraseña',
        'CONFIRM_NEW_PASSWORD'    : 'Confirmar nueva contraseña',
        'INVALID_EMAIL_PASSWORD'  : 'Invalid email or password',
        'EMPTY_EMAIL_PASSWORD'    : 'User and password should not be empty',
        'PASSWORD'                : 'contraseña',

        'CHANGE_MAIL'             : 'Cambiar email',
        'NEW_MAIL'                : 'Nuevo email'
      };
      angular.extend($translateProvider.translations('es'), es);
      angular.extend($translateProvider.translations('en'), en);
      $translateProvider.preferredLanguage('es');
    }]);

})();
