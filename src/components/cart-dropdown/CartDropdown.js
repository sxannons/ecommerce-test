import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../store/cart/cartActions';
import { selectCartItems } from '../../store/cart/cartSelectors';

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';

import './CartDropdown.styles.scss';

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/checkout');
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">{cartItems.length ? cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />) : <span className="empty-message">Your cart is empty</span>}</div>
      <CustomButton onClick={handleClick}>Got to checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
