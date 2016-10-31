var React = require('react');

var MenuItemCollection = require('../models/items').MenuItemCollection;
var MenuListComponent = require('./menulist.jsx').MenuListComponent;
var CartComponent = require('./cart.jsx').CartComponent;

var TemplateComponent = React.createClass({
  getInitialState: function(){
    var self = this;
    var collection = new MenuItemCollection();

    collection.fetch().then(function(data){
      self.setState({collection: collection})
    });
    return {
      collection: collection
    };
  },
  addToCart: function(menuItem){
    // var collection = this.state.collection; **Need to change collection to OrderCollection

    var cartItem = menuItem.toJSON();
    console.log(cartItem);


    //
    // collection.add([cartItem]);
    // this.setState({collection: collection});
  },
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <MenuListComponent menu={this.state.collection} addToCart={this.addToCart}/>
          <CartComponent />
        </div>
      </div>
    )
  }
});

module.exports = {
  TemplateComponent: TemplateComponent
};
