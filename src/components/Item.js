import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Item = ({props}) => {
  const {id, pictureUrl, title, description} = props

  return(
    <Col>
      <Card >
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <ListGroup variant='flush'>{description.map(product => <ListGroupItem key={product}>• {product}</ListGroupItem>)}</ListGroup>
          <LinkContainer to={`/item/${id}`}><Button variant="outline-secondary">Detalle</Button></LinkContainer>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;