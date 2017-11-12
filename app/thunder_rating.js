'use strict';

var controllers = angular.module("app.controllers");

controllers.controller('ThunderRatingController', ['$scope', function ($scope) {
    $scope.thunderRating = 4;

    $scope.click1 = function (param) {
        console.log('Click(' + param + ')');
    };

}]);
