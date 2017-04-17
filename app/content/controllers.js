angular.module("jishuCtrlModule", [])
	.controller("jishuCtrl", function($scope,jishuService,wenxueService,$http) {
		//技术
		$scope.jishuList = [];
		jishuService.requestData(function(res){
        	$scope.jishuList = res.data.data;
		}, function(){

		})
		//文学
		var number = 3;
		$scope.loadMore = function(){
            number+=3;
            $scope.demo(number);
           // console.log(number)
	      //停止加载
	      $scope.$broadcast('scroll.infiniteScrollComplete');
	    }
		$scope.wenxueList = [];
	    $scope.demo = function(n){
			$http({
					url: "./shopApi/book/book.php?start=5&length="+n,
				}).then(function(res){
	        	$scope.wenxueList = res.data.data;
			}, function(){

			})
	    }
		//$scope.demo(number);
		

	})
	