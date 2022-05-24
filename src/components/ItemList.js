import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Spinner from 'react-bootstrap/Spinner';

const ItemList = ({items}) => {
  return (
    <>
      {items.length > 0 ? 
        <CardGroup> {items.map(item => 
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.pictureUrl} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
        </Card>)} </CardGroup>
        : 
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>}
    </>
  );
}

export default ItemList;