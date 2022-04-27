import React from 'react'
import Button from '../Button/Button'
import './CartDropdown.scss'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        <div className='cart-item'>
          <img src='https://via.placeholder.com/150' alt='product' />
          <div className='footer'>
            <span className='name'>Product name</span>
            <span className='price'>$10</span>
          </div>
        </div>
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown