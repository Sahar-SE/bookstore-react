import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../Redux/Categories/Categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const checkCatStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <section id="categories-page">
      <h2>Categories</h2>
      <p>{status}</p>
      <button type="button" onClick={() => checkCatStatus()}>CHECK STATUS</button>
    </section>
  );
};

export default Categories;
