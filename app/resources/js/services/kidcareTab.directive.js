(function(Directives, undefined) {
    SG.Modules.SG.directive("kidcareTab", [
        function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'partials/services/kidcareTab.html',
                controller: function($scope, addServiceService,loginService,$window) {
                    $scope.providerId = loginService.getProviderId();
                    // console.info("Enter Kid tab directive controller");
                    $scope.name = [
                        "Day Care Center"
                    ];
                    $scope.ageGroup = {
                        to1_3 : false,
                        to3_5 : false,
                        to5_8 : false
                    }
                       $scope.getlocalityInfo = function (city) {
                        addServiceService.getlocalityInfo(city,$scope.providerId).then(function (response) {
                            // console.log("locality response " + response.data.address)
                            $scope.pindirec = response.data.address
                        })
                    }
                                    $scope.pinchange = function (pin,locality) {
                        $scope.kidcareobj.pincode = pin;
                        $scope.kidcareobj.locality = locality;
                        // console.log("selected pin " +  $scope.kidcareobj.pincode)
                        // console.log("selected pin " +  $scope.kidcareobj.locality)

                    }
                    $scope.kidcareobj = {
                        minAge: "",
                        maxAge: "",
                        timings: "",
                        facilities: "",
                        specialities: "",
                        phoneNumber: "",
                        pincode: "",
                        fees: "",
                        address: "",
                        streetAddress: "",
                        name: "",
                        locality:""
                    }
                    $scope.addkidcareservice = function() {
                        if($scope.ageGroup.to1_3 && $scope.ageGroup.to3_5 && $scope.ageGroup.to5_8)
                            {$scope.kidcareobj.minAge = 1; $scope.kidcareobj.maxAge = 8}
                        else if($scope.ageGroup.to1_3 && $scope.ageGroup.to3_5)
                            {$scope.kidcareobj.minAge = 1; $scope.kidcareobj.maxAge = 5}
                        else if($scope.ageGroup.to3_5 && $scope.ageGroup.to5_8)
                            {$scope.kidcareobj.minAge = 3; $scope.kidcareobj.maxAge = 8}
                        else if($scope.ageGroup.to1_3 && $scope.ageGroup.to5_8)
                            {$scope.kidcareobj.minAge = 1; $scope.kidcareobj.maxAge = 8}
                        else if($scope.ageGroup.to1_3)
                            {$scope.kidcareobj.minAge = 1; $scope.kidcareobj.maxAge = 3}
                        else if($scope.ageGroup.to3_5)
                            {$scope.kidcareobj.minAge = 3; $scope.kidcareobj.maxAge = 5}
                        else if($scope.ageGroup.to5_8)
                            {$scope.kidcareobj.minAge = 5; $scope.kidcareobj.maxAge = 8}
                        else
                            {$scope.kidcareobj.minAge = 1; $scope.kidcareobj.maxAge = 8}
                        // console.log("startClassRange " + $scope.kidcareobj.minAge)
                        // console.log("startClassRange " + $scope.kidcareobj.maxAge)
                        addServiceService.addkidcareService($scope.kidcareobj,$scope.providerId).then(function(response) {
                            // console.log("kidcare service added");
                            $window.alert(response.data.status.title)
                            if(response.data.status.statusCode != 404 || response.data.status.statusCode != 500)
                             {
                            $scope.kidcareobj = {
                        minAge: "",
                        maxAge: "",
                        timings: "",
                        facilities: "",
                        specialities: "",
                        phoneNumber: "",
                        pincode: "",
                        fees: "",
                        address: "",
                        streetAddress: "",
                        name: "",
                        locality:""
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