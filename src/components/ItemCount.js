import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
  const [numProd, setNumProd] = useState(initial);

  const changeNumProd = (e) => {
    if (e.target.value === "substract" && numProd > 0) {
      setNumProd(numProd-1);
    } else if (e.target.value === "add" && numProd < stock) {
      setNumProd(numProd+1);
    }
  }

  return(
    <div>
      <br />
      <ButtonGroup onClick={changeNumProd}>
        <Button variant="secondary" value="substract">-</Button>
        <h4>&nbsp; {numProd} &nbsp;</h4>
        <Button variant="secondary" value="add">+</Button>
      </ButtonGroup>
      <br />
      <br />
      <Button variant="primary" value="onAdd" onClick={() => onAdd(numProd)}>Agregar</Button>
    </div>
  );
}

export default ItemCount;