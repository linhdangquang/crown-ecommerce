import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/Cart';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems, setCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
    setCartOpen(false);
  }

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
