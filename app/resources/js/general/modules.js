(function (Modules, undefined)
{
	/**
	 * @ngdoc function 
	 * @name SG
	 * @id SG
	 * @description
	 * @Author Yateender Khedar
	 * Set up our SG website parameters for AngularJS.
	**/
	Modules.SG = angular.module("sg", ['ngRoute','ui.router','angularUtils.directives.dirPagination','angularUtils.directives.dirDisqus','inputDropdown']);

}(SG.Modules = SG.Modules || {} ));