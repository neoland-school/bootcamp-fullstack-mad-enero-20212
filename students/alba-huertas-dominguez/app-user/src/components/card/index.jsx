import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function Cards (props){
  console.log(props)




    return(

<div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{props.nombre}</Card.Title>
          <Card.Title>{props.apellido}</Card.Title>
          <Card.Title>{props.user}</Card.Title>
          <Card.Text>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
      
      
      )

     
}


export default Cards; 