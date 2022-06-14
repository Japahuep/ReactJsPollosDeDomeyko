import {firestoreCategoryFetch} from "../utils/firestoreFetch";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [ data, setData ] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    firestoreCategoryFetch(title)
      .then(resp => setData(resp))
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