angular.module('myApp', [])
  .service('locationService', function($http, $q){

     return {
      getPosition: function() {
        var deferred = $q.defer();

        window.navigator.geolocation.getCurrentPosition(function(results){
          deferred.resolve(results);
        }, function(error){
          deferred.reject(error);
        });

        return deferred.promise;
      },

      getAddress: function(pos) {
        var deferred = $q.defer();
        
        $http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+pos.coords.latitude+','+pos.coords.longitude+'&sensor=true').then(function(res){
          console.log(res.data);
          deferred.resolve(res.data);
        }, function(error) {
          console.warn(error);
          deferred.reject(error);
        });

        return deferred.promise;
      }
     };

  })

.controller('MainController', function($scope, $http, locationService){

    locationService.getPosition().then(locationService.getAddress).then(function(position) {
      console.log(position);
      var postalCodeObject = position.results[2],
          postalCode = postalCodeObject.address_components[0].short_name; 
        
      $scope.zip = postalCode;
    });

    $scope.search = function (term, location) {
      $http.get('/search', { 
        params: { 
          term: term, 
          location: location 
        } 
        }).then(function(res){
          $scope.results = res.data;
        });
    };

  })



