const button = document.querySelector('#ip-button')


document.addEventListener('DOMContentLoaded', function () {
    button.addEventListener('click',function (e) {  
        e.preventDefault()
        const ip = document.querySelector('#ip').value

        const address = document.querySelector('#address')
        const location = document.querySelector('#location')
        const isp = document.querySelector('#isp')
        const timezone = document.querySelector('#timezone')
        const endpoint = `https://geo.ipify.org/api/v2/country?apiKey=at_CPuFhcgLiUtZagbhITjhagHAW31ka&ipAddress=${ip}`

        window.fetch(endpoint)
        .then(function (resposta) {
            return resposta.json()
        })
        .then(function (json) {
            
            console.log(json)
            isp.innerHTML = json['isp']
            timezone.innerHTML = json['location'].timezone
            location.innerHTML = json['location'].country + ', ' + json['location'].region
            address.innerHTML = json['ip']
            const latitude = 34.0648
            const longitude = -118.086

            var map = L.map('map').setView([latitude, longitude], 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            
            var greenIcon = L.icon({
                iconUrl: '../../images/icon-location.svg',
                shadowUrl: '',
            
                iconSize:     [45, 95], // size of the icon
                shadowSize:   [50, 64], // size of the shadow
                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                shadowAnchor: [4, 62],  // the same for the shadow
                popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
            });
            L.marker([latitude, longitude], {icon: greenIcon}).addTo(map);
            console.log(map)
        })
    })
})

