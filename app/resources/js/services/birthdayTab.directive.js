(function(Directives, undefined) {
    SG.Modules.SG.directive("birthdayTab", [
        function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'partials/services/birthdayTab.html',
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
                        name: "planner/cakeShop/catererName",
                        type: "type of products",
                        timings: "10 to 9",
                        facilities: "any provided facilities",
                        specialities: "any special things",
                        phoneNumber: "7898789878",
                        webLink: "www.mycatering.com",
                        services: "breakfast,lunch,dinner",
                        pincode: "560100",
                        priceRange: "1000-5000",
                        streetAddress: "HSR LAYOUT"
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