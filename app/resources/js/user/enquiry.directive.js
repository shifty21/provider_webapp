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