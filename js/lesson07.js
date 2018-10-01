let map;
let title = locations[i].title;
let content = locations[i].content;

// Location genre
    // Historic remains
    let remains;
    // Nature
    let nature; 
    // Craft etc workshops
    let workshops;
    // Modern culture related places
    let culture;
    // Food related locations
    let food;

// Recommended locations
let locations = [
    {title: 'edo-wonderland', content: '<div><a href="http://mukaifarmandgarden.org/" target="_blank">Website</a></div>', position: {lat: 36.791590, lng: 139.697503}, label: culture},
    {title: 'Kumamoto castle', content: '<div><a href="https://www.japan-guide.com/e/e4501.html" target="_blank">japan-guide.com</a></div>', position: {lat: 32.807070, lng: 130.705726}, label: remains},
    {title: 'Former Hosokawa Mansion', content: '<div><a href="http://mukaifarmandgarden.org/" target="_blank">Website</a></div>', position: {lat: 32.810311, lng: 130.699712}, label: remains}
    ];
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
    // Fuji Markers for historic remains
    let remainsMarker = makeMarkerIcon('C08FB3', '<i class="fas fa-landmark"></i>');
    // Matcha Markers for nature sights
    let natureMarker = makeMarkerIcon('328131', '<i class="fab fa-pagelines"></i>'); 
    // Ukon Markers for craft workshops
    let craftMarker = makeMarkerIcon('FED300', '<i class="fas fa-paint-brush"></i>');
    // Blue Markers for modern culture related places
    let cultureMarker = makeMarkerIcon('0086AD', '<i class="far fa-grin-stars"></i>');
    // Orange Markers for food related locations
    let foodMarker = makeMarkerIcon('EE7800', '<i class="fas fa-utensils"></i>');

    function makeMarkerIcon(markerColor) {
        let markerImage = new google.maps.MarkerImage(

        )
    }

    // Add the marker with an icon of genre as label
    let marker = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: location,
        label: genre,
        map
    });

    let infoWindow = new google.maps.InfoWindow({
        content,
    });

    // the infowindow opens when the marker is clicked!
    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
}