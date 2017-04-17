angular.module("zhuceCtrlModule",[])
	.controller("zhuceCtrl",function($scope,$http,$httpParamSerializer,$state,$ionicPopup){
		$scope.userdata = {};
	   		$scope.submitData = function(){
	   			//console.log($scope.userdata);
	   		}
	   	//验证密码和确认面貌
        $scope.checkPwd = function(){
           return $scope.userdata.pwd === $scope.userdata.repwd;
        }


       $scope.zhuCe = function(){
			var data = {
				"name":$scope.userdata.username,
				"password":$scope.userdata.pwd,
				"tel":$scope.userdata.tel,
				"sex":$scope.userdata.sex
			};
			var getdata = $httpParamSerializer(data);
			console.log(getdata)
			$http({
				url:"./shopApi/book/userRegist.php",
				method:"POST",
				data:getdata,
				headers:{"content-type":"application/x-www-form-urlencoded"}
			}).then(function (res){
				console.log(res.data.code);
				if(res.data.code == 0){
					$ionicPopup.alert({
		   				template:"<p style='text-align:center;'>注册成功</p>",
		   				okText:"确定",
		   				okType:"button-calm"
		   			})
					$state.go("loginModal")
				}else if(res.data.code == 1){
					$ionicPopup.alert({
		   				template:"<p style='text-align:center;'>用户已存在</p>",
		   				okText:"确定",
		   				okType:"button-assertive"
		   			})
				}else{
					$ionicPopup.alert({
		   				template:"<p style='text-align:center;'>注册失败</p>",
		   				okText:"确定",
		   				okType:"button-assertive"
		   			})
				}
			},function (error){
				console.log(error)
			})
		}
        
	})