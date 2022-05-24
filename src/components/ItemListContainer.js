import ItemCount from "./ItemCount";
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

  const onAdd = (qty) => {
    if (qty > 0) alert(`Has agregado ${qty} productos.`);
  }
  
  return (
    <>
      <ItemList items={data} />
      <ItemCount stock={5} initial={0} onAdd={onAdd} />
      <hr />
    </>
  )
}

export default ItemListContainer;