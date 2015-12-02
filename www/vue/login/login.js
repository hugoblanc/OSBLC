angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state){
  $scope.lblPseudo = false;
  $scope.lblMdp = false;

  $scope.login = function(){
    /*if((''+$scope.pseudo).length < 4 || (''+$scope.mdp).length < 4)
    {
      if((''+$scope.pseudo).length < 4)
        $scope.lblPseudo = true;
      if((''+$scope.mdp).length < 4)
        $scope.lblMdp = true;

    }
    else
    {
      $scope.result = '  '+ $scope.mdp + '    ' + $scope.pseudo;
      console.log('Login', $scope.mdp);
      console.log('Login', $scope.pseudo);*/
      $state.go('tabs.pictures');
  }
})