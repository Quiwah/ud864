let map;
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
        {title: 'Tsukiji Tamura',  url: 'https://www.tripadvisor.com/Restaurant_Review-g1066444-d1677760-Reviews-Tsukiji_Tamura_Tsukiji-Chuo_Tokyo_Tokyo_Prefecture_Kanto.html', content: 'Highest-end Washoku in Tokyo', location: {lat: 35.668413, lng: 139.771750}, genre: 'food'},
        {title: 'Bon',  url: 'https://www.tripadvisor.com/Restaurant_Review-g1066461-d1659241-Reviews-Bon-Taito_Tokyo_Tokyo_Prefecture_Kanto.html', content: 'Fine Dining for Vegans', location: {lat: 35.723237, lng: 139.790407}, genre: 'food'},
        {title: 'Edo Wonderland', url: 'http://edowonderland.net/en/', content: '楽しいところです', location: {lat: 36.791590, lng: 139.697503}, genre: 'culture'},
        {title: 'Kumamoto castle', content: '<div><a href="https://www.japan-guide.com/e/e4501.html" target="_blank">japan-guide.com</a></div>', location: {lat: 32.807070, lng: 130.705726}, genre: 'remains'},
        {title: 'Former Hosokawa Mansion', content: '<div><a href="http://mukaifarmandgarden.org/" target="_blank">Website</a></div>', location: {lat: 32.810311, lng: 130.699712}, genre: 'remains'},
        {title: 'Murin an', content: '<div><a href="https://murin-an.jp/" target="_blank">Website</a></div>', location: {lat: 35.012656, lng: 135.787146}, genre: 'remains'}
    ];
    // Information window
    let largeInfoWindow = new google.maps.InfoWindow();

    for (var i = 0; i < locations.length; i++) {
        let position = locations[i].location;
        let title = locations[i].title;
        let content = locations[i].content;
        let url = locations[i].url;

        // Create markers with designs correspond to the genre
        let defaultMarker = function makeMarker(map, locations){
            let markerColor;
            let markerIcon;

            if(location.label === remains){
                // Fuji Markers for historic remains
                markerColor = 'C08FB3';
                markerIcon = '<i class="fas fa-landmark"></i>'
            }else if(location.label === nature){
                // Matcha Markers for nature sights
                markerColor = '328131';
                markerIcon = '<i class="fab fa-pagelines"></i>'
            }else if(location.label === workshops){
                // Ukon Markers for craft workshops
                markerColor = 'FED300';
                markerIcon = '<i class="fas fa-paint-brush"></i>'
            }else if(location.label === culture){
                // Blue Markers for modern culture related places
                markerColor = '0086AD';
                markerIcon = '<i class="far fa-grin-stars"></i>'
            }else if(location.label === food){
                // Orange Markers for food related locations
                markerColor = 'EE7800';
                markerIcon = '<i class="fas fa-utensils"></i>'
            }

            // Make the marker with an icon of the genre
            let marker = new google.maps.Marker({
                position,
                title,
                content,
                url,
                animation: google.maps.Animation.DROP,
                label: genre,
                icon: defaultMarker,
                id: i
            });

            return marker;

            markers.push(marker);
        };

        // Highlighted markers
        // let highlightedMarker = makeMarker(function(){
        //     markerColor = '94A8B0';
        //     makerIcon = '<i class="fas fa-exclamation"></i>';
        // });

    // The infowindow opens when the marker is clicked!
    marker.addListener('click', function(){
        populateInfoWindow(this, largeInfoWindow);
    });

    // Event listerers for mouseover and mouseout
    marker.addListener('mouseover', function(){
        this.setIcon(highlightedMarker);
    });
    marker.addListener('mouseout', function(){
        this.setIcon(defaultMarker);
    });
}

    // To display the markers on the map
    let bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
        bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);

    function populateInfoWindow(marker, infowindow) {
        if (infowindow.marker != marker){
            infowindow.marker = marker;
                if (marker.url == null){
                    marker.title = marker.title;
                } else {
                    marker.title = '<a href="' + marker.url + '" target="_blank">' + marker.title + '</a>';
                }
            infowindow.setContent('<div>' + marker.title + '<br>' + marker.content + '</div>');
            infowindow.open(map, marker);
            infowindow.addListener('closeclick', function(){
                infowindow.marker = null;
            });
        }
    }
}