(function () {
  'use strict';
  angular
    .module('starter.controllers', [])
      .controller('ClimaCtrl',function (Cozumel) {
        var vm = this;
        Cozumel.clima()
          .success(function (data) {
            vm.clima = data.query.results.channel.item.description;            
          })
          .error(function (err) {
            console.error(err);
          });
      })
      .controller('DashCtrl', function($scope) {});

})();
