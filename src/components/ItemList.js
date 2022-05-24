import Item from './Item';
import CardGroup from 'react-bootstrap/CardGroup';
import Spinner from 'react-bootstrap/Spinner';

const ItemList = ({items}) => {
  return (
    <>
      {items.length > 0 ? 
        <CardGroup> {items.map(item => <Item pictureUrl={item.pictureUrl} title={item.title} description={item.description}/>)} </CardGroup>
        : 
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>}
    </>
  );
}

export default ItemList;