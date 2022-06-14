import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, qty) => {
    let itemFound = cartList.find(cartItem => cartItem.id === item.id);
    if (itemFound === undefined) {
      item.qty = qty
      setCartList([
        ...cartList,
        item
      ]);
    } else {
      itemFound.qty += qty;
      setCartList([
        ...cartList
      ]);
    }
  }

  const clear = () => {
    setCartList([]);
  }

  const removeItem = (id) => {
    let notRemove = cartList.filter(item => item.id !== id)
    setCartList(notRemove);
  }

  const itemTotalCost = (id) => {
    let item = cartList.find(item => item.id === id)
    return item.price * item.qty;
  }

  const subtotalCost = () => {
    let subtotal = cartList.reduce((acc, item) => acc + itemTotalCost(item.id), 0);
    return subtotal
  }

  const itemTotalQty = () => {
    let qtyTotal = cartList.reduce((acc, item) => acc + item.qty, 0);
    return qtyTotal
  }

  return (
    <>
      <CartContext.Provider value={{cartList, addToCart, clear, removeItem, itemTotalCost, subtotalCost, itemTotalQty}}>
        {children}
      </CartContext.Provider>
    </>
  )
}

export default CartContextProvider;