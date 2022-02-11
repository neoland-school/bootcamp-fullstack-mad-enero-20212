





let mystream = document.querySelector('video')


const btnMic = document.querySelector('.btnMic')
const btnShare = document.querySelector('.share')


function displayScreen(){
    const share = document.querySelector('.share')
    share.addEventListener('click', e=>{
        if(navigator.mediaDevices){
        navigator.mediaDevices.getDisplayMedia({
        video: {
            mediaSource:'screen'
        }
       
    })

    .then(function(s){
        mystream.srcObject = s;
    })
    }
    
 })
    
}

displayScreen()




function displayCamera(){
    if(navigator.mediaDevices){
        navigator.mediaDevices.getUserMedia({
        audio:true,
        video: {width:1280, height:720}

        
    })
    
    .then(function(s){
        mystream.srcObject = s;
    })
    }else{
    }
}



displayCamera()



const video = document.querySelector('#join')

/*

video.addEventListener('click', e => {
    mystream.requestPictureInPicture().then(share => {
        console.log(share)
    })
});

*/

const btnDiv = document.querySelector('.btnVid')

btnDiv.addEventListener('click', e => {
    btnDiv.style.display = 'none';
    const btnDivBack = document.querySelector('.btnVidBack')
    btnDivBack.style.display = 'flex'
    if(e){
        navigator.mediaDevices
        navigator.mediaDevices.getUserMedia({
            audio:true,
            video: false
        })
    
        .then(function(s){
            mystream.srcObject = s;
        })
       
    }

})


// VIDEO DE VUELTA

const btnDivBack = document.querySelector('.btnVidBack')
btnDivBack.addEventListener('click',e => {
    btnDivBack.style.display = 'none';
    btnDiv.style.display= 'flex';
    
    navigator.mediaDevices
        navigator.mediaDevices.getUserMedia({
            audio:true,
            video: {
                width:1280,
                height:720
            }
        })
    
        .then(function(s){
            mystream.srcObject = s;
        })
       
    
    
})



btnMic.addEventListener('click', e => {
    btnMic.style.display = 'none';
    const unMute = document.querySelector('.unMute')
    unMute.style.display= 'flex'

    navigator.mediaDevices
        navigator.mediaDevices.getUserMedia({
            audio:false,
            video: {
                width:1280,
                height:720
            }
        })
    
        .then(function(s){
            mystream.srcObject = s;
        })

    
})

const unMute = document.querySelector('.unMute')
unMute.addEventListener('click', e => {
    unMute.style.display = 'none';
    btnMic.style.display = 'flex';

    navigator.mediaDevices
        navigator.mediaDevices.getUserMedia({
            audio:true,
            video: {
                width:1280,
                height:720
            }
        })
    
        .then(function(s){
            mystream.srcObject = s;
        })

})

// FUNCION Picture In Picture


video.addEventListener('click', e => {
    mystream.requestPictureInPicture().then(share => {
        console.log(share)
    })
});


