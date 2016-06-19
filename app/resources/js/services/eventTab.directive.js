(function(Directives, undefined) {
    SG.Modules.SG.directive("eventTab", [
        function() {
            return {
                restrict: 'E',
                templateUrl: 'partials/services/eventTab.html',
                controller: function($scope, addServiceService,loginService) {
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
                            console.log("event service added");
                        })
                    }

                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        console.log("value " + $scope.selected)
                    }
                }
            }

        }
    ])
}(SG.Directives = SG.Directives || {}));