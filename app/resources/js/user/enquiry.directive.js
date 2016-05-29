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