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
