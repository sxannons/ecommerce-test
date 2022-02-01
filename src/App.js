import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { checkUserSession } from './store/user/userActions';
import { selectCurrentUser } from './store/user/userSelectors';

import Header from './components/header/Header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop';
import CheckoutPage from './pages/checkout/CheckoutPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up';
import CollectionsOverviewContainer from './components/collections-overview/CollectionsOverviewContainer';
import CollectionPageContainer from './pages/collection/CollectionPageContainer';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />}>
          <Route path="" element={<CollectionsOverviewContainer />} />
          <Route path=":collectionId" element={<CollectionPageContainer />} />
        </Route>
        <Route exact path="/signin" element={currentUser ? <Navigate replace to="/" /> : <SignInAndSignUpPage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <h1>404 - Not found</h1>
            </main>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
