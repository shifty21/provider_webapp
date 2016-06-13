(function (Controllers, undefined)
{   
	SG.Modules.SG.controller("userController",userController);
    // MainCtrl.$inject = ['healthAZModuleData'];
	function userController ($scope, $http,$window,$templateCache,$log)
		{	

//             $scope.setActiveTab = function( activeTab ){
//                 console.log("active tab " + activeTab);
//     $window.localStorage.setItem("activeTab", activeTab);
// };

// $scope.getActiveTab = function(){
//     return $window.localStorage.getItem("activeTab");
// };

// $scope.isActiveTab = function( tabName, index ){
//     var activeTab = $scope.getActiveTab();
//     return ( activeTab === tabName || ( activeTab === null && $index === 0 ) );
// };
            $scope.idvalue = ""
			$scope.idva = function(){
			$log.info("value " + $scope.idvalue);
		}
            $log.info("User Controller");
                        
   }
	

}(SG.Controllers = SG.Controllers || {} ));
