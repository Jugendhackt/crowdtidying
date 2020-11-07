var tid = setInterval(function () {
    if (document.readyState !== 'complete') return;
    clearInterval(tid);
    ermittlePosition();

}, 100)
function ermittlePosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(zeigePosition);    
       
            
    } else { 
        ausgabe.innerHTML = 'Ihr Browser unterstützt keine Geolocation.';
    }
}

function zeigePosition(position) {
   
    var mymap =  L.map
        ('mapid').setView([position.coords.latitude, position.coords.longitude], 13);
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'pk.eyJ1IjoiYW5uYWxlbmEwMzExIiwiYSI6ImNraDd0cjZlajA3czgydHFxaWI0aTM3cGQifQ.5EoHIU_cJQ4Mavv703rsMw'
            }).addTo(mymap);
            var popup = L.popup()
            .setLatLng([position.coords.latitude, position.coords.longitude])
            .setContent("Hier bist du :)")
            .openOn(mymap); }