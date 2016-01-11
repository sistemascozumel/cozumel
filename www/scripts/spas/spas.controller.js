(function () {
  'use strict';
  angular
    .module('app.spas',[
      // 'app.hoteles.detalle'
    ])
      .controller('SpasCtrl',function (Cozumel,$scope) {

        var vm = this;
        $scope.$on('$ionicView.enter', function(e) {
          Cozumel.spas()
            .success(function (data) {

              vm.spas = data;

            })
            .error(function (err) {
              alert(err);
            });
        });




      });
})();
