import './style.css';
import Boton from '../Boton';

function Card(){
    return (
        
        
        <div className="card_container">
            <div className="img_container">
                <img src="https://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2019/01/30175327/Screen-Shot-2019-01-30-at-5.53.11-PM.png" alt="" className='img'/>
            </div>
            
                <div className="table_container">
                    
                   
                            <div className="title">MadTree Brewing</div>
                    
                    
                    
                      
                            <div className="info">Type: regional</div>
                    
                   
                            <div className="info"> City: Cincinati</div>
                   
                            <div className="info">State:Ohio</div>
                       
                            <div className="info">Country:United States</div>

                            <Boton></Boton>
                </div>
           
        </div>
    )
}

export default Card;