angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {})

.controller('FriendsCtrl', function ($scope , Friends) {

  $scope.friends = Friends.all();
  $scope.remove = function(friend) {
    Friends.remove(friend);
  };
})

.controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('MainCtrl', function($scope, $stateParams) {

})
.controller('AccountCtrl', function($scope) {

});

