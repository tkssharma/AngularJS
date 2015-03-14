
(function(){
var rideshare=angular.module("rideshare",["ngRoute"]);

rideshare.config(function($routeProvider){
	$routeProvider
	.when('/',{
		controller: 'homePageController',
		templateUrl: 'src/partials/homePage.html'
	})
	
	.when('/about',{
		controller: 'aboutController',
		templateUrl: 'src/partials/aboutPage.html'
	})
	.when('/contact',{
		controller: 'contactController',
		templateUrl: 'src/partials/contactPage.html'
	})

	.when('/form',{
		controller: 'contactController',
		templateUrl: 'src/partials/form.html'
	})
	.when('/ajaxdemo',{
		controller: 'demoController',
		templateUrl: 'src/partials/ajaxdemo.html'
	})
	.when('/ajaxfecth',{
		controller: 'demoController',
		templateUrl: 'src/partials/ajaxfecth.html'
	})
	.when('/ajaxpost',{
		controller: 'demoController',
		templateUrl: 'src/partials/ajaxpost.html'
	})
	
	.otherwise({redirectTo:'/'});

});

rideshare.directive("pageHeader", function() {
      return {
        restrict: 'E',
        templateUrl: "src/directives/page-header.html"
      };
    });

rideshare.directive("pageFooter", function() {
      return {
        restrict: 'E',
        templateUrl: "src/directives/page-footer.html"
      };
    });




  })();




