var app = angular.module('plunker', ['rzModule']);

app.controller('sliderController', function($scope) {

  $scope.init = function() {
    $scope.componentDetails = $scope.formatSliderMetadata($scope.validValues, $scope.translate,$scope.incrSpeed,$scope.decrSpeed)
  };

  $scope.formatSliderMetadata = function(validValues, translate,incrFun,decrFun) {
    var codeArray = [];
    var valueArray = [];
    for (var i = 0; i < validValues.length; i++) {
      codeArray[i] = validValues[i].code;
      valueArray[i] = validValues[i].decode;
    }

    // formatted slider attruibutes
    var formattedSliderValidValues = 
    {
        floor: codeArray[0],
        ceil: codeArray[codeArray.length-1],        
        value: 0,
        translate : translate,
        incrSpeed : incrFun,
        decrSpeed  : decrFun,
        codeArray : codeArray,
        stepArray : codeArray,
        valueArray : valueArray,
        selection : true,
        displayScale : true,
        typedValue: codeArray[0]
    };

    return formattedSliderValidValues;
  };
  
  $scope.$on('slideEnded', function () {
      console.log("slideEnded Event Fired : " +$scope.componentDetails.stepArray[$scope.componentDetails.value]);
  });
  
  /**
	 * function executed whenever the bandwidthCIR value is increased through associated text-field
	 * It takes slider to next available step 
	 */
	$scope.incrSpeed=function(){
 		for(var i=0; i< $scope.componentDetails.stepArray.length; i++){
 			if(parseInt($scope.componentDetails.stepArray[i]) > parseInt($scope.componentDetails.typedValue)){
 				$scope.componentDetails.typedValue = $scope.componentDetails.stepArray[i];
 				$scope.componentDetails.value = i;
 				break;
 			}
 		}
 	};
 	
	/**
	 * function executed whenever the bandwidthCIR value is decreased through associated text-field
	 * It takes slider to previous available step 
	 */
 	$scope.decrSpeed=function(){
 		for(var i=$scope.componentDetails.stepArray.length-1; i>=0; i--){
 			if(parseInt($scope.componentDetails.stepArray[i]) < parseInt($scope.componentDetails.typedValue)){ 			
 				$scope.componentDetails.typedValue = $scope.componentDetails.stepArray[i];
 				$scope.componentDetails.value = i;
 				break;
 			} 			
 		}
 	};

  /**
   * function executed whenever the bandwidthCIR slider value is changed
   */
  $scope.translate = function(value) {
    $scope.componentDetails.typedValue = $scope.componentDetails.stepArray[value];
    return $scope.componentDetails.valueArray[value];
  };

  $scope.validValues = [{
      "code": "2",
      "decode": "2 Mbps"
    }, {
      "code": "4",
      "decode": "4 Mbps"
    }, {
      "code": "5",
      "decode": "5 Mbps"
    }, {
      "code": "8",
      "decode": "8 Mbps"
    }, {
      "code": "10",
      "decode": "10 Mbps"
    }, {
      "code": "20",
      "decode": "20 Mbps"
    }, {
      "code": "50",
      "decode": "50 Mbps"
    }, {
      "code": "100",
      "decode": "100 Mbps"
    }, {
      "code": "150",
      "decode": "150 Mbps"
    }, {
      "code": "250",
      "decode": "250 Mbps"
    }, {
      "code": "500",
      "decode": "500 Mbps"
    }, {
      "code": "600",
      "decode": "600 Mbps"
    }, {
      "code": "1000",
      "decode": "1 Gbps"
  }];
});