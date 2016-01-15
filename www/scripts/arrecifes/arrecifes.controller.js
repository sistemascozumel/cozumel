(function () {
  'use strict';
  angular
    .module('app.arrecifes',[])
      .controller('ArrecifesCtrl',function (Cozumel) {

        var vm = this;

        Cozumel.arrecifes()
          .success(function (data) {
            vm.arrecifes = data;
          })
          .error(function (err) {
            alert('Error al cargar los arrecifes');
          });

      });
})();
