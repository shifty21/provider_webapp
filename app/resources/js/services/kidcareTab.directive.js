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
                    $scope.ageGroup = {
                        to1_3 : false,
                        to3_5 : false,
                        to5_8 : false
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
                        name: ""
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
                        console.log("startClassRange " + $scope.kidcareobj.minAge)
                        console.log("startClassRange " + $scope.kidcareobj.maxAge)
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