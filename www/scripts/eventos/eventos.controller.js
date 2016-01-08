(function () {
  'use strict';
  angular
    .module('app.eventos.controller',[])
      .controller('FerryCtrl',function (Cozumel) {

        var vm = this;

        Cozumel.ferry()




      });
})();
