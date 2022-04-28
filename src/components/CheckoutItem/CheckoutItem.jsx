import React, { useContext } from 'react';
import { CartContext } from '../../contexts/Cart';
import { CheckoutItemContainer, ImageContainer } from './checkout-item.styles';

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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
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
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
