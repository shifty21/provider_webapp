(function (Modules, undefined)
{
	/**
	 * @ngdoc object
	 * @id SG
	 * @name SG
	 * @description
	 *
	 * This Module initializes the SG Angular module.
	**/
	Modules.SG = angular.module("sg", ['ngRoute','ui.router','angularUtils.directives.dirPagination','angularUtils.directives.dirDisqus']);

}(SG.Modules = SG.Modules || {} ));