import Card from 'react-bootstrap/Card';

const Item = ({props}) => {
  const {pictureUrl, title, description} = props
  return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Item;