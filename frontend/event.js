var tid = setInterval(function () {
    if (document.readyState !== 'complete') return;
    clearInterval(tid);
    ermittlePosition();

}, 100)

var dreckigeOrte =[[49.410136, 8.692862, "Müllsammelaktion am 09.11. von 10-18 Uhr"], [49.412439, 8.688185, "Müllsammelaktion am 15.11. von 13-15 Uhr"], [49.404659, 8.676074, "Müllsammelaktion am 14.11. von 10-15 Uhr"],[49.419099, 8.670251, "Müllsammelaktion 15.11. von 16-18Uhr"]];

function ermittlePosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(zeigePosition);    
       
            
    } else { 
        ausgabe.innerHTML = 'Ihr Browser unterstützt keine Geolocation.';
    }
}

function zeigePosition(position) {
   var position = {
       coords: {
           latitude: 49.418759, 
           longitude: 8.675543
       }
   }
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
            
            var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap);
            
            marker.bindPopup("Hier bist du :)").openPopup();

            for (dreckigerOrt of dreckigeOrte){
                var circle =
                L.circle([dreckigerOrt[0], dreckigerOrt[1]], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 200
                }).addTo(mymap);
                circle.bindPopup(dreckigerOrt[2]);
            }
        }