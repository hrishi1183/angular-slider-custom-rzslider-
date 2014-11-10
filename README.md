angular-slider (rzslider.js)
========================

Slider directive for AngularJS wtih additional Features which can be used independently

Mobile friendly
Fast
Well documented
Customizable
Simple to use
Compatibility with jQuery Lite, ie. with full jQuery

Examples

Single slider

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
