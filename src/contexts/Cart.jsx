import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer';

const addCartItem = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const decrementCartItem = (cartItems, itemToDecrement) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToDecrement.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToDecrement.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === itemToDecrement.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeCartItem = (cartItems, itemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  cartItemsCount: 0,
  addItemToCart: () => {},
  decrementItemFromCart: () => {},
  removeItemFromCart: () => {},
  totalPrice: 0,
});

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_CART_OPEN: 'SET_CART_OPEN',
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartItemsCount: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, isCartOpen, cartItemsCount, totalPrice }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const setCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_OPEN, bool ));
  };

  const updateCartItemsReducer = (newCartItems) => {
    const newCartItemsCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newTotalPrice = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartItemsCount: newCartItemsCount,
        totalPrice: newTotalPrice,
      })
    );
  };

  const addItemToCart = (itemToAdd) => {
    const newCartItems = addCartItem(cartItems, itemToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const decrementItemFromCart = (itemToDecrement) => {
    const newCartItems = decrementCartItem(cartItems, itemToDecrement);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (itemToRemove) => {
    const newCartItems = removeCartItem(cartItems, itemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setCartOpen,
    addItemToCart,
    cartItems,
    cartItemsCount,
    decrementItemFromCart,
    removeItemFromCart,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
