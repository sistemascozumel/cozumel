(function () {
  'use strict';
  angular
    .module('app.hoteles',[
      'app.hoteles.detalle'
    ])
      .controller('HotelesCtrl',function (Cozumel,$scope) {

        var vm = this;
        $scope.$on('$ionicView.enter', function(e) {
          Cozumel.hoteles()
            .success(function (data) {

              vm.hoteles = data;

            })
            .error(function (err) {
              alert(err);
            });
        });




      });
})();
