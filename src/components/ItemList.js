import Item from './Item';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';

const ItemList = ({items}) => {
  return (
    <div className='App'>
      {items.length > 0 ? 
        <Row xs='auto' md={4} className="g-4">{items.map(item => <Item key={item.id} props={item}/>)}</Row>
        : 
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>}
    </div>
  );
}

export default ItemList;