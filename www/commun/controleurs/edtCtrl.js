app.controller('edtCtrl', function ($scope, $state, $rootScope, $stateParams) {
    $scope.img = ""+$stateParams.annee+$stateParams.filiere+".jpg";

    function changeView(){
        $state.go('tab.planning');
    }


    $scope.changeView = changeView;
});
