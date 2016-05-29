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
	function homeController ($scope, $http,$window,$templateCache)
		{
            console.log("HOme Controller");
            $scope.service = [
            {name:"Tuition",image:"resources/images/icons/ic_teacher.png"},
            {name:"Trainer",image:"resources/images/icons/ic_trainer.png"},
            {name:"DayCare",image:"resources/images/icons/ic_daycare.png"},
            {name:"Health",image:"resources/images/icons/ic_health.png"},
            {name:"School",image:"resources/images/icons/ic_school.png"},
            {name:"Sports",image:"resources/images/icons/ic_sports.png"},
            {name:"Events",image:"resources/images/icons/ic_events.png"},
            {name:"BirthDay",image:"resources/images/icons/ic_birthday.png"},
            {name:"Recipes",image:"resources/images/icons/ic_recipe.png"}
            ]
            $scope.socialService = [
            {name:"Stories",image:"resources/images/icons/ic_stories.png"},
            {name:"Q&A",image:"resources/images/icons/ic_qa.png"}
            ];
            $scope.portfolio = [
            {name:"Dew Drop",image:"resources/images/portfolio/item-1.jpg",detail:"Caramel Bottle"},
            {name:"Bottle Mockup",image:"resources/images/portfolio/item-2.jpg",detail:"Caramel Bottle"},
            {name:"Table Design",image:"resources/images/portfolio/item-3.jpg",detail:"Caramel Bottle"},
            {name:"Make Up elements",image:"resources/images/portfolio/item-4.jpg",detail:"Caramel Bottle"},
            {name:"Shoping Bag Concept",image:"resources/images/portfolio/item-5.jpg",detail:"Caramel Bottle"},
            {name:"Caramel Bottle",image:"resources/images/portfolio/item-6.jpg",detail:"Caramel Bottle"},
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
	function loginController ($scope, $http,$window,$templateCache)
		{
            console.log("Login Controller");
            
   }
	

}(SG.Controllers = SG.Controllers || {} ));

(function (Directives, undefined)
{
	SG.Modules.SG.directive("enquiryTab", [ 
		function ()
	{
		return {
			restrict: 'E',
			templateUrl : 'partials/user/enquiryTab.html'
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
			templateUrl : 'partials/user/profileTab.html'
		}

	}])
}(SG.Directives = SG.Directives || {} ));
(function (Controllers, undefined)
{   
	SG.Modules.SG.controller("userController",userController);
    // MainCtrl.$inject = ['healthAZModuleData'];
	function userController ($scope, $http,$window,$templateCache)
		{	$scope.idvalue = ""
			$scope.idva = function(){
			console.log("value " + $scope.idvalue);
		}
            console.log("User Controller");
            $scope.enquires = [
            {name:"samuel L",contact:"+9134243434324",service:"Day Care",location:"BEML",date:"25 May 2016",readStatus:false},
            {name:"jack reacher",contact:"+9134243434324",service:"Sports",location:"Kundalahalli",date:"25 May 2016",readStatus:true},
            {name:"Captain",contact:"+9134243434324",service:"Yoga",location:"Thubarahalli",date:"25 May 2016",readStatus:true},
            {name:"ryan G",contact:"+9134243434324",service:"Gym",location:"Marathalli",date:"25 May 2016",readStatus:true}
            ]
            
   }
	

}(SG.Controllers = SG.Controllers || {} ));


