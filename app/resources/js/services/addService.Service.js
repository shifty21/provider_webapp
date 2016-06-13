
(function (Service, undefined)
{
function addServiceService($http)
    {
       var obj = {};
        var tutionUrl = SG.ServerUrl + 'tuition/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8';
        var trainingUrl = SG.ServerUrl + 'training/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8';
        var kidcareUrl = SG.ServerUrl + "dayCare/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var schoolUrl = SG.ServerUrl + "school/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var healthUrl = SG.ServerUrl + "health/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var eventUrl = SG.ServerUrl + "event/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var sportUrl = SG.ServerUrl + "sport/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var birthdayUrl = SG.ServerUrl + "celebration/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        
        obj.addtutionService = function (tutiondata) {
        return  $http.post(tutionUrl,tutiondata,{
                    headers: {
                        "Content-Type": "text/plain"
}})      
      }
     
        obj.addtrainingService = function (trainingdata) {
           
        return  $http.post(trainingUrl,trainingdata,{
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
        obj.addkidcareService = function (kidcaredata) {
           
        return  $http.post(kidcareUrl,kidcaredata,{
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
        obj.addschoolService = function (schooldata) {
           
        return  $http.post(schoolUrl,schooldata,{
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
        obj.addhealthService = function (healthdata) {
           
        return  $http.post(healthUrl,healthdata,{
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
        obj.addeventService = function (eventdata) {
           
        return  $http.post(eventUrl,eventdata,{
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
        obj.addsportService = function (sportdata) {
           
        return  $http.post(sportUrl,sportdata,{
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
        obj.addbirthdayService = function (birthdaydata) {
           
        return  $http.post(birthdayUrl,birthdaydata,{
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
