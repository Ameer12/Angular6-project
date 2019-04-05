var app = angular.module("mainApp",[])
app.controller("ctrl",function($scope){
	$scope.msg = "hello";

	$scope.records = [
    {
      "Name" : "Alfreds Futterkiste",
      "Lname":"khan",
      "email":"ak.mzp90@gmail.com",
      "Country" : "Germany"
    },
    {
      "Name" : "Berglunds snabbköp",
      "Country" : "Sweden"
    },
    {
      "Name" : "Centro comercial Moctezuma",
      "Country" : "Mexico"
    },
    {
      "Name" : "Ernst Handel",
      "Country" : "Austria"
    }
  ]
});