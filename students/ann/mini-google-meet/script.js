const joinButton = document.querySelector('.meet__join-button')
const shareButton = document.querySelector('.meet__present-button')
const camVideo = document.querySelector('video');
const invisibleButton = document.querySelector('.meet__invisible-button')

const constraints = {
    audio: false,
    video: {
        width: 400, height: 250
    }
}

joinButton.addEventListener('click', (e) => {
    joinButton.classList.add('btn');
    startCam();
})

shareButton.addEventListener('click', () => startSharingScreen())
let cam

function startCam() {
    cam = navigator.mediaDevices.getUserMedia(constraints);
    cam.then((stream) => {
        camVideo.srcObject = stream;
        joinButton.textContent = 'Stop sharing';
        joinButton.style = `background-color: rgb(189, 97, 97); color: white;`;
        joinButton.disabled = true;
    })

    setTimeout(() => {
        pipWindow();
    }, 2000)

}

invisibleButton.addEventListener('click', (e) => {
    console.log(e);
})


function turnCameraOff(stream) {
    let tracks = stream.getVideoTracks();
    tracks.forEach(track => track.enabled = false);
}

function muteMic(stream) {
    stream.getVideoTracks()[0].muted === true;
}

function pipWindow() {
    camVideo.requestPictureInPicture().then(pictureInPictureWindow => {
        pictureInPictureWindow.addEventListener('resize', () => {
            camVideo.autoPictureInPicture
        })
    })
}

function startSharingScreen() {
    const screenSharing = navigator.mediaDevices.getDisplayMedia(constraints)
    screenSharing.then((stream) => {
        camVideo.srcObject = stream;
    })
}

function stopSharingCam(stream) {
    if (joinButton.disabled === true) {
        joinButton.addEventListener('click', (e) => {
            console.log(e);
            stream.removeTrack()
        })
    }
}
