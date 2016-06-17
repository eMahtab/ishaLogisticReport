var logisticReport = angular.module('logisticReport',['ui.router','mgcrea.ngStrap']);


logisticReport.config(function($datepickerProvider) {

    angular.extend($datepickerProvider.defaults,{
      dateFormat:'dd/MM/yyyy',
      autoclose:true
    });

});

logisticReport.controller('edtaController',function($scope){
    $scope.edtaData = {};

    $scope.edtaData.data=[
    {"edtaTube":"ET100983",
     "plasma1":"PC103932",
     "plasma2":"PC103933",
     "plasma3":"PC103934",
     "plasma4":"PC103935",
     "buffycoat1":"BC101831",
     "buffycoat2":"BC101832",
     "rbc":"RC101021",
     "date":" 01 June 2016"
    },

    {"edtaTube":"ET100783",
     "plasma1":"PC104841",
     "plasma2":"PC104842",
     "plasma3":"PC104843",
     "plasma4":"PC104844",
     "buffycoat1":"BC201931",
     "buffycoat2":"BC201932",
     "rbc":"RC101031",
     "date":" 01 June 2016"
   },

   {"edtaTube":"ET100601",
    "plasma1":"PC105041",
    "plasma2":"PC105042",
    "plasma3":"PC105043",
    "plasma4":"PC105044",
    "buffycoat1":"BC301931",
    "buffycoat2":"BC301932",
    "rbc":"RC101041",
    "date":" 01 June 2016"
  },
  {"edtaTube":"ET100473",
   "plasma1":"PC105932",
   "plasma2":"PC105933",
   "plasma3":"PC105934",
   "plasma4":"PC105935",
   "buffycoat1":"BC101931",
   "buffycoat2":"BC101932",
   "rbc":"RC101411",
   "date":" 02 June 2016"
 },
 {"edtaTube":"ET100683",
  "plasma1":"PC104001",
  "plasma2":"PC104002",
  "plasma3":"PC104003",
  "plasma4":"PC104004",
  "buffycoat1":"BC101631",
  "buffycoat2":"BC101632",
  "rbc":"RC101311",
  "date":" 02 June 2016"
 }
    ]

    $scope.$watch('edtaData.edtaDate',function(newVal,oldVale){
      if(newVal !== undefined && newVal !== ''){
      console.log("You selected : "+newVal.getDate());

      if(newVal.getDate() ==1){
        $scope.edtaData.data=[
        {"edtaTube":"ET100983",
         "plasma1":"PC103932",
         "plasma2":"PC103933",
         "plasma3":"PC103934",
         "plasma4":"PC103935",
         "buffycoat1":"BC101831",
         "buffycoat2":"BC101832",
         "rbc":"RC101021",
         "date":" 01 June 2016"
        },

        {"edtaTube":"ET100783",
         "plasma1":"PC104841",
         "plasma2":"PC104842",
         "plasma3":"PC104843",
         "plasma4":"PC104844",
         "buffycoat1":"BC201931",
         "buffycoat2":"BC201932",
         "rbc":"RC101031",
         "date":" 01 June 2016"
       },

       {"edtaTube":"ET100601",
        "plasma1":"PC105041",
        "plasma2":"PC105042",
        "plasma3":"PC105043",
        "plasma4":"PC105044",
        "buffycoat1":"BC301931",
        "buffycoat2":"BC301932",
        "rbc":"RC101041",
        "date":" 01 June 2016"
      }
        ]
      }

      if(newVal.getDate() ==2){
        $scope.edtaData.data=[
        {"edtaTube":"ET100473",
         "plasma1":"PC105932",
         "plasma2":"PC105933",
         "plasma3":"PC105934",
         "plasma4":"PC105935",
         "buffycoat1":"BC101931",
         "buffycoat2":"BC101932",
         "rbc":"RC101411",
         "date":" 02 June 2016"
       },
       {"edtaTube":"ET100683",
        "plasma1":"PC104001",
        "plasma2":"PC104002",
        "plasma3":"PC104003",
        "plasma4":"PC104004",
        "buffycoat1":"BC101631",
        "buffycoat2":"BC101632",
        "rbc":"RC101311",
        "date":" 02 June 2016"
       }
        ]
      }

       }
    });

});


