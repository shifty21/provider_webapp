(function (Controllers, undefined)
{   
 function sanitize($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
}
function sanitizeimg($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(String(htmlCode).replace(/<img[^>]+\>/gm, ''));
  }
}

SG.Modules.SG.controller("eventsController",eventsController);
SG.Modules.SG.filter("sanitize",sanitize);
SG.Modules.SG.filter("sanitizeimg",sanitizeimg);
    // MainCtrl.$inject = ['healthAZModuleData'];
    function eventsController ($scope, $http,$window,eventsService)
    {              $scope.showmore=false;

      $scope.getUrl = function(url) {
        if(url==undefined) return url;
        else
        return (url.substring(url.lastIndexOf('/') + 1) == "") ? "resources/images/kidss_banner.png" : url;
      };      
      $scope.eventSearch = "";
      $scope.getEvents = function () {
        eventsService.getEvents().then(function (response) {
                                    // console.log("response  " + response.data.events)
                                    $scope.event = response.data.events;
                                    $scope.firstEvent = $scope.event[0];
                                  })                        
      }
      $scope.getDetail = function (event) {
        $scope.details = event;
      }


    }


  }(SG.Controllers = SG.Controllers || {} ));
