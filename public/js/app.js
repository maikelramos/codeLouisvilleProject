var app = angular.module("app", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
      url: '/home',
      templateUrl: 'views/partial-home.html'
  })
  .state('register', {
      url: '/register',
      templateUrl: 'views/partial-register.html'
  })
  .state('display', {
      url: '/display/:id',
      templateUrl: 'views/partial-display.html'
  })
  .state('about', {
      url: '/about',
      templateUrl: 'views/partial-about.html'
  })

  $urlRouterProvider.otherwise('/home');
})
.controller("mainCtrl", function ($scope , dataService){
  dataService.getData(function(response){
  $scope.people = response.data;
  });
})
.service("dataService", function ($http){
  this.getData = function(callback) {
    $http.get("mock/people.json").then(callback)
  }
});
