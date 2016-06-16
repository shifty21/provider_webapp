(function (SG, undefined)
{
	/**
	 * @ngdoc function 
	 * @name SG
	 * @id SG
	 * @description
	 * 
	 * Set up our SG website parameters for AngularJS.
	**/
	SG.Version 		= "0.0.0";
	SG.PartialsPath 	= "partials/";
	SG.ServerUrl 	= 'http://144.76.237.246:6060/superkids/r1/';
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
	 * @ngdoc object
	 * @id SG
	 * @name SG
	 * @description
	 *
	 * This Module initializes the SG Angular module.
	**/
	Modules.SG = angular.module("sg", ['ngRoute','ui.router','angularUtils.directives.dirPagination']);

}(SG.Modules = SG.Modules || {} ));
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
        var eductionqa = toState.name === "eductionqa";
        var healthqueqa = toState.name === "healthqueqa";
        var eventqa = toState.name === "eventqa";
        var sportsqa = toState.name === "sportsqa";
        var celebrationqa = toState.name === "celebrationqa";
        var terms_of_use = toState.name === "terms_policy";
        if(isLogin || home || register || eductionqa || terms_of_use || healthqueqa || eventqa || sportsqa || celebrationqa){
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
                              $log.info("not loggedId")
                        $rootScope.loggedIn =  false;
                  }
                  else{
                      $rootScope.loggedIn =  true;  
                  }
                  
            }
            $scope.PAGE_URL = $location.absUrl();
            $rootScope.username = loginService.getUserName();
                  $scope.logout = function (argument) {
                        loginService.clearProviderId();
                        $log.info(loginService.getProviderId())
                        $rootScope.loggedIn = false;
                        $state.go("homestate");
                        
                  }
            //       $scope.loginUser = function () {
            //       console.log("login in")
            //       loginService.setProviderId("logedIn")
            //       $state.go("userprofile");
            //       $rootScope.loggedIn = true;
            // }
            
            console.log("HOme Controller");
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
            $scope.socialService = [{name:"Recipes",image:"resources/images/icons/ic_recipe.png"},
            {name:"Stories",image:"resources/images/icons/ic_stories.png"},
            {name:"Q&A",image:"resources/images/icons/ic_qa.png"}
            ];
            $scope.blogs = [
            {name:"Dew Drop",image:"resources/images/portfolio/item-1.jpg",detail:"Caramel Bottle"},
            {name:"Bottle Mockup",image:"resources/images/portfolio/item-2.jpg",detail:"Caramel Bottle"},
            {name:"Table Design",image:"resources/images/portfolio/item-3.jpg",detail:"Caramel Bottle"},
            ]
            $scope.stories = [
            {name:"Dew Drop",image:"resources/images/portfolio/item-1.jpg",detail:"Caramel Bottle"},
            {name:"Bottle Mockup",image:"resources/images/portfolio/item-2.jpg",detail:"Caramel Bottle"},
            {name:"Caramel Bottle",image:"resources/images/portfolio/item-6.jpg",detail:"Caramel Bottle"}
            ]
            $scope.recipes = [
            {name:"Dew Drop",image:"resources/images/portfolio/item-1.jpg",detail:"Caramel Bottle"},
            {name:"Bottle Mockup",image:"resources/images/portfolio/item-2.jpg",detail:"Caramel Bottle"},
            {name:"Caramel Bottle",image:"resources/images/portfolio/item-6.jpg",detail:"Caramel Bottle"}
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

            $scope.PAGE_URL = window.location.href;
            console.log("quesandansController")
          $scope.disqusConfig = {
    disqus_shortname: 'smartgrowthforkids',
    disqus_identifier: 'health',disqus_title: 'health',
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
            console.log("Login Controller");
            $scope.registerData = {fullName:"",phoneNumber:"",emailAddress:"abc@gmail.com",
            password:"",osVersion:"",deviceModel:""};
            $scope.login = {emailAddress:"",password:""}
            $scope.registerUser = function () {
                userService.registerUser($scope.registerData).then(function(){
                })
            }
            $scope.loginUser = function () {
                userService.loginUser($scope.login).then(function(response){
                    if(response.data.status.statusCode == 403)
                        {
                            console.log("invalid username or pass" + response.data.status.statusCode)
                            console.log("invalid username or pass" + response.data.status.title)
                        $window.alert("Invalid UserName or Password")
                    }
                    else{
                        console.log("loggedin")
                    loginService.setProviderId("logedIn");
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
     $window.localStorage[loggedIn] = true;
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
        var profile = 'http://144.76.237.246:6060/superkids/r1/providerProfile/1a6f54af-41a1-441d-a835-9cbbe914095b';
        var getConnectUrl = SG.ServerUrl + 'connectRequest/';
        var connectedUrl = SG.ServerUrl + 'connectRequest/';
        // var getConnectUrl = 'http://144.76.237.246:6060/superkids/r1/connectRequest/1a6f54af-41a1-441d-a835-9cbbe914095b?sender=provider';
      obj.getConnectData = function (providerId) {
           // console.log("getting Connect Request")
           // console.log("providerid " + providerId)
        // return  $http.get(getConnectUrl)
        return  $http.get(getConnectUrl + providerId+"?sender=provider")

      } 
       obj.connected = function (providerid,connectRequestid) {

        return  $http.get(connectedUrl +providerid+"?sender=provider&connectRequestId="+connectRequestid);   

      }   
      obj.getProfile = function () {
           // console.log(profile)
        return  $http.get(profile)

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
			controller : function($scope, userService,$log){
				$scope.getConnectData = function () {
					var providerId = 'af6d5d84-278f-42fb-8b2f-b06b2e12b8f8';
					userService.getConnectData(providerId).then(function (response) {
						$scope.connectRequests = response.data.connectRequest;
                 		$log.info("connect Request " + response.data.connectRequest)
                 	})
				}
				$scope.connected = function (connectRequestid) {
					var providerId = 'af6d5d84-278f-42fb-8b2f-b06b2e12b8f8';
					
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
			controller: function($scope, userService,$log) {
                               $scope.detailDiv =false;
                        $scope.getProfile = function (argument) {
                 	userService.getProfile().then(function (response) {
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
                 		$log.info("user profile " + $scope.profileschool[0].providerName)
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
        var tutionUrl = SG.ServerUrl + 'tuition/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8';
        var trainingUrl = SG.ServerUrl + 'training/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8';
        var kidcareUrl = SG.ServerUrl + "dayCare/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var schoolUrl = SG.ServerUrl + "school/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var healthUrl = SG.ServerUrl + "health/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var eventUrl = SG.ServerUrl + "event/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var sportUrl = SG.ServerUrl + "sport/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var birthdayUrl = SG.ServerUrl + "celebration/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        
        obj.addtutionService = function (tutiondata) {
        return  $http.post(tutionUrl,tutiondata,{
                    headers: {
                        "Content-Type": "text/plain"
}})      
      }
     
        obj.addtrainingService = function (trainingdata) {
           
        return  $http.post(trainingUrl,trainingdata,{
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
        obj.addkidcareService = function (kidcaredata) {
           
        return  $http.post(kidcareUrl,kidcaredata,{
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
        obj.addschoolService = function (schooldata) {
           
        return  $http.post(schoolUrl,schooldata,{
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
        obj.addhealthService = function (healthdata) {
           
        return  $http.post(healthUrl,healthdata,{
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
        obj.addeventService = function (eventdata) {
           
        return  $http.post(eventUrl,eventdata,{
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
        obj.addsportService = function (sportdata) {
           
        return  $http.post(sportUrl,sportdata,{
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
        obj.addbirthdayService = function (birthdaydata) {
           
        return  $http.post(birthdayUrl,birthdaydata,{
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
                controller: function($scope, addServiceService) {
                    console.info("Enter Training tab directive controller");
                    $scope.type = ["Kids Celebration",
                        "Catering",
                        "Cakes"
                    ];
                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        console.log("value " + $scope.celebration.type)
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
                        addServiceService.addbirthdayService($scope.celebration).then(function(response) {
                            console.log("birtrhday service added");
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
                controller: function($scope, addServiceService) {
                    console.info("Enter Event tab directive controller");
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
                        streetAddress: ""
                    }
                    $scope.addevent = function() {
                        addServiceService.addeventService($scope.eventobj).then(function(response) {
                            console.log("event service added");
                        })
                    }

                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        console.log("value " + $scope.selected)
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
                controller: function($scope, addServiceService) {
                    console.info("Enter Training tab directive controller");
                    $scope.serviceName = ["Fitness Trainer",
                        "Child Specialist",
                        "Child Counsellor",
                        "Ditesian and Nutrision"
                    ];

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
                        addServiceService.addhealthService($scope.healthobj).then(function(response) {
                            console.log("health service added");
                        })
                    }


                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        console.log("value " + $scope.selected)
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
                controller: function($scope, addServiceService) {
                    console.info("Enter Kid tab directive controller");
                    $scope.name = [
                        "Day Care Center"
                    ];
                    $scope.ageGroup = {
                        to1_3 : false,
                        to3_5 : false,
                        to5_8 : false
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
                        name: ""
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
                        console.log("startClassRange " + $scope.kidcareobj.minAge)
                        console.log("startClassRange " + $scope.kidcareobj.maxAge)
                        addServiceService.addkidcareService($scope.kidcareobj).then(function(response) {
                            console.log("kidcare service added");
                        })
                    }
                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        console.log("value " + $scope.selected)
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
                controller: function($scope, addServiceService) {
                    console.info("Enter Training tab directive controller");
                    $scope.type = ["K-8 Schools - CBSE, ICSE , Other",
                        "MONTESSORI SCHOOLS",
                        "Play School"
                    ];
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
                        streetAddress: ""
                    }
                    $scope.addschoolservice = function() {
                        addServiceService.addschoolService($scope.schoolobj).then(function(response) {
                            console.log("school service added");
                        })
                    }
                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        console.log("value " + $scope.selected)
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
                controller: function($scope, addServiceService) {
                    console.info("enter sport tab directive controller");
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
                        addServiceService.addsportService($scope.sportobj).then(function(response) {
                            console.log("sport service added");
                        })
                    }
                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        console.log("value " + $scope.selected)
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
                controller: function($scope, addServiceService) {
                    console.info("Enter Training tab directive controller");
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
                        instituteName: ""
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

                        console.log("startClassRange " + $scope.trainingobj.minAge)
                        console.log("startClassRange " + $scope.trainingobj.maxAge)
                        console.log("startClassRange " + $scope.trainingobj.classLocation)
                        addServiceService.addtrainingService($scope.trainingobj).then(function(response) {
                            console.log("training service added");
                        })
                    }
                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        console.log("value " + $scope.trainingobj.daysPerWeek)
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
                controller: function($scope, addServiceService) {
                    console.info("Enter Training tab directive controller");
                    $scope.subject = ["All Subject",
                        "FOREIGN LANGUAGES",
                        "INDIAN LANGUAGES",
                        "MATHS",
                        "SCIENCE",
                        "English"
                    ];
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
                        subjects: "",
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
                        classLocation: "",
                        streetAddress: "",
                        subject: "",
                        instituteName: ""
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

                        addServiceService.addtutionService($scope.tutionobj).then(function(response) {
                            
                            console.log("tution service added" + response.data.status.title);
                            console.log("tution service added");
                        })
                    }
                    $scope.getProfile = function() {
                        console.log("getting profile data")
                        addServiceService.getProfile().then(function(response) {
                            // console.log("profile " +  response.data.providerProfile[0].providerName);
                            for(x in response.data.providerProfile){console.log("provider name " + x.providerName)}
                        })
                    }

                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        console.log("value " + $scope.tutionobj.subjects)
                    }
                }
            }

        }
    ])
}(SG.Directives = SG.Directives || {}));