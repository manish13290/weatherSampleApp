var app = angular.module("WeatherApp");
app.service('WeatherService', weatherService);
function weatherService($http,$q) {

    this.baseURL = "http://api.openweathermap.org/data/2.5/";
    this.weather = 'weather';
    this.forecast = 'forecast';
    this.appId = '4b3cb592c4edd7e5def9fcfc5ecfa348';

    this.getAPIData = function(url) {
        var defer = $q.defer();
        return $http.get(url).then(function (response) {
            defer.resolve(response.data);
            return defer.promise;
        }, function (err) {
            defer.reject(err);
            return defer.promise;
        });
    }

    this.getWeatherDataByCity = function(cityName) {
        return this.getAPIData(this.baseURL + this.weather + '?q=' + cityName + '&appid=' + this.appId);
    }

    this.getSeaLevelData = function(cityName) {
        return this.getAPIData(this.baseURL + this.forecast + '?q=' + cityName + '&appid=' + this.appId);
    }
/*
//1London_data_service.
    var defer_london=$q.defer();
    this.londondata = function () {

        return $http.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=4b3cb592c4edd7e5def9fcfc5ecfa348").then(function (response) {

            defer_london.resolve(response.data);
            return defer_london.promise;
        }, function (err) {
            defer_london.reject(err);
            return defer_london.promise;
        });
    }
//2city Carlisle data_service
  var defer_Carlisle=$q.defer();
    this.Carlisledata = function () {

        return $http.get("http://api.openweathermap.org/data/2.5/weather?q=Carlisle,uk&appid=4b3cb592c4edd7e5def9fcfc5ecfa348").then(function (response) {
            defer_Carlisle.resolve(response.data);
            return defer_Carlisle.promise;
        }, function (err) {
            defer_Carlisle.reject(err);

            return defer_Carlisle.promise;
        });
    }

//3rdcity_Birmingham Data_service
  var defer_Birmingham=$q.defer();
    this.Birminghamdata = function () {

        return $http.get("http://api.openweathermap.org/data/2.5/weather?q=Birmingham,uk&appid=4b3cb592c4edd7e5def9fcfc5ecfa348").then(function (response) {
            defer_Birmingham.resolve(response.data);
            return defer_Birmingham.promise;
        }, function (err) {
            defer_Birmingham.reject(err);
            return defer_Birmingham.promise;
        });
    }
    //4th city Bristol_data service.
 var defer_Bristol=$q.defer();
    this.Bristoldata = function () {

        return $http.get("http://api.openweathermap.org/data/2.5/weather?q=Bristol,uk&appid=4b3cb592c4edd7e5def9fcfc5ecfa348").then(function (response) {
            defer_Bristol.resolve(response.data);
            return defer_Bristol.promise;
        }, function (err) {
            defer_Bristol.reject(err);
            return defer_Bristol.promise;
        });
    }
//5th Cambridgecity_data_service
var defer_Cambridge=$q.defer();
    this.Cambridgedata = function () {

        return $http.get("http://api.openweathermap.org/data/2.5/weather?q=Cambridge,uk&appid=4b3cb592c4edd7e5def9fcfc5ecfa348").then(function (response) {
            defer_Cambridge.resolve(response.data);
            return defer_Cambridge.promise;
        }, function (err) {
            defer_Cambridge.reject(err);

                return defer_Cambridge.promise;
        });
    }

//6th seaLevel 5days forecast records.
 var defer_seaLevel=$q.defer();
    this.seaLeveldata = function () {

        return $http.get("http://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=4b3cb592c4edd7e5def9fcfc5ecfa348").then(function (response) {
            defer_seaLevel.resolve(response.data);
            return defer_seaLevel.promise;
        }, function (err) {
            defer_seaLevel.reject(err);
            return defer_seaLevel.promise;
        });
    }
*/
}
