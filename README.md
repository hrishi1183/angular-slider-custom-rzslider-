angular-slider (rzslider.js)
========================
```
Slider directive for AngularJS which can be used independently 

Mobile friendly
Fast and Customizable
Very Simple to use
Compatibility with jQuery Lite

Few additional Features has been added to this directive

1. rz-slider-step-array - New attribute to support irregular steps step array
   Ex: [1,2,5,10,20,50,100,200,400,500,700,1000]
2. rz-slider-display-scale - scale support for step array.
3. rz-slider-selection - flag to highlight selction in slider with different color

```

Directive attributes
====================

####rz-slider-model

Model for low value slider. If only rz-slider-model is provided single slider will be rendered.
####rz-slider-high
Model for high value slider. Providing both rz-slider-high and rz-slider-model will render range slider.

####rz-slider-floor
Minimum value for a slider.

####rz-slider-ceil
Maximum value for a slider.

####rz-slider-step
slider step.

####rz-slider-step-array
```
slider step Array to have slider with irregular steps
EX: [1,2,5,10,20,50,100,200,400,500,700,1000]
```
####rz-slider-selection
```
flag to highlight selction in slider with different color
value : true/false
```
####rz-slider-display-scale
```
flag to display scale below the stpes.. its only applicable if we are using stepped slider
value : true/false
```
####rz-slider-precision
The precision to display values with. The toFixed() is used internally for this.

####rz-slider-translate
Custom translate function. Use this if you want to translate values displayed on the slider. For example if you want to display dollar amounts instead of just numbers do this:

Example:
========

###Single slider:
```
// In your controller
$scope.priceSlider = 150;
<div>
    <rzslider rz-slider-model="priceSlider"></rzslider>
</div>
Above example would render a slider from 0 to 150. If you need floor and ceiling values use rz-slider-floor and rz-slider-ceil attributes.

<div>
    <rzslider
         rz-slider-model="priceSlider"
         rz-slider-ceil="450"></rzslider>

    <!-- OR -->

    <rzslider
         rz-slider-model="priceSlider"
         rz-slider-floor="0"
         rz-slider-ceil="450"></rzslider>

</div>
```
###Range slider
```
// In your controller
$scope.priceSlider = {
    min: 100,
    max: 180,
    ceil: 500,
    floor: 0
};
<rzslider
    rz-slider-floor="priceSlider.floor"
    rz-slider-ceil="priceSlider.ceil"
    rz-slider-model="priceSlider.min"
    rz-slider-high="priceSlider.max"></rzslider>
```

###Steped Slider

```
// In your controller

$scope.componentDetails = {
    floor: 0,
    ceil: 1000,        
    value: 10,
    stepArray : [1,2,5,10,20,50,100,200,400,500,700,1000],
    selection : true,
    displayScale : true
};

$scope.translate = function(value)
{
    return value+'Mbps';
}

<rzslider class="rzslider-evc-size"
	id="componentDetails.id" rz-slider-floor="componentDetails.floor"
	rz-slider-ceil="componentDetails.ceil"
	rz-slider-model="componentDetails.value"
	rz-slider-step-array="componentDetails.stepArray"
	rz-slider-translate=translate
	rz-slider-selection="componentDetails.selection"
	rz-slider-display-scale="componentDetails.displayScale"> </rzslider>
```
Slider events
=============

To force slider to recalculate dimensions broadcast reCalcViewDimensions event from parent scope. This is useful for example when you use slider with tabs - see demo/tabs.html example.

You can also force redraw with rzSliderForceRender event.

###slideEnded
```
Slider emits an event 'slideEnded' when user stop sliding and leave the mouse click.. it just need to be catched in the controller as below

$scope.$on('slideEnded', function () {
     console.log("slideEnded Event Fired : " +$scope.componentDetails.value);
     // we can get slider selected value directly form the model attched to the slider
});

```

How to USE
==========
```
<script src="/angular.min.js"></script>
<script src="/rzslider.min.js"></script>

<script>
    var myApp = angular.module('myApp', ['rzModule']);
</script>
```
Plunker
=======
http://plnkr.co/edit/sUFdW4lulu2NQBvn9fq0?p=preview
