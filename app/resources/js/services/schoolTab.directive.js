(function(Directives, undefined) {
    SG.Modules.SG.directive("schoolTab", [
        function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'partials/services/schoolTab.html',
                controller: function($scope, addServiceService,loginService,$window) {
                    $scope.providerId = loginService.getProviderId();
                    // console.info("Enter Training tab directive controller");
                    $scope.type = ["K-8 Schools - CBSE, ICSE , Other",
                        "MONTESSORI SCHOOLS",
                        "Play School"
                    ];
                           $scope.getlocalityInfo = function (city) {
                        addServiceService.getlocalityInfo(city,$scope.providerId).then(function (response) {
                            // console.log("locality response " + response.data.address)
                            $scope.pindirec = response.data.address
                        })
                    }
                                    $scope.pinchange = function (pin,locality) {
                        $scope.schoolobj.pincode = pin;
                        $scope.schoolobj.locality = locality;
                        // console.log("selected pin " +  $scope.schoolobj.pincode)
                        // console.log("selected pin " +  $scope.schoolobj.locality)

                    }
                    $scope.schoolobj = {
                        name: "",
                        type: "",
                        timings: "",
                        facilities: "",
                        specialities: "",
                        phoneNumber: "",
                        pincode: "",
                        fees: "",
                        address: "",
                        streetAddress: "",locality:""
                    }
                    $scope.addschoolservice = function() {
                        addServiceService.addschoolService($scope.schoolobj,$scope.providerId).then(function(response) {
                            // console.log("school service added");
                            $window.alert(response.data.status.title)
                            if(response.data.status.statusCode != 404 || response.data.status.statusCode != 500)
                             {
                            $scope.schoolobj = {
                        name: "",
                        type: "",
                        timings: "",
                        facilities: "",
                        specialities: "",
                        phoneNumber: "",
                        pincode: "",
                        fees: "",
                        address: "",
                        streetAddress: "",locality:""
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