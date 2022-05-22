const ItemListContainer = ({name, price}) => {
  return (
    <>
      <h2>{name}</h2>
      <div>Precio: $<span>{price}</span></div>
      <br/>
    </>
  )
}

export default ItemListContainer;