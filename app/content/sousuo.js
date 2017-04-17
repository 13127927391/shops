angular.module("sousuoCtrlModule",[])
	.controller("sousuoCtrl",function($scope,$http,$stateParams,$state){
		//console.log($stateParams.word)
		//搜索
		var name = $stateParams.word;
		$http({
        	url:"./shopApi/book/bookSearch.php?search="+name,
		    }).then(function(res){
		    	//console.log(res.data)
		    	if(res.data.code == 0){
		    		$scope.sousuoList=res.data.data;
		    	}else if(res.data.code == 1){
		    		$state.go("home")
		    		alert("没有搜索结果")
		    	}else if(res.data.code == 2){
		   			alert("没有搜索参数");
		   			$state.go("home")
		    	}
		    	
		    },function(error){
		    	console.log(error)
		})

	})