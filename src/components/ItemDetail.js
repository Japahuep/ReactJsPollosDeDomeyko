import { useState } from "react";
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import Card from 'react-bootstrap/Card';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
  const {pictureUrl, title, price, description, stock} = item

  const [itemCountAux, setItemCountAux] = useState(0);

  const onAdd = (qty) => {
    if (qty > 0) alert(`Has agregado ${qty} productos.`);
    setItemCountAux(qty);
  }

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
      {
        itemCountAux === 0
        ? <ItemCount stock={stock} initial={0} onAdd={onAdd} />
        : <LinkContainer to={"/cart"}><Button variant="success">Checkout</Button></LinkContainer>
      }
      
    </div>
  )
}

export default ItemDetail;