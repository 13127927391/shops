angular.module("jishuServiceModule", [])
		//技术
       .service("jishuService", function($http) {
			this.requestData = function(success, error){
				$http({
					url: "./shopApi/book/book.php?start=0&length=9",
				}).then(success, error)
			}
       })
       //文学
       .service("wenxueService", function($http) {
			this.wenxueData = function(success, error){
				$http({
					url: "./shopApi/book/book.php?start=10&length=",
				}).then(success, error)
			}
		})
		
       
