
(function (Service, undefined)
{
function userService($http,$log)
    {
       var obj = {};
        var registerUrl = SG.ServerUrl + 'providerRegistration';
        var loginUrl = SG.ServerUrl + 'providerLogin';
        var profile = 'http://144.76.237.246:6060/superkids/r1/providerProfile/1a6f54af-41a1-441d-a835-9cbbe914095b';
        var getConnectUrl = SG.ServerUrl + 'connectRequest/';
        var connectedUrl = SG.ServerUrl + 'connectRequest/';
        // var getConnectUrl = 'http://144.76.237.246:6060/superkids/r1/connectRequest/1a6f54af-41a1-441d-a835-9cbbe914095b?sender=provider';
      obj.getConnectData = function (providerId) {
           // console.log("getting Connect Request")
           // console.log("providerid " + providerId)
        // return  $http.get(getConnectUrl)
        return  $http.get(getConnectUrl + providerId+"?sender=provider")

      } 
       obj.connected = function (providerid,connectRequestid) {

        return  $http.get(connectedUrl +providerid+"?sender=provider&connectRequestId="+connectRequestid);   

      }   
      obj.getProfile = function () {
           // console.log(profile)
        return  $http.get(profile)

      }      
      obj.registerUser = function (registerData) {
        return  $http.post(registerUrl,registerData,{headers: {
                        'Content-Type': 'text/plain'
                    }}).success(function(response) {
                    $log.info('SUCCESS' + response.status.title);
                })
                .error(function() {
                    $log.info('FAILURE');
                });       
      }
      obj.loginUser = function (loginData) {
        return  $http.post(loginUrl,loginData,{headers: {
                        'Content-Type': 'text/plain'
                    }})   
      }

 return obj;
}
	SG.Modules.SG.service("userService",userService);

}(SG.Service = SG.Service || {} ));
