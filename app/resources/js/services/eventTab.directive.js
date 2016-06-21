(function(Directives, undefined) {
    SG.Modules.SG.directive("eventTab", [
        function() {
            return {
                restrict: 'E',
                templateUrl: 'partials/services/eventTab.html',
                controller: function($scope, addServiceService,loginService,$window) {
                    $scope.providerId = loginService.getProviderId();
                    
                    $scope.category = [
                        "Art & Craft",
                        "Cooking & Baking",
                        "Communication",
                        "Dance",
                        "Personality Development",
                        "Quiz",
                        "Science & Robotics",
                        "Singing",
                        "Sports",
                        "Storytelling",
                        "Summer Camps",
                        "Winter Camps",
                    ];
                    $scope.endDate = new Date();
                    $scope.startDate = new Date();
                    $scope.dateChange = function () {
                        $scope.eventobj.startDate =  moment(new Date($scope.startDate)).format('MMDDYYYY')
                        $scope.eventobj.endDate = moment(new Date($scope.endDate)).format('MMDDYYYY')
                    }
                  $scope.getlocalityInfo = function (city) {
                        addServiceService.getlocalityInfo(city,$scope.providerId).then(function (response) {
                            // console.log("locality response " + response.data.address)
                            $scope.pindirec = response.data.address
                        })
                    }
                                    $scope.pinchange = function (pin,locality) {
                        $scope.eventobj.pincode = pin;
                        $scope.eventobj.locality = locality;
                        // console.log("selected pin " +  $scope.eventobj.pincode)
                        // console.log("selected pin " +  $scope.eventobj.locality)

                    }
                    $scope.eventobj = {
                        eventName: "",
                        category: "",
                        startDate: moment(new Date()).format('MMDDYYYY'),
                        endDate: moment(new Date()).format('MMDDYYYY'),
                        facilities: "",
                        specialities: "",
                        timings: "",
                        pincode: "",
                        contactPhone: "",
                        contactEmail: "",
                        contactPersonName: "",
                        webLink: "",
                        streetAddress: "",
                        locality:""
                    }
                    $scope.addevent = function() {
                        addServiceService.addeventService($scope.eventobj,$scope.providerId).then(function(response) {
                            // console.log("event service added");
                            $window.alert(response.data.status.title)
                            if(response.data.status.statusCode != 404 || response.data.status.statusCode != 500)
                             {
                            $scope.eventobj = {
                        eventName: "",
                        category: "",
                        startDate: moment(new Date()).format('MMDDYYYY'),
                        endDate: moment(new Date()).format('MMDDYYYY'),
                        facilities: "",
                        specialities: "",
                        timings: "",
                        pincode: "",
                        contactPhone: "",
                        contactEmail: "",
                        contactPersonName: "",
                        webLink: "",
                        streetAddress: "",
                        locality:""
                    }
                }
                        })
                    }

                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        // console.log("value " + $scope.selected)
                    }
                }
            }

        }
    ])
}(SG.Directives = SG.Directives || {}));