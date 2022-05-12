import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import Category from '../Category/Category';
import CategoriesPreview from '../CategoryPreview/CategoryPreview';
import {setCategories} from '../../store/categories/categories.action.js'

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments();
      dispatch(setCategories(categories));
    }
    getCategoriesMap();
  }, [dispatch])
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
