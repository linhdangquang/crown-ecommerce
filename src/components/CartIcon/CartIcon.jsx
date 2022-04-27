import React, { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/Cart';
import './CartIcon.scss';

const CartIcon = () => {
  const { isCartOpen, setCartOpen, cartItemsCount } = useContext(CartContext);
  const toggleCartOpen = () => setCartOpen(!isCartOpen);
  return (
    <div className='cart-icon-container' onClick={toggleCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
