'use strict';

var controllers = angular.module("app.controllers");

controllers.controller('ThunderRatingController', ['$scope', function ($scope) {
    $scope.thunderRating = 4;

    $scope.click1 = function (param) {
        console.log('Click(' + param + ')');
    };

}]);

controllers.directive('thunderRating', function () {
    return {
        scope: {
            rating: '=',//= - pass by reference (two-way data binding)
            maxRate: '@', //@ - pass by value (attribute binding)
            click: "&", //& - pass by method (expression binding)
        },
        restrict: 'EA',
        template:
            "<div style='display: inline-block; margin: 0px; padding: 0px; cursor:pointer;' ng-repeat='idx in maxRatings track by $index'> \
                    <img ng-src='{{((hoverValue + _rating) <= $index) && \"../assets/images/ratting-unfill.png\" || \"../assets/images/ratting-filled.png\"}}' \
                    ng-Click='isolatedClick($index + 1)'></img> \
            </div>",
        compile: function (element, attrs) {
            if (!attrs.maxRate || (Number(attrs.maxRate) <= 0)) {
                attrs.maxRate = '5';
            };
        },
        controller: function ($scope, $element, $attrs) {
            $scope.maxRatings = [];

            for (var i = 1; i <= $scope.maxRate; i++) {
                $scope.maxRatings.push({});
            };

            $scope._rating = $scope.rating;
			
			$scope.isolatedClick = function (param) {
				if ($scope.readOnly == 'true') return;

				$scope.rating = $scope._rating = param;
				$scope.hoverValue = 0;
				$scope.click({
					param: param
				});
			};
        }
    };
});
