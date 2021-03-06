(function (Configs, undefined)
{   

	SG.Modules.SG.config(function ($routeProvider,$stateProvider,$urlRouterProvider,$locationProvider,$httpProvider)
	{
          
// $logProvider.debugEnabled(true);
// $compileProvider.debugInfoEnabled(true);
// $disqusProvider.setShortname('smartgrowthforkids');
$locationProvider.html5Mode(true);
// $locationProvider.hashPrefix('!');

		$stateProvider
			.state('homestate', {
              url: "/home",
              templateUrl: SG.PartialsPath + "home/home.html",
              controller : 'homeController'


        })
      .state('eductionqa', {
              url: "/eduction-ques-and-anss",
              templateUrl: SG.PartialsPath + "question-blog/education-blog.html",
              controller : 'quesandansController'


        })
      .state('healthqueqa', {
              url: "/health-ques-and-ans",
              templateUrl: SG.PartialsPath + "question-blog/health-blog.html",
              controller : 'quesandansController'


        })
      .state('eventqa', {
              url: "/event-ques-and-ans",
              templateUrl: SG.PartialsPath + "question-blog/events-blog.html",
              controller : 'quesandansController'


        })
      .state('sportsqa', {
              url: "/sports-ques-and-ans",
              templateUrl: SG.PartialsPath + "question-blog/sports-blog.html",
              controller : 'quesandansController'


        })
      .state('celebrationqa', {
              url: "/celebration-ques-and-ans",
              templateUrl: SG.PartialsPath + "question-blog/celebration-blog.html",
              controller : 'quesandansController'


        })
      .state('terms_policy', {
              url: "/terms_policy",
              templateUrl: SG.PartialsPath + "general/termsOfUse.html",
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
      .state('events', {
              url: "/events",
              templateUrl: SG.PartialsPath + "eventspartial/eventspartial.html",
              controller : 'eventsController'
        })
      .state('intern', {
              url: "/career-at-smartgrowth",
              templateUrl: SG.PartialsPath + "general/internship-requirement.html",
              controller : 'homeController'
        })
      .state('contact', {
              url: "/conatct-us",
              templateUrl: SG.PartialsPath + "general/contact-us.html",
              controller : 'homeController'
        })
			 $urlRouterProvider.otherwise("/home");
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
        var eductionqa = toState.name === "eductionqa";
        var healthqueqa = toState.name === "healthqueqa";
        var eventqa = toState.name === "eventqa";
        var sportsqa = toState.name === "sportsqa";
        var celebrationqa = toState.name === "celebrationqa";
        var terms_of_use = toState.name === "terms_policy";
        var events = toState.name === "events";
        var intern  = toState.name  ==="intern";
        var contact  = toState.name  ==="contact";
        if(isLogin || home || register || eductionqa ||contact||terms_of_use || healthqueqa || eventqa || sportsqa || celebrationqa || events || intern){
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