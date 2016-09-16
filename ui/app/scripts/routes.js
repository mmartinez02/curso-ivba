'use strict';

/* jshint ignore:start */
angular
  .module('LetrestApp')
  .constant('menuRoutes', {
    'home': {
      url: '/home',
      data: {
        label: 'INICIO',
        displayName: 'INICIO',
        icon: 'fa-home',
        weight: -1,
        level: 0,
        movetolevel: 0
      },
      views: {
        'header': {
          templateUrl: 'views/main/header.html'
        },
        'content@': {
          templateUrl: 'views/menu/home/home.html'
        },
        'sidebar': {
          templateUrl: 'views/main/sidebar.html'
        }
      }
    },
    'home.account': {
      url: '/account',
      data: {
        label: 'AFILIADOS',
        displayName: 'AFILIADOS',
        icon: 'fa-user',
        weight: -1,
        level: 0,
        movetolevel: 0,
        crud: 'account'
      },
      views: {
        'content@': {
          templateUrl: 'views/common/main-crud.html'
        }
      }
    },
    'home.inquiry': {
      url: '/inquiry',
      data: {
        label: 'CONSULTAS',
        displayName: 'CONSULTAS',
        icon: 'fa-book',
        weight: 50,
        level: 0,
        movetolevel: 0
      },
      views: {
        'content@': {
          controller: 'InquiryController as InquiryCtrl',
          templateUrl: 'views/inquiry/inquiry.html'
        }
      }
    },
    'home.prestador': {
      url: '/prestador',
      data: {
        label: 'PRESTADORES',
        displayName: 'PRESTADORES',
        icon: 'fa-users',
        weight: 50,
        level: 0,
        movetolevel: 0,
        crud: 'prestador'
      },
      views: {
        'content@': {
          templateUrl: 'views/common/main-crud.html'
        }
      }
    },
    'home.state': {
      url: '/provincias',
      data: {
        label: 'PROVINCIAS',
        displayName: 'PROVINCIAS',
        icon: 'fa-car',
        weight: 50,
        level: 0,
        movetolevel: 0
      },
      views: {
        'content@': {
          controller: 'StateController as State',
          templateUrl: 'views/business/state/state.html'
        }
      }
    },
    'home.movie': {
      url: '/movie',
      data: {
        label: 'PELIS',
        displayName: 'PELIS',
        icon: 'fa-camera',
        weight: 50,
        level: 0,
        movetolevel: 0
      },
      views: {
        'content@': {
          controller: 'MovieController as Movie',
          templateUrl: 'views/business/movie/movie.html'
        }
      }
    },
    'home.state.newstate': {
      url: '/provincias/agregar',
      data: {
        label: 'AGREGAR PROVINCIA',
        displayName: 'AGREGAR PROVINCIA',
        icon: 'fa-car',
        weight: 50,
        level: 1,
        movetolevel: 0
      },
      views: {
        'content@': {
          controller: 'NewStateController as NewState',
          templateUrl: 'views/business/state/newstate.html'
        }
      }
    },
    'home.inquirytype': {
      url: '/inquirytype',
      data: {
        label: 'Tipo de Consulta',
        displayName: 'Tipo de Consulta',
        icon: 'fa-tag',
        weight: 50,
        level: 1,
        movetolevel: 2,
        crud: 'inquirytype'
      },
      views: {
        'content@': {
          templateUrl: 'views/common/main-crud.html'
        }
      }
    }
  })
  .config(function ($stateProvider, $urlRouterProvider, menuRoutes, $httpProvider) {
    $urlRouterProvider.otherwise('/home');
    angular.forEach(menuRoutes, function (value, index) {
      $stateProvider
        .state(index, value)
    });
    $stateProvider
      .state('account.edit', {});
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });




