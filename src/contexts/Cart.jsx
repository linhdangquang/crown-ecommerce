import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === itemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
  }
  
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
}


export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  cartItemsCount: 0,
  addItemToCart: () => {},
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0));
  } ,[cartItems])


  const addItemToCart = (itemToAdd) => {
    setCartItems(addCartItem(cartItems, itemToAdd));
  }

  const value = { isCartOpen, setCartOpen, addItemToCart, cartItems, cartItemsCount };
  return (
  <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}