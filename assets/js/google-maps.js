function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 21.020034, lng: 75.542638};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Jalgaon,Maharashta,India' // Title Location
    });
}