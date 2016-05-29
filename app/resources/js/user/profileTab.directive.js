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