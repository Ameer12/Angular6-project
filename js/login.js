var app = angular.module("mainApp",['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'home-login.html'
	})
	.when('/dashboard',{
		templateUrl:'dashboard.html'
	})

	.ohertwise({
		redirectTo:'/'
	});
});

app.controller("ctrl",function($scope){
	$scope.login = " Login page........... ";
	$scope.username =$scope.username;
	$scope.password = $scope.password;

	if($scope.username == 'admin' && $scope.password == 'admin'){
		$location.path('dashboard.html');
	}
});
