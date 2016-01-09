(function () {
  'use strict';
  angular
    .module('app.eventos',[])
      .controller('EventosCtrl',function (Cozumel) {

        var vm = this;

        Cozumel.eventos()
          .success(function (data) {
            vm.eventos = data;
          })
          .error(function (err) {
            console.error(err);
            alert('Error al cargar los eventos');
          });




      });
})();
