// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'backand', 'starter.controllers', 'ui.router'])


.run(function($ionicPlatform, $rootScope) {
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

  $rootScope.age = 5;
  $rootScope.user = {};
  $rootScope.user.id = '';
  $rootScope.user.email = '';
  $rootScope.user.firstName = '';
  $rootScope.user.lastname = '';
  $rootScope.user.commandes = [];
  $rootScope.user.currentCommande = -1;
  $rootScope.user.IDcurrentCommande = 0;


})

.config(function(BackandProvider, $stateProvider, $urlRouterProvider) {


  BackandProvider.setAppName("MABASE"); // change here to your app name
  BackandProvider.setSignUpToken('4ce88904-75c5-412c-8365-df97d9e18a8f'); //token that enable sign up. see http://docs.backand.com/en/latest/apidocs/security/index.html#sign-up
  BackandProvider.setAnonymousToken('87c37623-a2d2-42af-93df-addc65c6e9ad'); // token is for anonymous login. see http://docs.backand.com/en/latest/apidocs/security/index.html#anonymous-access

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  
    .state('signin', {
          url: '/sign-in',
          templateUrl: 'pages/login.html',
          controller: 'LoginCtrl'
   })

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'pages/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.accueil', {
    url: '/dash',
    views: {
      'tab-accueil': {
        templateUrl: 'pages/main.html',
        controller: 'MainCtrl'
      }
    }
  })


  .state('tab.menu', {
      url: '/menu',
      views: {
        'tab-menu': {
          templateUrl: 'pages/menu.html',
          controller: 'MenuCtrl'
        }
      }
    })

    .state('tab.commande', {
      url: '/commande',
      views: {
        'tab-menu': {
          templateUrl: 'pages/commande.html',
          controller: 'CommandeCtrl'
        }
      }
    })

    .state('tab.boissons', {
      url: '/boissons',
      views: {
        'tab-menu': {
          templateUrl: 'pages/boissons.html',
          controller: 'BoissonCtrl'
        }
      }
    })

    .state('tab.desserts', {
        url: '/desserts',
        views: {
            'tab-menu': {
                templateUrl: 'pages/desserts.html',
                controller: 'DessertCtrl'
            }
        }
    })

    .state('tab.plats', {
        url: '/plats',
        views: {
            'tab-menu': {
                templateUrl: 'pages/plats.html',
                controller: 'PlatsCtrl'
            }
        }
    })

    .state('tab.favoris', {
      url: '/favoris',
      views: {
        'tab-friends': {
          templateUrl: 'pages/favoris.html',
          controller: 'MenuCtrl'
        }
      }
    })

    .state('tab.friend-detail', {
      url: '/friends/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
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
  $urlRouterProvider.otherwise('/sign-in');

  //$httpProvider.interceptors.push('APIInterceptor');
});
