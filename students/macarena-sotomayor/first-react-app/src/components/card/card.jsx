import './stylecard.css'
import imagenc from  './imagen/descarga.png'
function ImageCard (){
    return(
        
        <div className='container'>
            <div className='divImage'>
                <img src={imagenc} className='image'/>

            </div>
            <div className='divUl'>
                <h4 className='classH2'>MadTree Brewing</h4>
                <ul className='classUl'>
                    <li className='li1'>type</li>
                    <li className='li2'>State</li>
                    <li className='li3'>Country</li>
                    <li className='li4'>City</li>

                </ul>

            </div>

        </div>
        
    )
}
export default ImageCard