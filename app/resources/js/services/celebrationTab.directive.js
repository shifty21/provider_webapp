(function(Directives, undefined) {
    SG.Modules.SG.directive("celebrationTab", [
        function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'partials/services/celebrationTab.html',
                controller: function($scope, addServiceService,loginService,$window) {
                    $scope.providerId = loginService.getProviderId();
                    // console.info("Enter Training tab directive controller");
                    $scope.type = ["Kids Celebration",
                        "Catering",
                        "Cakes"
                    ];
                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        // console.log("value " + $scope.celebration.type)
                    }

                    $scope.getlocalityInfo = function (city) {
                        addServiceService.getlocalityInfo(city,$scope.providerId).then(function (response) {
                            // console.log("locality response " + response.data.address)
                            $scope.pindirec = response.data.address
                        })
                    }
                                    $scope.pinchange = function (pin,locality) {
                        $scope.celebration.pincode = pin;
                        $scope.celebration.locality = locality;
                        // console.log("selected pin " +  $scope.celebration.pincode)
                        // console.log("selected pin " +  $scope.celebration.locality)

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
                        addServiceService.addbirthdayService($scope.celebration,$scope.providerId).then(function(response) {
                            // console.log("birtrhday service added");
                            $window.alert(response.data.status.title)
                            if(response.data.status.statusCode != 404 || response.data.status.statusCode != 500)
                             {
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
                }
                        })
                    }

                }
            }

        }
    ])
}(SG.Directives = SG.Directives || {}));