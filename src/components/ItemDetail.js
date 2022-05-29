import Card from 'react-bootstrap/Card';

const ItemDetail = ({item}) => {
  const {pictureUrl, title, price, description} = item
  return(
    <div>
      <Card.Header bsPrefix="cardTitle">{title}</Card.Header>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title>{`$${price}`}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ItemDetail;