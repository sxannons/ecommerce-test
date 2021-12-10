import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth, createUserProfileDocument, onFirestoreChange } from './firebase/firebase.utils';
import { setCurrentUser } from './store/user/userActions';

import Header from './components/header/Header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;
  unsubscribeFromAuthUpdates = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        this.unsubscribeFromAuthUpdates = onFirestoreChange(userRef, (snapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        setCurrentUser(null);
        if (this.unsubscribeFromAuthUpdates) this.unsubscribeFromAuthUpdates();
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth) this.unsubscribeFromAuth();
    if (this.unsubscribeFromAuthUpdates) this.unsubscribeFromAuthUpdates();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route exact path="/signin" element={this.props.currentUser ? <Navigate replace to="/" /> : <SignInAndSignUpPage />} />
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
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
