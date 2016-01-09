(function () {
  'use strict';
  angular
    .module('app.tours',[])
      .controller('ToursCtrl',function (Cozumel) {

        var vm = this;

        Cozumel.tours()
          .success(function (data) {
            vm.tours = data;
          })
          .error(function (err) {
            console.log(err);
            alert('Error al cargar los tours');
          });




      });
})();
