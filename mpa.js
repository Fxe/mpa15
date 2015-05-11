$(document).ready(function (){

  var latlng = new google.maps.LatLng(41.5541157, -8.3773846);

  var options = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    navigationControl: true,
    mapTypeControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };
  var map = new google.maps.Map($('#google_map')[0], options);
  var marker1 = new google.maps.Marker({
    position: latlng, map: map
  })
  
  /*
  // add listener for a click on the pin
  google.maps.event.addListener(marker1, 'click', function() {
    infowindow.open(map, marker1);
  });

  // add information window
  var infowindow = new google.maps.InfoWindow({
    content:  '<div class="info"><strong>This is my company</strong><br><br>My company address is here<br> 32846 Sydney</div>'
  });
  */
});
