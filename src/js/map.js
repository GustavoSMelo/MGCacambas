var mymap = L.map('localizationCompany').setView([-23.5103564, -46.4209414], 17);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic3p0cnlrZXJ6IiwiYSI6ImNrMDhsemd1bTA1ajQzbm51dm90bHVoMDQifQ.E492sBpjVcJx072hp0OOyg'
}).addTo(mymap);
var marker = L.marker([-23.5103564, -46.4209414]).addTo(mymap).bindPopup('MG caçambas').openPopup();
