import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/Cart';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import './CartDropdown.scss';

const CartDropdown = () => {
  const { cartItems, setCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
    setCartOpen(false);
  }

  return (
    <div className='cart-dropdown-container'>
      {cartItems.length ? (
        <>
          <div className='cart-items'>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>
            <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </>
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
  );
};

export default CartDropdown;
