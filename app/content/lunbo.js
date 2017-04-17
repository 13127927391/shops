angular.module("lunboCtrolModule",[])
  .controller("lunboCtrl",["$scope","$ionicModal","$ionicSlideBoxDelegate",function($scope,$ionicModal,$ionicSlideBoxDelegate){
		  //小轮播
		  $scope.model = {
             activeIndex: "1",
          };
           // 单击分页器，跳到指定的幻灯片
          $scope.toSlideIndex = function(index) {
             $scope.model.activeIndex = index;
          };
          $scope.even = 0;
          $scope.stopOrStart = function() {
             if($scope.even == 0) {
                 $ionicSlideBoxDelegate.stop();
                 $scope.even=1;
             } else {

                 $ionicSlideBoxDelegate.start();
                 $scope.even=0;
             }
          }

          /*$scope.refreshData=function(){
            $scope.$broadcast('scroll.refreshComplete');
            $scope.number = 5;   
            console.log($scope.number);      
          }*/
          

	}])