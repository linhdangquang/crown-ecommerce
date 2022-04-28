import React from 'react'
import { CartItemContainer, ItemDetails, NameItem, PriceItem } from './cart-item.styles';


const CartItem = ({cartItem}) => {
  const {name, imageUrl, price,  quantity} = cartItem;
  console.log(cartItem);
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`}/>
      <ItemDetails>
        <NameItem>{name}</NameItem>
        <PriceItem>{quantity} x {price}</PriceItem>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem