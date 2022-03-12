import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import './style.css';

function Cards(props) {
    // console.log(props.book)

    const onUserClick = () => {

    }

    return (
        <Link to={`detaills/${props.book.ISBN}`} >
            <Card style={{ width: '18rem' }} onClick={onUserClick}>
                <Card.Img src={props.book.img} />

                <ListGroup className='titlePrize'>
                    <ListGroup.Item>{props.book.title}</ListGroup.Item>
                    <ListGroup.Item className='prize'>{props.book.price}</ListGroup.Item>
                </ListGroup>

                <ListGroup className='author'>
                    <ListGroup.Item>{props.book.author}</ListGroup.Item>
                </ListGroup>
            </Card>
        </Link>
    );
}

export default Cards;