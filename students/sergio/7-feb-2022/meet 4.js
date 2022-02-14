
// OBJETO QUE DA PARAMETROS PARA EL VIDEO Y EL AUDIO //
// se una en la funcion navigator.mediaDevices.getUserMedia(constraints) //
const constraints = {
    audio: true,
    video: {
        width: { min: 1024, ideal: 1280, max: 1920 },
        height: { min: 576, ideal: 720, max: 1080 }
    }
}

let stream = null;

// PIDO EL PERMISO AL USUARIO PARA QUE ME DEJE USAR SU CAMARA Y MICRO//
stream = navigator.mediaDevices.getUserMedia(constraints);

console.log(stream);

// TRAER DE HTML LOS LINKS DE LOS BUTTONS //

// BUTTON AUDIO //
const audio_button = document.getElementById('audio_button')

// BUTTON VIDEO //
const video_button = document.getElementById('video_button')

// CONTAINER VIDEO //
const container_video = document.getElementById('container_video_meet');


stream.then((stream) => {
    console.log(stream.getVideoTracks())
    const devices = stream.getVideoTracks();
    const audio_muted = devices[0].muted;
    console.log(audio_muted)
})

var imageCapture;

 let contador = 1;

// CREO UNA FUNCION PARA PODER LLAMARLA CUANDO LE DEMOS A LOS BOTONES //
function videoOn(){
   
   
        stream.then(mediaStream => {
    // LE METO LAS CARACTERISTICAS DE MI VIDEO CAMARA Y MICRO A UN VIDEO(HTML)
        container_video.srcObject = mediaStream; 

    //  AQUI ME TRAIGO LA IMAGEN Y SONIDO A LA VARIABLE
    // DEL CONTENEDOR
    

})};
video_button.addEventListener('click', e => {
    videoOn();
})


// BOTON DE JOIN_NOW //
const join_now = document.getElementById('join_now');
const video_now = document.getElementById('container_video_meet');

function printPipWindowDimensions(evt) {
  const pipWindow = evt.target;
}

join_now.onclick = function() {
    video_now.requestPictureInPicture().then(pictureInPictureWindow => {
    pictureInPictureWindow.onresize = printPipWindowDimensions;
  });
};

// la variable compartir te pregunta si quieres compartir //




const present = document.getElementById('present');

present.addEventListener('click', e => {
    const compartir = navigator.mediaDevices.getDisplayMedia();
    
    compartir.then(
    e => {
        stream.then(mediaStream => {
            // LE METO LAS CARACTERISTICAS DE MI VIDEO CAMARA Y MICRO A UN VIDEO(HTML)
                container_video.srcObject = e;
   console.log(container_video);
   

})
   
})});
