myApp.directive('navbar', function(){
  return {
    restrict: 'E',
    templateUrl: 'partial/navbar.jade',
    controller: 'NavCtrl',
  };
});