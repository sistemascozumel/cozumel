angular.module('app.services', [])

.factory('Cozumel', function($http) {

  var chats = [];

  return {
    base:'http://abc-laser.com/appcozumel/',
    aereolineas: function() {
      return $http.get('scripts/aereo/db.json');
    },
    agencias:function () {
      return $http.get('scripts/agencias/db.json');
    },
    arrecifes:function () {
      return $http.get('scripts/arrecifes/db.json');
    },
    atencion:function () {
      return $http.get('scripts/atencion/db.json');
    },
    atractivos:function () {
      return $http.get('scripts/eventos/db.json');
    },
    atracciones:function () {
      return $http.get('scripts/atracciones/db.json');
    },
    bancos:function () {
      return $http.get('scripts/bancos/db.json');
    },
    clima:function () {
      return $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22cozumel%2C%20mx%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys');
    },
    emergencias:function () {
      return $http.get('scripts/emergencias/db.json');
    },
    eventos:function () {
      return $http.get('scripts/eventos/db.json');
    },
    ferry:function () {
      return $http.get('scripts/ferry/db.json');
    },
    historia:function () {
      return $http.get('scripts/historia/db.json');
    },
    getHistoria:function (nombre,done) {
      $http.get('scripts/historia/db.json')
        .success(function (data) {

          var hist = _.where(data,{
            titulo:nombre
          });

          done(null,hist[0]);

        })
        .error(function (err) {
          done(err);
        });
    },
    hoteles:function () {
      return $http.get('scripts/hoteles/db.json');
    },
    getHotel:function (nombre,done) {
      $http.get('scripts/hoteles/db.json')
        .success(function (data) {

          var hotel = _.where(data,{
            nombre:nombre
          });

          done(null,hotel[0]);

        })
        .error(function (err) {
          done(err);
        });
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    playas: function() {
      return $http.get('scripts/playas/db.json');
    },
    parques: function() {
      return $http.get('scripts/parques/db.json');
    },
    rentadoras: function() {
      return $http.get('scripts/rentadoras/db.json');
    },
    restaurantes: function() {
      return $http.get('scripts/restaurantes/db.json');
    },
    spas: function() {
      return $http.get('scripts/spas/db.json');
    },
    tours: function() {
      return $http.get('scripts/tours/db.json');
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
