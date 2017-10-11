var app = angular.module("WeatherApp", ["ngRoute"]);
app.config(config);

function config($routeProvider) {
    $routeProvider.when("/home",{
        templateUrl:"template/home.html",
        controller:"WeatherController"
    })
    $routeProvider.when("/weather",{
        templateUrl:"template/weather.html",
        controller:"WeatherController"
    }).otherwise("/home", {
        templateUrl: "template/home.html",
        controller: "WeatherController"
    });
}

app.filter('timeWiseFilter', function() {
    return function( items) {
        var filtered = [];
        angular.forEach(items, function(item) {
            var dtTime = item.dt_txt.split(' ')[1];
            if(dtTime === '09:00:00') {
                filtered.push(item);
            }
        });
        return filtered;
    };
});
