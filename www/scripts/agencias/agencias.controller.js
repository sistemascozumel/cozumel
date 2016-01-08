(function () {
  'use strict';
  angular
    .module('app.agencias',[])
      .controller('AgenciasCtrl',function (Cozumel) {

        var vm = this;

        Cozumel.agencias()
          .success(function (data) {
            vm.agencias = data;
          })
          .error(function (err) {
            alert('Error al cargar las agencias');
          });

      });
})();
