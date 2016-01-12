(function () {
  'use strict';
  angular
    .module('app.ferry',[])
      .controller('FerryCtrl',function (Cozumel,$scope) {

        var vm = this;
        $scope.$on('$ionicView.enter', function(e) {
          Cozumel.ferry()
            .success(function (data) {

              vm.horarios = data;
              vm.empresas = data.pasajeros;

            })
            .error(function (err) {
              alert(err);
            });
        });




      });
})();
