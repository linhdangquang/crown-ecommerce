import React, { useContext } from 'react';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import { CartContext } from '../../contexts/Cart';
import './Checkout.scss';

const Checkout = () => {
  const { cartItems , totalPrice} = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className='total'>Total : ${totalPrice}</span>
    </div>
  );
};

export default Checkout;