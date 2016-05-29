(function (Directives, undefined)
{
	SG.Modules.SG.directive("footerSection", [ 
		function ()
	{
		return {
			restrict: 'E',
			templateUrl : 'partials/home/footerSection.html'
		}

	}])
}(SG.Directives = SG.Directives || {} ));