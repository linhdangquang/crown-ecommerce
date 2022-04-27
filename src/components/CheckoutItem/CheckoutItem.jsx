import React, { useContext } from 'react';
import { CartContext } from '../../contexts/Cart';
import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { removeItemFromCart, addItemToCart, decrementItemFromCart } =
    useContext(CartContext);

  const handleRemove = () => {
    removeItemFromCart(cartItem);
  };
  const handleIncrement = () => {
    addItemToCart(cartItem);
  }
  const handleDecrement = () => {
    decrementItemFromCart(cartItem);
  }

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={handleDecrement}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={handleIncrement}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={handleRemove}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
