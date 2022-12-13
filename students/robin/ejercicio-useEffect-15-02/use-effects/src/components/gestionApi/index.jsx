import { useEffect, useState } from "react"

function GetApis(){
/*
  useEffect(() => {
      const requestOptions = {
          method:'POST',
      };
      fetch('https://bootcamp.free.beeceptor.com/hello-ok', requestOptions)
        .then(r => r.json())
        .then (d => setPostId(d))
  })

  const [postId, setPostId] = useState('')
*/


  const [postId, setPostId] = useState('')
  const [valor, uploadValor] = useState('')

  const handlePost = e => {
      e.preventDefault();
      fetch('https://robinbucad3.free.beeceptor.com/hello-ok', {
          method:'POST',
      })
      .then(r => {
          uploadValor(r.status)
          console.log(r)
          return r.json()
      })

      .then(e => setPostId(e.status))
    
  }

  const handlePost = e => {
    e.preventDefault();
    fetch('https://robinbucad3.free.beeceptor.com/hello-ok', {
        method:'POST',
    })
    .then(r => {
        uploadValor(r.status)
        console.log(r)
        return r.json()
    })

    .then(e => setPostId(e.status))
  
}




    return(
        <form>
            <button onClick={handlePost}>POST ok</button>
            <button onClick={handlePut}>PUT ok</button>
            <button>DELETE ok</button>
            <button>POST ko</button>

            <p>{postId} </p>
            <p>{valor}</p>

        </form>
    )
}

export default GetApis