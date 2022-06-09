import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, qty) => {
    let index = cartList.findIndex(cartItem => cartItem === item);

    if (index === -1) {
      item.qty = qty
      setCartList([
        ...cartList,
        item
      ])
    } else {
      cartList[index].qty += qty;
    }
  }

  const clear = () => {
    setCartList([]);
  }

  const removeItem = (id) => {
    let notRemove = cartList.filter(item => item.id != id)
    setCartList(notRemove);
  }

  return (
    <CartContext.Provider value={{cartList, addToCart, clear, removeItem}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;