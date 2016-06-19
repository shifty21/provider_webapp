
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
