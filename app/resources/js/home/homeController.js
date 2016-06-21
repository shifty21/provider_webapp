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
