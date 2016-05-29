(function(Directives, undefined) {
    SG.Modules.SG.directive("schoolTab", [
        function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'partials/services/schoolTab.html',
                controller: function($scope, addServiceService) {
                    console.info("Enter Training tab directive controller");
                    $scope.type = ["K-8 Schools - CBSE, ICSE , Other",
                        "MONTESSORI SCHOOLS",
                        "Play School"
                    ];
                    $scope.schoolobj = {
                        name: "school name",
                        type: "play school",
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
                        addServiceService.addschoolService($scope.schoolobj).then(function(response) {
                            console.log("school service added");
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