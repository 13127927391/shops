angular.module("shopcarCtrlModule",["ngCookies"])
	.controller("shopcarCtrl",function($scope,shopcarList,$http,$cookieStore,$state, $ionicPopup){

    $scope.user = $cookieStore.get("user");
    //console.log($scope.user)
		//购物车信息
     	$scope.shopcarList = shopcarList;    
     	//定义购物车商品的总价
	   	$scope.totalPrice = 0;
	   	//修改购物车数量
   		$scope.minusNumber = function(item){
   			if (item.number <= 1) {
   				item.number = 1;
   			} else {
   				item.number --;
   			}
		  }
   		$scope.addNumber = function(item){
   			item.number ++;
   		}
   		//删除购物车一条商品
   		$scope.deleteShopcar = function(key){
   			delete $scope.shopcarList[key];
   		}


      //监听总价的变化
      $scope.$watch("shopcarList", function(){
        var total = 0;
        angular.forEach($scope.shopcarList, function(item){
          total += item.number * item.price;
        })
        $scope.totalPrice = total;
      }, true)

      //提交订单
      $scope.dingdan = function(){
        if($scope.user === undefined){
          $ionicPopup.alert({
              template:"<p style='text-align:center;'>请登录</p>",
              okText:"确定",
              okType:"button-assertive"
            })
           $state.go("loginModal")
        }else{
           $scope.$watch("shopcarList", function(){
              var shangpinid = '';
              var shangpinnum = '';
              angular.forEach($scope.shopcarList, function(item,key){
                shangpinid = key;
                shangpinnum = item.number;
              
                $scope.n = shangpinid;
                $scope.m = shangpinnum;
                var getdata = {
                  "user_id":$scope.user.id,
                  "cart":[
                      {
                      "id":$scope.n,  
                       "num":$scope.m
                     }]
                  }
                $http({
                  url:"./shopApi/book/order.php",
                  method:"POST",
                  data:getdata
                }).then(function(res){
                  if(res.data.code == 0){
                      delete $scope.shopcarList[key];
                      $state.go("dingdan")
                  }
                },function(res){
                  console.log(res);
                })
              })
            }, true)
          } 
        }

        

      $scope.Fn = function(){
      if($scope.totalPrice == 0){
          return false;
       }else{
        return true;
       }
      }

	})