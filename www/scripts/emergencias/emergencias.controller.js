(function () {
  'use strict';
  angular
    .module('app.emergencias',[])
      .controller('EmergenciasCtrl',function (Cozumel) {

        var vm = this;

        Cozumel.emergencias()
          .success(function (data) {
            vm.emergencias = data;
          })
          .error(function (err) {
            console.error(err);
            alert('Error al cargar los teléfonos de emergencias');
          });




      });
})();
