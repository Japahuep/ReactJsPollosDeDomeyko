import { useState, useEffect } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import ItemCount from "./ItemCount"
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom";

const { products } = require("../utils/products").default;

const ItemDetailContainer = () => {
  const [data, setData ] = useState({});
  const {id} = useParams();

  useEffect(() => {
    customFetch(products.find(item=> item.id === parseInt(id)), 500)
      .then(resp => setData(resp))
      .catch(err => alert(err));
  }, [])
  
  const onAdd = (qty) => {
    if (qty > 0) alert(`Has agregado ${qty} productos.`);
  }

  return(
    <div className="App">
      {data.id !== undefined ?
        <div className="itemDetail">
          <ItemDetail item={data}/>
          <ItemCount stock={data.stock} initial={0} onAdd={onAdd} />
        </div>
        :
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>}
    </div>
  )
}

export default ItemDetailContainer;