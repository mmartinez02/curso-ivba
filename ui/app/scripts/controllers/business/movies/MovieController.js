'use strict';
angular.module('LetrestApp').controller('MovieController', function ($state, MovieService) {

  var me = this;

  me.init = init;
 me.search =  search;

  me.movies = [];
  me.query = '';
  me.loading = false;

  function init() {

  }

  function search() {
    me.loading = true;

    MovieService
      .getAll('men')
      .then(moviesLoaded)
      .catch(function (err) {
        console.log(err);
        me.loading = false;
      });

    function moviesLoaded(res) {
      if (!res.error){
        me.movies = res;
      } else {
        me.error  = true;
      }
      me.loading = false;
    }
  }


  me.init();
});
