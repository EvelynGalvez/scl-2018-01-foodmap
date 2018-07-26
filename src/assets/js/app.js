function localizacion(posicion) {
  // Laboratoria será inicio del mapa
  let laboratoria = {
    lat: -33.418850, 
    lng: -70.641740
  };

  // Mapa estará centrado inicialmente en Laboratoria
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 15, 
      center: laboratoria
    });

  let boton = document.getElementById('posicion').addEventListener('click', () => {
    currentLat = posicion.coords.latitude;
    currentLong = posicion.coords.longitude;
    let markerCurrentPosition = new google.maps.Marker({
      position: {
        lat: currentLat,
        lng: currentLong
      },
      title: 'Ubicación actual'
    });
    markerCurrentPosition.setMap(map);
    map.setCenter(markerCurrentPosition.getPosition());
  });
}

function error() {
  alert('No se puede obtener tu ubicación actual');
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(localizacion, error);
} else {
  alert('Navegador NO soporta geolocalización');
}
