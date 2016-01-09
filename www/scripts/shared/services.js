angular.module('app.services', [])

.factory('Cozumel', function($http) {

  var chats = [];

  return {
    all: function() {
      return chats;
    },
    agencias:function () {
      return $http.get('scripts/agencias/db.json');
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
    emergencias:function () {
      return $http.get('scripts/eventos/db.json');
    },
    eventos:function () {
      return $http.get('scripts/eventos/db.json');
    },
    ferry:function () {
      return $http.get('scripts/ferry/db.json');
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
