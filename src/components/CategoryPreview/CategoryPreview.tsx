import React, { FC } from 'react';
import { CategoryItem } from '../../store/categories/categories.types';
import ProductCard from '../ProductCard/ProductCard';
import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  Preview,
} from './category-preview.styles';

type CategoryPreviewProps = {
  title: string,
  products: CategoryItem[],
}

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewTitle to={title}>
          {title.toUpperCase()}
        </CategoryPreviewTitle>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
