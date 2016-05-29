angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/partials/doctormodule/doctor.html',
    "<section class=\"section-padding\">\r" +
    "\n" +
    "<div class=\"container \" id=\"doctor\" ng-init='getDoctorList()' >\r" +
    "\n" +
    "  <div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-lg-3 raisedbox\" style=\"padding: 1em 1em 0;\">\r" +
    "\n" +
    "      <h3 style=\"padding-left: 20px; margin-top: 10px;\">\r" +
    "\n" +
    "        Select Specialization\r" +
    "\n" +
    "      </h3>\r" +
    "\n" +
    "      <ul style=\"list-style: none; padding-left: 20px;\">\r" +
    "\n" +
    "        <li ng-repeat=\"x in  specializationData.specializations | orderBy : 'name'\">\r" +
    "\n" +
    "          <a ui-sref=\"doctor({specializationId:x.id,specializationName:x.name})\" style=\"margin-bottom: 1em;\">{{x.name}} </a>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "      </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!-- <div class=\"col-lg-1\"></div> -->\r" +
    "\n" +
    "    <div class=\"col-lg-6\" style=\"margin-left:20px;\">\r" +
    "\n" +
    "      <div class=\"row raisedbox\">\r" +
    "\n" +
    "        <div class=\"col-lg-7\" style=\"padding-top:2px;\">\r" +
    "\n" +
    "        <h3 style=\"margin: 0px;\">\r" +
    "\n" +
    "          <input type=\"text\" placeholder=\"Search by Doctor Name\" ng-model=\"search\" style=\"padding: 2px; font-size: 16px; width: 250px; height: 36px; border: 1px solid #30ABE6;\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </h3>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        <div class=\"col-lg-4 pull-right\">\r" +
    "\n" +
    "          <h4>\r" +
    "\n" +
    "        <paper-button raised class=\" pointerHand page-scroll\"  id=\"cityDropDown\" data-toggle=\"dropdown\"\r" +
    "\n" +
    "                      aria-haspopup=\"true\" aria-expanded=\"true\">\r" +
    "\n" +
    "          <i class=\"fa fa-map-marker\"></i>&nbsp;{{selectCity}}\r" +
    "\n" +
    "        </paper-button>\r" +
    "\n" +
    "        <div class=\"pointerHand dropdown-menu\" aria-labelledby=\"cityDropDown\" >\r" +
    "\n" +
    "          <ul style=\"list-style-type: none; padding:3px 0px;\">\r" +
    "\n" +
    "            <li class=\"pointerHand gap\"><a ng-click='citySet(2,\"Bangalore\"); getDoctorList(specializationId,selectedSpecialization);' >Bangalore</a></li>\r" +
    "\n" +
    "            <li class=\"pointerHand no_gap\"><a ng-click='citySet(1,\"Indore\"); getDoctorList(specializationId,selectedSpecialization);' >Indore</a></li>\r" +
    "\n" +
    "          </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "          </h4>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "<!--      <div class=\"row raisedbox\">\r" +
    "\n" +
    "      <h4>\r" +
    "\n" +
    "        {{selectedSpecialization}}\r" +
    "\n" +
    "      </h4>\r" +
    "\n" +
    "</div> -->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div class=\"row raisedbox\">\r" +
    "\n" +
    "        <div dir-paginate=\"x in doctorList | filter : search | itemsPerPage: pageSize\" current-page=\"currentPage\"\r" +
    "\n" +
    "             pagination-id=\"doctorPagination\"  ng-click=\"getDoctor(x.id);\">\r" +
    "\n" +
    "          <div class=\"row\">\r" +
    "\n" +
    "          <div class=\"col-lg-1\"></div>\r" +
    "\n" +
    "            <div class=\"col-lg-3\">\r" +
    "\n" +
    "              <div style=\"height: 135px; border-radius: 4px;\">\r" +
    "\n" +
    "                <img src=\"resources/img/doctor.png\" class=\"border-img\">\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "              <!--<div>{{x.availability}}</div>-->\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"col-lg-8\" style=\"line-height: 28px; font-size: 16px;\">\r" +
    "\n" +
    "              <div style=\"font-size: 24px; font-weight: 600; color: #61C354;\">Dr. {{x.name}}</div>\r" +
    "\n" +
    "              <div style=\"font-size: 18px;\">{{x.qualification}}</div>\r" +
    "\n" +
    "              <div>{{x.specialization}}</div>\r" +
    "\n" +
    "              <div>{{x.hospitalName}}</div>\r" +
    "\n" +
    "              <div>\r" +
    "\n" +
    "                {{x.localityName}}\r" +
    "\n" +
    "                        <span class=\"centeralign pull-right\">\r" +
    "\n" +
    "                        <a class=\"pointerHand btn btn-primary\"  ng-click=\"doctorShow=!doctorShow\">View Profile</a>\r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "              <!--<div><i class=\"fa fa-inr\"></i> {{x.fee}}</div>-->\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "          <div class=\"row\" class=\"\"  style=\"padding-left:30px;  padding-top: 10px;\" ng-hide=\"doctorShow\">\r" +
    "\n" +
    "            <!--<img src=\"images/doctor.jpg\">-->\r" +
    "\n" +
    "            <h3 style=\"background-color: none;\">Specialization</h3>\r" +
    "\n" +
    "            {{x.specialization}}<br>\r" +
    "\n" +
    "            <h3>Qualification</h3>\r" +
    "\n" +
    "            {{x.qualification}}<br>\r" +
    "\n" +
    "            <h3>Locality </h3>\r" +
    "\n" +
    "            {{x.localityName}}<br>\r" +
    "\n" +
    "            <h3>Hospital / Clinic Name</h3>\r" +
    "\n" +
    "            {{x.hospitalName}}<br>\r" +
    "\n" +
    "            <h3>Address</h3>\r" +
    "\n" +
    "            {{x.doctorAddress}}\r" +
    "\n" +
    "            <h3>Availabilty</h3>\r" +
    "\n" +
    "            {{x.availability}}<br>\r" +
    "\n" +
    "            <h3>Fees</h3>\r" +
    "\n" +
    "            Rs: {{x.fee}}<br>\r" +
    "\n" +
    "            <h3>Contact</h3>\r" +
    "\n" +
    "            {{x.contact1}}  &nbsp {{x.contact2}}\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-xs-12\">\r" +
    "\n" +
    "          <small></small>\r" +
    "\n" +
    "          <div class=\"text-center\">\r" +
    "\n" +
    "            <dir-pagination-controls boundary-links=\"true\" pagination-id=\"doctorPagination\"\r" +
    "\n" +
    "                                     on-page-change=\"pageChangeHandler(newPageNumber)\"\r" +
    "\n" +
    "                                     template-url=\"partials/extras/dirPagination.tpl.html\">\r" +
    "\n" +
    "            </dir-pagination-controls>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <!-- <div class=\"col-lg-2\"><add-page></add-page></div> -->\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('app/partials/extras/aboutus.html',
    "<section class=\"section-padding\" ng-init=\"aboutdesc()\">\r" +
    "\n" +
    "<div class=\"container\" style=\"padding-bottom:20px;\">\r" +
    "\n" +
    "  <div class=\"row raisedbox\" >\r" +
    "\n" +
    "    <div class=\"col-lg-2\"></div>\r" +
    "\n" +
    "    <div class=\"col-lg-8\">\r" +
    "\n" +
    "      <h2 class=\"section-title text-center wow fadeInDown animated\" style=\"visibility: visible; animation-name: fadeInDown;\">WE'VE GOT WHAT YOU NEED!</h2>\r" +
    "\n" +
    "      <hr class=\"light\">\r" +
    "\n" +
    "      <p class=\"text-center wow fadeInDown animated\" style=\"visibility: visible; animation-name: fadeInDown;\">\r" +
    "\n" +
    "        Healthkhoj is changing the way healthcare services are delivered and consumed. We are doing this by bringing different service providers in the patient care cycle together,<br> which means that the people will be able to access everything they need through healthkhoj.\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-lg-2\"></div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  </p>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "    <div class=\"container raisedbox\">\r" +
    "\n" +
    "        <h2 class=\"section-title text-center wow fadeInDown animated\" style=\"visibility: visible; animation-name: fadeInDown;\">Meet The Team</h2><hr class=\"light\">\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"col-sm-6 col-md-3\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "          <div class=\"team-member wow fadeInUp\" data-wow-duration=\"400ms\" data-wow-delay=\"0ms\">\r" +
    "\n" +
    "            <div class=\"team-img\">\r" +
    "\n" +
    "              <img class=\"img-responsive\" src=\"resources/img/team/ashish.jpg\" alt=\"\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"team-info\">\r" +
    "\n" +
    "              <h3>Ashish Tiwari</h3>\r" +
    "\n" +
    "              <!--<span>Co-Founder</span>-->\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p class=\"text-muted\">B.Tech. ( IIT - Kharagpur)<br>\r" +
    "\n" +
    "              M.Tech. (IIT - Kharagpur)<br>\r" +
    "\n" +
    "              4+ yrs work exp with companies like Cisco Systems and American International Group\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "            <ul class=\"social-icons\">\r" +
    "\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\r" +
    "\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\r" +
    "\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\r" +
    "\n" +
    "              <li><a href=\"https://in.linkedin.com/pub/ashish-tiwari/16/6b2/475\"><i class=\"fa fa-linkedin\"></i></a></li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-sm-6 col-md-3\">\r" +
    "\n" +
    "          <div class=\"team-member wow fadeInUp\" data-wow-duration=\"400ms\" data-wow-delay=\"100ms\">\r" +
    "\n" +
    "            <div class=\"team-img\">\r" +
    "\n" +
    "              <img class=\"img-responsive\" src=\"resources/img/team/ratnesh.jpg\" alt=\"\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"team-info\">\r" +
    "\n" +
    "              <h3>Ratnesh Pandey</h3>\r" +
    "\n" +
    "              <!--<span>Project Manager</span>-->\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p class=\"text-muted\">M.B.A. (IIM - Lucknow)<br>\r" +
    "\n" +
    "              10+ yrs of experience in Marketing domain\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "            <br>\r" +
    "\n" +
    "            <ul class=\"social-icons\">\r" +
    "\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\r" +
    "\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\r" +
    "\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\r" +
    "\n" +
    "              <li><a href=\"https://www.google.com/url?q=https%3A%2F%2Fwww.linkedin.com%2Fprofile%2Fview%3Fid%3DAAMAAAEYE9wBA2yS_fJ9Lk9QUSDLLmU2clCkhlo%26authType%3Dname%26authToken%3DEjLC%26trk%3Dhp-feed-member-name&sa=D&sntz=1&usg=AFQjCNF9v072-SDt8v5GDgVaR-p6nc4HmA\"><i class=\"fa fa-linkedin\"></i></a></li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-sm-6 col-md-3\">\r" +
    "\n" +
    "          <div class=\"team-member wow fadeInUp\" data-wow-duration=\"400ms\" data-wow-delay=\"200ms\">\r" +
    "\n" +
    "            <div class=\"team-img\">\r" +
    "\n" +
    "              <img class=\"img-responsive\" src=\"resources/img/team/prabhas.jpg\" alt=\"\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"team-info\">\r" +
    "\n" +
    "              <h3>P.Thakur</h3>\r" +
    "\n" +
    "              <!--<span>Designer</span>-->\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p class=\"text-muted\">B.Tech. (IIT-Bombay)<br>\r" +
    "\n" +
    "              M.B.A.(XLRI-Jamshedpur)<br>\r" +
    "\n" +
    "              15+ yrs of experience in Finance and M&A domains\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "            <br>\r" +
    "\n" +
    "            <ul class=\"social-icons\">\r" +
    "\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\r" +
    "\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\r" +
    "\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\r" +
    "\n" +
    "              <li><a href=\"https://www.linkedin.com/profile/view?id=AAkAAACDScUBQmmljV_E2KNmnzaBTOZRuwBDfxY&authType=NAME_SEARCH&authToken=-FLF&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A8604101%2CauthType%3ANAME_SEARCH%2Cidx%3A1-4-4%2CtarId%3A1449470264743%2Ctas%3Apra\"><i class=\"fa fa-linkedin\"></i></a></li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-sm-6 col-md-3\">\r" +
    "\n" +
    "          <div class=\"team-member wow fadeInUp\" data-wow-duration=\"400ms\" data-wow-delay=\"300ms\">\r" +
    "\n" +
    "            <div class=\"team-info\">\r" +
    "\n" +
    "              <h3>Medical Advisory Board</h3>\r" +
    "\n" +
    "              <!--<span>UI/UX</span>-->\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <p class=\"text-muted\">Dr. Sanyam Gupta ( General Physician) <br>\r" +
    "\n" +
    "              Dr. Avinash Gautam ( Surgeon )<br>\r" +
    "\n" +
    "              Dr. Nagendra Singh ( Pediatrician )<br>\r" +
    "\n" +
    "              Dr. Shailendra Singh ( Medicine )<br>\r" +
    "\n" +
    "              Dr. Chatrapal Chauhan ( General Physician )<br>\r" +
    "\n" +
    "              Dr. Sunil Singh ( Dermatologist )<br>\r" +
    "\n" +
    "              Dr. Sona Soni ( Gynecologist )<br>\r" +
    "\n" +
    "              Dr. Vanndana Singh ( Gynecologist )<br>\r" +
    "\n" +
    "              Dr. Rajesh Rathore ( General Physician )<br>\r" +
    "\n" +
    "              Dr. Abhuday Singh ( Psychiatric )<br>\r" +
    "\n" +
    "              Dr. Arpit Airen ( Ophthalmologist )<br>\r" +
    "\n" +
    "              Dr. Sunil Sengar ( Dentist )\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  </section>\r" +
    "\n"
  );


  $templateCache.put('app/partials/extras/dirPagination.tpl.html',
    "<ul class=\"pagination\" ng-if=\"1 < pages.length\">\r" +
    "\n" +
    "  <li ng-if=\"boundaryLinks\" ng-class=\"{ disabled : pagination.current == 1 }\">\r" +
    "\n" +
    "    <a href=\"\" ng-click=\"setCurrent(1)\">&laquo;</a>\r" +
    "\n" +
    "  </li>\r" +
    "\n" +
    "  <li ng-if=\"directionLinks\" ng-class=\"{ disabled : pagination.current == 1 }\" class=\"ng-scope\">\r" +
    "\n" +
    "    <a href=\"\" ng-click=\"setCurrent(pagination.current - 1)\" class=\"ng-binding\">‹</a>\r" +
    "\n" +
    "  </li>\r" +
    "\n" +
    "  <li ng-repeat=\"pageNumber in pages track by $index\" ng-class=\"{ active : pagination.current == pageNumber, disabled : pageNumber == '...' }\">\r" +
    "\n" +
    "    <a href=\"\" ng-click=\"setCurrent(pageNumber)\">{{ pageNumber }}</a>\r" +
    "\n" +
    "  </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <li ng-if=\"directionLinks\" ng-class=\"{ disabled : pagination.current == pagination.last }\" class=\"ng-scope\">\r" +
    "\n" +
    "    <a href=\"\" ng-click=\"setCurrent(pagination.current + 1)\" class=\"ng-binding\">›</a>\r" +
    "\n" +
    "  </li>\r" +
    "\n" +
    "  <li ng-if=\"boundaryLinks\"  ng-class=\"{ disabled : pagination.current == pagination.last }\">\r" +
    "\n" +
    "    <a href=\"\" ng-click=\"setCurrent(pagination.last)\">&raquo;</a>\r" +
    "\n" +
    "  </li>\r" +
    "\n" +
    "</ul>\r" +
    "\n"
  );


  $templateCache.put('app/partials/extras/privacypolicy.html',
    "<section class=\"section-padding\" ng-init=\"privacydesc()\">\r" +
    "\n" +
    "<div class=\"container\">\r" +
    "\n" +
    "  <div class=\"row raisedbox\" >\r" +
    "\n" +
    "    <div class=\"col-lg-2\"></div>\r" +
    "\n" +
    "    <div class=\"col-lg-8\">\r" +
    "\n" +
    "      <h2 class=\"section-title text-center wow fadeInDown animated\" style=\"visibility: visible; animation-name: fadeInDown;\">Privacy Policy</h2>\r" +
    "\n" +
    "      <p class=\"text-center wow fadeInDown animated\" style=\"visibility: visible; animation-name: fadeInDown;\">\r" +
    "\n" +
    "        Asprat Systems Pvt Ltd portal (www.healthkhoj.com) and apps based on HealthKhoj Portal  do not automatically capture any specific personal information from you, (like name, phone number or e-mail address), that allows us to identify you individually.<br><br>\r" +
    "\n" +
    "        If www.healthkhoj.com requests you to provide personal information, you will be informed for the particular purposes for which the information is gathered and adequate security measures will be taken to protect your personal information.<br><br>\r" +
    "\n" +
    "        We do not sell or share any personally identifiable information volunteered on the www.healthkhoj.com site to any third party (public/private). Any information provided to this Portal will be protected from loss, misuse, unauthorized access or disclosure, alteration, or destruction.<br><br>\r" +
    "\n" +
    "        We gather certain information about the User, such as domain name, browser type, operating system, the date and time of the visit and the pages visited, etc.We make no attempt to link these addresses with the identity of individuals visiting our site unless an attempt to damage the site has been detected.<br><br>\r" +
    "\n" +
    "      </p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-lg-2\"></div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('app/partials/extras/termsofuse.html',
    "<section class=\"section-padding\" ng-init=\"termsdesc()\">\r" +
    "\n" +
    "<div class=\"container\">\r" +
    "\n" +
    "  <div class=\"row raisedbox\">\r" +
    "\n" +
    "    <div class=\"col-lg-2\"></div>\r" +
    "\n" +
    "    <div class=\"col-lg-8\">\r" +
    "\n" +
    "      <h2 class=\"section-title text-center wow fadeInDown animated\" style=\"visibility: visible; animation-name: fadeInDown;\">Terms of Use</h2>\r" +
    "\n" +
    "      <p class=\"text-center wow fadeInDown animated\" style=\"visibility: visible; animation-name: fadeInDown;\">\r" +
    "\n" +
    "        This website is designed, developed and published byAsprat Systems Pvt Ltd.,<br><br> All efforts have been made to ensure the accuracy and currency of the content on this website, They do not substitute the expert medical advice. The same should not be construed as a statement of medical advise or used for any medical treatment purposes. Asprat Systems accepts no responsibility in relation to the accuracy, completeness, usefulness or otherwise, of the contents. Users are advised to verify/check any information with the relevant healthcare providers and/or other source(s), and to obtain any appropriate professional advice before acting on the information provided in the Portal.<br><br> In no event will the Asprat Systems Pvt Ltd be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the use of this Portal.<br><br> Links to other websites that have been included on this Portal are provided for public convenience only. Asprat Systems Pvt Ltd is not responsible for the contents or reliability of linked websites and does not necessarily endorse the view expressed within them. We cannot guarantee the availability of such linked pages at all times.<br><br> These terms and conditions shall be governed by and construed in accordance with the Indian Laws. Any dispute arising under these terms and conditions shall be subject to the exclusive jurisdiction of the courts of Bangalore.<br><br>\r" +
    "\n" +
    "      </p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-lg-2\"></div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('app/partials/healtharticles/healtharticle.html',
    "\r" +
    "\n" +
    "    <section class=\"section-padding\">\r" +
    "\n" +
    "        <div class=\"container\" ng-init=\"getDefault();\" ng-cloak ng-hide=\"loading\">\r" +
    "\n" +
    "            <div class=\"row raisedbox\">\r" +
    "\n" +
    "        <div class=\"col-lg-6\">\r" +
    "\n" +
    "            <div style=\"padding: 20px 0px\">\r" +
    "\n" +
    "                <img class=\"img-responsive thumbnail \" ng-src=\"{{categoryItem.image}}\" width=\"400px\" height=\"200px\">\r" +
    "\n" +
    "                <div class=\"cat-detail-info\" style=\"font-size:14px; \">\r" +
    "\n" +
    "                    <a class=\"entry-author margin-right-30  bold pointerHand\" ng-click=\"updateCategoryLikes(categoryItem.id)\">&nbsp Likes {{likes}} </a>| &nbsp <a class=\"entry-author margin-right-30  bold\">Views {{categoryItem.views}}</a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div style=\"text-align: justify;\" ng-bind-html=\"categoryItem.detail  | sanitize\"></div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-lg-2\"></div>\r" +
    "\n" +
    "            <div  class=\"col-lg-4\"  ng-hide=\"homeArticle\">\r" +
    "\n" +
    "        <h3>Read This Next</h3>\r" +
    "\n" +
    "           <div  ng-repeat=\"x in categoryTips | limitTo : 4\" ng-if=\"x.id!=categoryItem.id\">\r" +
    "\n" +
    "                <div class=\"cat-detail-image\">\r" +
    "\n" +
    "                    <img class=\"img-responsive thumbnail pointerHand\" ng-src=\"{{x.image}}\" width=\"400px\" height=\"200px\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                    <div class=\"entry-content\">\r" +
    "\n" +
    "                        <h4>{{x.title}}</h4>\r" +
    "\n" +
    "                        <span class=\"entry-author margin-right-30  bold\"><a>Views &nbsp;{{x.views}}</a></span>|\r" +
    "\n" +
    "                        <span class=\"entry-category margin-right-30 margin-left-30 bold\"><a>Likes &nbsp;{{x.likes}}</a></span>\r" +
    "\n" +
    "                        <a  class=\"read-more\" style=\"text-align: right; margin-left: 115px;\" ui-sref=\"healthtiparticle({Category:categoryid,id:x.id,title:x.title})\">\r" +
    "\n" +
    "              Read More\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "                        <div style=\"margin-top: 6px;\r" +
    "\n" +
    "                     margin-bottom: 10px; border: 1px solid #ccc;\"></div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        \r" +
    "\n" +
    "         \r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </section>"
  );


  $templateCache.put('app/partials/healtharticles/healthtips.html',
    "<section class=\"section-padding\">\r" +
    "\n" +
    "   <div class=\"container\"  id=\"category\" ng-init='getCategoryTips();'>\r" +
    "\n" +
    "      <div class=\"row raisedbox\">\r" +
    "\n" +
    "            <div class=\"row\" style=\"margin-top: 30px; padding-bottom: 10px;\">\r" +
    "\n" +
    "               <div class=\"col-lg-8\" >\r" +
    "\n" +
    "\r" +
    "\n" +
    "               </div>\r" +
    "\n" +
    "               <div class=\"col-lg-4\">\r" +
    "\n" +
    "               </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-lg-4\" style=\"padding-left:40px; padding-top:18px;\">\r" +
    "\n" +
    "                  <div class=\"form-group raisedbox\" >\r" +
    "\n" +
    "                     <input type=\"text\" name=\"name\" class=\"form-control\" ng-model=\"categorySearch\" placeholder=\"Search the article\" style=\"padding: 2px; font-size: 16px; width: 315px; height: 36px; border: 1px solid #30ABE6;\">\r" +
    "\n" +
    "                  </div>\r" +
    "\n" +
    "            <div class=\"single-price price-one raisedbox\">\r" +
    "\n" +
    "                        <div class=\"table-heading\">\r" +
    "\n" +
    "                            <p class=\"plan-name\">Other Sections</p>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <ul>\r" +
    "\n" +
    "                     <li class=\"pointerHand\"><a ng-click='setCategory(\"Cancer\",\"CANCER\")'>Cancer</a></li>\r" +
    "\n" +
    "                     <li class=\"pointerHand\"><a ng-click='setCategory(\"Diabetes\",\"DIABETES\");'>Diabetes</a></li>\r" +
    "\n" +
    "                     <li class=\"pointerHand\"><a ng-click='setCategory(\"Respiratory Diseases\",\"RESPIRATORY_DISEASES\");'>Respiratory Diseases</a></li>\r" +
    "\n" +
    "                     <li class=\"pointerHand\"><a ng-click='setCategory(\"Mental Health\",\"MENTAL_HEALTH\");'>Mental Health</a></li>\r" +
    "\n" +
    "                     <li class=\"pointerHand\"><a ng-click='setCategory(\"Heart Disease\",\"HEART_DISEASES\");'>Heart Disease</a></li>\r" +
    "\n" +
    "                     <li class=\"pointerHand\"><a ng-click='setCategory(\"General Health\",\"GENERAL_HEALTH\");'>General Health</a></li>\r" +
    "\n" +
    "               </ul>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "               <div class=\"col-lg-4\" ng-repeat=\"x in categoryTips | filter : categorySearch\">\r" +
    "\n" +
    "                  <div class=\"single-blog two-column\">\r" +
    "\n" +
    "                                <div class=\"post-thumb\">\r" +
    "\n" +
    "                                    <a ui-sref=\"healthtiparticle({Category:categoryid,id:x.id,title:x.title})\"><img ng-src=\"{{x.image}}\" class=\"img-responsive\"></a>\r" +
    "\n" +
    "                                    <!-- <div class=\"post-overlay\">\r" +
    "\n" +
    "                                        <span class=\"uppercase\"><a href=\"#\">14 <br><small>Feb</small></a></span>\r" +
    "\n" +
    "                                    </div> -->\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"post-content overflow\">\r" +
    "\n" +
    "                                    \r" +
    "\n" +
    "                                    <!-- <h3 class=\"post-author\"><a href=\"#\">Posted by micron News</a></h3> -->\r" +
    "\n" +
    "                                    <p ng-bind-html=\"x.detail | sanitize\" style=\"height:200px; overflow: hidden; text-overflow: ellipsis; \"></p>\r" +
    "\n" +
    "                                    <a ui-sref=\"healthtiparticle({Category:categoryid,id:x.id,title:x.title})\" class=\"read-more\">View More</a>\r" +
    "\n" +
    "                                    <div class=\"post-bottom overflow\">\r" +
    "\n" +
    "                                        <span class=\"entry-author margin-right-30  bold\"><a >Views &nbsp;{{x.views}}</a></span>|\r" +
    "\n" +
    "                           <span class=\"entry-category margin-right-30 margin-left-30 bold\"><a >Likes &nbsp;{{x.likes}}</a>\r" +
    "\n" +
    "                           </span>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "         \r" +
    "\n" +
    "               </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "   </div>\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('app/partials/healthaz/healthaz.html',
    "<div class=\"container\" ng-hide=\"spinnerActive\">\r" +
    "\n" +
    "    <div class=\"row \" ng-init=\"getAllArticles();\">\r" +
    "\n" +
    "        <div class=\"raisedbox col-lg-3\" style=\"overflow-y:auto;\">\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <input type=\"text\" ng-model=\"diseaseSearch\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" style=\" width: 200px; padding: 4px; \" placeholder=\"Search by diseases\" placeholder=\"{{diseaseSearch}}\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <ul style=\"list-style-type: none; list-style: none; margin:0; padding:0;\">\r" +
    "\n" +
    "                <li class=\"pointerHand gap \" ng-repeat=\"x in articleList | filter :diseaseSearch| orderBy : 'title'\">\r" +
    "\n" +
    "                    <a ui-sref='healthazarticle({articleId:x.id,articleName:x.title})'>{{x.title}}</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-lg-9\">\r" +
    "\n" +
    "            <div class=\"row raisedbox\">\r" +
    "\n" +
    "                <div class=\"col-lg-6\" ng-repeat=\"x in articleList|limitTo: 6\" style=\"padding-bottom : 10px;\">\r" +
    "\n" +
    "                     <div class=\"single-blog two-column\">\r" +
    "\n" +
    "                                <div class=\"post-thumb\">\r" +
    "\n" +
    "                                    <a ui-sref=\"healthazarticle({articleId:x.id,articleName:x.name})\"><img ng-src=\"{{x.image}}\" class=\"img-responsive\"></a>\r" +
    "\n" +
    "                                    <!-- <div class=\"post-overlay\">\r" +
    "\n" +
    "                                        <span class=\"uppercase\"><a href=\"#\">14 <br><small>Feb</small></a></span>\r" +
    "\n" +
    "                                    </div> -->\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"post-content overflow\">\r" +
    "\n" +
    "                                    <p ng-bind-html=\"x.html | sanitize\" style=\"height:200px; overflow: hidden; text-overflow: ellipsis; \"></p>\r" +
    "\n" +
    "                                    <a  ui-sref=\"healthazarticle({articleId:x.id,articleName:x.name})\" class=\"read-more\">View More</a>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/partials/healthaz/healthazarticle.html',
    "<div class=\"container\" ng-init='getAllArticles()' ng-cloak ng-hide=\"spinnerActive\">\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "  <!-- AddThis Button BEGIN -->\r" +
    "\n" +
    "    <div style=\"margin-top: 15px;\">\r" +
    "\n" +
    "<div class=\"addthis_sharing_toolbox\" data-url=\"{{url}}\" data-title=\"{{selectedArticle.title}}\" data-media=\"{{selectedArticle.image}}\" data-description=\"{{selectedArticle.metaDesc}}\">\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "      \r" +
    "\n" +
    "  <!-- AddThis Button END -->\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "  <div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-lg-8\" style=\"padding: 0px;\">\r" +
    "\n" +
    "      <div style=\"padding: 20px 0px\">\r" +
    "\n" +
    "        <img class=\"thumbnail \" ng-src=\"{{selectedArticle.image}}\" width=\"400px\" height=\"200px\">\r" +
    "\n" +
    "        <!-- <div >{{selectedArticle.html | htmlToPlaintext}}</div> -->\r" +
    "\n" +
    "        <div ng-bind-html=\"selectedArticle.html | sanitize\"></div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/partials/home/footer.html',
    "<section  id = \"footer\" class=\"raisedbox\">\r" +
    "\n" +
    "<div class=\"container\">\r" +
    "\n" +
    "   <div class=\"row\">\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "         <div class=\"col-lg-8 col-lg-offset-2 text-center\">\r" +
    "\n" +
    "            <h2 class=\"section-heading\">Let's Get In Touch!</h2>\r" +
    "\n" +
    "            <hr class=\"primary\">\r" +
    "\n" +
    "            <p>Healthkhoj is a strategic partner for all the players in the patient HealthCare ecosystem. Get in touch\r" +
    "\n" +
    "               with us today to see how partnering with us will help you bring about a difference\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "         </div>\r" +
    "\n" +
    "         <div class=\"col-lg-4 col-lg-offset-2 text-center\">\r" +
    "\n" +
    "            <i class=\"fa fa-phone fa-3x wow bounceIn\"></i>\r" +
    "\n" +
    "            <p>+91 9900723781</p>\r" +
    "\n" +
    "         </div>\r" +
    "\n" +
    "         <div class=\"col-lg-4 text-center\">\r" +
    "\n" +
    "            <i class=\"fa fa-envelope-o fa-3x wow bounceIn\" data-wow-delay=\".1s\"></i>\r" +
    "\n" +
    "            <p><a href=\"mailto:contact@healthkhoj.com\">contact@healthkhoj.com</a><br>\r" +
    "\n" +
    "               <a href=\"mailto:ashish@healthkhoj.com\">ashish@healthkhoj.com</a>\r" +
    "\n" +
    "               <a href=\"mailto:ratnesh@healthkhoj.com\">ratnesh@healthkhoj.com</a>\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "         </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <br><br><br><br>\r" +
    "\n" +
    "   </div>\r" +
    "\n" +
    "   <div class=\"row\">\r" +
    "\n" +
    "      <div class=\"col-lg-5\">\r" +
    "\n" +
    "         <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-lg-6\">\r" +
    "\n" +
    "               <ul type=\"none\">\r" +
    "\n" +
    "                  <li class=\"pointerHand\"><a ui-sref=\"aboutUs\">About Us</a></li>\r" +
    "\n" +
    "                  <br>\r" +
    "\n" +
    "                  <li class=\"pointerHand\"><a ui-sref=\"terms\">Terms of Use</a></li>\r" +
    "\n" +
    "                  <br>\r" +
    "\n" +
    "                  <li class=\"pointerHand\"><a ui-sref=\"privacy\">Privacy Policy</a></li>\r" +
    "\n" +
    "                  <br>\r" +
    "\n" +
    "               </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"col-lg-6\">\r" +
    "\n" +
    "               <ul type=\"none\" >\r" +
    "\n" +
    "                  <li style=\"margin-bottom: 5px;\">\r" +
    "\n" +
    "                     <a href=\"https://www.facebook.com/healthkhoj\"><i class=\"fa fa-facebook fa-fw\"></i>Facebook</a>\r" +
    "\n" +
    "                  </li>\r" +
    "\n" +
    "                  <br>\r" +
    "\n" +
    "                  <li style=\"margin-bottom: 5px;\">\r" +
    "\n" +
    "                     <a\r" +
    "\n" +
    "                        href=\"https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fhashtag%2Fhealthkhoj&sa=D&sntz=1&usg=AFQjCNEbIOh9StHuNUU86vL2zQVdvfQ1gw\"><i\r" +
    "\n" +
    "                        class=\"fa fa-twitter fa-fw\"></i>Twitter</a>\r" +
    "\n" +
    "                  </li>\r" +
    "\n" +
    "                  <br>\r" +
    "\n" +
    "                  <li>\r" +
    "\n" +
    "                     <a\r" +
    "\n" +
    "                        href=\"https://www.linkedin.com/company/10091294?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A10091294%2Cidx%3A1-1-1%2CtarId%3A1441608067236%2Ctas%3Ahealthkhoj\"><i\r" +
    "\n" +
    "                        class=\"fa fa-linkedin fa-fw\"></i>LinkedIn</a>\r" +
    "\n" +
    "                  </li>\r" +
    "\n" +
    "                  <br>\r" +
    "\n" +
    "               </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "         </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"col-lg-2\" style=\"padding-top:10px\">\r" +
    "\n" +
    "         <!-- <div class=\"col-lg-4 col-lg-offset-3\"> -->\r" +
    "\n" +
    "         <ul type=\"none\">\r" +
    "\n" +
    "            <li  style=\"margin-bottom: 5px;\">\r" +
    "\n" +
    "               <a href=\"https://play.google.com/store/apps/details?id=com.healthkhoj.patient.aplha\">\r" +
    "\n" +
    "                  <!-- <span style=\"padding-bottom:10px;\">Download Healthkhoj App</span> -->\r" +
    "\n" +
    "                  <img alt=\"Get it on Google Play\"  style=\"height: 50px;\"\r" +
    "\n" +
    "                     src=\"resources/img/google-play-badge.png\"/>\r" +
    "\n" +
    "               </a>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <!-- <li style=\"margin-bottom: 5px;\"><a ui-sref=\"hindiHome\">Registration</a></li> -->\r" +
    "\n" +
    "         </ul>\r" +
    "\n" +
    "         <!-- </div> -->\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"col-lg-5\">\r" +
    "\n" +
    "         <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-lg-2\"></div>\r" +
    "\n" +
    "            <div class=\"col-lg-8\"><img style=\"max-width:100%; height:95px;\" src=\"resources/img/footer.png\"></div>\r" +
    "\n" +
    "            <div class=\"col-lg-2\"></div>\r" +
    "\n" +
    "         </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "   </div>\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('app/partials/home/healthazmodule.html',
    "<section ng-init=\"getAllArticles()\" class=\"section-padding\">\r" +
    "\n" +
    "<div class=\"container healthazdivcontainer raisedbox\" >\r" +
    "\n" +
    "<h3 style=\"padding-left: 30px;\" class=\"heading capital\">Health A-Z</h3>\r" +
    "\n" +
    "<div class=\"row healthazdiv\" style=\"padding: 1em 1em 0;\">\r" +
    "\n" +
    "\t<ul class=\"healthazdivlist\">\r" +
    "\n" +
    "\t<li ng-repeat=\"x in articleList|limitTo : 15 | orderBy : 'title'\" style=\"margin-bottom: 1em;\"><a ui-sref=\"healthazarticle({articleId:x.id,articleName:x.title})\">{{x.title}}</a></li>\r" +
    "\n" +
    "\t</ul>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\t<div class=\"row pull-right\" style=\"padding-right:50px;\"><a ui-sref=\"healthazall\">See all health conditions &nbsp; &nbsp;<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></a></div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('app/partials/home/home.html',
    "<operating-procedure></operating-procedure>\n" +
    "<live-webinar></live-webinar>\n" +
    "<home-articles></home-articles>\n" +
    "<section class=\"section-padding\">\n" +
    "   <div class=\"container\">\n" +
    "      <div class=\"row\">\n" +
    "         <div class=\"col-lg-4 modules raisedbox\" style=\"padding-left:30px;\">\n" +
    "            <h3 class=\"heading capital\">Physician Directory</h3>\n" +
    "            Find a Physician in your city <br><br>\n" +
    "            <select ng-model=\"specializationData.selected\"  ng-change=\"selectedSpecialization()\" style=\"width:250px;\">\n" +
    "               <option ng-repeat=\"x in specializationData.specializations\" value=\"{{x.id}}\">{{x.name}}</option>\n" +
    "            </select>\n" +
    "            <br><br>\n" +
    "            <button class=\"btn btn-default btn-send\" ui-sref=\"doctor({specializationId:specializationData.selected,specializationName:specializationData.selectedname})\">Search</button>\n" +
    "         </div>\n" +
    "         <div class=\"col-lg-4 modules raisedbox \" style=\"padding-left:30px;\">\n" +
    "            <h3 class=\"heading capital\">Get Connected</h3>\n" +
    "            <br>\n" +
    "            <div class=\"social-icons centeralign\" >\n" +
    "               <ul class=\"nav nav-pills\">\n" +
    "                  <li><a href=\"https://www.facebook.com/healthkhoj\"><i class=\"fa fa-facebook\">&nbsp; Facebook</i></a></li>\n" +
    "                  <li><a href=\"https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fhashtag%2Fhealthkhoj&sa=D&sntz=1&usg=AFQjCNEbIOh9StHuNUU86vL2zQVdvfQ1gw\"><i class=\"fa fa-twitter\">&nbsp; Twitter</i></a></li>\n" +
    "                  <li><a href=\"https://www.linkedin.com/company/10091294?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A10091294%2Cidx%3A1-1-1%2CtarId%3A1441608067236%2Ctas%3Ahealthkhoj\"><i class=\"fa fa-linkedin\">&nbsp; LinkedIn</i></a></li>\n" +
    "                  <Br><Br>\n" +
    "               </ul>\n" +
    "               <br>\n" +
    "               <a href=\"https://play.google.com/store/apps/details?id=com.healthkhoj.patient.aplha\">\n" +
    "                  <!-- <span style=\"padding-bottom:10px;\">Download Healthkhoj App</span> -->\n" +
    "                  <img alt=\"Get it on Google Play\"  style=\"height: 50px;\"\n" +
    "                     src=\"resources/img/google-play-badge.png\"/>\n" +
    "               </a>\n" +
    "            </div>\n" +
    "         </div>\n" +
    "         <div class=\"col-lg-4\">\n" +
    "            <div class=\"row smallmodules modulebox\">\n" +
    "            <h3 class=\"heading capital\">Symptom Checker</h3><a ui-sref=\"symptomchecker\">\n" +
    "            Understand your health problem and know the best practices for that &nbsp; &nbsp;<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></a>\n" +
    "            </div>\n" +
    "            <div class=\"row smallmodules modulebox\">\n" +
    "            <h3 class=\"heading capital\">Share your story</h3><a ui-sref=\"shareurstory\">Have you suffered from serious illness and came out of difficult time ? &nbsp; &nbsp;<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></a>\n" +
    "            </div>\n" +
    "         </div>\n" +
    "</section>\n" +
    "<healthaz-module></healthaz-module>\n" +
    "<!-- <div ui-view=\"healthazhomemodule\"></div> -->"
  );


  $templateCache.put('app/partials/home/homearticles.html',
    "<section id=\"overview\" ng-init=\"getAllTips()\">\r" +
    "\n" +
    "\t\t<div class=\"container \">\r" +
    "\n" +
    "\t\t\t<div class=\"row raisedbox\">\r" +
    "\n" +
    "    \t\t\t<div class=\"heading-inner text-center\">\r" +
    "\n" +
    "    \t\t\t\t<h2 class=\"\">Health Articles</h2>\r" +
    "\n" +
    "    \t\t\t</div>\r" +
    "\n" +
    "    \t\t</div> <!-- heading row end -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t<div class=\"row raisedbox\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"carousel slide\" id=\"app-carousel\" data-ride=\"carousel\">\r" +
    "\n" +
    "                    <ol class=\"carousel-indicators\">\r" +
    "\n" +
    "                        <li data-target=\"#app-carousel\" data-slide-to=\"0\" class=\"active\"></li>\r" +
    "\n" +
    "                        <li data-target=\"#app-carousel\" data-slide-to=\"1\"></li>\r" +
    "\n" +
    "                        <li data-target=\"#app-carousel\" data-slide-to=\"2\"></li>\r" +
    "\n" +
    "                      </ol>\r" +
    "\n" +
    "\t\t\t\t\t<div class=\"carousel-inner\">\r" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"item active\">\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-lg-4\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"single-blog\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<img ng-src=\"{{cancerTips.image}}\" alt=\"\" />\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<!-- <h2>Lorem ipsum dolor sit amet</h2> -->\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<ul class=\"post-meta\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li><a  ui-sref=\"healthytip({Category:'CANCER'})\">CANCER</a></li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<!-- <li><i class=\"fa fa-clock-o\"></i><strong> Posted On:</strong> Apr 15 2014</li> -->\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"blog-content\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<p ng-bind-html=\"cancerTips.detail | sanitize\" style=\"height:200px; overflow: hidden; text-overflow: ellipsis;\"></p>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<a ui-sref=\"healthtiparticle({Category:'CANCER',id:cancerTips.id,title:cancerTips.title})\" class=\"btn btn-default btn-send\">Read More</a>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "                                <div class=\"col-lg-4\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"single-blog\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<img ng-src=\"{{diabetesTip.image}}\" alt=\"\" />\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<!-- <h2>Lorem ipsum dolor sit amet</h2> -->\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<ul class=\"post-meta\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li><a ui-sref=\"healthytip({Category:'DIABETES'})\">DIABETES</a></li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<!-- <li><i class=\"fa fa-clock-o\"></i><strong> Posted On:</strong> Apr 15 2014</li> -->\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"blog-content\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<p ng-bind-html=\"diabetesTip.detail | sanitize\" style=\"height:200px; overflow: hidden; text-overflow: ellipsis;\"></p>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<a ui-sref=\"healthtiparticle({Category:'DIABETES',id:diabetesTip.id,title:diabetesTip.title})\" class=\"btn btn-default btn-send\">Read More</a>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "                                <div class=\"col-lg-4\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"single-blog\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<img ng-src=\"{{Respiratory.image}}\" alt=\"\" />\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<!-- <h2>Lorem ipsum dolor sit amet</h2> -->\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<ul class=\"post-meta\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li><a ui-sref=\"healthytip({Category:'RESPIRATORY_DISEASES'})\">RESPIRATORY DISEASES</a></li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<!-- <li><i class=\"fa fa-clock-o\"></i><strong> Posted On:</strong> Apr 15 2014</li> -->\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"blog-content\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<p ng-bind-html=\"Respiratory.detail | sanitize\" style=\"height:200px; overflow: hidden; text-overflow: ellipsis;\"></p>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<a ui-sref=\"healthtiparticle({Category:'RESPIRATORY_DISEASES',id:Respiratory.id,title:Respiratory.title})\" class=\"btn btn-default btn-send\">Read More</a>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div> \r" +
    "\n" +
    "\r" +
    "\n" +
    "              <div class=\"item\">\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                 <div class=\"col-lg-4\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"single-blog\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<img ng-src=\"{{mentalHealthTips.image}}\" alt=\"\" />\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<!-- <h2>Lorem ipsum dolor sit amet</h2> -->\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<ul class=\"post-meta\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li><a ui-sref=\"healthytip({Category:'MENTAL_HEALTH'})\">MENTAL HEALTH</a></li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<!-- <li><i class=\"fa fa-clock-o\"></i><strong> Posted On:</strong> Apr 15 2014</li> -->\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"blog-content\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<p ng-bind-html=\"mentalHealthTips.detail | sanitize\" style=\"height:200px; overflow: hidden; text-overflow: ellipsis;\"></p>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<a ui-sref=\"healthtiparticle({Category:'MENTAL_HEALTH',id:mentalHealthTips.id,title:mentalHealthTips.title})\" class=\"btn btn-default btn-send\">Read More</a>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "                                 <div class=\"col-lg-4\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"single-blog\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<img ng-src=\"{{heartDiseasesTips.image}}\" alt=\"\" />\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<!-- <h2>Lorem ipsum dolor sit amet</h2> -->\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<ul class=\"post-meta\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li><a ui-sref=\"healthytip({Category:'HEART_DISEASES'})\">HEART DISEASES</a></li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<!-- <li><i class=\"fa fa-clock-o\"></i><strong> Posted On:</strong> Apr 15 2014</li> -->\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"blog-content\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<p ng-bind-html=\"heartDiseasesTips.detail | sanitize\" style=\"height:200px; overflow: hidden; text-overflow: ellipsis;\"></p>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<a ui-sref=\"healthtiparticle({Category:'HEART_DISEASES',id:heartDiseasesTips.id,title:heartDiseasesTips.title})\" class=\"btn btn-default btn-send\">Read More</a>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "                                 <div class=\"col-lg-4\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"single-blog\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<img ng-src=\"{{generalHealthTip.image}}\" alt=\"\" />\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<!-- <h2>Lorem ipsum dolor sit amet</h2> -->\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<ul class=\"post-meta\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li><a ui-sref=\"healthytip({Category:'GENERAL_HEALTH'})\">GENERAL HEALTH</a></li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<!-- <li><i class=\"fa fa-clock-o\"></i><strong> Posted On:</strong> Apr 15 2014</li> -->\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"blog-content\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<p ng-bind-html=\"generalHealthTip.detail | sanitize\" style=\"height:200px; overflow: hidden; text-overflow: ellipsis;\"></p>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<a ui-sref=\"healthtiparticle({Category:'GENERAL_HEALTH',id:generalHealthTip.id,title:generalHealthTip.title})\" class=\"btn btn-default btn-send\">Read More</a>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                  <div class=\"item\">\r" +
    "\n" +
    "                            <div class=\"row \">\r" +
    "\n" +
    "                            <div class=\"col-lg-4 col-lg-offset-4\">\r" +
    "\n" +
    "                            \t\t<div class=\"single-blog centeralign\" style=\"width:362.66px; height:475px;\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<div style=\"position: relative; top: 50%; transform: translateY(-50%);\"><h3>Check Out Whole Article Section</h3>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<a ui-sref=\"healthytip({Category:'CANCER'})\" class=\"btn btn-default btn-send\">Read All</a>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                       \r" +
    "\n" +
    "\t\t\t\t\t</div> \r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t\t  <a class=\"left carousel-control\" href=\"#app-carousel\" role=\"button\" data-slide=\"prev\">\r" +
    "\n" +
    "\t\t\t\t\t    <span aria-hidden=\"true\"><img src=\"resources/img/arrow-left.png\" alt=\"\"></span>\r" +
    "\n" +
    "\t\t\t\t\t  </a>\r" +
    "\n" +
    "\t\t\t\t\t  <a class=\"right carousel-control\" href=\"#app-carousel\" role=\"button\" data-slide=\"next\">\r" +
    "\n" +
    "\t\t\t\t\t    <span  aria-hidden=\"true\"> <img src=\"resources/img/arrow-right.png\" alt=\"\"></span>\r" +
    "\n" +
    "\t\t\t\t\t  </a>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</section>\r" +
    "\n"
  );


  $templateCache.put('app/partials/home/liveWebinar.html',
    "<section id=\"blog\" class=\"section-padding\">\r" +
    "\n" +
    "        <div class=\"container\">\r" +
    "\n" +
    "            <div class=\"row raisedbox\">\r" +
    "\n" +
    "            <div class=\"heading-inner text-center\">\r" +
    "\n" +
    "            <h2 class=\"heading\">Live Interaction with Medical Specialist </h2>\r" +
    "\n" +
    "            <hr>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "                <div class=\"timeline-blog overflow padding-top padding-bottom\">\r" +
    "\n" +
    "                    <div class=\"timeline-date text-center row\">\r" +
    "\n" +
    "                        <a class=\"btn btn-common\">Upcoming Sessions</a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"timeline-divider overflow padding-bottom\">\r" +
    "\n" +
    "                        <div class=\"col-sm-6 padding-right arrow-right wow fadeInLeft \" data-wow-duration=\"1000ms\" data-wow-delay=\"300ms\">\r" +
    "\n" +
    "                            <div class=\"single-blog timeline\">\r" +
    "\n" +
    "                                <div class=\"single-blog-wrapper\">\r" +
    "\n" +
    "                                    <div class=\"post-thumb\">\r" +
    "\n" +
    "                                        <img src=\"resources/img/Asthama_webinar.jpg\" class=\"img-responsive\" alt=\"\">\r" +
    "\n" +
    "                                        <div class=\"post-overlay\">\r" +
    "\n" +
    "                                           <span><a ui-sref=\"asthma\">15<br><small>May</small></a></span>\r" +
    "\n" +
    "                                       </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"post-content overflow\">\r" +
    "\n" +
    "                                    <h2 class=\"post-title bold\"><a href=\"blogdetails.html\">Are you able to manage Asthma?</a></h2>\r" +
    "\n" +
    "                                    <!-- <h3 class=\"post-author\"><a href=\"#\">Posted by micron News</a></h3> -->\r" +
    "\n" +
    "                                    <p>HealthKhoj Invites you to join Live online interaction on How to Manage and Control Asthma: Myth and Facts of Asthma with Pulmonary Expert Dr. Gyanendra Agrawal.</p>\r" +
    "\n" +
    "                                    <a ui-sref=\"asthma\" class=\"read-more\">Register</a>\r" +
    "\n" +
    "                                    <div class=\"post-bottom overflow\">\r" +
    "\n" +
    "                                        <span class=\"post-date pull-left\">May 15 2016 <br>Time : 3 Pm – 4 Pm </span>\r" +
    "\n" +
    "                                        <!-- <span class=\"comments-number pull-right\"><a href=\"#\">3 comments</a></span> -->\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-sm-6 padding-left padding-top arrow-left wow fadeInRight\" data-wow-duration=\"1000ms\" data-wow-delay=\"300ms\">\r" +
    "\n" +
    "                            <div class=\"single-blog timeline\">\r" +
    "\n" +
    "                                <div class=\"single-blog-wrapper\">\r" +
    "\n" +
    "                                    <div class=\"post-thumb\">\r" +
    "\n" +
    "                                        <img src=\"resources/img/heart_webinar.jpg\" class=\"img-responsive\" alt=\"\">\r" +
    "\n" +
    "                                        <div class=\"post-overlay\">\r" +
    "\n" +
    "                                           <span class=\"uppercase\"><a ui-sref=\"heartdisease\">28 <br><small>May</small></a></span>\r" +
    "\n" +
    "                                       </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"post-content overflow\">\r" +
    "\n" +
    "                                    <h2 class=\"post-title bold\"><a href=\"blogdetails.html#\">Prevention and Management of heart disease</a></h2>\r" +
    "\n" +
    "                                    <p>HealthKhoj Invites you to join Live online interaction on Prevention and Management of heart disease with Top Cardiologist Dr. Prasad M Bhat.</p>\r" +
    "\n" +
    "                                    <a ui-sref=\"heartdisease\" class=\"read-more\">Register</a>\r" +
    "\n" +
    "                                    <div class=\"post-bottom overflow\">\r" +
    "\n" +
    "                                        <span class=\"post-date pull-left\">May 28 2016</span>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                                        <div class=\"timeline-date text-center\">\r" +
    "\n" +
    "                        <a ui-sref=\"previousWebinar\" class=\"btn btn-common\">Previous Sessions</a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </section>\r" +
    "\n" +
    "    <!--/#blog-->"
  );


  $templateCache.put('app/partials/home/navBar.html',
    "<style>\r" +
    "\n" +
    "  .verticalLine {\r" +
    "\n" +
    "    border-left: thick solid #ff0000;\r" +
    "\n" +
    "}\r" +
    "\n" +
    "</style>\r" +
    "\n" +
    "<header id=\"header\">      \r" +
    "\n" +
    "        <div class=\"navbar navbar-inverse navbar-fixed-top raisedbox\" role=\"banner\"  style=\"background:#F7F7F7;\">\r" +
    "\n" +
    "            <div class=\"container\" style=\"padding-bottom:10px;padding-top:10px;\">\r" +
    "\n" +
    "                <div class=\"navbar-header\">\r" +
    "\n" +
    "                    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r" +
    "\n" +
    "                        <span class=\"sr-only\">Toggle navigation</span>\r" +
    "\n" +
    "                        <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "                        <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "                        <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                    <div class=\"verticalLine\">\r" +
    "\n" +
    "                    <a class=\"navbar-brand\" ui-sref=\"homestate\">\r" +
    "\n" +
    "                     <h1 style=\"padding-left:20px;\"><img src=\"resources/img/hk.png\" alt=\"logo\"></h1>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"collapse navbar-collapse\" style=\"padding-top:15px;\">\r" +
    "\n" +
    "                    <ul class=\"nav navbar-nav navbar-right\">\r" +
    "\n" +
    "                    <li class=\"dropdown\">\r" +
    "\n" +
    "              <a class=\"pointerHand page-scroll\" id=\"dropdownMenu1\"  data-toggle=\"dropdown\"\r" +
    "\n" +
    "                 aria-haspopup=\"true\" aria-expanded=\"true\">\r" +
    "\n" +
    "                <span style=\"font-size:18px;\">Health Tools and Guidance</span><i class=\"fa fa-angle-down\"></i>\r" +
    "\n" +
    "              </a>\r" +
    "\n" +
    "              <div class=\"dropdown-menu raisedbox\" aria-labelledby=\"dropdownMenu1\" style=\"width:800px; background:#F7F7F7;\">\r" +
    "\n" +
    "                    <h3>Guidance links</h3>\r" +
    "\n" +
    "                    <div class=\"row\" style=\"padding: 0px;\">\r" +
    "\n" +
    "                        <div class=\"col-lg-4\"><a  ui-sref=\"healthytip({Category:'CANCER'})\">Cancer</a><br><a ui-sref=\"healthytip({Category:'DIABETES'})\">DIABETES</a></div>\r" +
    "\n" +
    "                        <div class=\"col-lg-4\"><a ui-sref=\"healthytip({Category:'RESPIRATORY_DISEASES'})\">RESPIRATORY DISEASES</a> <br><a ui-sref=\"healthytip({Category:'MENTAL_HEALTH'})\">MENTAL HEALTH</a></div>\r" +
    "\n" +
    "                        <div class=\"col-lg-4\"><a ui-sref=\"healthytip({Category:'HEART_DISEASES'})\">HEART DISEASES</a><br><a ui-sref=\"healthytip({Category:'GENERAL_HEALTH'})\">GENERAL HEALTH</a></div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                <h3>Health Tools</h3>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-lg-6\"><a ui-sref=\"symptomchecker\">Symptom Guide Tool</a></div>\r" +
    "\n" +
    "                        <div class=\"col-lg-6\"><a ui-sref=\"symptomchecker\">Pregnancy Tracker</a></div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "              </li>\r" +
    "\n" +
    "               <li  style=\"margin-bottom: 5px;\">\r" +
    "\n" +
    "          <a href=\"https://play.google.com/store/apps/details?id=com.healthkhoj.patient.aplha\">\r" +
    "\n" +
    "            <!-- <span style=\"padding-bottom:10px;\">Download Healthkhoj App</span> -->\r" +
    "\n" +
    "            <img alt=\"Get it on Google Play\"  style=\"height: 30px;\"\r" +
    "\n" +
    "                 src=\"resources/img/google-play-badge.png\"/></a></li>\r" +
    "\n" +
    "              \r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </header>\r" +
    "\n" +
    "    <!--/#header-->"
  );


  $templateCache.put('app/partials/home/operatingprocedure.html',
    " <section class=\"section-padding\">\r" +
    "\n" +
    "        <div class=\"container\">\r" +
    "\n" +
    "            <div class=\"row raisedbox\"  style=\"background-image:url(../resources/img/slider-bg.png); height: 470px;\">\r" +
    "\n" +
    "                <div class=\"main-slider\"  style=\"text-align: center; vertical-align: center;\">\r" +
    "\n" +
    "                    <div class=\"slide-text\" style=\"padding-top: 110px;\">\r" +
    "\n" +
    "                        <h1 class=\"capital\" style=\"color: #1FACE3;font-weight: 700;\">Looking for</h1>\r" +
    "\n" +
    "                        <h3 class=\"capital\">Transparent/Reliable/Cost Effective: Medical Procedure/Operation/Surgery?</h3><br>\r" +
    "\n" +
    "<!-- Single button -->\r" +
    "\n" +
    "<div class=\"btn-group\">\r" +
    "\n" +
    "  <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"width: 100%;  padding-left:30px; padding-right:30px;\">\r" +
    "\n" +
    "   {{selectedType}} &nbsp;<span class=\"caret\"></span>\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <ul class=\"dropdown-menu\" style=\"width: 100%;\">\r" +
    "\n" +
    "    <li ng-click=\"selectedType = 'Selection 1';\"><a href=\"\">Selection 1</a></li>\r" +
    "\n" +
    "    <li ng-click=\"selectedType = 'Selection 2';\"><a href=\"\">Selection 2</a></li>\r" +
    "\n" +
    "  </ul>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<!-- Single button -->\r" +
    "\n" +
    "<div class=\"btn-group\">\r" +
    "\n" +
    "  <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"width: 100%;\">\r" +
    "\n" +
    "    {{operatedType}} &nbsp;<span class=\"caret\"></span>\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <ul class=\"dropdown-menu\" style=\"width: 100%;\">\r" +
    "\n" +
    "    <li ng-click=\"operatedType = 'Operation 1';\"><a href=\"\">Operation 1</a></li>\r" +
    "\n" +
    "    <li ng-click=\"operatedType = 'Operation 2';\"><a href=\"\">Operation 2</a></li>\r" +
    "\n" +
    "    <li ng-click=\"operatedType = 'Operation 3';\"><a href=\"\">Operation 3</a></li>\r" +
    "\n" +
    "  </ul>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<button class=\"btn btn-default btn-send\" ui-sref=\"operatingInfo\">Search</button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </section>"
  );


  $templateCache.put('app/partials/operatingInformation/operatingInfo.html',
    "<style type=\"text/css\">\r" +
    "\n" +
    "\t.operatingcontainer { position: relative;float: left; margin-left: 10px; }\r" +
    "\n" +
    ".operatingcheckbox { position: absolute; top: 0px; left: 0px; }\r" +
    "\n" +
    "</style>\r" +
    "\n" +
    "<section ng-init=\"getAllArticles()\" class=\"section-padding\">\r" +
    "\n" +
    "<div class=\"container raisedbox\">\r" +
    "\n" +
    "Select Procedure\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"container raisedbox\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "<div ng-repeat=\"x in hospitals\" class=\"col-lg-2 col-sm-2\">\r" +
    "\n" +
    "            <!-- <a href=\"\"> -->\r" +
    "\n" +
    "            <!-- <div class=\"raisedbox\"> -->\r" +
    "\n" +
    "            <div class=\"raisedbox\" style=\"padding-left: 10px;\">\r" +
    "\n" +
    "              <input type=\"checkbox\"  class=\"checkbox\">\r" +
    "\n" +
    "              <img class= \"img-responsive\" src=\"{{x.image}}\"> \r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "               <div class=\"raisedbox\" style=\"text-align:center;\">\r" +
    "\n" +
    "                    <a data-toggle=\"modal\" data-target=\"#blog-detail\">{{x.name}}  </a>\r" +
    "\n" +
    "               </div>\r" +
    "\n" +
    "               <!-- </div> -->\r" +
    "\n" +
    "            <!-- </a> -->\r" +
    "\n" +
    "               <div class=\"modal fade\" id=\"blog-detail\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r" +
    "\n" +
    "                              <div class=\"modal-dialog\">\r" +
    "\n" +
    "                                 <div class=\"modal-content\">\r" +
    "\n" +
    "                                    <div class=\"modal-body\">\r" +
    "\n" +
    "                                       <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r" +
    "\n" +
    "                                       <img src=\"images/blog/3.jpg\" alt=\"\" />\r" +
    "\n" +
    "                                       <h2>Lorem ipsum dolor sit amet</h2>\r" +
    "\n" +
    "                                       <p></p>\r" +
    "\n" +
    "                                    </div> \r" +
    "\n" +
    "                                 </div>\r" +
    "\n" +
    "                              </div>\r" +
    "\n" +
    "                           </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('app/partials/symptomcheck/symptomchecker.html',
    "\r" +
    "\n" +
    "<section class=\"section-padding\">\r" +
    "\n" +
    "<style>\r" +
    "\n" +
    "   ul.symptomList li:hover {\r" +
    "\n" +
    "   background: #555;\r" +
    "\n" +
    "   }\r" +
    "\n" +
    "</style>\r" +
    "\n" +
    "<div class=\"container\">\r" +
    "\n" +
    "<div class=\"row raisedbox\">\r" +
    "\n" +
    "  <div id=\"symptomDiv\" class=\"col-lg-4 row\">\r" +
    "\n" +
    "    <div class=\"row\" style=\"padding-left:16px;\">\r" +
    "\n" +
    "      <button ng-click=\"symptomChecker = false; healthAZ = false; freeSearchDos = true;\" Style=\"margin-top: 20px; width:165px;\" class=\"btn btn-default btn-send\">Symptom Checker</button>\r" +
    "\n" +
    "      <!-- <div class=\"col-lg-1\" style=\"width:20px;\"></div> -->\r" +
    "\n" +
    "      <button ng-click=\"symptomChecker = true; healthAZ = true; bodySubPartSelected = true; bodySymptomSelected = true; bodyPartSelected = true; displayDoDiv = true;\" Style=\"margin-top: 20px; width:164px;\" class=\"btn btn-default btn-send\">Symptom Search</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <!--<button ng-click=\"getSearchSymptom(searchSymptom);\" Style=\"padding: 8px; margin-left: 0px; margin-top: 20px;\" class=\"pointerHand btn btn-primary\">Check</button>-->\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"symptomchecker\">\r" +
    "\n" +
    "<symptom-image></symptom-image>\r" +
    "\n" +
    "      <!--first div-- controller khol -->\r" +
    "\n" +
    "      <div id=\"bodySubPartDiv\" tabindex='2' class=\"raisedbox symptom-part-div\" ng-hide=\"bodyPartSelected\">\r" +
    "\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" ng-click=\"bodySubPartSelected = true; bodySymptomSelected = true; bodyPartSelected = true; displayDoDiv = true;\">&times;</button>\r" +
    "\n" +
    "        <span style=\"font-size: 22px;\">Select Body Sub Part</span>\r" +
    "\n" +
    "        <br>\r" +
    "\n" +
    "        <ul class=\"symptomList\" type=\"none\" style=\"padding-left: 0px;\">\r" +
    "\n" +
    "          <li ng-if = \"abdomenSelected\" ><img src=\"resources/img/abdomen.jpg\" /></li>\r" +
    "\n" +
    "          <li ng-repeat=\"x in bodySubParts\" style=\"padding: 8px; margin-top: 5px;\" class=\"pointerHand raisedbox\" ng-click=\"Male ? getSymptoms(x.bodyPartId,x.id):getSymptomsFemale(x.bodyPartId,x.id)\">\r" +
    "\n" +
    "            {{x.bodySubpartName}}\r" +
    "\n" +
    "          </li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <!--second div-->\r" +
    "\n" +
    "      <div id=\"bodysymptomDiv\" tabindex='3' class=\"raisedbox symptom-part-div\" ng-hide=\"bodySubPartSelected\">\r" +
    "\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" ng-click=\"bodySubPartSelected = true; bodySymptomSelected = true; displayDoDiv = true;\">&times;</button>\r" +
    "\n" +
    "        <span style=\"font-size: 22px;\">Select Symptom</span>\r" +
    "\n" +
    "        <ul class=\"symptomList\" type=\"none\" style=\"padding-left: 0px;\">\r" +
    "\n" +
    "          <li ng-repeat=\"x in bodySymptom\" class=\"pointerHand raisedbox textwrap\" style=\"padding: 8px; margin-top: 5px;\" ng-click=\"Male ? getSymptomsDetails(x.bodyPartId,x.bodySubPartId,x.id):getSymptomsDetailsFemale(x.bodyPartId,x.bodySubPartId,x.id)\">{{x.symptomName}}\r" +
    "\n" +
    "          </li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <!--hidden first div to focus-->\r" +
    "\n" +
    "      <div id=\"symptomDetail\" tabindex='4' class=\"raisedbox symptom-part-div\" ng-hide=\"bodySymptomSelected\">\r" +
    "\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" ng-click=\"bodySymptomSelected = true; displayDoDiv = true;\">&times;</button>\r" +
    "\n" +
    "        <span style=\"font-size: 22px;\" ng-if=\"displaySymptomOrDoctor\">Select Further Symptoms</span>\r" +
    "\n" +
    "        <div ng-repeat=\"x in bodySymptomDetails\" style=\"width: 400px; **vertical-align:top**\">\r" +
    "\n" +
    "          <ul class=\"symptomList\" type=\"none\" style=\"padding-left: 0px;\">\r" +
    "\n" +
    "            <li style=\"width: 360px; display: inline-block; margin-right: 5px; \" class=\"pointerHand raisedbox textwrap\" ng-if=\"x.symptomNameTwo!=null\" ng-click='checkValue(x.doDoNotInfo,x.specialization);'>{{x.symptomNameTwo}}\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "          </ul>\r" +
    "\n" +
    "          <div ng-if=\"x.symptomNameTwo==null\" class=\"textwrap\">\r" +
    "\n" +
    "            <span style=\"font-size: 22px;\">Do' & Dont's</span>\r" +
    "\n" +
    "            <div ng-bind-html=\"x.doDoNotInfo | sanitize\"> {{x.doDoNotInfo}}\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-if=\"!displaySymptomOrDoctor\">\r" +
    "\n" +
    "              <button class=\"btn btn-default btn-send\" ng-click=\"Male ? getDoctorBasedOnSymptom(x.specialization) : getDoctorBasedOnSymptomFemale(x.specialization)\">Get Doctor</button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <!--hidden second div to focus-->\r" +
    "\n" +
    "      <div id=\"doDiv\" tabindex='5' class=\"raisedbox symptom-part-div textwrap\" ng-hide=\"displayDoDiv\">\r" +
    "\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" ng-click=\"displayDoDiv = true;\">&times;</button>\r" +
    "\n" +
    "        <span style=\"font-size: 22px;\">Do' & Dont's</span>\r" +
    "\n" +
    "        <div ng-bind-html=\"displayDoText | sanitize\">\r" +
    "\n" +
    "          {{displayDoText}}\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "          <button class=\"btn btn-default btn-send\" ng-click=\"Male ? getDoctorBasedOnSymptom(specializationValue) : getDoctorBasedOnSymptomFemale(specializationValue)\">Get Doctor</button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "<symptom-search></symptom-search>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('app/partials/symptomcheck/symptomimage.html',
    "     <script type=\"text/javascript\" language=\"javascript\">\r" +
    "\n" +
    "   jQuery(function()\r" +
    "\n" +
    "                             {\r" +
    "\n" +
    "              jQuery('#imageMale').maphilight({\"strokeColor\":\"0000ff\",\"strokeWidth\":1,\"fillColor\":\"00ff00\",\"fillOpacity\":0.6});\r" +
    "\n" +
    "              jQuery('#imageFemale').maphilight({\"strokeColor\":\"0000ff\",\"strokeWidth\":1,\"fillColor\":\"00ff00\",\"fillOpacity\":0.6});\r" +
    "\n" +
    "              jQuery('#abdomenMap').maphilight({\"strokeColor\":\"0000ff\",\"strokeWidth\":1,\"fillColor\":\"00ff00\",\"fillOpacity\":0.6});\r" +
    "\n" +
    "                             });\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "   <div id=\"imageDiv\" class=\"symptom-img-div raisedbox\" tabindex='1'>\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "          <div class=\"col-lg-5\" ng-show=\"Male\" Style=\"padding-left: 8px;\" ng-click=\"healthAZ = false;\">\r" +
    "\n" +
    "            <img src=\"resources/img/mob_male.png\" alt=\"\" usemap=\"#Male\" id=\"imageMale\" />\r" +
    "\n" +
    "            <map name=\"Male\" id=\"Male\">\r" +
    "\n" +
    "                     <area alt=\"Head\" title=\"Head\" ng-click=\"getSubBodyParts(0); abdomenSelected = false;\" shape=\"poly\" coords=\"156,88,178,78,168,68,167,66,167,62,168,58,168,54,170,52,172,48,172,40,169,39,170,27,168,21,163,16,156,14,148,16,143,27,143,39,140,38,140,42,140,47,141,53,143,56,144,62,145,65,143,68,133,78\"/>\r" +
    "\n" +
    "                     <area alt=\"Chest\" title=\"Chest\" ng-click=\"getSubBodyParts(1); abdomenSelected = false;\" shape=\"poly\" coords=\"135,82,149,90,156,93,165,90,170,88,177,84,180,85,185,94,187,100,190,109,189,120,185,124,168,126,159,127,152,128,139,127,126,126,124,125,123,120,122,115,122,112,127,101,130,94,131,90\" />\r" +
    "\n" +
    "                     <area alt=\"Hand\" title=\"Hand\" ng-click=\"getSubBodyParts(2); abdomenSelected = false;\" shape=\"poly\" coords=\"133,78,120,109,104,112,88,110,73,113,41,112,35,113,20,113,11,114,8,111,6,108,39,101,80,87,90,88,100,88,114,80\"/>\r" +
    "\n" +
    "                     <area alt=\"Hand\" title=\"Hand\" ng-click=\"getSubBodyParts(2); abdomenSelected = false;\" shape=\"poly\" coords=\"182,79,194,108,215,114,222,112,228,111,241,113,272,110,287,114,293,114,301,116,302,113,305,110,303,105,278,99,270,99,229,88,221,88,211,88,205,85,198,81\" />\r" +
    "\n" +
    "                     <area alt=\"Abdomen\" title=\"Abdomen\" ng-click=\"getSubBodyParts(3); abdomenSelected = true;\" shape=\"poly\" coords=\"127,130,149,132,157,132,171,129,183,129,187,129,182,144,180,151,180,158,182,174,176,181,168,184,156,186,144,185,136,183,130,180,130,165,133,154\" />\r" +
    "\n" +
    "                     <area alt=\"Pelvis\" title=\"Pelvis\" ng-click=\"getSubBodyParts(4); abdomenSelected = false;\" shape=\"poly\" coords=\"130,183,150,192,161,192,168,188,177,184,180,181,174,192,169,199,166,204,163,212,162,223,160,228,156,228,151,227,148,225,146,214,144,205\"/>\r" +
    "\n" +
    "                     <area alt=\"Leg\" title=\"Leg\" ng-click=\"getSubBodyParts(5); abdomenSelected = false;\" shape=\"poly\" coords=\"154,233,122,232,125,277,127,295,126,306,122,325,122,344,130,389,128,398,122,419,126,421,136,420,143,417,141,406,143,398,140,381,141,367,146,343,146,322,144,315,147,301,158,234,162,276,164,296,166,314,166,338,171,370,171,381,170,402,171,414,172,419,178,421,186,422,190,420,187,408,185,398,190,332,188,316,185,293,190,232\"/>\r" +
    "\n" +
    "                     <!--[...]-->\r" +
    "\n" +
    "                  </map>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "          <div class=\"col-lg-5\" ng-show=\"!Male\" Style=\"padding-left: 8px;\"  ng-click=\"healthAZ = false;\">\r" +
    "\n" +
    "            <img src=\"resources/img/mob_female.png\" alt=\"\" usemap=\"#Female\"  id=\"imageFemale\"/>\r" +
    "\n" +
    "       <map name=\"Female\" id=\"Female\">\r" +
    "\n" +
    "                     <area alt=\"Face\" title=\"Face\" ng-click=\"getSubBodyPartsFemale(0); abdomenSelected = false;\" shape=\"poly\" coords=\"152,94,165,92,170,88,169,84,163,81,161,77,161,70,163,64,165,57,166,49,170,42,171,36,167,30,159,21,151,22,145,24,141,26,137,28,135,34,135,39,135,45,137,48,138,51,138,57,143,71,144,74,143,78,135,86\" />\r" +
    "\n" +
    "                     <area alt=\"Chest\" title=\"Chest\" ng-click=\"getSubBodyPartsFemale(1); abdomenSelected = false;\" shape=\"poly\" coords=\"133,90,152,98,169,92,173,90,178,99,181,114,179,123,177,136,174,142,129,143,125,129,125,122,123,115\"/>\r" +
    "\n" +
    "                     <area alt=\"Hand\" title=\"Hand\" ng-click=\"getSubBodyPartsFemale(2); abdomenSelected = false;\" shape=\"poly\" coords=\"129,86,120,110,116,110,105,112,85,113,76,116,34,116,19,130,17,130,19,124,17,124,6,132,2,129,15,116,30,108,59,99,73,95,82,96,94,95,104,92,115,88\" />\r" +
    "\n" +
    "                     <area alt=\"Hand\" title=\"Hand\" ng-click=\"getSubBodyPartsFemale(2); abdomenSelected = false;\" shape=\"poly\" coords=\"175,86,185,110,198,113,217,113,236,116,270,116,277,124,285,131,288,127,283,123,287,122,291,126,296,132,302,133,301,129,285,113,267,104,240,96,223,96,214,94,201,92,194,90,187,87\" />\r" +
    "\n" +
    "                     <area alt=\"Abdomen\" title=\"Abdomen\" ng-click=\"getSubBodyPartsFemale(3); abdomenSelected = true;\" shape=\"poly\" coords=\"130,146,176,145,173,164,177,180,177,194,153,200,128,197,127,188,129,174,131,168,132,158\"/>\r" +
    "\n" +
    "                     <area alt=\"Pelvis\" title=\"Pelvis\" ng-click=\"getSubBodyPartsFemale(4); abdomenSelected = false;\" shape=\"poly\" coords=\"126,200,153,203,177,198,166,209,160,220,152,224,149,223\"/>\r" +
    "\n" +
    "                     <area alt=\"Leg\" title=\"Leg\" ng-click=\"getSubBodyPartsFemale(5); abdomenSelected = false;\" shape=\"poly\" coords=\"149,228,149,240,147,254,145,278,145,302,141,321,141,332,141,352,137,366,136,386,137,400,134,417,131,419,119,418,121,410,124,404,125,392,123,359,121,338,124,312,122,274,121,230,121,223,184,225,182,273,180,299,179,317,184,331,181,355,180,373,178,384,179,397,180,405,183,413,185,417,176,420,169,418,167,383,167,365,162,342,163,328,164,319,159,278,157,252,154,228\" />\r" +
    "\n" +
    "                     <!--[...]-->\r" +
    "\n" +
    "                  </map>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row\" style=\"padding-top:5px;\"\">\r" +
    "\n" +
    "            <div  class=\"col-lg-5 btn btn-default btn-send\" ng-click='Male=true; selectedGender = \"Male\"; bodySubPartSelected = true; bodySymptomSelected = true; bodyPartSelected = true; displayDoDiv = true;' style=\"width:166px;\">Male</div>\r" +
    "\n" +
    "          \r" +
    "\n" +
    "          <div class=\"col-lg-5 btn btn-default btn-send\" ng-click='Male=false; selectedGender = \"Female\"; bodySubPartSelected = true; bodySymptomSelected = true; bodyPartSelected = true; displayDoDiv = true;' style=\"width:166px;\">Female</div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>"
  );


  $templateCache.put('app/partials/symptomcheck/symptomsearch.html',
    "  <div class=\"col-lg-8 row\" ng-show=\"healthAZ\">\r" +
    "\n" +
    "   <div class=\"row\" style=\"margin-left: 30px;\">\r" +
    "\n" +
    "       <h3>Search Symptom:\r" +
    "\n" +
    "         <input type=\"text\" ng-model=\"searchSymptom\" ng-change=\"getSearchSymptom(searchSymptom)\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" style=\"padding: 2px; font-size: 16px; width: 250px; height: 36px; border: 1px solid #30ABE6;\" ng-model-options=\"{ debounce: 500 }\" placeholder=\"Search by diseases\" placeholder=\"{{diseaseSearch}}\">\r" +
    "\n" +
    "       </h3>\r" +
    "\n" +
    "   </div>\r" +
    "\n" +
    "    <div class=\"col-lg-6 symptom-free-search\">\r" +
    "\n" +
    "        <div class=\"pointerHand raisedbox\" ng-repeat=\"x in searchResult | filter : searchSymptom\" ng-click=\"getSearchDetails(x.do_do_not_info,x.specialization)\" style=\"width: 360px; display: inline-block; margin-right: 5px; padding-top: 15px; padding-bottom: 15px; border-bottom: 4px solid #d6d6d6; \" style=\"\">\r" +
    "\n" +
    "          <p >\r" +
    "\n" +
    "          <b>Body part :</b> {{x.partName}}<br>\r" +
    "\n" +
    "          <b>Primary Symptom :</b> {{x.symptom_name}}<br>\r" +
    "\n" +
    "          <b>Secondary Symptom :</b> {{x.symptom_name_two}}<br>\r" +
    "\n" +
    "          </p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!-- </div> -->\r" +
    "\n" +
    "    <div class=\"col-lg-5\" ng-hide=\"freeSearchDos\" ><div class=\"raisedbox symptom-free-search\">\r" +
    "\n" +
    "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" ng-click=\"freeSearchDos = true;\">&times;</button>\r" +
    "\n" +
    "      <span style=\"font-size: 22px;\">Do' & Dont's</span>\r" +
    "\n" +
    "      <div ng-bind-html=\"freeSearchDosDonts | sanitize\">\r" +
    "\n" +
    "        {{freeSearchDosDonts}}\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div>\r" +
    "\n" +
    "        <button class=\"btn btn-default btn-send\" ng-click=\"getDoctorBasedOnSymptom(specializationValue);\">Get Doctor</button>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>"
  );


  $templateCache.put('app/partials/webinars/asthmaregistration.html',
    "\r" +
    "\n" +
    "<section class=\"section-padding\">\r" +
    "\n" +
    "<div class=\"container\"  style=\"background-image: 'images/healthkhoj.png'\">\r" +
    "\n" +
    "         <div class=\"row raisedbox\">\r" +
    "\n" +
    "         <div class=\"webinartitle\">Asthma Webinar Registration</div>\r" +
    "\n" +
    "            <div class=\"col-lg-6\">\r" +
    "\n" +
    "                 <h3 class=\"heading\">\r" +
    "\n" +
    "                     HealthKhoj invites you to join live online interaction on how to manage and control asthma: Myth and Facts of asthma with pulmonary expert Dr. Gyanendra Agrawal\r" +
    "\n" +
    "                  </h3>\r" +
    "\n" +
    "   <a><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> : 15<sup>th</sup> May 2016 </a> &nbsp;&nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "               <a><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> : 3 PM – 4 PM</a><br><br>\r" +
    "\n" +
    "                     <h3>Dr. Gyanendra Agrawal</h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "MD (Medicine), DM (Pulmonary & Critical Care Medicine)<br>\r" +
    "\n" +
    "European Diplomate in Respiratory Medicine,<br>\r" +
    "\n" +
    "Sr. Consultant- Respiratory & Critical Care Medicine<br>\r" +
    "\n" +
    "Jaypee Hospital, Noida (Delhi NCR, India)\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"col-lg-6\" style=\"padding-top:20px;\">\r" +
    "\n" +
    "               <div class=\"contact-form\">\r" +
    "\n" +
    "                  <form id=\"main-contact-form\" name=\"contact-form\" ng-submit=\"registerAsthmaUser()\">\r" +
    "\n" +
    "                     <div class=\"form-group\">\r" +
    "\n" +
    "                        <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Name\" required ng-model=\"name\">\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                     <div class=\"form-group\">\r" +
    "\n" +
    "                        <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Contact Number\" ng-model=\"number\">\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                     <div class=\"form-group\">\r" +
    "\n" +
    "                        <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" required ng-model=\"email\">\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                     <div class=\"form-group\">\r" +
    "\n" +
    "                        <textarea name=\"message\" class=\"form-control\" rows=\"8\" placeholder=\"Your Query\" required ng-model=\"query\"></textarea>\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                     <div class=\"form-group\">\r" +
    "\n" +
    "                        <input type=\"checkbox\" name=\"Subscribe\" value=\"subscribe\" required ng-click='subscribe=!subscribe'> Subscribe\r" +
    "\n" +
    "<br>\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                     <input type=\"submit\" class=\"btn btn-default btn-send\" value=\"Register\">\r" +
    "\n" +
    "                  </form>\r" +
    "\n" +
    "               </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "         </div>\r" +
    "\n" +
    "      <!-- </div> -->\r" +
    "\n" +
    "   <!-- </div> -->\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('app/partials/webinars/heartregistration.html',
    "\r" +
    "\n" +
    "<section class=\"section-padding\">\r" +
    "\n" +
    "<div class=\"container\">\r" +
    "\n" +
    "         <div class=\"row raisedbox\">\r" +
    "\n" +
    "         <div class=\"webinartitle\">Heart Disease Webinar Registration</div>\r" +
    "\n" +
    "            <div class=\"col-lg-6\">          <h3 class=\"heading\">\r" +
    "\n" +
    "                     HealthKhoj invites you to join live online interaction on prevention and management of heart disease with top Cardiologist Dr. Prasad M Bhat\r" +
    "\n" +
    "                  </h3>\r" +
    "\n" +
    "               <a><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> : 28<sup>th</sup> May 2016</a>&nbsp;&nbsp;&nbsp;&nbsp;<br><br>\r" +
    "\n" +
    "\r" +
    "\n" +
    "               <!-- <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>: 3 Pm – 4 Pm<br><br> -->\r" +
    "\n" +
    "<h3>Dr. Prasad M Bhat</h3>\r" +
    "\n" +
    "Cardiologist<br>\r" +
    "\n" +
    "MBBS , DNB (General Medicine) , DNB (Cardiology)<br>\r" +
    "\n" +
    "Bhagwan Mahaveer Jain Hospital, Bangalore \r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "            <div class=\"col-lg-6\" style=\"padding-top:20px;\">\r" +
    "\n" +
    "               <div class=\"contact-form\">\r" +
    "\n" +
    "                  <form id=\"main-contact-form\" name=\"contact-form\" ng-submit=\"registerHeartUser()\">\r" +
    "\n" +
    "                     <div class=\"form-group\">\r" +
    "\n" +
    "                        <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Name\" required ng-model=\"name\">\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                     <div class=\"form-group\">\r" +
    "\n" +
    "                        <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Contact Number\" ng-model=\"number\">\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                     <div class=\"form-group\">\r" +
    "\n" +
    "                        <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" required ng-model=\"email\">\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                     <div class=\"form-group\">\r" +
    "\n" +
    "                        <textarea name=\"message\" class=\"form-control\" rows=\"8\" placeholder=\"Your Query\" required ng-model=\"query\"></textarea>\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                     <div class=\"form-group\">\r" +
    "\n" +
    "                        <input type=\"checkbox\" name=\"Subscribe\" value=\"subscribe\" required ng-click='subscribe=!subscribe'> Subscribe\r" +
    "\n" +
    "<br>\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                     <input type=\"submit\" style=\"background: #02bdd5;\" class=\"btn btn-default btn-send\" value=\"Register\">\r" +
    "\n" +
    "                  </form>\r" +
    "\n" +
    "               </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "         </div>\r" +
    "\n" +
    "      \r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('app/partials/webinars/previouswebinar.html',
    "<section id=\"action\" class=\"responsive section-padding\" ng-init=\"prevwebdesc()\">\r" +
    "\n" +
    "        <div class=\"vertical-center\">\r" +
    "\n" +
    "             <div class=\"container\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"action take-tour\">\r" +
    "\n" +
    "                        <div class=\"col-sm-7 wow fadeInLeft\" data-wow-duration=\"500ms\" data-wow-delay=\"300ms\">\r" +
    "\n" +
    "                            <h1 class=\"title\">Previous Webinars</h1>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "   </section>\r" +
    "\n" +
    "    <!--/#action-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <section id=\"features\" style=\"padding-bottom:20px\">\r" +
    "\n" +
    "        <div class=\"container\">\r" +
    "\n" +
    "            <div class=\"row raisedbox\">\r" +
    "\n" +
    "                <div class=\"single-features\">\r" +
    "\n" +
    "                    <div class=\"col-sm-5 wow fadeInLeft\" data-wow-duration=\"500ms\" data-wow-delay=\"300ms\">\r" +
    "\n" +
    "                        <img src=\"resources/img/autism2.jpg\" class=\"img-responsive\" alt=\"\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-sm-6 wow fadeInRight\" data-wow-duration=\"500ms\" data-wow-delay=\"300ms\">\r" +
    "\n" +
    "                        <h2>Autism: What Parents of Young Children Should Know</h2>\r" +
    "\n" +
    "                        <P>Autism is a developmental disability that effects the way a person communicates and forms relationships. It is a big responsibility on the parents of young children to understand Autism and provide the best care to them. </P>\r" +
    "\n" +
    "                        <div class=\"comments-number pull-right heading\"><a ui-sref=\"healthazarticle({articleId:66,articleName:Autism})\">View Archived Article</a></div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </section>\r" +
    "\n" +
    "     <!--/#features-->"
  );


  $templateCache.put('app/partials/webinars/shareurstory.html',
    "<section style=\"padding-bottom:20px;\">\r" +
    "\n" +
    "<div class=\"container\"  style=\"background-image: 'images/healthkhoj.png'\">\r" +
    "\n" +
    "         <div class=\"row raisedbox\" >\r" +
    "\n" +
    "            <!-- <div class=\"col-lg-8\"><img src=\"/images/Share your story.jpeg\"></div> -->\r" +
    "\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2 divBackground\" >\r" +
    "\n" +
    "               <div class=\"contact-form\">\r" +
    "\n" +
    "                  <h3  class=\"heading\">\r" +
    "\n" +
    "                     Tell us your Story\r" +
    "\n" +
    "                  </h3>\r" +
    "\n" +
    "                  <address>\r" +
    "\n" +
    "               You have fought it. You have made yourself and your family proud. \r" +
    "\n" +
    "Share your inspiring health story of courage and will to kindle hope in others. We will like to hear from you. Your personal information will be confidential unless you give us permission to share.</address>\r" +
    "\n" +
    "                  <form id=\"main-contact-form\" name=\"contact-form\" ng-submit=\"registerUser()\">\r" +
    "\n" +
    "                     <div class=\"form-group\">\r" +
    "\n" +
    "                        <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Name\" required ng-model=\"name\">\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                     <div class=\"form-group\">\r" +
    "\n" +
    "                        <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Contact Number\" ng-model=\"number\">\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                     <div class=\"form-group\">\r" +
    "\n" +
    "                        <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" required ng-model=\"email\">\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                     <div class=\"form-group\">\r" +
    "\n" +
    "                        <textarea name=\"message\" class=\"form-control\" rows=\"8\" placeholder=\"Your Story\" required ng-model=\"query\"></textarea>\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                     <div class=\"form-group\">\r" +
    "\n" +
    "                        <input type=\"checkbox\" name=\"Subscribe\" value=\"subscribe\" required ng-click='subscribe=!subscribe'> Declaration : HealthKhoj can publish my story in their website \r" +
    "\n" +
    "<br>\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                     <input type=\"submit\" class=\"btn btn-default btn-send\" value=\"Submit\">\r" +
    "\n" +
    "                  </form>\r" +
    "\n" +
    "               </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "         </div>\r" +
    "\n" +
    "      <!-- </div> -->\r" +
    "\n" +
    "   <!-- </div> -->\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</section>"
  );

}]);
