(function () {
  'use strict';
  angular
    .module('starter.controllers', [])
      .controller('ClimaCtrl',function (Cozumel) {
        var vm = this;
        vm.loading = true;
        Cozumel.clima()
          .success(function (data) {
            vm.detalles = data.query.results.channel.item;
            vm.temperatura = {};
            console.log(vm.detalles);
            vm.temperatura.f = vm.detalles.condition.temp;
            vm.temperatura.c = parseInt((vm.temperatura.f - 32) * (5/9));
            vm.temperatura.code = vm.detalles.condition.code;
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
