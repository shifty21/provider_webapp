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