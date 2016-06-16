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
