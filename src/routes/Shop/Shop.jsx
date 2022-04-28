import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from '../Category/Category';
import CategoriesPreview from '../CategoryPreview/CategoryPreview';


const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
