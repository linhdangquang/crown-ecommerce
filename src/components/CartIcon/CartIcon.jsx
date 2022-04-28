import React, { useContext } from 'react';
import { CartContext } from '../../contexts/Cart';
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';

const CartIcon = () => {
  const { isCartOpen, setCartOpen, cartItemsCount } = useContext(CartContext);
  const toggleCartOpen = () => setCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon/>
      <ItemCount>{cartItemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
