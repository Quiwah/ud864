let map, remains, nature, workshops, culture, food;
let markers = [];

// Function to initialize the map within the map div
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 36.711928, lng: 138.571280},
    zoom: 5,
    mapTypeControl: false,
    styles: [
        {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {"visibility": "on"}
            ]
        },
        {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {"visibility": "off"},
            {"saturation": "-100"}
            ]
        },
        {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {"saturation": 36},
            {"color": "#000000"},
            {"lightness": 40},
            {"visibility": "off"}
            ]
        },
        {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {"visibility": "off"},
            {"color": "#000000"},
            {"lightness": 16}
            ]
        },
        {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {"visibility": "off"}
            ]
        },
        {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [    
            {"color": "#000000"},
            {"lightness": 20}
            ]
        },
        {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {"color": "#000000"},
            {"lightness": 17},
            {"weight": 1.2}
            ]
        },
        {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {"color": "#000000"},
            {"lightness": 20}
        ]
        },
        {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {"color": "#4d6059"}
            ]
        },
        {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {"color": "#4d6059"}
            ]
        },
        {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {"color": "#4d6059"}
            ]
        },
        {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {"lightness": 21}
            ]
        },
        {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {"color": "#4d6059"}
            ]
        },
        {
        "featureType": "poi",
        "elementType": "geometry.stroke",
        "stylers": [
            {"color": "#4d6059"}
            ]
        },
        {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {"visibility": "on"},
            {"color": "#7f8d89"}
            ]
        },
        {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
                {"color": "#7f8d89"}
            ]
        },
        {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
                {"color": "#7f8d89"},
                {"lightness": 17}
            ]
        },
        {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
            "stylers": [
                {"color": "#7f8d89"},
                {"lightness": 29},
                {"weight": 0.2}
            ]
        },
        {
        "featureType": "road.arterial",
        "elementType": "geometry",
            "stylers": [
                {"color": "#000000"},
                {"lightness": 18}
            ]
        },
        {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
            "stylers": [
                {"color": "#7f8d89"}
            ]
        },
        {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
            "stylers": [
                {"color": "#7f8d89"}
            ]
        },
        {
        "featureType": "road.local",
        "elementType": "geometry",
            "stylers": [
                {"color": "#000000"},
                {"lightness": 16}
            ]
        },
        {
        "featureType": "road.local",
        "elementType": "geometry.fill",
            "stylers": [
                {"color": "#7f8d89"}
            ]
        },
        {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
            "stylers": [
                {"color": "#7f8d89"}
            ]
        },
        {
        "featureType": "transit",
        "elementType": "geometry",
            "stylers": [
                {"color": "#000000"},
                {"lightness": 19}
            ]
        },
        {
        "featureType": "water",
        "elementType": "all",
            "stylers": [
                {"color": "#2b3638"},
                {"visibility": "on"}
            ]
        },
        {
        "featureType": "water",
        "elementType": "geometry",
            "stylers": [
                {"color": "#2b3638"},
                {"lightness": 17}
            ]
        },
        {
        "featureType": "water",
        "elementType": "geometry.fill",
            "stylers": [
                {"color": "#24282b"}
            ]
        },
        {
        "featureType": "water",
        "elementType": "geometry.stroke",
            "stylers": [
                {"color": "#24282b"}
            ]
        },
        {
        "featureType": "water",
        "elementType": "labels",
            "stylers": [
                {"visibility": "off"}
            ]
        },
        {
        "featureType": "water",
        "elementType": "labels.text",
            "stylers": [
                {"visibility": "off"}
            ]
        },
        {
        "featureType": "water",
        "elementType": "labels.text.fill",
            "stylers": [
                {"visibility": "off"}
            ]
        },
        {
        "featureType": "water",
        "elementType": "labels.text.stroke",
            "stylers": [
                {"visibility": "off"}
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.icon",
            "stylers": [
                {"visibility": "off"}
            ]
        }
    ]
    });

    // Location genre
    let genre;

    // Recommended locations
    let locations = [
        {title: 'edo-wonderland', content: '<div><a href="http://mukaifarmandgarden.org/" target="_blank">Website</a></div>', location: {lat: 36.791590, lng: 139.697503}, genre: 'culture'},
        {title: 'Kumamoto castle', content: '<div><a href="https://www.japan-guide.com/e/e4501.html" target="_blank">japan-guide.com</a></div>', location: {lat: 32.807070, lng: 130.705726}, genre: 'remains'},
        {title: 'Former Hosokawa Mansion', content: '<div><a href="http://mukaifarmandgarden.org/" target="_blank">Website</a></div>', location: {lat: 32.810311, lng: 130.699712}, genre: 'remains'}
    ];
    // Information window
    let largeInfoWindow = new google.maps.InfoWindow();

    // // Create markers with designs correspond to the genre
    // let defaultMarker = makeMarker(function(){
    //     if(location.label === remains){
    //         // Fuji Markers for historic remains
    //         this.color = 'C08FB3';
    //         this.icon = '<i class="fas fa-landmark"></i>'
    //     }else if(location.label === nature){
    //         // Matcha Markers for nature sights
    //         this.color = '328131';
    //         this.icon = '<i class="fab fa-pagelines"></i>'
    //     }else if(location.label === workshops){
    //         // Ukon Markers for craft workshops
    //         this.color = 'FED300';
    //         this.icon = '<i class="fas fa-paint-brush"></i>'
    //     }else if(location.label === culture){
    //         // Blue Markers for modern culture related places
    //         this.color = '0086AD';
    //         this.icon = '<i class="far fa-grin-stars"></i>'
    //     }else if(location.label === food){
    //         // Orange Markers for food related locations
    //         this.color = 'EE7800';
    //         this.icon = '<i class="fas fa-utensils"></i>'
    //     }
    // });

    // function makeMarker(color, icon) {
    //     let markerColor = location.color;
    //     let markerIcon = location.icon;

    //     let markerImage = new google.maps.MarkerImage(
    //         'http://chart.apis.google.com/chart?chchst=d_map_pin_icon&chld=' + markerIcon + '|' + markerColor + '|94A8B0',
    //         new google.maps.Size(21, 34),
    //         new google.maps.Point(0, 0),
    //         new google.maps.Point(10, 34),
    //         new google.maps.Size(21, 34));
    //     return markerImage;
    // }

    // Highlighted markers
    //let highlightedMarker = makeMarker('94A8B0', '<i class="fas fa-exclamation"></i>');

    for (var i = 0; i < locations.length; i++) {
        let position = locations[i].location;
        let title = locations[i].title;
        let content = locations[i].content;
        // Make the marker with an icon of the genre
        let marker = new google.maps.Marker({
        position,
        title,
        content,
        animation: google.maps.Animation.DROP,
        // label: genre,
        // icon: defaultMarker,
        id: i
    });

    markers.push(marker);

    // The infowindow opens when the marker is clicked!
    marker.addListener('click', function(){
        populateInfoWindow(this, largeInfoWindow);
    });
}
    // // Event listerers for mouseover and mouseout
    // marker.addListener('mouseover', function(){
    //     this.setIcon(highlightedMarker);
    // });
    // marker.addListener('mouseout', function(){
    //     this.setIcon(defaultMarker);
    // });

    // To display the markers on the map
    let bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
        bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);

    console.log(markers);

    function populateInfoWindow(marker, infowindow) {
        if (infowindow.marker != marker){
            infowindow.marker = marker;
            infowindow.setContent('<div>' + marker.content + '</div>');
            infowindow.open(map, marker);
            infowindow.addListener('closeclick', function(){
                infowindow.marker = null;
            });
        }
    }
}