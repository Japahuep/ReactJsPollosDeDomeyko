import Card from 'react-bootstrap/Card';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const ItemDetail = ({item}) => {
  const {pictureUrl, title, price, description} = item
  return(
    <div>
      <Card.Header bsPrefix="cardTitle">{title}</Card.Header>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title>{`$${price}`}</Card.Title>
          <ListGroup variant='flush'>{description.map(product => <ListGroupItem key={product}>• {product}</ListGroupItem>)}</ListGroup>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ItemDetail;