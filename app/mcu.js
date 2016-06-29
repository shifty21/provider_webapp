(function (SG, undefined)
{
	/**
	 * @ngdoc function 
	 * @name SG
	 * @id SG
	 * @description
	 * @Author Yateender Khedar
	 * Set up our SG website parameters for AngularJS.
	**/
	SG.Version 		= "0.0.0";
	SG.PartialsPath 	= "partials/";
	// SG.ServerUrl 	= 'http://144.76.237.246:6060/superkids/r1/';
	SG.ServerUrl 	= 'http://128.199.196.34:8080/smartgrowth/r1/';
	SG.Service 		= {};
	SG.Modules 		= {};
	SG.Configs 		= {};
	SG.Filters 		= {};
	SG.Controllers 	= {};
	SG.Directives 		= {};

}(window.SG = window.SG || {} ));
(function (Modules, undefined)
{
	/**
	 * @ngdoc function 
	 * @name SG
	 * @id SG
	 * @description
	 * @Author Yateender Khedar
	 * Set up our SG website parameters for AngularJS.
	**/
	Modules.SG = angular.module("sg", ['ngRoute','ui.router','angularUtils.directives.dirPagination','angularUtils.directives.dirDisqus','inputDropdown']);

}(SG.Modules = SG.Modules || {} ));
(function (Configs, undefined)
{   

	SG.Modules.SG.config(function ($routeProvider,$stateProvider,$urlRouterProvider,$locationProvider,$httpProvider)
	{
          
// $logProvider.debugEnabled(true);
// $compileProvider.debugInfoEnabled(true);
// $disqusProvider.setShortname('smartgrowthforkids');
// $locationProvider.html5Mode(true);
$locationProvider.hashPrefix('!');

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
        if(isLogin || home || register || eductionqa || terms_of_use || healthqueqa || eventqa || sportsqa || celebrationqa || events){
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
(function (Service, undefined)
{ function MetaService() {
       var title = '';
       var metaDescription = '';
       var metaKeywords = '';
       var image = '';
       return {
          set: function(newTitle, newMetaDescription, newKeywords,newimage) {
              metaKeywords = newKeywords;
              metaDescription = newMetaDescription;
              title = newTitle;
              image = newimage;
          },
          
          metaTitle: function(){ return title; },
          metaImage: function(){ return image; },
          metaDescription: function() { return metaDescription; },
          metaKeywords: function() { return metaKeywords; }
       }
}
  SG.Modules.SG.service("MetaService",MetaService);
}(SG.Service = SG.Service || {} ));
(function (Directives, undefined)
{
	SG.Modules.SG.directive("footerSection", [ 
		function ()
	{
		return {
			restrict: 'E',
			templateUrl : 'partials/home/footerSection.html'
		}

	}])
}(SG.Directives = SG.Directives || {} ));
(function (Controllers, undefined)
{   
      
	SG.Modules.SG.controller("homeController",homeController);
    // MainCtrl.$inject = ['healthAZModuleData'];
	function homeController ($scope, $http,$window,$templateCache,loginService,$state,$rootScope,$log,$location)
		{   

                  $scope.checkloggedIn = function () {
                        if(typeof loginService.getProviderId() == 'undefined')
                        {
                              // $log.info("not loggedId")
                        $rootScope.loggedIn =  false;
                  }
                  else{
                      $rootScope.loggedIn =  true;  
                  }
                  
            }
            $scope.howitworks = false;
            $scope.PAGE_URL = $location.absUrl();
            $rootScope.username = loginService.getUserName();
                  $scope.logout = function (argument) {
                        loginService.clearProviderId();
                        // $log.info(loginService.getProviderId())
                        $rootScope.loggedIn = false;
                        $state.go("homestate");
                        
                  }
            //       $scope.loginUser = function () {
            //       console.log("login in")
            //       loginService.setProviderId("logedIn")
            //       $state.go("userprofile");
            //       $rootScope.loggedIn = true;
            // }
            
            // console.log("HOme Controller");
            $scope.service = [
            {name:"Tuition",image:"resources/images/icons/ic_teacher.png"},
            {name:"Trainer",image:"resources/images/icons/ic_trainer.png"},
            {name:"DayCare",image:"resources/images/icons/ic_daycare.png"},
            {name:"Health",image:"resources/images/icons/ic_health.png"},
            {name:"School",image:"resources/images/icons/ic_school.png"},
            {name:"Sports",image:"resources/images/icons/ic_sports.png"},
            {name:"Events",image:"resources/images/icons/ic_events.png"},
            {name:"Celebration",image:"resources/images/icons/ic_birthday.png"}
            
            ]
            $scope.socialService = [
            {name:"Recipes",image:"resources/images/icons/ic_recipe.png"},
            {name:"Stories",image:"resources/images/icons/ic_stories.png"},
            {name:"Q&A",image:"resources/images/icons/ic_qa.png"}
            ];
            $scope.events = [
            {name:"Natural Fun",image:"resources/images/portfolio/e1.jpg"},
            {name:"Water Game",image:"resources/images/portfolio/e2.jpg"},
            {name:"Color Game",image:"resources/images/portfolio/e3.jpg"}
            ]
            $scope.blogs = [
            {name:"Cute Handprint",image:"resources/images/portfolio/a1.jpg"},
            {name:"Color Love",image:"resources/images/portfolio/a2.jpg"},
            {name:"Healthy Apple ",image:"resources/images/portfolio/a3.jpg"},
            ]
            $scope.stories = [
            {name:"Lion and Rat",image:"resources/images/portfolio/s.jpg"},
            {name:"Ali baba challis chor",image:"resources/images/portfolio/s2.jpg"},
            {name:"Cute Knee",image:"resources/images/portfolio/s3.jpg"}
            ]
            $scope.recipes = [
            {name:"Bread Cake",image:"resources/images/portfolio/r1.jpg"},
            {name:"Home Food",image:"resources/images/portfolio/r2.jpg"},
            {name:"Rice Kheer",image:"resources/images/portfolio/r3.jpg"}
            ]
   }
	

}(SG.Controllers = SG.Controllers || {} ));

(function (Directives, undefined)
{
	SG.Modules.SG.directive("navBar", [ 
		function ()
	{
		return {
			restrict: 'E',
			templateUrl : 'partials/general/navBar.html'
		}

	}])
}(SG.Directives = SG.Directives || {} ));
(function (Directives, undefined)
{
	SG.Modules.SG.directive("portfolioSection", [ 
		function ()
	{
		return {
			restrict: 'E',
			templateUrl : 'partials/home/portfolioSection.html'
		}

	}])
}(SG.Directives = SG.Directives || {} ));

(function (Controllers, undefined)
{   

	SG.Modules.SG.controller("quesandansController",quesandansController);
    // MainCtrl.$inject = ['healthAZModuleData'];
	function quesandansController ($scope, $http,$window,$templateCache,$state,$rootScope,$location)
		{   

            $scope.PAGE_URL =  $location.absUrl();
            // console.log("quesandansController")
          $scope.disqusConfigeducation = {
    disqus_shortname: 'smartgrowthforkids',
    disqus_identifier: 'education-identifier',
    disqus_title: 'Education Q&A',
    disqus_url: $scope.PAGE_URL
};
          $scope.disqusConfigevents = {
    disqus_shortname: 'smartgrowthforkids',
    disqus_identifier: 'event-identifier',
    disqus_title: 'Kids Events Q&A',
    disqus_url: $scope.PAGE_URL
};
$scope.disqusConfigcelebration = {
    disqus_shortname: 'smartgrowthforkids',
    disqus_identifier: 'celebration-identifier',
    disqus_title: 'Celebration Q&A',
    disqus_url: $scope.PAGE_URL
};
$scope.disqusConfighealth = {
    disqus_shortname: 'smartgrowthforkids',
    disqus_identifier: 'health-identifier',
    disqus_title: 'Health Q&A',
    disqus_url: $scope.PAGE_URL
};
$scope.disqusConfigsports = {
    disqus_shortname: 'smartgrowthforkids',
    disqus_identifier: 'sports-identifier',
    disqus_title: 'Sports Q&A',
    disqus_url: $scope.PAGE_URL
};
   }
	

}(SG.Controllers = SG.Controllers || {} ));

(function (Directives, undefined)
{
	SG.Modules.SG.directive("serviceSection", [ 
		function ()
	{
		return {
			restrict: 'E',
			templateUrl : 'partials/home/serviceSection.html'
		}

	}])
}(SG.Directives = SG.Directives || {} ));
(function (Controllers, undefined)
{   
	SG.Modules.SG.controller("loginController",loginController);
    // MainCtrl.$inject = ['healthAZModuleData'];
	function loginController ($scope, $http,$window,$templateCache,loginService,$state,$rootScope,userService)
		{
            // console.log("Login Controller");
            $scope.registerData = {fullName:"",phoneNumber:"",emailAddress:"",
            password:"",osVersion:"",deviceModel:""};
            $scope.login = {emailAddress:"",password:""}
            $scope.registerUser = function () {
                userService.registerUser($scope.registerData).then(function(response){
                    if(response.data.status.statusCode != 200)
                        {
                            // console.log("invalid username or pass" + response.data.status.statusCode)
                            // console.log("invalid username or pass" + response.data.status.title)
                        $window.alert(response.data.status.title)
                    }
                    else
                     {
                        $window.alert(response.data.status.title)
                        $state.go("login")
                    }
                        
                })
            }
            $scope.emailId = "";
            $scope.forgotPass = function () {
                userService.forgotPass($scope.emailId).then(function (response) {
                    $window.alert(response.data.status.title)
                    // console.log("response for forgot pass " +response.data.status.statusCode )
                })
            }
            $scope.loginUser = function () {
                userService.loginUser($scope.login).then(function(response){
                    if(response.data.status.statusCode == 403)
                        {
                            // console.log("invalid username or pass" + response.data.status.statusCode)
                            // console.log("invalid username or pass" + response.data.status.title)
                        $window.alert("Invalid UserName or Password")
                    }
                    else{
                        // console.log("loggedin" + response.data.provider.id);
                    loginService.setProviderId(response.data.provider.id);
                    loginService.setUserName(response.data.provider.name);
                    // console.log("provider name " + response.data.provider.name)
                    $rootScope.username = loginService.getUserName();
                    // console.log("provider name" + $rootScope.username);
                    $state.go("userprofile");
                    $rootScope.loggedIn = true;}
                })
            	
            }

            
   }
	

}(SG.Controllers = SG.Controllers || {} ));

(function() {
 'use strict';
 /**
  * @ngdoc service
  * @name r2r.category
  * @description
  * # category
  * Service in the r2r.
  */
  SG.Modules.SG.service("loginService",loginService);

 function loginService($window, $log,$state) {

   var storageKey = 'status';
   var loggedIn = 'loggedIn';
   var username = 'user';

   init();

   function init() {
     if (typeof getProviderId() == 'undefined') {
      $window.localStorage[loggedIn] = false;
       $state.go("register");
     }

     // $log.info('providerid  ' + getProviderId());
  
   }

   function getProviderId() {
    // console.log("storage key " + $window.localStorage[storageKey]);
     return $window.localStorage[storageKey];
     // return angular.fromJson($window.localStorage[storageKey]);
   }

   function getloggedIn() {
    // console.log("storage key " + $window.localStorage[loggedIn]);
     return $window.localStorage[loggedIn];
     // return angular.fromJson($window.localStorage[storageKey]);
   }
function getUserName() {
     return $window.localStorage[username];
   }


   function setProviderId(value) {
     $window.localStorage[storageKey] = value;
     $window.localStorage[loggedIn] = false;
      // $window.localStorage[storageKey] = angular.toJson(value);
     // $log.info("providerid setup to "+ value);
   }
   function setUserName(value) {
    console.log("provider name in service " + value)
     $window.localStorage[username] = value;
   }

   function clearProviderId() {
     $window.localStorage.clear();
   }

   return {
    getloggedIn: getloggedIn,
     getProviderId: getProviderId,
     setProviderId: setProviderId,
     getUserName: getUserName,
     setUserName: setUserName,
     clearProviderId: clearProviderId
   };

 }
})();
(function (Directives, undefined)
{
	SG.Modules.SG.directive("loginDiv", [ 
		function ()
	{
		return {
			restrict: 'E',
			scope:{},
			templateUrl : 'partials/loginState/loginDiv.html',
			controller: 'loginController'
		}

	}])
}(SG.Directives = SG.Directives || {} ));
(function (Directives, undefined)
{
	SG.Modules.SG.directive("registerDiv", [ 
		function ()
	{
		return {
			restrict: 'E',
			scope:{},
			templateUrl : 'partials/loginState/registerDiv.html',
			controller: 'loginController'
		}

	}])
}(SG.Directives = SG.Directives || {} ));

(function (Service, undefined)
{
function userService($http,$log)
    {
       var obj = {};
        var registerUrl = SG.ServerUrl + 'providerRegistration';
        var loginUrl = SG.ServerUrl + 'providerLogin';
        var profile = SG.ServerUrl + 'providerProfile/';
        var getConnectUrl = SG.ServerUrl + 'connectRequest/';
        var connectedUrl = SG.ServerUrl + 'connectRequest/';
        var forgotpasUrl = SG.ServerUrl + 'providerLogin?email=';
        // var getConnectUrl = 'http://144.76.237.246:6060/superkids/r1/connectRequest/1a6f54af-41a1-441d-a835-9cbbe914095b?sender=provider';
      obj.getConnectData = function (providerId) {
           // console.log("getting Connect Request")
           // console.log("providerid " + providerId)
        // return  $http.get(getConnectUrl)
        console.log("profileId " + providerId)
        return  $http.get(getConnectUrl + providerId+"?sender=provider")

      } 
      
      obj.forgotPass = function (email) {
        return $http.get(forgotpasUrl + email + '&forgotPassword=true');
      }
       obj.connected = function (providerid,connectRequestid) {
        console.log("profileId " + providerid)
        return  $http.get(connectedUrl +providerid+"?sender=provider&connectRequestId="+connectRequestid);   

      }   
      obj.getProfile = function (providerid) {
           console.log("profileId " + providerid)
        return  $http.get(profile + providerid)

      }      
      obj.registerUser = function (registerData) {
        return  $http.post(registerUrl,registerData,{headers: {
                        'Content-Type': 'text/plain'
                    }}).success(function(response) {
                    $log.info('SUCCESS' + response.status.title);
                })
                .error(function() {
                    $log.info('FAILURE');
                });       
      }
      obj.loginUser = function (loginData) {
        return  $http.post(loginUrl,loginData,{headers: {
                        'Content-Type': 'text/plain'
                    }})   
      }

 return obj;
}
	SG.Modules.SG.service("userService",userService);

}(SG.Service = SG.Service || {} ));

(function (Directives, undefined)
{
	SG.Modules.SG.directive("enquiryTab", [ 
		function ()
	{
		return {
			restrict: 'E',
			templateUrl : 'partials/user/enquiryTab.html',
			controller : function($scope, userService,$log,loginService){

				$scope.getConnectData = function () {
					var providerId = loginService.getProviderId();
					userService.getConnectData(providerId).then(function (response) {
						$scope.connectRequests = response.data.connectRequest;
                 		$log.info("connect Request " + response.data.connectRequest)
                 	})
				}
				$scope.connected = function (connectRequestid) {
					var providerId = loginService.getProviderId();
					
					userService.connected(providerId,connectRequestid).then(function (response) {
						$scope.getConnectData();
                 		$log.info("connect Request " + response.data.status.title)
                 	})
				}
			}
		}

	}])
}(SG.Directives = SG.Directives || {} ));
(function (Directives, undefined)
{
	SG.Modules.SG.directive("profileTab", [ 
		function ()
	{
		return {
			restrict: 'E',
			templateUrl : 'partials/user/profileTab.html',
			controller: function($scope, userService,$log,loginService) {
                               $scope.detailDiv =false;
                               $scope.providerId = loginService.getProviderId();
                        $scope.getProfile = function () {
                 	userService.getProfile($scope.providerId).then(function (response) {
                 		$scope.profileData = response.data;
                 		$scope.profiletraining = response.data.training;
                 		$scope.profileschool = response.data.school;
                 		$scope.profiletution = response.data.tution;
                 		$scope.profileevent = response.data.event;
                 		$scope.profilesport = response.data.sport;
                 		$scope.profiledayCare = response.data.dayCare;
                 		$scope.profilecelebration = response.data.celebration;
                 		$scope.profilehealth = response.data.health;
                 		$scope.providerdetails = response.data.provider;
                 		// $log.info("user profile " + $scope.profileschool[0].providerName)
                                for (x in $scope.profiletraining)
                                {
                                        console.log("profile data " + $scope.profiletraining[0].providerName )
                                        console.log("profile data " + x )
                                }
                                                               
                 		// console.log("user profile " + response.data)
                 	})
                 }  
                }
		}

	}])
}(SG.Directives = SG.Directives || {} ));
(function (Controllers, undefined)
{   
	SG.Modules.SG.controller("userController",userController);
    // MainCtrl.$inject = ['healthAZModuleData'];
	function userController ($scope, $http,$window,$templateCache,$log)
		{	

//             $scope.setActiveTab = function( activeTab ){
//                 console.log("active tab " + activeTab);
//     $window.localStorage.setItem("activeTab", activeTab);
// };

// $scope.getActiveTab = function(){
//     return $window.localStorage.getItem("activeTab");
// };

// $scope.isActiveTab = function( tabName, index ){
//     var activeTab = $scope.getActiveTab();
//     return ( activeTab === tabName || ( activeTab === null && $index === 0 ) );
// };
            $scope.idvalue = ""
			$scope.idva = function(){
			$log.info("value " + $scope.idvalue);
		}
            $log.info("User Controller");
                        
   }
	

}(SG.Controllers = SG.Controllers || {} ));


(function (Service, undefined)
{
function addServiceService($http)
    {
       var obj = {};
        var tutionUrl = SG.ServerUrl + 'tuition/';
        var trainingUrl = SG.ServerUrl + 'training/';
        var kidcareUrl = SG.ServerUrl + "dayCare/";
        var schoolUrl = SG.ServerUrl + "school/";
        var healthUrl = SG.ServerUrl + "health/";
        var eventUrl = SG.ServerUrl + "event/";
        var sportUrl = SG.ServerUrl + "sport/";
        var birthdayUrl = SG.ServerUrl + "celebration/";
        var localityUrl = SG.ServerUrl + "address/";
        
        obj.getlocalityInfo = function (city,providerid) {
            return $http.get(localityUrl + providerid +"?city=" + city);
        }
        obj.addtutionService = function (tutiondata,providerId) {
            console.log("providerid " + providerId);
        return  $http.post(tutionUrl + providerId,tutiondata,{
                    headers: {
                        "Content-Type": "text/plain"
}})      
      }
     
        obj.addtrainingService = function (trainingdata,providerId) {
           console.log("providerid " + providerId);
        return  $http.post(trainingUrl +providerId,trainingdata,{
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).success(function(response) {
                    console.log('SUCCESS' + response.status.title);
                })
                .error(function() {
                    console.log('FAILURE');
                });       
      }
        obj.addkidcareService = function (kidcaredata,providerId) {
           console.log("providerid " + providerId);
        return  $http.post(kidcareUrl + providerId,kidcaredata,{
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).success(function() {
                    console.log('SUCCESS');
                })
                .error(function() {
                    console.log('FAILURE');
                });       
      }
        obj.addschoolService = function (schooldata,providerId) {
           console.log("providerid " + providerId);
        return  $http.post(schoolUrl + providerId,schooldata,{
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).success(function() {
                    console.log('SUCCESS');
                })
                .error(function() {
                    console.log('FAILURE');
                });       
      }
        obj.addhealthService = function (healthdata,providerId) {
           console.log("providerid " + providerId);
        return  $http.post(healthUrl + providerId,healthdata,{
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).success(function() {
                    console.log('SUCCESS');
                })
                .error(function() {
                    console.log('FAILURE');
                });       
      }
        obj.addeventService = function (eventdata,providerId) {
           console.log("providerid " + providerId);
        return  $http.post(eventUrl + providerId,eventdata,{
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).success(function() {
                    console.log('SUCCESS');
                })
                .error(function() {
                    console.log('FAILURE');
                });       
      }
        obj.addsportService = function (sportdata,providerId) {
           console.log("providerid " + providerId);
        return  $http.post(sportUrl + providerId,sportdata,{
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).success(function() {
                    console.log('SUCCESS');
                })
                .error(function() {
                    console.log('FAILURE');
                });       
      }
        obj.addbirthdayService = function (birthdaydata,providerId) {
           console.log("providerid " + providerId);
        return  $http.post(birthdayUrl+providerId,birthdaydata,{
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).success(function() {
                    console.log('SUCCESS');
                })
                .error(function() {
                    console.log('FAILURE');
                });       
      }
 return obj;
}
	SG.Modules.SG.service("addServiceService",addServiceService);

}(SG.Service = SG.Service || {} ));

(function(Directives, undefined) {
    SG.Modules.SG.directive("celebrationTab", [
        function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'partials/services/celebrationTab.html',
                controller: function($scope, addServiceService,loginService,$window) {
                    $scope.providerId = loginService.getProviderId();
                    // console.info("Enter Training tab directive controller");
                    $scope.type = ["Kids Celebration",
                        "Catering",
                        "Cakes"
                    ];
                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        // console.log("value " + $scope.celebration.type)
                    }

                    $scope.getlocalityInfo = function (city) {
                        addServiceService.getlocalityInfo(city,$scope.providerId).then(function (response) {
                            // console.log("locality response " + response.data.address)
                            $scope.pindirec = response.data.address
                        })
                    }
                                    $scope.pinchange = function (pin,locality) {
                        $scope.celebration.pincode = pin;
                        $scope.celebration.locality = locality;
                        // console.log("selected pin " +  $scope.celebration.pincode)
                        // console.log("selected pin " +  $scope.celebration.locality)

                    }
                    $scope.celebration = {
                        name: "",
                        type: "",
                        timings: "",
                        facilities: "",
                        specialities: "",
                        phoneNumber: "",
                        webLink: "",
                        services: "",
                        pincode: "",
                        priceRange: "",
                        streetAddress: ""
                    }
                    $scope.addbirthday = function() {
                        addServiceService.addbirthdayService($scope.celebration,$scope.providerId).then(function(response) {
                            // console.log("birtrhday service added");
                            $window.alert(response.data.status.title)
                            if(response.data.status.statusCode != 404 || response.data.status.statusCode != 500)
                             {
                            $scope.celebration = {
                        name: "",
                        type: "",
                        timings: "",
                        facilities: "",
                        specialities: "",
                        phoneNumber: "",
                        webLink: "",
                        services: "",
                        pincode: "",
                        priceRange: "",
                        streetAddress: ""
                    }
                }
                        })
                    }

                }
            }

        }
    ])
}(SG.Directives = SG.Directives || {}));
(function(Directives, undefined) {
    SG.Modules.SG.directive("eventTab", [
        function() {
            return {
                restrict: 'E',
                templateUrl: 'partials/services/eventTab.html',
                controller: function($scope, addServiceService,loginService,$window) {
                    $scope.providerId = loginService.getProviderId();
                    
                    $scope.category = [
                        "Art & Craft",
                        "Cooking & Baking",
                        "Communication",
                        "Dance",
                        "Personality Development",
                        "Quiz",
                        "Science & Robotics",
                        "Singing",
                        "Sports",
                        "Storytelling",
                        "Summer Camps",
                        "Winter Camps",
                    ];
                    $scope.endDate = new Date();
                    $scope.startDate = new Date();
                    $scope.dateChange = function () {
                        $scope.eventobj.startDate =  moment(new Date($scope.startDate)).format('MMDDYYYY')
                        $scope.eventobj.endDate = moment(new Date($scope.endDate)).format('MMDDYYYY')
                    }
                  $scope.getlocalityInfo = function (city) {
                        addServiceService.getlocalityInfo(city,$scope.providerId).then(function (response) {
                            // console.log("locality response " + response.data.address)
                            $scope.pindirec = response.data.address
                        })
                    }
                                    $scope.pinchange = function (pin,locality) {
                        $scope.eventobj.pincode = pin;
                        $scope.eventobj.locality = locality;
                        // console.log("selected pin " +  $scope.eventobj.pincode)
                        // console.log("selected pin " +  $scope.eventobj.locality)

                    }
                    $scope.eventobj = {
                        eventName: "",
                        category: "",
                        startDate: moment(new Date()).format('MMDDYYYY'),
                        endDate: moment(new Date()).format('MMDDYYYY'),
                        facilities: "",
                        specialities: "",
                        timings: "",
                        pincode: "",
                        contactPhone: "",
                        contactEmail: "",
                        contactPersonName: "",
                        webLink: "",
                        streetAddress: "",
                        locality:""
                    }
                    $scope.addevent = function() {
                        addServiceService.addeventService($scope.eventobj,$scope.providerId).then(function(response) {
                            // console.log("event service added");
                            $window.alert(response.data.status.title)
                            if(response.data.status.statusCode != 404 || response.data.status.statusCode != 500)
                             {
                            $scope.eventobj = {
                        eventName: "",
                        category: "",
                        startDate: moment(new Date()).format('MMDDYYYY'),
                        endDate: moment(new Date()).format('MMDDYYYY'),
                        facilities: "",
                        specialities: "",
                        timings: "",
                        pincode: "",
                        contactPhone: "",
                        contactEmail: "",
                        contactPersonName: "",
                        webLink: "",
                        streetAddress: "",
                        locality:""
                    }
                }
                        })
                    }

                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        // console.log("value " + $scope.selected)
                    }
                }
            }

        }
    ])
}(SG.Directives = SG.Directives || {}));
(function(Directives, undefined) {
    SG.Modules.SG.directive("healthTab", [
        function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'partials/services/healthTab.html',
                controller: function($scope, addServiceService,loginService,$window) {
                    $scope.providerId = loginService.getProviderId();
                    // console.info("Enter Training tab directive controller");
                    $scope.serviceName = ["Fitness Trainer",
                        "Child Specialist",
                        "Child Counsellor",
                        "Ditesian and Nutrision"
                    ];
                     $scope.getlocalityInfo = function (city) {
                        addServiceService.getlocalityInfo(city,$scope.providerId).then(function (response) {
                            // console.log("locality response " + response.data.address)
                            $scope.pindirec = response.data.address
                        })
                    }
                                    $scope.pinchange = function (pin,locality) {
                        $scope.healthobj.pincode = pin;
                        $scope.healthobj.locality = locality;
                        // console.log("selected pin " +  $scope.healthobj.pincode)
                        // console.log("selected pin " +  $scope.healthobj.locality)

                    }
                    $scope.healthobj = {
                        name: "",
                        serviceName: "",
                        timings: "",
                        facilities: "",
                        specialities: "",
                        phoneNumber: "",
                        pincode: "",
                        fees: "",
                        address: "",
                        streetAddress: ""
                    }
                      
                    $scope.addhealthservice = function() {
                        addServiceService.addhealthService($scope.healthobj,$scope.providerId).then(function(response) {
                            // console.log("health service added");
                            $window.alert(response.data.status.title)
                            if(response.data.status.statusCode != 404 || response.data.status.statusCode != 500)
                             {
                            $scope.healthobj = {
                        name: "",
                        serviceName: "",
                        timings: "",
                        facilities: "",
                        specialities: "",
                        phoneNumber: "",
                        pincode: "",
                        fees: "",
                        address: "",
                        streetAddress: ""
                    }
                }
                        })
                    }


                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        // console.log("value " + $scope.selected)
                    }
                }
            }

        }
    ])
}(SG.Directives = SG.Directives || {}));
(function(Directives, undefined) {
    SG.Modules.SG.directive("kidcareTab", [
        function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'partials/services/kidcareTab.html',
                controller: function($scope, addServiceService,loginService,$window) {
                    $scope.providerId = loginService.getProviderId();
                    // console.info("Enter Kid tab directive controller");
                    $scope.name = [
                        "Day Care Center"
                    ];
                    $scope.ageGroup = {
                        to1_3 : false,
                        to3_5 : false,
                        to5_8 : false
                    }
                       $scope.getlocalityInfo = function (city) {
                        addServiceService.getlocalityInfo(city,$scope.providerId).then(function (response) {
                            // console.log("locality response " + response.data.address)
                            $scope.pindirec = response.data.address
                        })
                    }
                                    $scope.pinchange = function (pin,locality) {
                        $scope.kidcareobj.pincode = pin;
                        $scope.kidcareobj.locality = locality;
                        // console.log("selected pin " +  $scope.kidcareobj.pincode)
                        // console.log("selected pin " +  $scope.kidcareobj.locality)

                    }
                    $scope.kidcareobj = {
                        minAge: "",
                        maxAge: "",
                        timings: "",
                        facilities: "",
                        specialities: "",
                        phoneNumber: "",
                        pincode: "",
                        fees: "",
                        address: "",
                        streetAddress: "",
                        name: "",
                        locality:""
                    }
                    $scope.addkidcareservice = function() {
                        if($scope.ageGroup.to1_3 && $scope.ageGroup.to3_5 && $scope.ageGroup.to5_8)
                            {$scope.kidcareobj.minAge = 1; $scope.kidcareobj.maxAge = 8}
                        else if($scope.ageGroup.to1_3 && $scope.ageGroup.to3_5)
                            {$scope.kidcareobj.minAge = 1; $scope.kidcareobj.maxAge = 5}
                        else if($scope.ageGroup.to3_5 && $scope.ageGroup.to5_8)
                            {$scope.kidcareobj.minAge = 3; $scope.kidcareobj.maxAge = 8}
                        else if($scope.ageGroup.to1_3 && $scope.ageGroup.to5_8)
                            {$scope.kidcareobj.minAge = 1; $scope.kidcareobj.maxAge = 8}
                        else if($scope.ageGroup.to1_3)
                            {$scope.kidcareobj.minAge = 1; $scope.kidcareobj.maxAge = 3}
                        else if($scope.ageGroup.to3_5)
                            {$scope.kidcareobj.minAge = 3; $scope.kidcareobj.maxAge = 5}
                        else if($scope.ageGroup.to5_8)
                            {$scope.kidcareobj.minAge = 5; $scope.kidcareobj.maxAge = 8}
                        else
                            {$scope.kidcareobj.minAge = 1; $scope.kidcareobj.maxAge = 8}
                        // console.log("startClassRange " + $scope.kidcareobj.minAge)
                        // console.log("startClassRange " + $scope.kidcareobj.maxAge)
                        addServiceService.addkidcareService($scope.kidcareobj,$scope.providerId).then(function(response) {
                            // console.log("kidcare service added");
                            $window.alert(response.data.status.title)
                            if(response.data.status.statusCode != 404 || response.data.status.statusCode != 500)
                             {
                            $scope.kidcareobj = {
                        minAge: "",
                        maxAge: "",
                        timings: "",
                        facilities: "",
                        specialities: "",
                        phoneNumber: "",
                        pincode: "",
                        fees: "",
                        address: "",
                        streetAddress: "",
                        name: "",
                        locality:""
                    }
                }
                        })
                    }
                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        // console.log("value " + $scope.selected)
                    }
                }
            }

        }
    ])
}(SG.Directives = SG.Directives || {}));
(function(Directives, undefined) {
    SG.Modules.SG.directive("schoolTab", [
        function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'partials/services/schoolTab.html',
                controller: function($scope, addServiceService,loginService,$window) {
                    $scope.providerId = loginService.getProviderId();
                    // console.info("Enter Training tab directive controller");
                    $scope.type = ["K-8 Schools - CBSE, ICSE , Other",
                        "MONTESSORI SCHOOLS",
                        "Play School"
                    ];
                           $scope.getlocalityInfo = function (city) {
                        addServiceService.getlocalityInfo(city,$scope.providerId).then(function (response) {
                            // console.log("locality response " + response.data.address)
                            $scope.pindirec = response.data.address
                        })
                    }
                                    $scope.pinchange = function (pin,locality) {
                        $scope.schoolobj.pincode = pin;
                        $scope.schoolobj.locality = locality;
                        // console.log("selected pin " +  $scope.schoolobj.pincode)
                        // console.log("selected pin " +  $scope.schoolobj.locality)

                    }
                    $scope.schoolobj = {
                        name: "",
                        type: "",
                        timings: "",
                        facilities: "",
                        specialities: "",
                        phoneNumber: "",
                        pincode: "",
                        fees: "",
                        address: "",
                        streetAddress: "",locality:""
                    }
                    $scope.addschoolservice = function() {
                        addServiceService.addschoolService($scope.schoolobj,$scope.providerId).then(function(response) {
                            // console.log("school service added");
                            $window.alert(response.data.status.title)
                            if(response.data.status.statusCode != 404 || response.data.status.statusCode != 500)
                             {
                            $scope.schoolobj = {
                        name: "",
                        type: "",
                        timings: "",
                        facilities: "",
                        specialities: "",
                        phoneNumber: "",
                        pincode: "",
                        fees: "",
                        address: "",
                        streetAddress: "",locality:""
                    }
                }
                        })
                    }
                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        // console.log("value " + $scope.selected)
                    }
                }
            }

        }
    ])
}(SG.Directives = SG.Directives || {}));
(function(Directives, undefined) {
    SG.Modules.SG.directive("sportTab", [
        function() {
            return {
                restrict: 'E',
                templateUrl: 'partials/services/sportTab.html',
                controller: function($scope, addServiceService,loginService,$window) {
                    $scope.providerId = loginService.getProviderId();
                    // console.info("enter sport tab directive controller");
                    $scope.clubs = ["Badminton Academy",
                        "Basketball Academy",
                        "Chess Academy",
                        "Cricket Academy",
                        "Football Academy",
                        "Skating Academy",
                        "Snooker Academy",
                        "Table Tennis Academy",
                        "Tennis Academy",
                        "Volleyball Academy"
                    ];
                            $scope.getlocalityInfo = function (city) {
                        addServiceService.getlocalityInfo(city,$scope.providerId).then(function (response) {
                            // console.log("locality response " + response.data.address)
                            $scope.pindirec = response.data.address
                        })
                    }
                                    $scope.pinchange = function (pin,locality) {
                        $scope.sportobj.pincode = pin;
                        $scope.sportobj.locality = locality;
                        // console.log("selected pin " +  $scope.sportobj.pincode)
                        // console.log("selected pin " +  $scope.sportobj.locality)

                    }
                    $scope.sportobj = {
                        name: "",
                        type: "",
                        timings: "",
                        facilities: "",
                        specialities: "",
                        phoneNumber: "",
                        pincode: "",
                        fees: "",
                        address: "",
                        streetAddress: ""
                    }
                    $scope.addsportservice = function() {
                        addServiceService.addsportService($scope.sportobj,$scope.providerId).then(function(response) {
                            // console.log("sport service added");
                            $window.alert(response.data.status.title)
                            if(response.data.status.statusCode != 404 || response.data.status.statusCode != 500)
                             {$scope.sportobj = {
                        name: "",
                        type: "",
                        timings: "",
                        facilities: "",
                        specialities: "",
                        phoneNumber: "",
                        pincode: "",
                        fees: "",
                        address: "",
                        streetAddress: ""
                    }}

                        })
                    }
                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        // console.log("value " + $scope.selected)
                    }

                }
            }

        }
    ])
}(SG.Directives = SG.Directives || {}));
(function(Directives, undefined) {
    SG.Modules.SG.directive("trainingTab", [
        function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'partials/services/trainingTab.html',
                controller: function($scope, addServiceService,loginService,$window) {
                    $scope.providerId = loginService.getProviderId();
                    // console.info("Enter Training tab directive controller");
                    $scope.subject = [
                        "Guitar classes",
                        "Musical Instrument Classes",
                        "Dance Classes",
                        "Karate Classes",
                        "Painting Classes",
                        "Cooking Clsses",
                        "Singing Classes",
                        "Art and Craft",
                        "Theater",
                        "Computer"
                    ]; 
                    $scope.daysPerWeek = [
                    {day1 : false},
                    {day2 : false},
                    {day3 : false},
                    {weekend : false},
                    {daily : false}
                    ];
                     function adddays() {
                        if($scope.daysPerWeek.day1) $scope.trainingobj.daysPerWeek = "1 day"
                            if($scope.daysPerWeek.day2)$scope.trainingobj.daysPerWeek = $scope.trainingobj.daysPerWeek + " 2 days"
                            if($scope.daysPerWeek.day3)$scope.trainingobj.daysPerWeek = $scope.trainingobj.daysPerWeek + " 3 days"
                            if($scope.daysPerWeek.weekend)$scope.trainingobj.daysPerWeek = $scope.trainingobj.daysPerWeek + " Weekends"
                            if($scope.daysPerWeek.daily)$scope.trainingobj.daysPerWeek = $scope.trainingobj.daysPerWeek + " Daily"
                        // console.log($scope.trainingobj.daysPerWeek + "boards")
                    }
                           $scope.getlocalityInfo = function (city) {
                        addServiceService.getlocalityInfo(city,$scope.providerId).then(function (response) {
                            // console.log("locality response " + response.data.address)
                            $scope.pindirec = response.data.address
                        })
                    }
                                    $scope.pinchange = function (pin,locality) {
                        $scope.trainingobj.pincode = pin;
                        $scope.trainingobj.locality = locality;
                        console.log("selected pin " +  $scope.trainingobj.pincode)
                        console.log("selected pin " +  $scope.trainingobj.locality)

                    }
                    $scope.ageGroup = {
                        to1_3 : false,
                        to3_5 : false,
                        to5_8 : false
                    }
                    $scope.classLocation = {
                        kid_home : false,
                        teacher_home : false,
                        at_instu : false
                    }
                    

                    $scope.trainingobj = {
                        minAge: "",
                        maxAge: "",
                        subject: "",
                        schoolNames: "",
                        daysPerWeek: "",
                        timings: "",
                        facilities: "",
                        specialities: "",
                        phoneNumber: "",
                        pincode: "",
                        fees: "",
                        address: "",
                        classLocation: "",
                        streetAddress: "",
                        instituteName: "",
                        locality:""
                    }
                    $scope.addtrainingService = function() {
                        if($scope.ageGroup.to1_3 && $scope.ageGroup.to3_5 && $scope.ageGroup.to5_8)
                            {$scope.trainingobj.minAge = 1; $scope.trainingobj.maxAge = 8}
                        else if($scope.ageGroup.to1_3 && $scope.ageGroup.to3_5)
                            {$scope.trainingobj.minAge = 1; $scope.trainingobj.maxAge = 5}
                        else if($scope.ageGroup.to3_5 && $scope.ageGroup.to5_8)
                            {$scope.trainingobj.minAge = 3; $scope.trainingobj.maxAge = 8}
                        else if($scope.ageGroup.to1_3 && $scope.ageGroup.to5_8)
                            {$scope.trainingobj.minAge = 1; $scope.trainingobj.maxAge = 8}
                        else if($scope.ageGroup.to1_3)
                            {$scope.trainingobj.minAge = 1; $scope.trainingobj.maxAge = 3}
                        else if($scope.ageGroup.to3_5)
                            {$scope.trainingobj.minAge = 3; $scope.trainingobj.maxAge = 5}
                        else if($scope.ageGroup.to5_8)
                            {$scope.trainingobj.minAge = 5; $scope.trainingobj.maxAge = 8}
                        else
                            {$scope.trainingobj.minAge = 1; $scope.trainingobj.maxAge = 8}

                        if($scope.classLocation.kid_home && $scope.classLocation.teacher_home && $scope.classLocation.at_instu)
                            {$scope.trainingobj.classLocation = "At Institute/Coaching, At Teacher Home, At Kid Home"}
                        else if($scope.classLocation.kid_home && $scope.classLocation.teacher_home)
                            {$scope.trainingobj.classLocation = "At Teacher Home, At Kid Home"}
                        else if($scope.classLocation.teacher_home && $scope.classLocation.at_instu)
                            {$scope.trainingobj.classLocation = "At Institute/Coaching, At Teacher Home"}
                        else if($scope.classLocation.kid_home && $scope.classLocation.at_instu)
                            {$scope.trainingobj.classLocation = "At Institute/Coaching, At Kid Home"}
                        else if($scope.classLocation.kid_home)
                            {$scope.trainingobj.classLocation = "At Kid Home"}
                        else if($scope.classLocation.teacher_home)
                            {$scope.trainingobj.classLocation = "At Teacher Home"}
                        else if($scope.classLocation.at_instu)
                            {$scope.trainingobj.classLocation = "At Institute/Coaching"}
                        else
                            {$scope.trainingobj.classLocation = "At Institute/Coaching, At Teacher Home, At Kid Home"}
                        adddays();
                        // console.log("startClassRange " + $scope.trainingobj.minAge)
                        // console.log("startClassRange " + $scope.trainingobj.maxAge)
                        // console.log("startClassRange " + $scope.trainingobj.classLocation)
                        addServiceService.addtrainingService($scope.trainingobj,$scope.providerId).then(function(response) {
                            // console.log("training service added");
                            $window.alert(response.data.status.title)
                             if(response.data.status.statusCode != 404 || response.data.status.statusCode != 500)
                             {$scope.trainingobj = {
                        minAge: "",
                        maxAge: "",
                        subject: "",
                        schoolNames: "",
                        daysPerWeek: "",
                        timings: "",
                        facilities: "",
                        specialities: "",
                        phoneNumber: "",
                        pincode: "",
                        fees: "",
                        address: "",
                        classLocation: "",
                        streetAddress: "",
                        instituteName: "",
                        locality:""
                    }
                }
                        })
                    }
                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        // console.log("value " + $scope.trainingobj.daysPerWeek)
                        
                    }
                }
            }

        }
    ])
}(SG.Directives = SG.Directives || {}));
(function(Directives, undefined) {
    SG.Modules.SG.directive("tutionTab", [
        function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'partials/services/tutionTab.html',
                controller: function($scope, addServiceService,loginService,$window) {
                    $scope.providerId = loginService.getProviderId();
                    // console.info("Enter Training tab directive controller");
                    $scope.subject = ["All Subject",
                        "FOREIGN LANGUAGES",
                        "INDIAN LANGUAGES",
                        "MATHS",
                        "SCIENCE",
                        "English"
                    ];
                    $scope.boards = [
                        {cbse : false},
                        {icse : false},
                        {international :  false},
                        {state :  false},
                        {all :  false}
                    ]
                    function addboard() {
                        if($scope.boards.cbse) $scope.tutionobj.boards = " CBSE"
                            if($scope.boards.icse)$scope.tutionobj.boards = $scope.tutionobj.boards + " ICSE"
                            if($scope.boards.international)$scope.tutionobj.boards = $scope.tutionobj.boards + " International Board"
                            if($scope.boards.state)$scope.tutionobj.boards = $scope.tutionobj.boards + " State Board"
                            if($scope.boards.all)$scope.tutionobj.boards = $scope.tutionobj.boards + " All type of Boards"
                        console.log($scope.tutionobj.boards + "boards")
                    }
                    $scope.daysPerWeek = [
                    {day1 : false},
                    {day2 : false},
                    {day3 : false},
                    {weekend : false},
                    {daily : false}
                    ];
                     function adddays() {
                        if($scope.daysPerWeek.day1) $scope.tutionobj.daysPerWeek = "1 day"
                            if($scope.daysPerWeek.day2)$scope.tutionobj.daysPerWeek = $scope.tutionobj.daysPerWeek + " 2 days"
                            if($scope.daysPerWeek.day3)$scope.tutionobj.daysPerWeek = $scope.tutionobj.daysPerWeek + " 3 days"
                            if($scope.daysPerWeek.weekend)$scope.tutionobj.daysPerWeek = $scope.tutionobj.daysPerWeek + " Weekends"
                            if($scope.daysPerWeek.daily)$scope.tutionobj.daysPerWeek = $scope.tutionobj.daysPerWeek + " Daily"
                        console.log($scope.tutionobj.daysPerWeek + "boards")
                    }
                     $scope.getlocalityInfo = function (city) {
                        addServiceService.getlocalityInfo(city,$scope.providerId).then(function (response) {
                            // console.log("locality response " + response.data.address)
                            $scope.pindirec = response.data.address;
                        })
                    }             
                    $scope.pinchange = function (pin,locality) {
                        $scope.tutionobj.pincode = pin;
                        $scope.tutionobj.locality = locality;
                        console.log("selected pin " +  $scope.tutionobj.pincode)
                        console.log("selected pin " +  $scope.tutionobj.locality)

                    }
                    
                    $scope.ageGroup = {
                        to1_3 : false,
                        to3_5 : false,
                        to5_8 : false
                    }
                    $scope.classLocation = {
                        kid_home : false,
                        teacher_home : false,
                        at_instu : false
                    }
                    
                    $scope.tutionobj = {
                        startClassRange: "",
                        endClassRange: "",
                        boards: "",
                        phoneNumber: "",
                        schools: "",
                        daysPerWeek: "",
                        startHour: "",
                        endHour: "",
                        facilities: "",
                        specialities: "",
                        pincode: "",
                        fees: "",
                        address: "",
                        locality: "",
                        classLocation: "",
                        streetAddress: "",
                        subject: "",
                        instituteName: "",daysPerWeek :""
                    }
                    
                    $scope.addtution = function() {
                        // console.log("age group " + $scope.ageGroup.to1_3)
                        if($scope.ageGroup.to1_3 && $scope.ageGroup.to3_5 && $scope.ageGroup.to5_8)
                            {$scope.tutionobj.startClassRange = 1; $scope.tutionobj.endClassRange = 8}
                        else if($scope.ageGroup.to1_3 && $scope.ageGroup.to3_5)
                            {$scope.tutionobj.startClassRange = 1; $scope.tutionobj.endClassRange = 5}
                        else if($scope.ageGroup.to3_5 && $scope.ageGroup.to5_8)
                            {$scope.tutionobj.startClassRange = 3; $scope.tutionobj.endClassRange = 8}
                        else if($scope.ageGroup.to1_3 && $scope.ageGroup.to5_8)
                            {$scope.tutionobj.startClassRange = 1; $scope.tutionobj.endClassRange = 8}
                        else if($scope.ageGroup.to1_3)
                            {$scope.tutionobj.startClassRange = 1; $scope.tutionobj.endClassRange = 3}
                        else if($scope.ageGroup.to3_5)
                            {$scope.tutionobj.startClassRange = 3; $scope.tutionobj.endClassRange = 5}
                        else if($scope.ageGroup.to5_8)
                            {$scope.tutionobj.startClassRange = 5; $scope.tutionobj.endClassRange = 8}
                        else
                            {$scope.tutionobj.startClassRange = 1; $scope.tutionobj.endClassRange = 8}

                        if($scope.classLocation.kid_home && $scope.classLocation.teacher_home && $scope.classLocation.at_instu)
                            {$scope.tutionobj.classLocation = "At Institute/Coaching, At Teacher Home, At Kid Home"}
                        else if($scope.classLocation.kid_home && $scope.classLocation.teacher_home)
                            {$scope.tutionobj.classLocation = "At Teacher Home, At Kid Home"}
                        else if($scope.classLocation.teacher_home && $scope.classLocation.at_instu)
                            {$scope.tutionobj.classLocation = "At Institute/Coaching, At Teacher Home"}
                        else if($scope.classLocation.kid_home && $scope.classLocation.at_instu)
                            {$scope.tutionobj.classLocation = "At Institute/Coaching, At Kid Home"}
                        else if($scope.classLocation.kid_home)
                            {$scope.tutionobj.classLocation = "At Kid Home"}
                        else if($scope.classLocation.teacher_home)
                            {$scope.tutionobj.classLocation = "At Teacher Home"}
                        else if($scope.classLocation.at_instu)
                            {$scope.tutionobj.classLocation = "At Institute/Coaching"}
                        else
                            {$scope.tutionobj.classLocation = "At Institute/Coaching, At Teacher Home, At Kid Home"}
                            addboard();adddays();
                        addServiceService.addtutionService($scope.tutionobj,$scope.providerId).then(function(response) {
                            $window.alert(response.data.status.title)
                            // console.log("tution service added" + response.data.status.title);
                            if(response.data.status.statusCode != 404 || response.data.status.statusCode != 500)
                             {
                            $scope.tutionobj = {
                        startClassRange: "",
                        endClassRange: "",
                        boards: "",
                        phoneNumber: "",
                        schools: "",
                        daysPerWeek: "",
                        startHour: "",
                        endHour: "",
                        facilities: "",
                        specialities: "",
                        pincode: "",
                        fees: "",
                        address: "",
                        locality: "",
                        classLocation: "",
                        streetAddress: "",
                        subject: "",
                        instituteName: "",daysPerWeek :""
                    }}
                            // console.log("tution service added");
                        })
                    }
                    $scope.getProfile = function() {
                        console.log("getting profile data")
                        addServiceService.getProfile($scope.providerId).then(function(response) {
                            // console.log("profile " +  response.data.providerProfile[0].providerName);
                            // for(x in response.data.providerProfile){console.log("provider name " + x.providerName)}
                        })
                    }

                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        console.log("value " + $scope.tutionobj.subject);
                    }
                }
            }

        }
    ])
}(SG.Directives = SG.Directives || {}));
(function (Controllers, undefined)
{   
       function sanitize($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
}
function sanitizeimg($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(String(htmlCode).replace(/<img[^>]+\>/gm, ''));
  }
}

	SG.Modules.SG.controller("eventsController",eventsController);
      SG.Modules.SG.filter("sanitize",sanitize);
      SG.Modules.SG.filter("sanitizeimg",sanitizeimg);
    // MainCtrl.$inject = ['healthAZModuleData'];
	function eventsController ($scope, $http,$window,eventsService)
		{  
                  $scope.eventSearch = "";
                  $scope.getEvents = function () {
                              eventsService.getEvents().then(function (response) {
                                    // console.log("response  " + response.data.events)
                                    $scope.event = response.data.events;
                                    $scope.firstEvent = $scope.event[0];
                              })                        
                  }
                  $scope.getDetail = function (event) {
                        $scope.details = event;
                  }


   }
	

}(SG.Controllers = SG.Controllers || {} ));


(function (Service, undefined)
{
function eventsService($http,$log)
    {
       var obj = {};
        var eventUrl = 'https://developer.eventshigh.com/events/bangalore?key=ev3nt5h1ghte5tK3y';

        obj.getEvents = function () {
          return $http.get(eventUrl);
        }
 return obj;
}
	SG.Modules.SG.service("eventsService",eventsService);

}(SG.Service = SG.Service || {} ));
