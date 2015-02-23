(function() {
  'use strict';

  angular.module('app.controllers', ['app.services'])

  .controller('AppCtrl', function() {
  })

  .controller('CofradiasCtrl', ['$scope','Cofradias', function($scope,Cofradias) {
    Cofradias.getCofradias()
      .then(function(data) {
        $scope.cofradias = data;
      });
  }])

  .controller('PlaylistsCtrl', function($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
  });

  /*
  .controller('PlaylistCtrl', function($scope, $stateParams) {
  });*/

})();
