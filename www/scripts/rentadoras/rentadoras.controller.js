(function () {
  'use strict';
  angular
    .module('app.rentadoras',[])
      .controller('RentadorasCtrl',function (Cozumel) {

        var vm = this;

        Cozumel.rentadoras()
          .success(function (data) {
            vm.rentadoras = data;
          })
          .error(function (err) {
            alert('Error al cargar las compañías rentadoras');
          });




      });
})();
