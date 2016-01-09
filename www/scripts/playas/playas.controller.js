(function () {
  'use strict';
  angular
    .module('app.playas',[])
      .controller('PlayasCtrl',function (Cozumel) {

        var vm = this;

        Cozumel.playas()
          .success(function (data) {
            vm.playas = data;
          })
          .error(function (err) {
            alert('Error al cargar las playas');
          });

      });
})();
