import ItemCount from "./ItemCount";

const ItemListContainer = ({name, price}) => {
  
  const onAdd = (qty) => {
    if (qty > 0) alert(`Has agregado ${qty} productos.`);
  }
  
  return (
    <>
      <h2>{name}</h2>
      <div>Precio: $<span>{price}</span></div>
      <ItemCount stock={5} initial={0} onAdd={onAdd} />
      <hr />
    </>
  )
}

export default ItemListContainer;