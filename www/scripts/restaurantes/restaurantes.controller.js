(function () {
  'use strict';
  angular
    .module('app.restaurantes',[])
      .controller('RestaurantesCtrl',function (Cozumel) {

        var vm = this;

        Cozumel.restaurantes()
          .success(function (data) {
            vm.restaurantes = data;

            vm.estilos = _.groupBy(data,'estilo');
            console.log(vm.estilos);
          })
          .error(function (err) {
            console.log(err);
            alert('Error al cargar los restaurantes');
          });




      });
})();
