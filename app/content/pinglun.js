angular.module("pinglunCtrlModule",["ngSanitize","ngCookies"])
	.controller("pinglunCtrl",function($ionicPopup,$scope,$stateParams,$httpParamSerializer,$http,$cookieStore){
		var num = $stateParams.num;
		$scope.neiRong = "";
		$scope.neirongFn = function(){
			$scope.user = $cookieStore.get("user");
			if($scope.user === undefined){
				$ionicPopup.alert({
	   				template:"<p style='text-align:center;'>请登录</p>",
	   				okText:"确定",
	   				okType:"button-calm"
	   			})
			}else{
				var data = {
					"user_id":$scope.user.id,
					"id":num,
					"content":$scope.neiRong
				};
				var getdata = $httpParamSerializer(data);
				$http({
					url:"./shopApi/book/comment.php",
					method:"POST",
					data:getdata,
					headers:{"content-type":"application/x-www-form-urlencoded"}
				}).then(function(res){
					if(res.data.code == 0){
						$ionicPopup.alert({
			   				template:"<p style='text-align:center;'>发表评论成功</p>",
			   				okText:"确定",
			   				okType:"button-calm"
			   			})
					}else{
						$ionicPopup.alert({
			   				template:"<p style='text-align:center;'>评论失败</p>",
			   				okText:"确定",
			   				okType:"button-calm"
			   			})
					}
				},function(error){
					console.log(error)
				})
			}
		}
			
		
	})