(function(Directives, undefined) {
    SG.Modules.SG.directive("trainingTab", [
        function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'partials/services/trainingTab.html',
                controller: function($scope, addServiceService,loginService,$window) {
                    $scope.providerId = loginService.getProviderId();
                    // console.info("Enter Training tab directive controller");
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
                    $scope.daysPerWeek = [
                    {day1 : false},
                    {day2 : false},
                    {day3 : false},
                    {weekend : false},
                    {daily : false}
                    ];
                     function adddays() {
                        if($scope.daysPerWeek.day1) $scope.trainingobj.daysPerWeek = "1 day"
                            if($scope.daysPerWeek.day2)$scope.trainingobj.daysPerWeek = $scope.trainingobj.daysPerWeek + " 2 days"
                            if($scope.daysPerWeek.day3)$scope.trainingobj.daysPerWeek = $scope.trainingobj.daysPerWeek + " 3 days"
                            if($scope.daysPerWeek.weekend)$scope.trainingobj.daysPerWeek = $scope.trainingobj.daysPerWeek + " Weekends"
                            if($scope.daysPerWeek.daily)$scope.trainingobj.daysPerWeek = $scope.trainingobj.daysPerWeek + " Daily"
                        // console.log($scope.trainingobj.daysPerWeek + "boards")
                    }
                           $scope.getlocalityInfo = function (city) {
                        addServiceService.getlocalityInfo(city,$scope.providerId).then(function (response) {
                            // console.log("locality response " + response.data.address)
                            $scope.pindirec = response.data.address
                        })
                    }
                                    $scope.pinchange = function (pin,locality) {
                        $scope.trainingobj.pincode = pin;
                        $scope.trainingobj.locality = locality;
                        console.log("selected pin " +  $scope.trainingobj.pincode)
                        console.log("selected pin " +  $scope.trainingobj.locality)

                    }
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
                    

                    $scope.trainingobj = {
                        minAge: "",
                        maxAge: "",
                        subject: "",
                        schoolNames: "",
                        daysPerWeek: "",
                        timings: "",
                        facilities: "",
                        specialities: "",
                        phoneNumber: "",
                        pincode: "",
                        fees: "",
                        address: "",
                        classLocation: "",
                        streetAddress: "",
                        instituteName: "",
                        locality:""
                    }
                    $scope.addtrainingService = function() {
                        if($scope.ageGroup.to1_3 && $scope.ageGroup.to3_5 && $scope.ageGroup.to5_8)
                            {$scope.trainingobj.minAge = 1; $scope.trainingobj.maxAge = 8}
                        else if($scope.ageGroup.to1_3 && $scope.ageGroup.to3_5)
                            {$scope.trainingobj.minAge = 1; $scope.trainingobj.maxAge = 5}
                        else if($scope.ageGroup.to3_5 && $scope.ageGroup.to5_8)
                            {$scope.trainingobj.minAge = 3; $scope.trainingobj.maxAge = 8}
                        else if($scope.ageGroup.to1_3 && $scope.ageGroup.to5_8)
                            {$scope.trainingobj.minAge = 1; $scope.trainingobj.maxAge = 8}
                        else if($scope.ageGroup.to1_3)
                            {$scope.trainingobj.minAge = 1; $scope.trainingobj.maxAge = 3}
                        else if($scope.ageGroup.to3_5)
                            {$scope.trainingobj.minAge = 3; $scope.trainingobj.maxAge = 5}
                        else if($scope.ageGroup.to5_8)
                            {$scope.trainingobj.minAge = 5; $scope.trainingobj.maxAge = 8}
                        else
                            {$scope.trainingobj.minAge = 1; $scope.trainingobj.maxAge = 8}

                        if($scope.classLocation.kid_home && $scope.classLocation.teacher_home && $scope.classLocation.at_instu)
                            {$scope.trainingobj.classLocation = "At Institute/Coaching, At Teacher Home, At Kid Home"}
                        else if($scope.classLocation.kid_home && $scope.classLocation.teacher_home)
                            {$scope.trainingobj.classLocation = "At Teacher Home, At Kid Home"}
                        else if($scope.classLocation.teacher_home && $scope.classLocation.at_instu)
                            {$scope.trainingobj.classLocation = "At Institute/Coaching, At Teacher Home"}
                        else if($scope.classLocation.kid_home && $scope.classLocation.at_instu)
                            {$scope.trainingobj.classLocation = "At Institute/Coaching, At Kid Home"}
                        else if($scope.classLocation.kid_home)
                            {$scope.trainingobj.classLocation = "At Kid Home"}
                        else if($scope.classLocation.teacher_home)
                            {$scope.trainingobj.classLocation = "At Teacher Home"}
                        else if($scope.classLocation.at_instu)
                            {$scope.trainingobj.classLocation = "At Institute/Coaching"}
                        else
                            {$scope.trainingobj.classLocation = "At Institute/Coaching, At Teacher Home, At Kid Home"}
                        adddays();
                        // console.log("startClassRange " + $scope.trainingobj.minAge)
                        // console.log("startClassRange " + $scope.trainingobj.maxAge)
                        // console.log("startClassRange " + $scope.trainingobj.classLocation)
                        addServiceService.addtrainingService($scope.trainingobj,$scope.providerId).then(function(response) {
                            // console.log("training service added");
                            $window.alert(response.data.status.title)
                             if(response.data.status.statusCode != 404 || response.data.status.statusCode != 500)
                             {$scope.trainingobj = {
                        minAge: "",
                        maxAge: "",
                        subject: "",
                        schoolNames: "",
                        daysPerWeek: "",
                        timings: "",
                        facilities: "",
                        specialities: "",
                        phoneNumber: "",
                        pincode: "",
                        fees: "",
                        address: "",
                        classLocation: "",
                        streetAddress: "",
                        instituteName: "",
                        locality:""
                    }
                }
                        })
                    }
                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        // console.log("value " + $scope.trainingobj.daysPerWeek)
                        
                    }
                }
            }

        }
    ])
}(SG.Directives = SG.Directives || {}));