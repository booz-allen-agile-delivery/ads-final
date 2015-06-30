'use strict';

/**
 * @ngdoc function
 * @name gapFront.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the gapFront
 */
angular.module('gapFront')
  .controller('HeaderCtrl', function ($scope, $location) {

    $scope.about = $location.path();
    console.log($location.path());

    $scope.scrollToLabel = function scrollToLabel(){
      $('html, body').animate({
        scrollTop: $("#label-accuracy").offset().top
      }, 1000);
    };

  });
