import customFetch from "../utils/customFetch";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const { products } = require("../utils/products");

const ItemListContainer = () => {
  const [ data, setData ] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    customFetch(products.filter(item => title !== undefined ? (item.category.title === title) : item), 800)
      .then(result => setData(result))
      .catch(err => alert(err));
  }, [title])
  
  return (
    <>
      <ItemList items={data} />
      <hr />
    </>
  )
}

export default ItemListContainer;