angular.module('rideshare').controller("homePageController", function($scope){

 $scope.techname = "Angular & Node JS" ;


});


angular.module('rideshare').controller('homePageController', ['$http', function($http){
    var appdata = this;
    appdata.technologies = [];
    $http.get('./demo.json').success(function(data){
        appdata.technologies = data;
    });
  }]);

