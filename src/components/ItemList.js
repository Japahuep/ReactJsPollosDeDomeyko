import Item from './Item';
import CardGroup from 'react-bootstrap/CardGroup';
import Spinner from 'react-bootstrap/Spinner';

const ItemList = ({items}) => {
  return (
    <>
      {items.length > 0 ? 
        <CardGroup> {items.map(item => <Item key={item.id} props={item}/>)} </CardGroup>
        : 
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>}
    </>
  );
}

export default ItemList;