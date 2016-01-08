angular.module('app.services', [])

.factory('Cozumel', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    agencias:function () {
      return $http.get('scripts/agencias/db.json');
    },
    atractivos:function () {
      return $http.get('scripts/eventos/db.json');
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
    rentadoras: function(chat) {
      return $http.get('scripts/rentadoras/db.json');
    },
    restaurantes: function(chat) {
      return $http.get('scripts/restaurantes/db.json');
    },
    tours: function(chat) {
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