logisticReport.controller('freezerController',function($scope){
    $scope.freezerData = {};

    $scope.freezerData.data=[
        {"boxID":"PB100101",
         "location":"J1",
         "freezerID":"FR103933",
         "date":" 01 June 2016"
        },
        {"boxID":"PB100201",
          "location":"A1",
          "freezerID":"FR100201",
          "date":" 02 June 2016"
         },
        {"boxID":"PB100801",
          "location":"D7",
          "freezerID":"FR103401",
          "date":" 01 June 2016"
        },
         {"boxID":"RB100201",
                  "location":"A1",
                  "freezerID":"FR102201",
                  "date":" 02 March 2016"
          },
          {"boxID":"BC100401",
                                                      "location":"D3",
                                                      "freezerID":"FR103402",
                                                      "date":" 01 June 2016"
                                                    },
                                  {"boxID":"BC100301",
                                                           "location":"D2",
                                                           "freezerID":"FR103403",
                                                           "date":" 01 June 2016"
                                                         }       ,
         {"boxID":"BC100801",
                  "location":"C2",
                  "freezerID":"FR101401",
                  "date":" 01 March 2016"
         },
         {"boxID":"BC100201",
                           "location":"B3",
                           "freezerID":"FR105001",
                           "date":" 01 April 2016"
         },
         {"boxID":"RB100901",
                                                 "location":"J3",
                                                 "freezerID":"FR103401",
                                                 "date":" 02 June 2016"
                                               },
                                           {"boxID":"RB100401",
                                                                    "location":"D3",
                                                                    "freezerID":"FR103402",
                                                                    "date":" 02 June 2016"
                                                                  },
                                                {"boxID":"PB100301",
                                                                         "location":"B1",
                                                                         "freezerID":"FR103403",
                                                                         "date":" 02 June 2016"
                                                                       }

        ]

        $scope.$watch('freezerData.freezerDate',function(newVal,oldVale){
              if(newVal !== undefined && newVal !== ''){
              console.log("You selected : "+newVal.getDate());

              if(newVal.getDate() ==1){
                $scope.freezerData.data=[
               {"boxID":"PB100801",
                         "location":"D7",
                         "freezerID":"FR103401",
                         "date":" 01 June 2016"
                       },
                   {"boxID":"BC100401",
                                            "location":"D3",
                                            "freezerID":"FR103402",
                                            "date":" 01 June 2016"
                                          },
                        {"boxID":"BC100301",
                                                 "location":"D2",
                                                 "freezerID":"FR103403",
                                                 "date":" 01 June 2016"
                                               }
                ]
               }

               if(newVal.getDate() ==2){
                               $scope.freezerData.data=[
                              {"boxID":"RB100901",
                                        "location":"J3",
                                        "freezerID":"FR103401",
                                        "date":" 02 June 2016"
                                      },
                                 {"boxID":"PB100201",
                                           "location":"A1",
                                           "freezerID":"FR100201",
                                           "date":" 02 June 2016"
                                          },
                                       {"boxID":"PB100301",
                                                                "location":"B1",
                                                                "freezerID":"FR103403",
                                                                "date":" 02 June 2016"
                                                              }
                               ]
                              }



          }
         });
  });


