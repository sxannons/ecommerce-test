import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { fetchCollectionsStart } from '../../store/shop/shopActions';

const ShopPage = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Outlet />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
