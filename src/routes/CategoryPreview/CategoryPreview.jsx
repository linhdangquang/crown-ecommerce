import React from 'react';
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import { selectCategoriesMap } from '../../store/categories/categories.selector';


const CategoriesPreview = () => {
  const  categoriesMap  = useSelector(selectCategoriesMap)
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