logisticReport.controller('nailSampleController',function($scope){
      $scope.nailSampleData = {};

      $scope.nailSampleData.data=[
          {"participantID":"1234300101",
           "edtaTubeID":"ET100010",
           "nailSampleID":"NP100232",
           "nailSampleBoxID":"NB100343",
           "date":" 01 June 2016"
          },
           {"participantID":"1234300102",
                     "edtaTubeID":"ET100011",
                     "nailSampleID":"NP100233",
                     "nailSampleBoxID":"NB100344",
                     "date":" 01 June 2016"
           },
           {"participantID":"1234300103",
                                         "edtaTubeID":"ET100012",
                                         "nailSampleID":"NP100243",
                                         "nailSampleBoxID":"NB100345",
                                         "date":" 02 June 2016"
                                         },
              {"participantID":"1234300104",
                                                      "edtaTubeID":"ET100014",
                                                      "nailSampleID":"NP100244",
                                                      "nailSampleBoxID":"NB100346",
                                                      "date":" 02 April 2016"
                                               } ,

                {"participantID":"1200300106",
                                                                     "edtaTubeID":"ET100015",
                                                                     "nailSampleID":"NP100245",
                                                                     "nailSampleBoxID":"NB100012",
                                                                     "date":" 02 June 2016"
                                                              },
                 {"participantID":"1200300107",
                                                                                      "edtaTubeID":"ET100016",
                                                                                      "nailSampleID":"NP100246",
                                                                                      "nailSampleBoxID":"NB100013",
                                                                                      "date":" 02 June 2016"
                                                                               },
                  {"participantID":"1200300108",
                                                                                       "edtaTubeID":"ET100017",
                                                                                       "nailSampleID":"NP100247",
                                                                                       "nailSampleBoxID":"NB100014",
                                                                                       "date":" 02 June 2016"
                                                                                }





          ]


          $scope.$watch('nailSampleData.nailDate',function(newVal,oldVale){
                        if(newVal !== undefined && newVal !== ''){
                        console.log("You selected : "+newVal.getDate());

                    if(newVal.getDate() ==1){
                          $scope.nailSampleData.data=[

                            {"participantID":"1234300101",
                                     "edtaTubeID":"ET100010",
                                     "nailSampleID":"NP100232",
                                     "nailSampleBoxID":"NB100343",
                                     "date":" 01 June 2016"
                                    },
                                     {"participantID":"1234300102",
                                               "edtaTubeID":"ET100011",
                                               "nailSampleID":"NP100233",
                                               "nailSampleBoxID":"NB100344",
                                               "date":" 01 June 2016"
                                     }


                          ]

                        }

                        if(newVal.getDate() ==2){
                                                  $scope.nailSampleData.data=[

                                                 {"participantID":"1200300106",
                                                  "edtaTubeID":"ET100015",
                                                                                                                     "nailSampleID":"NP100245",
                                                                                                                     "nailSampleBoxID":"NB100012",
                                                                                                                     "date":" 02 June 2016"
                                                                                                              },
                                                                 {"participantID":"1200300107",
                                                                                                                                      "edtaTubeID":"ET100016",
                                                                                                                                      "nailSampleID":"NP100246",
                                                                                                                                      "nailSampleBoxID":"NB100013",
                                                                                                                                      "date":" 02 June 2016"
                                                                                                                               },
                                                                  {"participantID":"1200300108",
                                                                                                                                       "edtaTubeID":"ET100017",
                                                                                                                                       "nailSampleID":"NP100247",
                                                                                                                                       "nailSampleBoxID":"NB100014",
                                                                                                                                       "date":" 02 June 2016"
                                                                                                                                }

                                                  ]

                                                }

                        }


          });

          });


logisticReport.controller('cryovialBoxController',function($scope){

       $scope.cryovialBoxData = {};

       $scope.cryovialBoxData.cryovialBoxes =[

       {"boxID":"PB100021",
        "date":"21 April 2016"
       },
       {"boxID":"BB100101",
               "date":"01 June 2016, 02 June 2016"
              },
       {"boxID":"RB300011",
               "date":"10 May 2016"
              },
        {"boxID":"PB100111",
                "date":"24 March 2016"
               }


       ];


    }
);

