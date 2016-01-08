angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Cozumel) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.remove = function(chat) {
    Cozumel.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Cozumel) {
  var vm = this;

  vm.algo = 'Hola bartola';
  $scope.chat = Cozumel.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
