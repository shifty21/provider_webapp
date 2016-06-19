(function(Directives, undefined) {
    SG.Modules.SG.directive("sportTab", [
        function() {
            return {
                restrict: 'E',
                templateUrl: 'partials/services/sportTab.html',
                controller: function($scope, addServiceService,loginService) {
                    $scope.providerId = loginService.getProviderId();
                    // console.info("enter sport tab directive controller");
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
                        name: "",
                        type: "",
                        timings: "",
                        facilities: "",
                        specialities: "",
                        phoneNumber: "",
                        pincode: "",
                        fees: "",
                        address: "",
                        streetAddress: ""
                    }
                    $scope.addsportservice = function() {
                        addServiceService.addsportService($scope.sportobj,$scope.providerId).then(function(response) {
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