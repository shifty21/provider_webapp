(function (Directives, undefined)
{
	SG.Modules.SG.directive("portfolioSection", [ 
		function ()
	{
		return {
			restrict: 'E',
			templateUrl : 'partials/home/portfolioSection.html'
		}

	}])
}(SG.Directives = SG.Directives || {} ));