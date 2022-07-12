import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../Redux/Catagories/Catagories';

const Catagories = () => {
  const status = useSelector((state) => state.catagories);
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

export default Catagories;
