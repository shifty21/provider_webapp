(function (Controllers, undefined)
{   
	SG.Modules.SG.controller("userController",userController);
    // MainCtrl.$inject = ['healthAZModuleData'];
	function userController ($scope, $http,$window,$templateCache)
		{	$scope.idvalue = ""
			$scope.idva = function(){
			console.log("value " + $scope.idvalue);
		}
            console.log("User Controller");
            $scope.enquires = [
            {name:"samuel L",contact:"+9134243434324",service:"Day Care",location:"BEML",date:"25 May 2016",readStatus:false},
            {name:"jack reacher",contact:"+9134243434324",service:"Sports",location:"Kundalahalli",date:"25 May 2016",readStatus:true},
            {name:"Captain",contact:"+9134243434324",service:"Yoga",location:"Thubarahalli",date:"25 May 2016",readStatus:true},
            {name:"ryan G",contact:"+9134243434324",service:"Gym",location:"Marathalli",date:"25 May 2016",readStatus:true}
            ]
            
   }
	

}(SG.Controllers = SG.Controllers || {} ));
