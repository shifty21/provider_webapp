(function(Directives, undefined) {
    SG.Modules.SG.directive("tutionTab", [
        function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'partials/services/tutionTab.html',
                controller: function($scope, addServiceService) {
                    console.info("Enter Training tab directive controller");
                    $scope.subject = ["All Subject",
                        "FOREIGN LANGUAGES",
                        "INDIAN LANGUAGES",
                        "MATHS",
                        "SCIENCE",
                        "English"
                    ];
                    $scope.ageGroup = {
                        to1_3 : false,
                        to3_5 : false,
                        to5_8 : false
                    }
                    $scope.classLocation = {
                        kid_home : false,
                        teacher_home : false,
                        at_instu : false
                    }
                    
                    $scope.tutionobj = {
                        startClassRange: "",
                        endClassRange: "",
                        subjects: "",
                        boards: "",
                        phoneNumber: "",
                        schools: "",
                        daysPerWeek: "",
                        startHour: "",
                        endHour: "",
                        facilities: "",
                        specialities: "",
                        pincode: "",
                        fees: "",
                        address: "",
                        classLocation: "",
                        streetAddress: "",
                        subject: "",
                        instituteName: ""
                    }
                    $scope.addtution = function() {
                        // console.log("age group " + $scope.ageGroup.to1_3)
                        if($scope.ageGroup.to1_3 && $scope.ageGroup.to3_5 && $scope.ageGroup.to5_8)
                            {$scope.tutionobj.startClassRange = 1; $scope.tutionobj.endClassRange = 8}
                        else if($scope.ageGroup.to1_3 && $scope.ageGroup.to3_5)
                            {$scope.tutionobj.startClassRange = 1; $scope.tutionobj.endClassRange = 5}
                        else if($scope.ageGroup.to3_5 && $scope.ageGroup.to5_8)
                            {$scope.tutionobj.startClassRange = 3; $scope.tutionobj.endClassRange = 8}
                        else if($scope.ageGroup.to1_3 && $scope.ageGroup.to5_8)
                            {$scope.tutionobj.startClassRange = 1; $scope.tutionobj.endClassRange = 8}
                        else if($scope.ageGroup.to1_3)
                            {$scope.tutionobj.startClassRange = 1; $scope.tutionobj.endClassRange = 3}
                        else if($scope.ageGroup.to3_5)
                            {$scope.tutionobj.startClassRange = 3; $scope.tutionobj.endClassRange = 5}
                        else if($scope.ageGroup.to5_8)
                            {$scope.tutionobj.startClassRange = 5; $scope.tutionobj.endClassRange = 8}
                        else
                            {$scope.tutionobj.startClassRange = 1; $scope.tutionobj.endClassRange = 8}

                        if($scope.classLocation.kid_home && $scope.classLocation.teacher_home && $scope.classLocation.at_instu)
                            {$scope.tutionobj.classLocation = "At Institute/Coaching, At Teacher Home, At Kid Home"}
                        else if($scope.classLocation.kid_home && $scope.classLocation.teacher_home)
                            {$scope.tutionobj.classLocation = "At Teacher Home, At Kid Home"}
                        else if($scope.classLocation.teacher_home && $scope.classLocation.at_instu)
                            {$scope.tutionobj.classLocation = "At Institute/Coaching, At Teacher Home"}
                        else if($scope.classLocation.kid_home && $scope.classLocation.at_instu)
                            {$scope.tutionobj.classLocation = "At Institute/Coaching, At Kid Home"}
                        else if($scope.classLocation.kid_home)
                            {$scope.tutionobj.classLocation = "At Kid Home"}
                        else if($scope.classLocation.teacher_home)
                            {$scope.tutionobj.classLocation = "At Teacher Home"}
                        else if($scope.classLocation.at_instu)
                            {$scope.tutionobj.classLocation = "At Institute/Coaching"}
                        else
                            {$scope.tutionobj.classLocation = "At Institute/Coaching, At Teacher Home, At Kid Home"}

                        addServiceService.addtutionService($scope.tutionobj).then(function(response) {
                            
                            console.log("tution service added" + response.data.status.title);
                            console.log("tution service added");
                        })
                    }
                    $scope.getProfile = function() {
                        console.log("getting profile data")
                        addServiceService.getProfile().then(function(response) {
                            // console.log("profile " +  response.data.providerProfile[0].providerName);
                            for(x in response.data.providerProfile){console.log("provider name " + x.providerName)}
                        })
                    }

                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        console.log("value " + $scope.tutionobj.subjects)
                    }
                }
            }

        }
    ])
}(SG.Directives = SG.Directives || {}));