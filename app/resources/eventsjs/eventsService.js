
(function (Service, undefined)
{
function eventsService($http,$log)
    {
       var obj = {};
        var eventUrl = 'https://developer.eventshigh.com/events/bangalore?key=5m@r1gr0wth@ppk3y';

        obj.getEvents = function () {
          return $http.get(eventUrl);
        }
 return obj;
}
	SG.Modules.SG.service("eventsService",eventsService);

}(SG.Service = SG.Service || {} ));
