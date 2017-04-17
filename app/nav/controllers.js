angular.module("navCtrollerModule",[])
	.controller("navCtroller",(function($scope){
		//定义搜索
        $scope.searchValue = "";
        $scope.filterValue = "";
        //点击函数
        $scope.searchFn = function(){
          $scope.filterValue = $scope.searchValue;
          //console.log($scope.filterValue);   
        }
        //过滤函数
       /* $scope.filterFn = function(item){
         return  item.product_name.indexOf($scope.filterValue) >= 0 || item.product_des.indexOf($scope.filterValue) >= 0;  
        }
*/
	}))