import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === itemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
  }
  
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
}

const decrementCartItem = (cartItems, itemToDecrement) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToDecrement.id);
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToDecrement.id);
  }
  return cartItems.map(cartItem => cartItem.id === itemToDecrement.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
}

const removeCartItem = (cartItems, itemToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
}


export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  cartItemsCount: 0,
  addItemToCart: () => {},
  decrementItemFromCart: () => {},
  removeItemFromCart: () => {},
  totalQuantity: 0,
  totalPrice: 0,
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartItemsCount(cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0));
    setTotalPrice(cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0));
  } ,[cartItems])


  const addItemToCart = (itemToAdd) => {
    setCartItems(addCartItem(cartItems, itemToAdd));
  }

  const decrementItemFromCart = (itemToDecrement) => {
    setCartItems(decrementCartItem(cartItems, itemToDecrement));
  }

  const removeItemFromCart = (itemToRemove) => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  }

  const value = { isCartOpen, setCartOpen, addItemToCart, cartItems, cartItemsCount, decrementItemFromCart, removeItemFromCart, totalPrice};
  return (
  <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}