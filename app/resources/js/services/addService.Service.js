
(function (Service, undefined)
{
function addServiceService($http)
    {
       var obj = {};
        var tutionUrl = SG.ServerUrl + 'tution/1a6f54af-41a1-441d-a835-9cbbe914095b';
        var trainingUrl = SG.ServerUrl + 'training/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8';
        var kidcareUrl = SG.ServerUrl + "dayCare/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var schoolUrl = SG.ServerUrl + "school/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var healthUrl = SG.ServerUrl + "health/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var eventUrl = SG.ServerUrl + "event/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var sportUrl = SG.ServerUrl + "sport/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var birthdayUrl = SG.ServerUrl + "celebration/af6d5d84-278f-42fb-8b2f-b06b2e12b8f8";
        var profile = 'http://144.76.237.246:6060/superkids/r1/providerProfile/1a6f54af-41a1-441d-a835-9cbbe914095b';
        obj.addtutionService = function (tutiondata) {
           console.log(tutionUrl + " pincode " + tutiondata.pincode)
        return  $http.post('http://144.76.237.246:6060/superkids/r1/tuition/1a6f54af-41a1-441d-a835-9cbbe914095b',{"address":"Hdhfb","boards":"CBSE ICSE International Board ","classLocation":"At Kid Home,At Teacher\u0027s home","daysPerWeek":"One Two ","endClassRange":"8","endHour":"1:39 PM","facilities":"Hdhf","fees":"5000","instituteName":"Ndd","phoneNumber":"8553219740","pincode":560100,"providerId":"1a6f54af-41a1-441d-a835-9cbbe914095b","schools":"Bdjd","specialities":"Hdhf","startClassRange":"0","startHour":"1:39 AM","streetAddress":"Hdhfb","subject":"ALL SUBJECTS"},{headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }}).success(function(response) {
                    console.log('SUCCESS' + response.status.title);
                })
                .error(function() {
                    console.log('FAILURE');
                });       
      }
      obj.getProfile = function () {
           console.log(profile)
        return  $http.get(profile)
      }
        obj.addtrainingService = function (trainingdata) {
           
        return  $http.post(trainingUrl,trainingdata,{
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                }).success(function() {
                    console.log('SUCCESS');
                })
                .error(function() {
                    console.log('FAILURE');
                });       
      }
        obj.addkidcareService = function (kidcaredata) {
           
        return  $http.post(kidcareUrl,kidcaredata,{
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
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
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
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
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
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
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
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
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
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
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
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
