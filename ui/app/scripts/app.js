'use strict';

/**
 * @ngdoc overview
 * @name crudApp
 * @description
 * # crudApp
 *
 * Main module of the application.
 */
 angular.module('LetrestApp', [
     'ngResource',
     'ngRoute',
     'ui.router',
     'ui.bootstrap',
     'pascalprecht.translate',
     'CRUD',
     'BreadCrumbs',
     'Finder',
     'dmx-modal',
     'ngOrderObjectBy'
    ])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
    ])


    //the IP and PORT must match with the setting in ./server/src/letrest_runner.js
    .config(['letrestConfigProvider',function(a){
     a.$get().URLS.REST={
       BASE:{
         URL:'http://localhost:8080/'
       }
     };
    }])

    .constant('K',{
        MESSAGES_TIMEOUT : 4000
    }).
    factory('Util', function() {
        return {
            coalesce: function() {
                for ( var i=0; i < arguments.length; i++ ) {
                    if ( arguments[i] !== undefined && arguments[i] !== null ) {
                        return arguments[i];
                    }
                }
            }
        };
    });
