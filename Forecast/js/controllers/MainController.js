app.controller('MainController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $http.get($sce.trustAsResourceUrl("json/forecast.json")).then(function (response) {
      $scope.fiveDay = response.data;
    });
  }]);