(function () {
  'use strict';
  angular
    .module('starter.controllers', [])
      .controller('ClimaCtrl',function (Cozumel) {
        var vm = this;
        vm.loading = true;
        Cozumel.clima()
          .success(function (data) {
            vm.clima = data.query.results.channel.item.description;
            vm.loading = false;
          })
          .error(function (err) {
            console.error(err);
            vm.loading = false;
          });
      })
      .controller('DashCtrl', function($scope) {});

})();
