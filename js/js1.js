$(document).ready(function() {
  $("#lightSlider").lightSlider({
    item: 1,
    loop: true,
    slideMargin: 0,
    controls: true,
    galleryMargin: 10,
    itemMargin: 'auto',
    pauseOnHover: true,
    auto:true,
    speed: 600,
    pause: 3000,
    autoWidth: false,
    prevHtml: '<i class="fa fa-angle-left"></i>',
    nextHtml: '<i class="fa fa-angle-right"></i>',
  });
});
