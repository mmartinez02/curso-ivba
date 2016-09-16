/**
 * Created by mmartinez on 3/8/16.
 */
'use strict';
angular
  .module('LetrestApp')
  .service('MovieService', function($http){
    var me = this;


    var baseOptions = {
      url: 'http://www.omdbapi.com/'
    };

    function getAll(query){
      function extractResult(response){
        var movies = [];
        if (!angular.isDefined(response.data.Error)){
          angular.forEach(response.data.Search, function(result){
            movies.push(result);
          });
          return movies;
        }
        else {
          return {'error': true};
        }
      }
      var options = angular.copy(baseOptions);
      options.url += '?s='+(query||'')+'&tomatoes=true&plot=full';
      return $http.get(options.url).then(extractResult);
    }

    me.getAll = getAll;

  });
