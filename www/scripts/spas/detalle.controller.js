(function () {
  'use strict';
  angular
    .module('app.hoteles.detalle',[])
      .controller('HotelCtrl',function (Cozumel,$scope,$stateParams) {

        var vm = this;
        $scope.$on('$ionicView.enter', function(e) {
          Cozumel.getHotel($stateParams.id,function (err,data) {
            if (err) {
              return alert('Error al cargar los detalles del hotel');
            }
            vm.hotel = data;
            console.log(data);
          });
        });




      });
})();
