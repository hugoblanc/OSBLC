app.service('Connexion', function(Backand) {
  // Might use a resource here that returns a JSON array
  var connect = this;

  connect.signin = function (email, password, appName) {
      //call Backand for sign in
      return Backand.signin(email, password);
  };


  connect.anonymousLogin= function(){
      // don't have to do anything here,
      // because we set app token att app.js
  }

  connect.signout = function () {
      return Backand.signout();
  };

});
