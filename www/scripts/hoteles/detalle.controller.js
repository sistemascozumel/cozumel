(function () {
  'use strict';
  angular
    .module('app.hoteles.detalle',[])
      .controller('HotelCtrl',function (Cozumel,$scope,$stateParams) {

        var vm = this;
        $scope.$on('$ionicView.enter', function(e) {
          Cozumel.getHotel($stateParams.id)
            .success(function (data) {

              vm.hotel = data;

            })
            .error(function (err) {
              alert(err);
            });
        });




      });
})();
