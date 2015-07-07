var app=angular.module('getMePujari',['ui.router']);


app.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise("/home");
    var home = {name:"home",templateUrl:"app/partials/home.html",url:"#home"};
    var about = {name:"about",templateUrl:"app/partials/about.html",url:"/about"};
    var services = {name:"services",templateUrl:"app/partials/services.html",url:"/services"};
    var login = {name:"login",templateUrl:"app/partials/login.html",url:"/login"};
    var signup = {name:"signup",templateUrl:"app/partials/signup.html",url:"/signup"};

    $stateProvider.state('home',home);
    $stateProvider.state('about',about);
    $stateProvider.state('services',services);
    $stateProvider.state('login',login);
    $stateProvider.state('signup',signup);

});


