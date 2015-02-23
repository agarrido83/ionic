(function() {
  'use strict';

  angular.module('app.controllers', ['app.services'])

  .controller('AppCtrl', function() {
  })

  .controller('SemanaSantaCtrl', ['$scope', 'Dias', function($scope, Dias) {
    Dias.getDias()
      .then(function(data) {
        $scope.dias = data;
      });
  }])

  .controller('CofradiasCtrl', ['$scope','Cofradias', function($scope,Cofradias) {
    Cofradias.getCofradias()
      .then(function(data) {
        $scope.cofradias = data;
      });
  }])

  .controller('CofradiaCtrl', ['$scope','Cofradias', function($scope,Cofradias) {
    Cofradias.getCofradia()
      .then(function(data) {
        $scope.cofradias = data;
      });
  }])

  .controller('TemplosCtrl', ['$scope','Templos', function($scope,Templos) {
    Templos.getTemplos()
      .then(function(data) {
        $scope.templos = data;
      });
  }])

  .controller('PasosCtrl', ['$scope','Pasos', function($scope,Pasos) {
    Pasos.getPasos()
      .then(function(data) {
        $scope.pasos = data;
      });
  }])

  .controller('EscultoresCtrl', ['$scope','Escultores', function($scope,Escultores) {
    Escultores.getEscultores()
      .then(function(data) {
        $scope.escultores = data;
      });
  }]);

})();
