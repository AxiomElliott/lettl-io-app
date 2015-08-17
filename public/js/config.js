//config.js
requirejs.config({
  baseUrl: './js',
  // paths: {
  //   'angular': 'vendor/angular/angular.min',
  //  // 'angular-animate': 'vendor/angular-animate/angular-animate',
  //   'angular-route': 'vendor/angular-route/angular-route',
  //   'jquery': 'vendor/jquery/dist/jquery',
  //   'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
  // },
  // shim: {
  //   'bundle': {deps:['angular', 'angular-route']},
  //   'angular-route':{deps:['angular'], exports:'angular'},
  // //  'angular-animate':{deps:['angular'], exports:'angular'},
  //   'angular':{deps:['jquery'], exports:'angular'},
  //   'bootstrap':['jquery']
  // }
});

require(['bundle.min'], function() {
  mainjs();
  bannerjs();
  angular.bootstrap(document,['SampleApp']);
});
