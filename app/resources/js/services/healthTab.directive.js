(function(Directives, undefined) {
    SG.Modules.SG.directive("healthTab", [
        function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'partials/services/healthTab.html',
                controller: function($scope, addServiceService,loginService) {
                    $scope.providerId = loginService.getProviderId();
                    // console.info("Enter Training tab directive controller");
                    $scope.serviceName = ["Fitness Trainer",
                        "Child Specialist",
                        "Child Counsellor",
                        "Ditesian and Nutrision"
                    ];

                    $scope.healthobj = {
                        name: "",
                        serviceName: "",
                        timings: "",
                        facilities: "",
                        specialities: "",
                        phoneNumber: "",
                        pincode: "",
                        fees: "",
                        address: "",
                        streetAddress: ""
                    }
                    $scope.addhealthservice = function() {
                        addServiceService.addhealthService($scope.healthobj,$scope.providerId).then(function(response) {
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