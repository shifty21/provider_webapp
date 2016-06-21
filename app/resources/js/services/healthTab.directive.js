(function(Directives, undefined) {
    SG.Modules.SG.directive("healthTab", [
        function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'partials/services/healthTab.html',
                controller: function($scope, addServiceService,loginService,$window) {
                    $scope.providerId = loginService.getProviderId();
                    // console.info("Enter Training tab directive controller");
                    $scope.serviceName = ["Fitness Trainer",
                        "Child Specialist",
                        "Child Counsellor",
                        "Ditesian and Nutrision"
                    ];
                     $scope.getlocalityInfo = function (city) {
                        addServiceService.getlocalityInfo(city,$scope.providerId).then(function (response) {
                            // console.log("locality response " + response.data.address)
                            $scope.pindirec = response.data.address
                        })
                    }
                                    $scope.pinchange = function (pin,locality) {
                        $scope.healthobj.pincode = pin;
                        $scope.healthobj.locality = locality;
                        // console.log("selected pin " +  $scope.healthobj.pincode)
                        // console.log("selected pin " +  $scope.healthobj.locality)

                    }
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
                            // console.log("health service added");
                            $window.alert(response.data.status.title)
                            if(response.data.status.statusCode != 404 || response.data.status.statusCode != 500)
                             {
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
                }
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