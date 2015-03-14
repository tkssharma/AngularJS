angular.module('rideshare').controller("formController", function($scope){

$scope.form = "Add Ride Info" ;
$scope.form1 = "review Ride Info" ;


$scope.picks = ["UHG-Site1", "UHG-Site2", "Gachbowli", "Madhapur",
    "Kondapur", "Kukatpally", "KPHB", "Lingampally",
    "ShilpaRamam", "Secunderabad"
];

$scope.drops = ["UHG-Site1", "UHG-Site2", "Gachbowli", "Madhapur",
    "Kondapur", "Kukatpally", "KPHB", "Lingampally",
    "ShilpaRamam", "Secunderabad"
];

$scope.showSuccessMessage=false;
$scope.showErrorMessage = false;

	$scope.addRide = function(){
		$scope.submitted = true;
		if($scope.rideInfoForm.$valid){
			$scope.showSuccessMessage=true;
			$scope.showErrorMessage = false;			
			$scope.submitted = false;
		}
		else{
			$scope.showSuccessMessage=false;
			$scope.showErrorMessage = true;
			return;
		}
		console.log($scope.rideInfo);
	};

});

/*angular.module('rideshare').controller('formController', ['$http','$scope', function($http , $scope){
    $scope.saveddata = [];
    $http.get('./save.json').success(function(data){
     $scope.saveddata = data ;
    }).error(function(){
        alert("error");
    });
  }]);*/



