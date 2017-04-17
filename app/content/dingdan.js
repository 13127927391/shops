angular.module("dingdanCtrlMoudel",["ngCookies"])
	.controller("dingdanCtrl",function($scope,$http,$cookieStore){
		$scope.user = $cookieStore.get("user");
		//console.log($scope.user.id)

		$http({
			url:"./shopApi/book/orderQuery.php?user_id="+$scope.user.id+"&start=0&length=100",
		}).then(function(res){
			console.log(res.data.data)
			$scope.dingdanList = res.data.data;
		},function(error){

		})


	})