logisticReport.controller('boxController',function($scope,$stateParams){

       $scope.boxData = {};
       console.log("State Params is : ",$stateParams);
       $scope.boxData.id=$stateParams.id
       $scope.boxData.data=[

       {
           "col1":"PC100001","col2":"PC100002","col3":"PC100003","col4":"PC100004","col5":"PC100005",
           "col6":"PC100006","col7":"PC100007","col8":"PC100008","col9":"PC100009","col10":"PC100010"
       },
       {
                  "col1":"PC100011","col2":"PC100012","col3":"PC100013","col4":"PC100014","col5":"PC100015",
                  "col6":"PC100016","col7":"PC100017","col8":"PC100018","col9":"PC100019","col10":"PC100020"
       },
        {
                         "col1":"PC100021","col2":"PC100022","col3":"PC100023","col4":"PC100024","col5":"PC100025",
                         "col6":"PC100026","col7":"PC100027","col8":"PC100028","col9":"PC100029","col10":"PC100030"
              },
         {
                                  "col1":"PC100031","col2":"PC100032","col3":"PC100033","col4":"PC100034","col5":"PC100035",
                                  "col6":"PC100036","col7":"PC100037","col8":"PC100038","col9":"PC100039","col10":"PC100040"
                       },
         {
                    "col1":"PC100041","col2":"PC100042","col3":"PC100043","col4":"PC100044","col5":"PC100045",
                    "col6":"PC100046","col7":"PC100047","col8":"PC100048","col9":"PC100049","col10":"PC100050"
                },
                {
                           "col1":"PC100051","col2":"PC100052","col3":"PC100053","col4":"PC100054","col5":"PC100055",
                           "col6":"PC100056","col7":"PC100057","col8":"PC100058","col9":"PC100059","col10":"PC100060"
                },
         {
                             "col1":"PC100061","col2":"PC100062","col3":"PC100063","col4":"PC100064","col5":"PC100065",
                             "col6":"PC100066","col7":"PC100067","col8":"PC100068","col9":"PC100069","col10":"PC100070"
                         },
                         {
                                    "col1":"PC100071","col2":"PC100072","col3":"PC100073","col4":"PC100074","col5":"PC100075",
                                    "col6":"PC100076","col7":"PC100077","col8":"PC100078","col9":"PC100079","col10":"PC100080"
                         } ,
            {
                                         "col1":"PC100081","col2":"PC100082","col3":"PC100083","col4":"PC100084","col5":"PC100085",
                                         "col6":"PC100086","col7":"PC100087","col8":"PC100088","col9":"PC100089","col10":"PC100090"
                                     },
                                     {
                                                "col1":"PC100091","col2":"PC100092","col3":"PC100093","col4":"PC100094","col5":"PC100095",
                                                "col6":"PC100096","col7":"PC100097","col8":"PC100098","col9":"PC100099","col10":"PC100100"
                                     }


            ]


 });



logisticReport.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('areaCoverage', {
      url: "/area",
      templateUrl: "./partials/areaCoverage.html"
    });

    $stateProvider
      .state('transportationBoxes', {
        url: "/transportation",
        templateUrl: "./partials/transportationBoxes.html"
      });

      $stateProvider
        .state('edtaTubes', {
          url: "/edta",
          templateUrl: "./partials/edtaTubes.html",
          controller:'edtaController'
        });

        $stateProvider
          .state('freezers', {
            url: "/freezers",
            templateUrl: "./partials/freezers.html",
            controller:'freezerController'
          });

          $stateProvider
                    .state('nailSamples', {
                      url: "/nailSamples",
                      templateUrl: "./partials/nailSamples.html",
                      controller:'nailSampleController'
                    });

           $stateProvider
                               .state('cryovialBoxes', {
                                 url: "/cryovialBoxes",
                                 templateUrl: "./partials/cryovialBoxes.html",
                                 controller:'cryovialBoxController'
                               });

                       $stateProvider
                                                    .state('cryovialBox', {
                                                      url: "/cryovialBox/:id",
                                                      templateUrl: "./partials/cryovialBox.html",
                                                      controller:'boxController'
                                                    });




  $urlRouterProvider.otherwise("/area");

});
