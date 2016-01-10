(function () {
  'use strict';
  angular
    .module('app.historia',[])
      .controller('HistoriaCtrl',function (Cozumel,$stateParams) {

        var vm = this;

        Cozumel.historia()
          .success(function (data) {
            vm.historias = data;
          })
          .error(function (err) {
            alert('Error al cargar la información');
          });

        if ($stateParams.id) {
          Cozumel.getHistoria($stateParams.id,function (err,historia) {
            if (err) {
              alert('Error al cargar los detalles');
            }
            vm.historia = historia;
          });
        }

      });
})();
