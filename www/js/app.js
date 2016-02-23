// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'backand', 'ui.router'])


.run(function($ionicPlatform, $rootScope, $state, $ionicPopup) {
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

  // Revient à la page signup lorsque l'utilisateur rafraichit la page
  window.onbeforeunload = function() {
    return "Vous allez être déconnecté";
    $state.go("signup");
  }

  $rootScope.$state = $state;
  $rootScope.user = {};
  $rootScope.user.id = '';
  $rootScope.user.role = '';
  $rootScope.user.filiere = '';
  $rootScope.user.email = '';
  $rootScope.user.firstName = '';
  $rootScope.user.lastname = '';
  $rootScope.user.commandes = [];
  $rootScope.user.currentCommande = -1;
  $rootScope.user.IDcurrentCommande = 0;
  //infoConnexion

})

.config(function(BackandProvider, $stateProvider, $urlRouterProvider) {


      BackandProvider.setAppName('mabase');
      BackandProvider.setSignUpToken('f1c7c793-2d52-4312-b99b-e0e5b7d83c8c');
      BackandProvider.setAnonymousToken('94414917-aa8f-4c45-937b-ac80a010a7ab');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  
    .state('signup', {
          url: '/sign-up',
          templateUrl: 'pages/inscription.html',
          controller: 'LoginCtrl'
    })

    .state('signin', {
          url: '/sign-in',
          templateUrl: 'pages/login.html',
          controller: 'LoginCtrl'
    })


    .state('verifEmail', {
      url: '/verifEmail',
      templateUrl: 'pages/verifEmail.html'
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
        controller: 'AccueilCtrl'
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

    .state('tab.desserts', {
        url: '/desserts',
        views: {
            'tab-menu': {
                templateUrl: 'pages/desserts.html',
                controller: 'DessertCtrl'
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

    .state('tab.newplats', {
        url: '/newplats',
        views: {
            'tab-menu': {
                templateUrl: 'pages/newPlats.html',
                controller: 'NewPlatsCtrl'
            }
        }
    })

    .state('tab.plats', {
        url: '/plats',
        views: {
            'tab-menu': {
                templateUrl: 'pages/plats.html',
                controller: 'PlatsCtrl'
            }, 
            cache: false
        }
    })

    .state('tab.favoris', {
      url: '/favoris',
      views: {
        'tab-menu': {
          templateUrl: 'pages/favoris.html',
          controller: 'FavorisCtrl'
        }
      }
    })

  .state('tab.planning', {
    url: '/planning',
    views: {
      'tab-planning': {
        templateUrl: 'pages/planning.html',
        controller: 'planningCtrl'
      }
    }
  })

  .state('tab.edt', {
    url: '/edt/:filiere/:annee',
    views: {
      'tab-planning': {
        templateUrl: 'pages/edt.html',
        controller: 'edtCtrl'
      }
    }
  })

  .state('tab.selectEdt', {
    url: '/selectEdt',
    views: {
      'tab-planning': {
        templateUrl: 'pages/selectEdt.html',
        controller: 'selectEdtCtrl'
      }
    }
  })

  .state('tab.compte', {
    url: '/compte',
    views: {
      'tab-compte': {
        templateUrl: 'pages/monCompte.html',
        controller: 'parametresCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/sign-up');

  //$httpProvider.interceptors.push('APIInterceptor');
});
