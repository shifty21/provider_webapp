(function(Directives, undefined) {
    SG.Modules.SG.directive("eventTab", [
        function() {
            return {
                restrict: 'E',
                templateUrl: 'partials/services/eventTab.html',
                controller: function($scope, addServiceService) {
                    console.info("Enter Event tab directive controller");
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
                    $scope.eventobj = {
                        eventName: "science exhibition",
                        category: "camps",
                        startDate: "09102015",
                        endDate: "30092015",
                        facilities: "any provided facilities",
                        specialities: "any special things",
                        timings: "10:00AM to 5:00PM",
                        pincode: "560100",
                        contactPhone: "9019816937",
                        contactEmail: "pritamkray@gmail.com",
                        contactPersonName: "pritam kumar",
                        webLink: "web.summercamp.com",
                        streetAddress: "7/10.9th main,12th Street"
                    }
                    $scope.addevent = function() {
                        addServiceService.addeventService($scope.eventobj).then(function(response) {
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