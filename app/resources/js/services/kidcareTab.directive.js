(function(Directives, undefined) {
    SG.Modules.SG.directive("kidcareTab", [
        function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'partials/services/kidcareTab.html',
                controller: function($scope, addServiceService) {
                    console.info("Enter Kid tab directive controller");
                    $scope.name = [
                        "Day Care Center"
                    ];
                    $scope.kidcareobj = {
                        minAge: "3",
                        maxAge: "8",
                        timings: "10 to 6",
                        facilities: "special attention to each individual",
                        specialities: "specialized in training kids",
                        phoneNumber: "7898789878",
                        pincode: "560100",
                        fees: "5000",
                        address: "19th main,5th cross",
                        streetAddress: "HSR LAYOUT",
                        name: "Day care"
                    }

                    $scope.addkidcareservice = function() {
                        addServiceService.addkidcareService($scope.kidcareobj).then(function(response) {
                            console.log("kidcare service added");
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