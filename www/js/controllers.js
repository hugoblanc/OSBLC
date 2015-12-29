angular.module('starter.controllers', ["ui.router"])

.controller('DashCtrl', function ($scope){

})

.controller('FriendsCtrl', function($scope, $state) {
	var test = 25;
	$scope.changeView = function($state){
		$state.go('tab.account');
	}
})

.controller('MenuCtrl', function($scope, $state) {
	var test = 25;
	function changeView(){
		$state.go('tab.account');
	}
})

.controller('CommandeCtrl', function($scope, $state) {
	var test = 25;
	function changeView(){
		$state.go('tab.account');
	}
})


.controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('MainCtrl', function($scope, $stateParams) {

})

.controller('BoissonCtrl', function($scope, $stateParams, BoissonService) {
	$scope.boisson ={};

        function getAll() {
            BoissonService.all()
                .then(function (result) {
                    $scope.boisson.boissons = result.data.data;
                }, function(raison) {
				  console.log('In your face brah !');
				});
            }

        function submit(boissons){
        	var boiss = boissons;
        	BoissonService.create().then(function(result){
        		console.log("correcte ! ");
        	});
        }

        $scope.boisson.submit = submit();
        $scope.boisson.getAll = getAll();

})

.controller('AccountCtrl', function($scope) {

});

