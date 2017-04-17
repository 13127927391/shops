angular.module("myApp",["ui.router","ionic","navCtrollerModule","footCtrollerModule","lunboCtrolModule","jishuServiceModule","jishuCtrlModule","dengluCtrlModule","zhuceCtrlModule","xiangqingCtrlModule","sousuoCtrlModule","myCtrlModule","shopcarCtrlModule","fenleiCtrlMoudel","dingdanCtrlMoudel","pinglunCtrlModule","jibenCtrlMoudel"])
	.config(function($ionicConfigProvider) {
	   		$ionicConfigProvider.platform.android.tabs.style('standard');
			$ionicConfigProvider.platform.android.tabs.position('bottom');
	   })
    .value("shopcarList",{})	
    //路由
	.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		//去掉!
		$locationProvider.hashPrefix("");
		//其他跳转首页
	   	$urlRouterProvider.otherwise("/home");
		//设置具体路由
		$stateProvider
	   	.state("home", {
   			url:"/home",
   			templateUrl:"views/home.html",
   		})
   		.state("shopcar", {
   			url:"/shopcar?id",
   			templateUrl:"views/shopcar.html"
   		})
   		.state("shoucang", {
   			url:"/shoucang",
   			templateUrl:"views/shoucang.html"
   		})
   		.state("loginModal", {
   			url:"/loginModal",
   			templateUrl:"views/loginModal.html",
	   	})
	   	.state("zhuce", {
   			url:"/zhuce",
   			templateUrl:"views/zhuce.html",
	   	})
	   	.state("xiangqing",{
	   		url:"/xiangqing?id",
	   		templateUrl:"views/xiangqing.html"
	   	})
	   	.state("sousuo",{
	   		url:"/sousuo?word",
	   		templateUrl:"views/sousuo.html"
	   	})
	   	.state("my", {
   			url:"/my",
   			templateUrl:"views/my.html",
	   	}) 
         .state("fenlei", {
            url:"/fenlei",
            templateUrl:"views/fenlei.html",
         })
         .state("dingdan",{
            url:"/dingdan",
            templateUrl:"views/dingdan.html"
         })
         .state("pinglun",{
            url:"/pinglun?num",
            templateUrl:"views/pinglun.html"
         })
         .state("jiben",{
            url:"/jiben",
            templateUrl:"views/jiben.html"
         })
	})