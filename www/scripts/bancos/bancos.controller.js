(function () {
  'use strict';
  angular
    .module('app.bancos',[])
      .controller('BancosCtrl',function (Cozumel) {

        var vm = this;

        Cozumel.bancos()
          .success(function (data) {
            vm.bancos = data;
          })
          .error(function (err) {
            alert('Error al cargar los bancos');
          });




      });
})();
