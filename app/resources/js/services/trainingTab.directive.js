(function(Directives, undefined) {
    SG.Modules.SG.directive("trainingTab", [
        function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'partials/services/trainingTab.html',
                controller: function($scope, addServiceService) {
                    console.info("Enter Training tab directive controller");
                    $scope.subject = [
                        "Guitar classes",
                        "Musical Instrument Classes",
                        "Dance Classes",
                        "Karate Classes",
                        "Painting Classes",
                        "Cooking Clsses",
                        "Singing Classes",
                        "Art and Craft",
                        "Theater",
                        "Computer"
                    ];

                    $scope.trainingobj = {
                        minAge: "3",
                        maxAge: "8",
                        subject: "guitar",
                        schoolNames: "all",
                        daysPerWeek: "5",
                        timings: "10 to 6",
                        facilities: "special attention to each individual",
                        specialities: "specialized guitar",
                        phoneNumber: "7898789878",
                        pincode: "560100",
                        fees: "5000",
                        address: "19th main,5th cross",
                        classLocation: "Institute,kids home,yahan bhi,wahan bhi",
                        streetAddress: "HSR LAYOUT",
                        instituteName: "Coaching center"
                    }
                    $scope.addtrainingService = function() {
                        addServiceService.addtrainingService($scope.trainingobj).then(function(response) {
                            console.log("training service added");
                        })
                    }
                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        console.log("value " + $scope.trainingobj.daysPerWeek)
                    }
                }
            }

        }
    ])
}(SG.Directives = SG.Directives || {}));