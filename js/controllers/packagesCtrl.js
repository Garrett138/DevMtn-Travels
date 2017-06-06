angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv, $stateParams){

  $scope.packages = mainSrv.packageInfo.filter(function(c, i, a){
    return c.country === $stateParams.country;
  });
})
