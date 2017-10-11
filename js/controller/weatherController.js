var app= angular.module("WeatherApp");

app.controller("WeatherController", ['$scope', 'WeatherService', '$q',
    function ctrl($scope, weatherService, $q) {

        $q.all([weatherService.getWeatherDataByCity('London,uk'),
            weatherService.getWeatherDataByCity('Carlisle,uk'),
            weatherService.getWeatherDataByCity('Birmingham,uk'),
            weatherService.getWeatherDataByCity('Bristol,uk'),
            weatherService.getWeatherDataByCity('Cambridge,uk'),
            weatherService.getSeaLevelData('London,uk')]).then(function(response){
            $scope.london=response[0];
            $scope.Carlisle=response[1];
            $scope.Birmingham=response[2];
            $scope.Bristol=response[3];
            $scope.Cambridge=response[4];
            $scope.seaLevel=response[5];
        });
    }
]);
