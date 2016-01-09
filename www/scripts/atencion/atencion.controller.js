(function () {
  'use strict';
  angular
    .module('app.atencion',[])
      .controller('AtencionCtrl',function (Cozumel,$scope) {

        var vm = this;

        Cozumel.atencion()
          .success(function (data) {
            vm.dependencias = data;
          })
          .error(function (err) {
            console.error(err);
            alert('Error al cargar las dependencias de atención turística');
          });
      });
})();
