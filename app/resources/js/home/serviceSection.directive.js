(function (Directives, undefined)
{
	SG.Modules.SG.directive("serviceSection", [ 
		function ()
	{
		return {
			restrict: 'E',
			templateUrl : 'partials/home/serviceSection.html'
		}

	}])
}(SG.Directives = SG.Directives || {} ));