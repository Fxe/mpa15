function init_google_map(id, options) {
  var map = new google.maps.Map($(id)[0], options);
  /*
  var marker1 = new google.maps.Marker({
    position: options.center, map: map
  });*/
  
  return map;
};

$(document).ready(function (){

  var latlng = new google.maps.LatLng(41.5541157, -8.3773846);
  var options = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    navigationControl: true,
    mapTypeControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };
  
  var map1 = init_google_map('#google_map', options);
  var map2 = init_google_map('#google_map_1', options);
  var map3 = init_google_map('#google_map_2', options);
  
  var marker_mpa = new google.maps.Marker({
    position: latlng, map: map1
  });
  var infowindow = new google.maps.InfoWindow({
    content:  '<div class="info"><img src="img/mpa_logo.jpg" alt="" width="50px"/><strong>Metabolic Pathway Analysis 2015</strong></div>'
  });
  
  infowindow.open(map1, marker_mpa);
  google.maps.event.addListener(marker_mpa, 'click', function() {
    infowindow.open(map1, marker_mpa);
  });
  //marker_mpa.click();
  
  
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay3 = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(map2);
  directionsDisplay3.setMap(map3);
  var direction = {
    origin: 'Estação de Braga, Largo da Estação',
    destination: latlng,
    travelMode: google.maps.TravelMode.TRANSIT,
    transitOptions: {
      //arrivalTime: Date,
      //departureTime: Date,
        modes: [google.maps.TransitMode.BUS]
      //routingPreference: TransitRoutePreference
      },
    //unitSystem: UnitSystem.METRIC,
    durationInTraffic: true,
    //waypoints[]: DirectionsWaypoint,
    //optimizeWaypoints: Boolean,
    provideRouteAlternatives: true,
    //avoidHighways: Boolean,
    //avoidTolls: Boolean,
    //region: String
    };
  console.log(direction);
  directionsService.route(direction, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });

  var direction_porto = {
    origin: 'Francisco Sá Carneiro Airport, 4470-558 Maia',
    destination: latlng,
    travelMode: google.maps.TravelMode.TRANSIT,
    transitOptions: {
      //arrivalTime: Date,
      //departureTime: Date,
        modes: [google.maps.TransitMode.BUS, google.maps.TransitMode.RAIL, google.maps.TransitMode.TRAIN, google.maps.TransitMode.TRAM, google.maps.TransitMode.SUBWAY ]
      //routingPreference: TransitRoutePreference
      },
    //unitSystem: UnitSystem.METRIC,
    durationInTraffic: true,
    //waypoints[]: DirectionsWaypoint,
    //optimizeWaypoints: Boolean,
    provideRouteAlternatives: true,
    //avoidHighways: Boolean,
    //avoidTolls: Boolean,
    //region: String
    };
  directionsService.route(direction_porto, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay3.setDirections(response);
    }
  });
  /*
  // add listener for a click on the pin

  // add information window
  var infowindow = new google.maps.InfoWindow({
    content:  '<div class="info"><strong>This is my company</strong><br><br>My company address is here<br> 32846 Sydney</div>'
  });
  */
  console.log('a')
 $.ajax({
        type : 'GET',
        dataType : 'json',
        url: 'media/fotos.json',
        success : function(data) {
          _.each(data, function(obj) {
            console.log(obj);
            $('#links').append(
              '<a href="media/fotos/' + obj.file + '" title="' + obj.title + '" data-gallery>' + 
              '  <img class="mpa-thumbnail" src="media/fotos/thumbnail/t_' + obj.file + '" alt="' + obj.title + '">' +
              '</a>'
            );
          });
        } 
    });
});
