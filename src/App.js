import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { auth, createUserProfileDocument, onFirestoreChange } from './firebase/firebase.utils';

import Header from './components/header/Header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  unsubscribeFromAuthUpdates = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        this.unsubscribeFromAuthUpdates = onFirestoreChange(userRef, (snapshot) => {
          this.setState({ currentUser: { id: snapshot.id, ...snapshot.data() } }, () => {
            console.log(this.state.currentUser);
          });
          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: null });
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
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
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

export default App;
