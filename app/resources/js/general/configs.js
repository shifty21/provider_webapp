(function (Configs, undefined)
{   
   // function healthAZModuleDataService(healtharticleservice) {
   //      return {
   //        healthdata: function() {
   //          console.log("getting all articles from resolve of homestate")
   //          healtharticleservice.getAllArticles();
   //        }         
   //      }
   //    }
	SG.Modules.SG.config(function ($routeProvider,$stateProvider,$urlRouterProvider,$locationProvider,$httpProvider)
	{
          
$httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
		$stateProvider
			.state('homestate', {
      				url: "/homestate",
      				templateUrl: SG.PartialsPath + "home/home.html",
              controller : 'homeController'
        })
      .state('login', {
              url: "/login",
              templateUrl: SG.PartialsPath + "loginState/login.html",
              controller : 'loginController'
        })
      .state('newservice', {
              url: "/newservice",
              templateUrl: SG.PartialsPath + "user/services.html",
              controller : 'userController'
        })
      .state('userprofile', {
              url: "/userprofile",
              templateUrl: SG.PartialsPath + "user/userprofile.html",
              controller : 'userController'
        })
			 $urlRouterProvider.otherwise("/homestate");
       // $locationProvider.hashPrefix('!');
	})
  SG.Modules.SG.run(function($rootScope){
$rootScope.$on('$stateChangeSuccess',function(){
    $("html, body").animate({ scrollTop: 0 }, 200);
})
 })


 


}(SG.Configs = SG.Configs || {} ));