(function (Service, undefined)
{
function addServiceService($http)
    {
       var obj = {};
        var tutionUrl = SG.ServerUrl + 'tution/1a6f54af-41a1-441d-a835-9cbbe914095b';
        var trainingUrl = SG.ServerUrl + 'training/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8';
        var kidcareUrl = SG.ServerUrl + "dayCare/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var schoolUrl = SG.ServerUrl + "school/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var healthUrl = SG.ServerUrl + "health/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var eventUrl = SG.ServerUrl + "event/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var sportUrl = SG.ServerUrl + "sport/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var birthdayUrl = SG.ServerUrl + "celebration/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var profile = 'http://144.76.237.246:6060/superkids/r1/providerProfile/1a6f54af-41a1-441d-a835-9cbbe914095b';
        obj.addtutionService = function (tutiondata) {
           console.log(tutionUrl + " pincode " + tutiondata.pincode)
        return  $http.post('http://144.76.237.246:6060/superkids/r1/tuition/1a6f54af-41a1-441d-a835-9cbbe914095b',{"address":"Hdhfb","boards":"CBSE ICSE International Board ","classLocation":"At Kid Home,At Teacher\u0027s home","daysPerWeek":"One Two ","endClassRange":"8","endHour":"1:39 PM","facilities":"Hdhf","fees":"5000","instituteName":"Ndd","phoneNumber":"8553219740","pincode":560100,"providerId":"1a6f54af-41a1-441d-a835-9cbbe914095b","schools":"Bdjd","specialities":"Hdhf","startClassRange":"0","startHour":"1:39 AM","streetAddress":"Hdhfb","subject":"ALL SUBJECTS"},{headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }}).success(function(response) {
                    console.log('SUCCESS' + response.status.title);
                })
                .error(function() {
                    console.log('FAILURE');
                });       
      }
      obj.getProfile = function () {
           console.log(profile)
        return  $http.get(profile)
      }
        obj.addtrainingService = function (trainingdata) {
           
        return  $http.post(trainingUrl,trainingdata,{
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                }).success(function() {
                    console.log('SUCCESS');
                })
                .error(function() {
                    console.log('FAILURE');
                });       
      }
        obj.addkidcareService = function (kidcaredata) {
           
        return  $http.post(kidcareUrl,kidcaredata,{
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
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
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
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
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
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
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
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
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
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
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
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
    SG.Modules.SG.directive("birthdayTab", [
        function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'partials/services/birthdayTab.html',
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
                        name: "planner/cakeShop/catererName",
                        type: "type of products",
                        timings: "10 to 9",
                        facilities: "any provided facilities",
                        specialities: "any special things",
                        phoneNumber: "7898789878",
                        webLink: "www.mycatering.com",
                        services: "breakfast,lunch,dinner",
                        pincode: "560100",
                        priceRange: "1000-5000",
                        streetAddress: "HSR LAYOUT"
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
                    $scope.eventobj = {
                        eventName: "science exhibition",
                        category: "camps",
                        startDate: "09102015",
                        endDate: "30092015",
                        facilities: "any provided facilities",
                        specialities: "any special things",
                        timings: "10:00AM to 5:00PM",
                        pincode: "560100",
                        contactPhone: "9019816937",
                        contactEmail: "pritamkray@gmail.com",
                        contactPersonName: "pritam kumar",
                        webLink: "web.summercamp.com",
                        streetAddress: "7/10.9th main,12th Street"
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
                        name: "doctor/clinic name",
                        serviceName: "child specialist",
                        timings: "10 to 6",
                        facilities: "special attention to each individual",
                        specialities: "special things",
                        phoneNumber: "7898789878",
                        pincode: "560100",
                        fees: "5000",
                        address: "19th main,5th cross",
                        streetAddress: "HSR LAYOUT"
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
                    $scope.kidcareobj = {
                        minAge: "3",
                        maxAge: "8",
                        timings: "10 to 6",
                        facilities: "special attention to each individual",
                        specialities: "specialized in training kids",
                        phoneNumber: "7898789878",
                        pincode: "560100",
                        fees: "5000",
                        address: "19th main,5th cross",
                        streetAddress: "HSR LAYOUT",
                        name: "Day care"
                    }

                    $scope.addkidcareservice = function() {
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
                        name: "school name",
                        type: "play school",
                        timings: "10 to 6",
                        facilities: "special attention to each individual",
                        specialities: "special things",
                        phoneNumber: "7898789878",
                        pincode: "560100",
                        fees: "5000",
                        address: "19th main,5th cross",
                        streetAddress: "HSR LAYOUT"
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
                        name: "academy/trainerName",
                        type: "chess academy",
                        timings: "10 to 6",
                        facilities: "special attention to each individual",
                        specialities: "special things",
                        phoneNumber: "7898789878",
                        pincode: "560100",
                        fees: "5000",
                        address: "19th main,5th cross",
                        streetAddress: "HSR LAYOUT"
                    }
                    $scope.addschoolservice = function() {
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

                    $scope.trainingobj = {
                        minAge: "3",
                        maxAge: "8",
                        subject: "guitar",
                        schoolNames: "all",
                        daysPerWeek: "5",
                        timings: "10 to 6",
                        facilities: "special attention to each individual",
                        specialities: "specialized guitar",
                        phoneNumber: "7898789878",
                        pincode: "560100",
                        fees: "5000",
                        address: "19th main,5th cross",
                        classLocation: "Institute,kids home,yahan bhi,wahan bhi",
                        streetAddress: "HSR LAYOUT",
                        instituteName: "Coaching center"
                    }
                    $scope.addtrainingService = function() {
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
                    $scope.tutionobj = {
                        startClassRange: "3",
                        endClassRange: "8",
                        subjects: "maths tuition",
                        boards: "cbse",
                        phoneNumber: "9019816937",
                        schools: "all",
                        daysPerWeek: "5",
                        startHour: "10",
                        endHour: "5",
                        facilities: "special attention to each individual",
                        specialities: "specialized in science and maths",
                        pincode: 560066,
                        fees: "5000",
                        address: "19th main,5th cross",
                        classLocation: "Institute,kids home,yahan bhi,wahan bhi",
                        streetAddress: "HSR LAYOUT",
                        subject: "maths",
                        instituteName: "Add schools name"
                    }
                    $scope.addtution = function() {
                        addServiceService.addtutionService($scope.tutionobj).then(function(response) {
                            console.log("tution service added");
                        })
                    }
                    $scope.getProfile = function() {
                        console.log("getting profile data")
                        addServiceService.getProfile().then(function(response) {
                            console.log("profile " +  response);
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