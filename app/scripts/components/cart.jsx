var React = require('react');

var CartComponent = React.createClass({
  render: function(){
    return (
      <div className="col-md-4">
        <h3>Your Order!</h3>
        <ul className="cart-list">
          <CartItemComponent />
        </ul>
        <CartTotalComponent />
      </div>
    )
  }
});

var CartItemComponent = React.createClass({
  render: function(){
    return (
      <li className="cart-item">Cart Item</li>
    )
  }
});

var CartTotalComponent = React.createClass({
  render: function(){
    return (
      <span className="cart-total">$$$</span>
    )
  }
});

module.exports = {
  CartComponent: CartComponent
};
