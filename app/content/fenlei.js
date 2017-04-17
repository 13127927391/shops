angular.module("fenleiCtrlMoudel",[])
	.controller("fenleiCtrl",function($scope,$http){
		$scope.tab = 1;
			$scope.setTab = function(Num){
				$scope.tab = Num;
			}
			$scope.isTab = function(N){
				if ($scope.tab == N){
					return true;
				}
			}
		//热门类
		$scope.remenleiList = {};
		$http({
			url:"./shopApi/book/book.php?start=1&length=9"
		}).then(function(res){
			$scope.remenleiList = res.data.data;
		},function(res){})

		//技术类
		$scope.jishuleiList = {};
		$http({
			url:"./shopApi/book/book.php?cateid=1"
		}).then(function(res){
			$scope.jishuleiList = res.data.data;
		},function(res){})

		//动漫类
		$scope.dongmanleiList = {};
		$http({
			url:"./shopApi/book/book.php?cateid=2"
		}).then(function(res){
			$scope.dongmanleiList = res.data.data;
		},function(res){})

		//文学类
		$scope.wenxueleiList = {};
		$http({
			url:"./shopApi/book/book.php?cateid=3"
		}).then(function(res){
			$scope.wenxueleiList = res.data.data;
		},function(res){})


	})