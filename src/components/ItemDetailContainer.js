import { useState, useEffect } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import ItemCount from "./ItemCount"
import Spinner from 'react-bootstrap/Spinner';

const { products } = require("../utils/products").default;

const ItemDetailContainer = () => {
  const [data, setData ] = useState({});

  useEffect(() => {
    customFetch(products[2
    ], 2000)
      .then(resp => setData(resp))
      .catch(err => alert(err));
  }, [])
  
  const onAdd = (qty) => {
    if (qty > 0) alert(`Has agregado ${qty} productos.`);
  }

  return(
    <>
      {data.id !== undefined ?
        <div className="itemDetail">
          <ItemDetail item={data}/>
          <ItemCount stock={data.stock} initial={0} onAdd={onAdd} />
        </div>
        :
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>}
    </>
  )
}

export default ItemDetailContainer;