angular.module("myCtrlModule",["ngCookies"])
	.controller("myCtrl",function($scope,$cookieStore){

		$scope.user = $cookieStore.get("user");
		//console.log($scope.user)
		 $scope.zxDl=function(){
		 	 $cookieStore.remove('user')
		 }
	})