import React, { useContext } from 'react';
import { CartContext } from '../../contexts/Cart';
import Button, {BUTTON_TYPES} from '../Button/Button';
import { Footer, Name, Price, ProductCardContainer } from './product-card.styles';


const ProductCard = ({ product }) => {
  const { name, price, imageUrl, id } = product;

  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPES.inverted} onClick={handleAddToCart}>
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
