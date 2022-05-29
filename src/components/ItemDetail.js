import Card from 'react-bootstrap/Card';

const ItemDetail = ({item}) => {
  const {pictureUrl, title, description} = item
  return(
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ItemDetail;