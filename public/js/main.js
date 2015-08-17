var mainjs = function(){

angular.module('SampleApp', ['ngRoute'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      //routes
      $routeProvider
        .when("/", {
             templateUrl:"./partials/home.html"
          // controller:"HomeController"
        })
        .when("/feed", {
          templateUrl:"./partials/feed.html"
        })
        .when("/projects", {
          templateUrl:"./partials/projects.html"
        })
        .when("/contact", {
          templateUrl:"./partials/contact.html"
        })
        .otherwise({
          redirectTo: '/'
        });

        $locationProvider.html5Mode(true);
    }
  ])
  .run(['$rootScope','$interval',function($rootScope, $interval) {

    // global random colour rotation
      $rootScope.textColourRotation = Math.floor( Math.random() * 360 + 1 );
      var duration = 60000;
      var maxRotation = 360;
      var updateLength = duration / maxRotation;
      $rootScope.transitionTimer = $interval(function() {
        $rootScope.textColourRotation += 1;
        if ($rootScope.textColourRotation > maxRotation) {
          $rootScope.textColourRotation = 0;
        }
      }, updateLength);
  }]);

  angular.module('SampleApp').directive('ngRainbow', function() {
  return {
    link: function(scope, iElement, iAttrs) {
      scope.$watch('textColourRotation', function(value){
        iAttrs.$set('style','-webkit-filter: hue-rotate(' + value + 'deg)');
      })
    }
  }
});

angular.module('SampleApp').factory('feedlist', ['$http', function($http){
  var o = {
    feedlist: []
  };
  o.getAll = function(){
    return $http.get('/feeditems').success(function(data){
        angular.copy(data, o.feedlist);
    });
  };
  return o;
}]);

// feedlist controller
angular.module('SampleApp').controller('feedlistController', [
  '$scope','feedlist',
  function($scope, feedlist) {
    feedlist.getAll();
    console.log(feedlist);
    $scope.feedlist = feedlist.feedlist;
  }
]);

  // // home controller
  // angular.module('SampleApp').controller('HomeController', [
  //   '$scope',
  //   function($scope) {
  //     $scope.content = "Testing ※ Hello";
  //   }
  // ]);

  // // contact controller
  // angular.module('SampleApp').controller('ContactController', [
  //   '$scope',
  //   function($scope) {
  //     $scope.content = "Contact Me!";
  //   }
  // ]);
};
mainjs();
bannerjs();
angular.bootstrap(document,['SampleApp']);
