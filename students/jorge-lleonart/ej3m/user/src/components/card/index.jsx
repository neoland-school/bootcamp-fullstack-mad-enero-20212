import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';


function CardComponent(props){
    return(
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://media.istockphoto.com/photos/madrid-spain-on-gran-via-picture-id514769480?k=20&m=514769480&s=612x612&w=0&h=vQ1NbztcLP1Rr7irt5MPq-A387sYkkD7eNGFaH3Uv6k=" />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    )
}

export default CardComponent;