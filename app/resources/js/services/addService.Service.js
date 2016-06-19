
(function (Service, undefined)
{
function addServiceService($http)
    {
       var obj = {};
        var tutionUrl = SG.ServerUrl + 'tuition/';
        var trainingUrl = SG.ServerUrl + 'training/';
        var kidcareUrl = SG.ServerUrl + "dayCare/";
        var schoolUrl = SG.ServerUrl + "school/";
        var healthUrl = SG.ServerUrl + "health/";
        var eventUrl = SG.ServerUrl + "event/";
        var sportUrl = SG.ServerUrl + "sport/";
        var birthdayUrl = SG.ServerUrl + "celebration/";
        
        obj.addtutionService = function (tutiondata,providerId) {
            console.log("providerid " + providerId);
        return  $http.post(tutionUrl + providerId,tutiondata,{
                    headers: {
                        "Content-Type": "text/plain"
}})      
      }
     
        obj.addtrainingService = function (trainingdata,providerId) {
           console.log("providerid " + providerId);
        return  $http.post(trainingUrl +providerId,trainingdata,{
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).success(function(response) {
                    console.log('SUCCESS' + response.status.title);
                })
                .error(function() {
                    console.log('FAILURE');
                });       
      }
        obj.addkidcareService = function (kidcaredata,providerId) {
           console.log("providerid " + providerId);
        return  $http.post(kidcareUrl + providerId,kidcaredata,{
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).success(function() {
                    console.log('SUCCESS');
                })
                .error(function() {
                    console.log('FAILURE');
                });       
      }
        obj.addschoolService = function (schooldata,providerId) {
           console.log("providerid " + providerId);
        return  $http.post(schoolUrl + providerId,schooldata,{
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).success(function() {
                    console.log('SUCCESS');
                })
                .error(function() {
                    console.log('FAILURE');
                });       
      }
        obj.addhealthService = function (healthdata,providerId) {
           console.log("providerid " + providerId);
        return  $http.post(healthUrl + providerId,healthdata,{
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).success(function() {
                    console.log('SUCCESS');
                })
                .error(function() {
                    console.log('FAILURE');
                });       
      }
        obj.addeventService = function (eventdata,providerId) {
           console.log("providerid " + providerId);
        return  $http.post(eventUrl + providerId,eventdata,{
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).success(function() {
                    console.log('SUCCESS');
                })
                .error(function() {
                    console.log('FAILURE');
                });       
      }
        obj.addsportService = function (sportdata,providerId) {
           console.log("providerid " + providerId);
        return  $http.post(sportUrl + providerId,sportdata,{
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).success(function() {
                    console.log('SUCCESS');
                })
                .error(function() {
                    console.log('FAILURE');
                });       
      }
        obj.addbirthdayService = function (birthdaydata,providerId) {
           console.log("providerid " + providerId);
        return  $http.post(birthdayUrl+providerId,birthdaydata,{
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).success(function() {
                    console.log('SUCCESS');
                })
                .error(function() {
                    console.log('FAILURE');
                });       
      }
 return obj;
}
	SG.Modules.SG.service("addServiceService",addServiceService);

}(SG.Service = SG.Service || {} ));
