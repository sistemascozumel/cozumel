(function () {
  'use strict';
  angular
    .module('app.parques',[])
      .controller('ParquesCtrl',function (Cozumel) {

        var vm = this;

        Cozumel.parques()
          .success(function (data) {
            vm.parques = data;
          })
          .error(function (err) {
            alert('Error al cargar los parques');
          });

      });
})();
