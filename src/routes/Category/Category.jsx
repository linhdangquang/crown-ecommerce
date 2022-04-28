import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import { CategoryContainer, CategoryTitle } from './category.styles';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = React.useState([categoriesMap[category]]);
  console.log(category);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);
  console.log(products);
  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>

      <CategoryContainer>
        {products &&
          products.map((product) => <ProductCard product={product} />)}
      </CategoryContainer>
    </>
  );
};

export default Category;