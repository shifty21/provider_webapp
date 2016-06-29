(function (Controllers, undefined)
{   
	SG.Modules.SG.controller("loginController",loginController);
    // MainCtrl.$inject = ['healthAZModuleData'];
	function loginController ($scope, $http,$window,$templateCache,loginService,$state,$rootScope,userService)
		{
            // console.log("Login Controller");
            $scope.registerData = {fullName:"",phoneNumber:"",emailAddress:"",
            password:"",osVersion:"",deviceModel:""};
            $scope.login = {emailAddress:"",password:""}
            $scope.registerUser = function () {
                userService.registerUser($scope.registerData).then(function(response){
                    if(response.data.status.statusCode != 200)
                        {
                            // console.log("invalid username or pass" + response.data.status.statusCode)
                            // console.log("invalid username or pass" + response.data.status.title)
                        $window.alert(response.data.status.title)
                    }
                    else
                     {
                        $window.alert(response.data.status.title)
                        $state.go("login")
                    }
                        
                })
            }
            $scope.emailId = "";
            $scope.forgotPass = function () {
                userService.forgotPass($scope.emailId).then(function (response) {
                    $window.alert(response.data.status.title)
                    // console.log("response for forgot pass " +response.data.status.statusCode )
                })
            }
            $scope.loginUser = function () {
                userService.loginUser($scope.login).then(function(response){
                    if(response.data.status.statusCode == 403)
                        {
                            // console.log("invalid username or pass" + response.data.status.statusCode)
                            // console.log("invalid username or pass" + response.data.status.title)
                        $window.alert("Invalid UserName or Password")
                    }
                    else{
                        // console.log("loggedin" + response.data.provider.id);
                    loginService.setProviderId(response.data.provider.id);
                    loginService.setUserName(response.data.provider.name);
                    // console.log("provider name " + response.data.provider.name)
                    $rootScope.username = loginService.getUserName();
                    // console.log("provider name" + $rootScope.username);
                    $state.go("userprofile");
                    $rootScope.loggedIn = true;}
                })
            	
            }

            
   }
	

}(SG.Controllers = SG.Controllers || {} ));
