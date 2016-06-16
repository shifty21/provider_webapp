
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
