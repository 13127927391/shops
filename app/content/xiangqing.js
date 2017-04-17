angular.module("xiangqingCtrlModule",["ngSanitize"])
	.controller("xiangqingCtrl",function($scope,$http,$stateParams,shopcarList,$ionicPopup){
		//商品详情
		var id = $stateParams.id;
		//console.log(id);
		$scope.xiangqingList={};
		$http({
			url:"./shopApi/book/bookId.php?id="+id,
		}).then(function(res){
			$scope.xiangqingList=res.data.data;
			//console.log($scope.xiangqingList);
			$scope.myHtml=$scope.xiangqingList.desc;
			//console.log($scope.myHtml)
		},function(res){})
   		
		 //定义变量
   		$scope.shopcarList = shopcarList;

	   		//加入购物车
   		$scope.addShopcar = function(item){
   			//console.log(item.id)
   			if ($scope.shopcarList[item.id]) {
   				//购物车中已经存在
   				$scope.shopcarList[item.id]["number"] ++;
   			} else {
   				//购物车没有改商品
   				$scope.shopcarList[item.id] = {
	   				name : item.author,
	   				price : item.price,
	   				image : item.images,
	   				title : item.title,
	   				number:1
	   			};
   			}
   		}



   		$scope.goumai = function(){
   			$ionicPopup.confirm({
   				template:"<p stayle='text-align:center;'>是否确认购买</p>",
   				okText:"是",
   				cancelText:"否",
   				okType:"button-balanced",
   				cancelType:"button-assertive"
   			})
   		}
	}) 