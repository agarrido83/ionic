(function() {
  'use strict';

  angular.module('app.services',[])

  .factory('Cofradias', ['$q','$timeout','$http', function Cofradias($q,$timeout,$http) {
    return {

      getCofradias: function() {
        var deferred = $q.defer();

        $timeout(function() {
          $http.get('resources/cofradias.json')
            .success(function(data) {
              deferred.resolve(data);
            });
        }, 30);

        return deferred.promise;
      }
    };

  }]);

})();
