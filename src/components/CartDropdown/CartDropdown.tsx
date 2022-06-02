import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToCheckout = useCallback(() => {
    navigate('/checkout');
    dispatch(setIsCartOpen(false));
  }, []);

  return (
    <CartDropdownContainer>
      {cartItems.length ? (
        <>
          <CartItems>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </CartItems>
          <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </>
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
