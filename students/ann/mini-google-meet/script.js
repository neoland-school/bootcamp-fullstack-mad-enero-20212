const joinButton = document.querySelector('.meet__join-button')
const shareButton = document.querySelector('.meet__present-button')
const camVideo = document.querySelector('video');
const quitVideo = document.querySelector('.meet__x-button')

const constraints = {
    audio: false,
    video: {
        width: 540, height: 350
    }
}

joinButton.addEventListener('click', (e) => {
    startCam();
})

shareButton.addEventListener('click', () => startSharingScreen())

function startCam() {
    const cam = navigator.mediaDevices.getUserMedia(constraints);
    cam.then((stream) => {
        camVideo.srcObject = stream;
        joinButton.style = `background-color: rgb(110, 110, 110);`
        quitVideo.style.display = 'block';
        showStopCamButton(stream);
    })

    setTimeout(() => {
        pipWindow();
    }, 2000)

}

function showStopCamButton(stream) {
    quitVideo.addEventListener('click', (e) => {
        stream.getTracks()[0].enabled = false;
        document.exitPictureInPicture();
        quitVideo.style.display = 'none';
        joinButton.style = `background-color: rgb(18, 136, 110);`
    })
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
        console.log(stream);
        camVideo.srcObject = stream;
    })
}

// function stopSharingCam(stream) {
//     if (joinButton.disabled === true) {
//         joinButton.addEventListener('click', (e) => {
//             console.log(e);
//             stream.removeTrack()
//         })
//     }
// }
