angular.module('starter.controllers').controller('LoginCtrl',function($scope, $state){  
  $scope.lblPseudo = false;
  $scope.lblMdp = false;

  $scope.login = function(user){
    if((''+user.pseudo).length < 4 || (''+user.mdp).length < 4)
    {
      if((''+user.pseudo).length < 4)
        $scope.lblPseudo = true;
      if((''+user.mdp).length < 4)
        $scope.lblMdp = true;

    }
    else
    {
      $scope.result = '  '+ user.mdp + '    ' + user.pseudo;
      console.log('Login', user.mdp);
      console.log('Login', user.pseudo);
      $state.go('tab.dash');
    }
  }
});

