(function (Directives, undefined)
{
	SG.Modules.SG.directive("loginDiv", [ 
		function ()
	{
		return {
			restrict: 'E',
			scope:{},
			templateUrl : 'partials/loginState/loginDiv.html',
			controller: 'loginController'
		}

	}])
}(SG.Directives = SG.Directives || {} ));