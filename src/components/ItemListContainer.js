import customFetch from "../utils/customFetch";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";

const { products } = require("../utils/products").default;

const ItemListContainer = () => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    customFetch(products, 2000)
      .then(result => setData(result))
      .catch(err => alert(err));
  }, [])
  
  return (
    <>
      <ItemList items={data} />
      <hr />
    </>
  )
}

export default ItemListContainer;