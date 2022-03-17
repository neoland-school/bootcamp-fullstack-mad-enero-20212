

function datos () {
    useEffect(()=>{
      fetch('http://localhost:4000/')
      .then(j=>j.json())
      .then(r =>console.log(r))
  
    },[]
    )
    return 



}


export default datos