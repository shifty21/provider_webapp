(function(Directives, undefined) {
    SG.Modules.SG.directive("healthTab", [
        function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'partials/services/healthTab.html',
                controller: function($scope, addServiceService) {
                    console.info("Enter Training tab directive controller");
                    $scope.serviceName = ["Fitness Trainer",
                        "Child Specialist",
                        "Child Counsellor",
                        "Ditesian and Nutrision"
                    ];

                    $scope.healthobj = {
                        name: "doctor/clinic name",
                        serviceName: "child specialist",
                        timings: "10 to 6",
                        facilities: "special attention to each individual",
                        specialities: "special things",
                        phoneNumber: "7898789878",
                        pincode: "560100",
                        fees: "5000",
                        address: "19th main,5th cross",
                        streetAddress: "HSR LAYOUT"
                    }
                    $scope.addhealthservice = function() {
                        addServiceService.addhealthService($scope.healthobj).then(function(response) {
                            console.log("health service added");
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