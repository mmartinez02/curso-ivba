/**
 * Created by matiascoutois on 6/6/16.
 */
angular.module('LetrestApp').controller('SignInController', function ($scope,
                                                                      LetRestService,
                                                                      LetRestSecurityService,
                                                                      $q,
                                                                      $filter
                                                                      ) {

  var me = this;
  me.login = login;

  function login() {

    var defer = $q.defer();

    if (me.username && me.password) {
      //We indicat the inprogress flag
      me.isWorking = true;
      LetRestSecurityService.login(me.username, me.password)
        .then(function (response) {
          LetRestSecurityService.sync();
          defer.resolve();
        })
        .catch(function (error) {
          me.error = error;
          // FIXME we need to change the error description on LetRest source

        })
        .finally(function () {
          //We remove the inprogres flag
          me.isWorking = false;
        });
    } else {
      me.error = 'User and password should not be empty.';
    }

    return defer;
  }
});
