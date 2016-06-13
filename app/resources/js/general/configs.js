(function (Configs, undefined)
{   

	SG.Modules.SG.config(function ($routeProvider,$stateProvider,$urlRouterProvider,$locationProvider,$httpProvider)
	{
          
// $logProvider.debugEnabled(true);
// $compileProvider.debugInfoEnabled(true);
        
		$stateProvider
			.state('homestate', {
              url: "/homestate",
              templateUrl: SG.PartialsPath + "home/home.html",
              controller : 'homeController'


        })
      .state('quesandAns', {
      				url: "/ques-and-ans",
      				templateUrl: SG.PartialsPath + "home/quesandAns.html",
              controller : 'homeController'


        })
      .state('register', {
              url: "/register",
              templateUrl: SG.PartialsPath + "loginState/register.html",
              controller : 'loginController',
              onEnter: function($rootScope,loginService,$state) {
               if(typeof loginService.getProviderId() != 'undefined') {
                    // event.preventDefault(); // stop current execution
                  $state.go('homestate'); 
                  }
                }
              // onEnter: function($rootScope) {
              //   $rootScope.signup = true;
              //   $rootScope.loggedIn = true;
              //   },    
              //   onExit: function($rootScope) {
              //   $rootScope.signup = false;
              // }
        })
      .state('login', {
              url: "/login",
              templateUrl: SG.PartialsPath + "loginState/login.html",
              controller : 'loginController',
              onEnter: function($rootScope,loginService,$state) {
               if(typeof loginService.getProviderId() != 'undefined') {
                    // event.preventDefault(); // stop current execution
                  $state.go('homestate'); 
                  }
                }
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

 SG.Modules.SG.run(function($rootScope,loginService,$state){
$rootScope.$on('$stateChangeStart', 
      function(event, toState, toParams, fromState, fromParams){ 
        // console.log("state" + toState.name)
        // if((typeof loginService.getProviderId() == 'undefined')&&(toState.name="newservice")){
        var isLogin = toState.name === "login";
        var home = toState.name === "homestate";
        var register = toState.name === "register";
        var quesandAns = toState.name === "quesandAns";
        if(isLogin || home || register || quesandAns){
           return; // no need to redirect 
        }

        // now, redirect only not authenticated

        // var userInfo = authenticationSvc.getUserInfo();

        if(typeof loginService.getProviderId() == 'undefined') {
            event.preventDefault(); // stop current execution
            $state.go('login'); // go to login
        }
 })
 })
}(SG.Configs = SG.Configs || {} ));