(function(Directives, undefined) {
    SG.Modules.SG.directive("sportTab", [
        function() {
            return {
                restrict: 'E',
                templateUrl: 'partials/services/sportTab.html',
                controller: function($scope, addServiceService) {
                    console.info("enter sport tab directive controller");
                    $scope.clubs = ["Badminton Academy",
                        "Basketball Academy",
                        "Chess Academy",
                        "Cricket Academy",
                        "Football Academy",
                        "Skating Academy",
                        "Snooker Academy",
                        "Table Tennis Academy",
                        "Tennis Academy",
                        "Volleyball Academy"
                    ];
                    $scope.sportobj = {
                        name: "academy/trainerName",
                        type: "chess academy",
                        timings: "10 to 6",
                        facilities: "special attention to each individual",
                        specialities: "special things",
                        phoneNumber: "7898789878",
                        pincode: "560100",
                        fees: "5000",
                        address: "19th main,5th cross",
                        streetAddress: "HSR LAYOUT"
                    }
                    $scope.addschoolservice = function() {
                        addServiceService.addsportService($scope.sportobj).then(function(response) {
                            console.log("sport service added");
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