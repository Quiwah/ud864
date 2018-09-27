//Display the map
let map;
let markers = [];

function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 35.362932, lng: 138.727746},
        zoom: 7
        });
    //Locations array
    let locations = [
        {title: 'safari', location: {lat: 35.259442, lng: 138.809901}},
        {title: 'edo-wonderland', location: {lat: 36.791590, lng: 139.697503}},
        {title: 'kitte', location: {lat: 35.807598, lng: 139.773106}}
    ];
    //Information window
    let largeInfoWindow = new google.maps.InfoWindow();
    //Create markers using the locations
    for (var i = 0; i < locations.length; i++) {
        let position = locations[i].location;
        let title = locations[i].title;
        let marker = new google.maps.Marker({
            position,
            title,
            animation: google.maps.Animation.DROP,
            id: i
        });
        //Push the marker to the array of markers
        markers.push(marker);
        //When a marker is clicked, the infoWindow opens
        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfoWindow);
        });
    }

    document.getElementById('show-listings').addEventListener('click', showListings);
    document.getElementById('hide-listings').addEventListener('click', hideListings);

    //To populates the infoWindow
    function populateInfoWindow(marker, infowindow) {
        if (infowindow.marker != marker) {
            infowindow.marker = marker;
            infowindow.setContent('<div>' + marker.title + '</div>');
            infowindow.open(map, marker);
            infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
            });
        }
    }

    function showListings() {
        let bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
            bounds.extend(markers[i].position);
        }
        map.fitBounds(bounds);
    }

    function hideListings() {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
    }
}
