var bannerjs = function() {

angular.module('SampleApp').controller('bannerController', ['$scope','$window','$timeout', function($scope,$window,$timeout){
  $scope.bannerdata = [
    {'index':1, 'classes':'char', 'char':'e'},
    {'index':-1, 'classes':'char', 'char':'l'},
    {'index':2, 'classes':'char', 'char':'l'},
    {'index':3, 'classes':'char', 'char':'i'},
    {'index':3, 'classes':'char', 'char':'o'},
    {'index':-3, 'classes':'char', 'char':'t'},
    {'index':-3, 'classes':'char', 'char':'t'},
    {'index':-2, 'classes':'char', 'char':'.'}
  ];
  var surname = [
    {'index':0, 'classes':'char', 'char':'t'},
    {'index':0, 'classes':'char', 'char':'h'},
    {'index':0, 'classes':'char', 'char':'o'},
    {'index':0, 'classes':'char', 'char':'m'},
    {'index':0, 'classes':'char', 'char':'p'},
    {'index':0, 'classes':'char', 'char':'s'},
    {'index':0, 'classes':'char', 'char':'o'},
    {'index':0, 'classes':'char', 'char':'n'}
  ];

  var charspacing = 45;

  $scope.fasttransition = false;

  // changes the index of the chars 'elliott.' so that they have a correct visual order
  // fires off after 4 seconds
  $timeout(function() {
    for(i = 0; i < $scope.bannerdata.length; i++) {
      $scope.bannerdata[i].index = 0;
    }
  }, 4000);

  $timeout(function(){
    for (i = 0; i < $scope.bannerdata.length; i++) {
      $scope.bannerdata[i].classes += ' animated fadeOut';

    }
  }, 8000);

  // adds my last name to the banner
  // creates a tada animation using animate.css
  // fires off after 15 seconds
  $timeout(function() {

    $scope.bannerdata = [{'index':0, 'classes':'', 'char':'Elliott Thompson'}];
    // for (i = 0; i < surname.length; i++) {
    //   $scope.bannerdata = $scope.bannerdata.concat(surname[i]);
    // }
    // $scope.bannerdata = $scope.bannerdata.concat(surname);
    for(i = 0; i < $scope.bannerdata.length; i++) {
      $scope.bannerdata[i].classes = 'char animated fadeIn';
    }
    $scope.offset = 0;
    $scope.fasttransition = true;
  }, 9000);

// text color animation for the banner, loops the hue over 60 s
  $timeout(function() {
    for(i = 0; i < $scope.bannerdata.length; i++) {
      $scope.bannerdata[i].classes += ' huechange';
    }
  }, 10000);


  $scope.getCharStyling = function(index){
    return $scope.fasttransition ?
      {'letter-spacing': '0px', 'font-family':'Bitter', 'transition': 0.5 + 's ease'} :
      {'font-family':'Courier', 'width': charspacing + 'px', 'left': (index * charspacing) + 'px', 'transition': 4 + 's ease'};
  }

}]);

};
