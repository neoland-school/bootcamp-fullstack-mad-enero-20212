/* 3 */
console.log('working');
const pCoords = document.querySelector('#coords')

let coords
let link
let latitude
let longitude

function getGoogleMapsLink() {
    link = `https://www.google.com/maps/@${latitude},${longitude},15z`
}

function success(pos) {
    coords = pos.coords
    latitude = coords.latitude
    longitude = coords.longitude

    getGoogleMapsLink()
    const a = document.createElement('a')
    a.textContent = 'My geolocation'
    a.href = link
    document.body.appendChild(a)

    console.log(`Your location is: 
    latitude: ${coords.latitude}
    longitude: ${coords.longitude}`)
}

// function error(err) {
//     console.log('ERROR(' + err.code + '): ' + err.message);
// }

navigator.geolocation.getCurrentPosition(success)



