import { useState } from 'react';
import '../Avatares/style.css';

function Avatar(prop){

   
    let [color, uploadColor] = useState('green');
    let [image, uploadImg] = useState('img_op_zero')
    let [offline, uploadOffline] = useState('')

    function x(){
        prop.state(offline)
    }

    const handleEstado = e => {
        if(color === 'green'){
            uploadColor(color = 'red');
            uploadImg(image = 'img_op_total')
            uploadOffline(offline = prop.img.name)
            x();
        } else if( color === 'red'){
            uploadColor(color = 'green');
            uploadImg(image = 'img_op_zero')
            uploadOffline(offline = 'borrar')
            x();
        }
        
       
    }



return (
    
   

    <div className='users'>
    <img src={prop.img.img} className={image} onClick={handleEstado}></img>
    <div className='estado' className={color}></div>
    </div>
    
    


   
)
}

export default Avatar;
