import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { selectCategoriesMap } from '../../store/categories/categories.selector';
import { CategoryContainer, CategoryTitle } from './category.styles';

const Category = () => {
  const { category } = useParams();
  const  categoriesMap  = useSelector(selectCategoriesMap)
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);
  return (
    <>
      <CategoryTitle>{category?.toUpperCase()}</CategoryTitle>

      <CategoryContainer>
        {products &&
          products?.map((product) => <ProductCard product={product} />)}
      </CategoryContainer>
    </>
  );
};

export default Category;
