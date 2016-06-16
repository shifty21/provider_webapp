(function(Directives, undefined) {
    SG.Modules.SG.directive("celebrationTab", [
        function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'partials/services/celebrationTab.html',
                controller: function($scope, addServiceService) {
                    console.info("Enter Training tab directive controller");
                    $scope.type = ["Kids Celebration",
                        "Catering",
                        "Cakes"
                    ];
                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        console.log("value " + $scope.celebration.type)
                    }


                    $scope.celebration = {
                        name: "",
                        type: "",
                        timings: "",
                        facilities: "",
                        specialities: "",
                        phoneNumber: "",
                        webLink: "",
                        services: "",
                        pincode: "",
                        priceRange: "",
                        streetAddress: ""
                    }
                    $scope.addbirthday = function() {
                        addServiceService.addbirthdayService($scope.celebration).then(function(response) {
                            console.log("birtrhday service added");
                        })
                    }

                }
            }

        }
    ])
}(SG.Directives = SG.Directives || {}));