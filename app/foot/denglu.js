angular.module("dengluCtrlModule",["ngCookies"])
	.controller("dengluCtrl",function($scope,$http,$httpParamSerializer,$state,$cookieStore,$ionicPopup){
		$scope.userdata = {};
		 $scope.dengLu = function(){
			var data = {
				"username":$scope.userdata.username,
				"password":$scope.userdata.pwd,
			};
			var getdata = $httpParamSerializer(data);
			$http({
				url:"./shopApi/book/userInfoLogin.php",
				method:"POST",
				data:getdata,
				headers:{"content-type":"application/x-www-form-urlencoded"}
			}).then(function (res){
				//console.log(res.data.data);

				if(res.data.code == 0){
					$ionicPopup.alert({
		   				template:"<p style='text-align:center;'>登陆成功</p>",
		   				okText:"确定",
		   				okType:"button-calm"
		   			})
					$state.go("my")
					//设置cookie	
					 $cookieStore.put("user",{name:$scope.userdata.username,id:res.data.data.user_id});

				}else if(res.data.code == 1){
					$ionicPopup.alert({
		   				template:"<p style='text-align:center;'>用户名不存在</p>",
		   				okText:"确定",
		   				okType:"button-assertive"
		   			})
				}
				else if(res.data.code == 2){
					$ionicPopup.alert({
		   				template:"<p style='text-align:center;'>用户或密码错误</p>",
		   				okText:"确定",
		   				okType:"button-assertive"
		   			})
				}
				else if(res.data.code == 3){
					$ionicPopup.alert({
		   				template:"<p style='text-align:center;'>请登录</p>",
		   				okText:"确定",
		   				okType:"button-assertive"
		   			})
				}
			},function (error){
				console.log(error)
			})

		    /*var xx = $cookieStore.get("user");
		    console.info(xx);*/
		}

		   

	})
