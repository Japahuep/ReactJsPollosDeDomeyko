import { useContext } from "react";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { CartContext } from "./CartContext";

const Cart = () => {
  const cartContext = useContext(CartContext)
  const {cartList, removeItem, clear} = cartContext
  return (
    <>
      {cartList.length === 0
      ? <p>Your cart is empty</p>
      : <>
          <Row xs='auto' md={4} className="g-4"> {cartList.map(item =>
            <Col key={item.id}>
              <Card>
                <Card.Img variant="top" src={item.pictureUrl} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.qty} unidades</Card.Text>
                  <Button variant="outline-danger" onClick={() => removeItem(item.id)}>QUITAR</Button>
                </Card.Body>
              </Card>
            </Col>)}
          </Row>
          <br />
          <Button variant="outline-danger" onClick={clear}>VACIAR CARRITO</Button>
        </>
        }
    </>
  )
}

export default Cart;