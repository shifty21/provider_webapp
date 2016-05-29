(function (Directives, undefined)
{
	SG.Modules.SG.directive("navBar", [ 
		function ()
	{
		return {
			restrict: 'E',
			templateUrl : 'partials/general/navBar.html'
		}

	}])
}(SG.Directives = SG.Directives || {} ));