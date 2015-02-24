(function() {
  'use strict';

  angular.module('app.services',[])

  .factory('Procesiones', ['$q','$timeout','$http', function($q,$timeout,$http) {
    return {

      getProcesiones: function() {
        var deferred = $q.defer();

        $timeout(function() {
          $http.get('resources/procesiones.json')
            .success(function(data) {
              deferred.resolve(data);
            });
        }, 30);

        return deferred.promise;
      }
    };
  }])

  .factory('Dias', ['$q','$timeout','$http', function($q,$timeout,$http) {
    return {

      getDias: function() {
        var deferred = $q.defer();

        $timeout(function() {
          $http.get('resources/dias.json')
            .success(function(data) {
              deferred.resolve(data);
            });
        }, 30);

        return deferred.promise;
      }
    };
  }])

  .factory('Cofradias', ['$q','$timeout','$http', function($q,$timeout,$http) {
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
      },

      getCofradia: function(id) {
        var deferred = $q.defer();

        $timeout(function() {
          $http.get('resources/'+id+'.json')
            .success(function(data) {
              deferred.resolve(data);
            });
        }, 30);

        return deferred.promise;
      }

    };
  }])

  .factory('Templos', ['$q','$timeout','$http', function($q,$timeout,$http) {
    return {

      getTemplos: function() {
        var deferred = $q.defer();

        $timeout(function() {
          $http.get('resources/templos.json')
            .success(function(data) {
              deferred.resolve(data);
            });
        }, 30);

        return deferred.promise;
      }
    };
  }])

  .factory('Pasos', ['$q','$timeout','$http', function($q,$timeout,$http) {
    return {

      getPasos: function() {
        var deferred = $q.defer();
        $timeout(function() {
          $http.get('resources/pasos.json')
            .success(function(data) {
              deferred.resolve(data);
            });
        }, 30);

        return deferred.promise;
      }
    };
  }])

  .factory('Escultores', ['$q','$timeout','$http', function($q,$timeout,$http) {
    return {

      getEscultores: function() {
        var deferred = $q.defer();

        $timeout(function() {
          $http.get('resources/escultores.json')
            .success(function(data) {
              deferred.resolve(data);
            });
        }, 30);

        return deferred.promise;
      }
    };
  }]);

})();
