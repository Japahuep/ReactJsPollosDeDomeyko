import { useState, useEffect } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom";
const { products } = require("../utils/products");

const ItemDetailContainer = () => {
  const [data, setData ] = useState({});
  const {id} = useParams();

  useEffect(() => {
    customFetch(products.find(item=> item.id === parseInt(id)), 500)
      .then(resp => setData(resp))
      .catch(err => alert(err));
  }, [id])

  return(
    <div className="App">
      {data.id !== undefined ?
        <ItemDetail item={data}/>
        :
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>}
    </div>
  )
}

export default ItemDetailContainer;