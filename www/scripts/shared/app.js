// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'starter.controllers',
  'app.services',
  'app.ferry',
  'app.hoteles',
  'app.agencias',
  'app.rentadoras',
  'app.bancos'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('inicio', {
    url: '/app',
    templateUrl: 'templates/inicio.html'
  })
  .state('servicios', {
    url: '/app/servicios',
    templateUrl: 'templates/servicios.html'
  })
  .state('ferry', {
    url: '/app/servicios/ferry',
    templateUrl: 'scripts/ferry/ferry.html',
    controller:'FerryCtrl',
    controllerAs:'ctrl'
  })
  .state('aeropuerto', {
    url: '/app/servicios/aeropuerto',
    templateUrl: 'scripts/servicios/aeropuerto.html',
    controller:'FerryCtrl',
    controllerAs:'ctrl'
  })
  .state('puente-aereo', {
    url: '/app/servicios/puente-aereo',
    templateUrl: 'scripts/servicios/puente-aereo.html',
    controller:'FerryCtrl',
    controllerAs:'ctrl'
  })
  .state('hoteles', {
    url: '/app/servicios/hoteles',
    templateUrl: 'scripts/hoteles/hoteles.html',
    controller:'HotelesCtrl',
    controllerAs:'ctrl'
  })
  .state('hotel', {
    url: '/app/servicios/hoteles/:id',
    templateUrl: 'scripts/hoteles/hotel.html',
    controller:'HotelCtrl',
    controllerAs:'ctrl'
  })
  .state('agencias', {
    url: '/app/servicios/agencias',
    templateUrl: 'scripts/agencias/agencias.html',
    controller:'AgenciasCtrl',
    controllerAs:'ctrl'
  })
  .state('rentadoras', {
    url: '/app/servicios/rentadoras',
    templateUrl: 'scripts/rentadoras/rentadoras.html',
    controller:'RentadorasCtrl',
    controllerAs:'ctrl'
  })
  .state('bancos', {
    url: '/app/servicios/bancos',
    templateUrl: 'scripts/bancos/bancos.html',
    controller:'BancosCtrl',
    controllerAs:'ctrl'
  })

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })

    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl',
          controllerAs: 'ctrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app');

});
