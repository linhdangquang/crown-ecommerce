import React, { useContext } from 'react'
import { CartContext } from '../../contexts/Cart'
import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import './CartDropdown.scss'

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext)

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown