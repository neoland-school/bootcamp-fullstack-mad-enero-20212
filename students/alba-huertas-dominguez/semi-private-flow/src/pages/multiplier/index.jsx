
import {useSearchParams,useNavigate, Navigate,Link} from 'react-router-dom'


function Multiplier() {
    const [searchParams] = useSearchParams();
  
    const op1 = searchParams.get("op1");
  
    const op2 = searchParams.get("op2");
    console.log(op1);
    console.log(op2);
   
    // const condition = ()=>{
    
    // Navigate(searchParams.get('multiplier')??'/')}
  
    return(
    <div>
    <p> Solucion:{op1 * op2}</p>;

   <Link to ='/confirmacion'> <button>siguienjte</button></Link>
   
    </div>
     )
  }
 
  export default Multiplier;