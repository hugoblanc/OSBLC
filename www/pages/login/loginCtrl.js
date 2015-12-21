app.controller('LoginCtrl',function (Backand, $scope, $state, Connexion){  
  $scope.lblPseudo = false;
  $scope.lblMdp = false;

  function signin() {
      LoginService.signin(login.email, login.password)
          .then(function () {
              onLogin();
          }, function (error) {
              console.log(error)
          })
  }

  function login(user, $scope){
    if((''+user.pseudo).length < 4 || (''+user.mdp).length < 4){
      if((''+user.pseudo).length < 4)
        $scope.lblPseudo = true;
      if((''+user.mdp).length < 4)
        $scope.lblMdp = true;

    }else{
      //$scope.result = '  '+ user.mdp + '    ' + user.pseudo;
      console.log('Login', user.mdp);
      console.log('Login', user.pseudo);
      Connexion.signin(user.pseudo, user.mdp).then(function(result){
      $state.go('tab.dash');
      });
    }
  }

  $scope.login = login;
});
