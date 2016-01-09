(function () {
  'use strict';
  angular
    .module('app.atracciones',[])
      .controller('AtraccionesCtrl',function (Cozumel) {

        var vm = this;
        console.log('asdasd');
        Cozumel.atracciones()
          .success(function (data) {
            vm.atracciones = data;
          })
          .error(function (err) {
            console.error(err);
            alert('Error al cargar las atracciones');
          });




      });
})();
