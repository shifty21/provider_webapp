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