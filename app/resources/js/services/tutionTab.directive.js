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
                    $scope.tutionobj = {
                        startClassRange: "3",
                        endClassRange: "8",
                        subjects: "maths tuition",
                        boards: "cbse",
                        phoneNumber: "9019816937",
                        schools: "all",
                        daysPerWeek: "5",
                        startHour: "10",
                        endHour: "5",
                        facilities: "special attention to each individual",
                        specialities: "specialized in science and maths",
                        pincode: 560066,
                        fees: "5000",
                        address: "19th main,5th cross",
                        classLocation: "Institute,kids home,yahan bhi,wahan bhi",
                        streetAddress: "HSR LAYOUT",
                        subject: "maths",
                        instituteName: "Add schools name"
                    }
                    $scope.addtution = function() {
                        addServiceService.addtutionService($scope.tutionobj).then(function(response) {
                            console.log("tution service added");
                        })
                    }
                    $scope.getProfile = function() {
                        console.log("getting profile data")
                        addServiceService.getProfile().then(function(response) {
                            console.log("profile " +  response);
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