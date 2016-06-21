(function(Directives, undefined) {
    SG.Modules.SG.directive("tutionTab", [
        function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'partials/services/tutionTab.html',
                controller: function($scope, addServiceService,loginService,$window) {
                    $scope.providerId = loginService.getProviderId();
                    // console.info("Enter Training tab directive controller");
                    $scope.subject = ["All Subject",
                        "FOREIGN LANGUAGES",
                        "INDIAN LANGUAGES",
                        "MATHS",
                        "SCIENCE",
                        "English"
                    ];
                    $scope.boards = [
                        {cbse : false},
                        {icse : false},
                        {international :  false},
                        {state :  false},
                        {all :  false}
                    ]
                    function addboard() {
                        if($scope.boards.cbse) $scope.tutionobj.boards = " CBSE"
                            if($scope.boards.icse)$scope.tutionobj.boards = $scope.tutionobj.boards + " ICSE"
                            if($scope.boards.international)$scope.tutionobj.boards = $scope.tutionobj.boards + " International Board"
                            if($scope.boards.state)$scope.tutionobj.boards = $scope.tutionobj.boards + " State Board"
                            if($scope.boards.all)$scope.tutionobj.boards = $scope.tutionobj.boards + " All type of Boards"
                        console.log($scope.tutionobj.boards + "boards")
                    }
                    $scope.daysPerWeek = [
                    {day1 : false},
                    {day2 : false},
                    {day3 : false},
                    {weekend : false},
                    {daily : false}
                    ];
                     function adddays() {
                        if($scope.daysPerWeek.day1) $scope.tutionobj.daysPerWeek = "1 day"
                            if($scope.daysPerWeek.day2)$scope.tutionobj.daysPerWeek = $scope.tutionobj.daysPerWeek + " 2 days"
                            if($scope.daysPerWeek.day3)$scope.tutionobj.daysPerWeek = $scope.tutionobj.daysPerWeek + " 3 days"
                            if($scope.daysPerWeek.weekend)$scope.tutionobj.daysPerWeek = $scope.tutionobj.daysPerWeek + " Weekends"
                            if($scope.daysPerWeek.daily)$scope.tutionobj.daysPerWeek = $scope.tutionobj.daysPerWeek + " Daily"
                        console.log($scope.tutionobj.daysPerWeek + "boards")
                    }
                     $scope.getlocalityInfo = function (city) {
                        addServiceService.getlocalityInfo(city,$scope.providerId).then(function (response) {
                            // console.log("locality response " + response.data.address)
                            $scope.pindirec = response.data.address;
                        })
                    }             
                    $scope.pinchange = function (pin,locality) {
                        $scope.tutionobj.pincode = pin;
                        $scope.tutionobj.locality = locality;
                        console.log("selected pin " +  $scope.tutionobj.pincode)
                        console.log("selected pin " +  $scope.tutionobj.locality)

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
                    
                    $scope.tutionobj = {
                        startClassRange: "",
                        endClassRange: "",
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
                        locality: "",
                        classLocation: "",
                        streetAddress: "",
                        subject: "",
                        instituteName: "",daysPerWeek :""
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
                            addboard();adddays();
                        addServiceService.addtutionService($scope.tutionobj,$scope.providerId).then(function(response) {
                            $window.alert(response.data.status.title)
                            // console.log("tution service added" + response.data.status.title);
                            if(response.data.status.statusCode != 404 || response.data.status.statusCode != 500)
                             {
                            $scope.tutionobj = {
                        startClassRange: "",
                        endClassRange: "",
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
                        locality: "",
                        classLocation: "",
                        streetAddress: "",
                        subject: "",
                        instituteName: "",daysPerWeek :""
                    }}
                            // console.log("tution service added");
                        })
                    }
                    $scope.getProfile = function() {
                        console.log("getting profile data")
                        addServiceService.getProfile($scope.providerId).then(function(response) {
                            // console.log("profile " +  response.data.providerProfile[0].providerName);
                            // for(x in response.data.providerProfile){console.log("provider name " + x.providerName)}
                        })
                    }

                    $scope.selected = "";
                    $scope.selectedvalue = function() {
                        console.log("value " + $scope.tutionobj.subject);
                    }
                }
            }

        }
    ])
}(SG.Directives = SG.Directives || {}));