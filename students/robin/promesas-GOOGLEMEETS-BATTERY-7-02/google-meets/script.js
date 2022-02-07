


let mystream = document.querySelector('video')
const btn = document.querySelector('.btnVid')
const btnShare = document.querySelector('.share')







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

video.addEventListener('click', e => {
    mystream.requestPictureInPicture().catch(err => {
        console.log(err)
    })
});

const btnDiv = document.querySelector('.btnVid')

btnDiv.addEventListener('click', e => {
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



btn.addEventListener('click', () => {
    const icon = document.querySelector('.fa-video-slash')
    icon.classList.replace('fa-video-slash','fa-video')
   
})




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

//APRENDER COMO VOLVER A LA CAMARA Y COMO ACTIVAR Y DESACTIVAR CAMARA CAMBIANDO EL ICONO, EL ICONO LO PUEDO CAMBIAR PERO NO PUEDO VOLVER ACTIVAR CAMARA







