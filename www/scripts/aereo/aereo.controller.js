(function () {
  'use strict';
  angular
    .module('app.aereo',[])
      .controller('AereoCtrl',function (Cozumel) {

        var vm = this;

        Cozumel.aereolineas()
          .success(function (data) {
            vm.aereolineas = data;
          })
          .error(function (err) {
            alert('Error al cargar las aereolineas');
          });

      });
})();
