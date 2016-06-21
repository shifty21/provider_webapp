(function(Directives, undefined) {
    SG.Modules.SG.directive("sportTab", [
        function() {
            return {
                restrict: 'E',
                templateUrl: 'partials/services/sportTab.html',
                controller: function($scope, addServiceService,loginService,$window) {
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
                            $scope.getlocalityInfo = function (city) {
                        addServiceService.getlocalityInfo(city,$scope.providerId).then(function (response) {
                            // console.log("locality response " + response.data.address)
                            $scope.pindirec = response.data.address
                        })
                    }
                                    $scope.pinchange = function (pin,locality) {
                        $scope.sportobj.pincode = pin;
                        $scope.sportobj.locality = locality;
                        // console.log("selected pin " +  $scope.sportobj.pincode)
                        // console.log("selected pin " +  $scope.sportobj.locality)

                    }
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
                            // console.log("sport service added");
                            $window.alert(response.data.status.title)
                            if(response.data.status.statusCode != 404 || response.data.status.statusCode != 500)
                             {$scope.sportobj = {
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
                    }}

                        })
                    }
                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        // console.log("value " + $scope.selected)
                    }

                }
            }

        }
    ])
}(SG.Directives = SG.Directives || {}));