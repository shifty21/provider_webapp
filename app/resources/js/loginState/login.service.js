(function() {
 'use strict';
 /**
  * @ngdoc service
  * @name r2r.category
  * @description
  * # category
  * Service in the r2r.
  */
  SG.Modules.SG.service("loginService",loginService);

 function loginService($window, $log,$state) {

   var storageKey = 'status';
   var loggedIn = 'loggedIn';
   var username = 'user';

   init();

   function init() {
     if (typeof getProviderId() == 'undefined') {
      $window.localStorage[loggedIn] = false;
       $state.go("register");
     }

     // $log.info('providerid  ' + getProviderId());
  
   }

   function getProviderId() {
    // console.log("storage key " + $window.localStorage[storageKey]);
     return $window.localStorage[storageKey];
     // return angular.fromJson($window.localStorage[storageKey]);
   }

   function getloggedIn() {
    // console.log("storage key " + $window.localStorage[loggedIn]);
     return $window.localStorage[loggedIn];
     // return angular.fromJson($window.localStorage[storageKey]);
   }
function getUserName() {
     return $window.localStorage[username];
   }


   function setProviderId(value) {
     $window.localStorage[storageKey] = value;
     $window.localStorage[loggedIn] = false;
      // $window.localStorage[storageKey] = angular.toJson(value);
     // $log.info("providerid setup to "+ value);
   }
   function setUserName(value) {
    console.log("provider name in service " + value)
     $window.localStorage[username] = value;
   }

   function clearProviderId() {
     $window.localStorage.clear();
   }

   return {
    getloggedIn: getloggedIn,
     getProviderId: getProviderId,
     setProviderId: setProviderId,
     getUserName: getUserName,
     setUserName: setUserName,
     clearProviderId: clearProviderId
   };

 }
})();