angular.module("footCtrollerModule",["ngCookies"])
	.controller("footCtroller",(function($scope,$cookieStore,$state,shopcarList){
		$scope.geRen = function(){
			//console.log($cookieStore.get("user"))
			if($cookieStore.get("user") === undefined){
				$state.go("loginModal")
			}else{
				$state.go("my")
			}
		}
		


		$scope.totalNumber = 0;

   		$scope.$watch(function(){
   			return shopcarList;
   		}, function(){
   			var totalNumber = 0;
   			angular.forEach(shopcarList, function(item){
   				totalNumber += item.number;
   			})
   			$scope.totalNumber = totalNumber;
   		}, true)
	}))