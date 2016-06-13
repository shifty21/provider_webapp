(function (Directives, undefined)
{
	SG.Modules.SG.directive("registerDiv", [ 
		function ()
	{
		return {
			restrict: 'E',
			scope:{},
			templateUrl : 'partials/loginState/registerDiv.html',
			controller: 'loginController'
		}

	}])
}(SG.Directives = SG.Directives || {} ));