var React = require('react');

var menuModels = require('../models/items');
var orderModels = require('../models/orders');

var Order = React.createClass({
  render: function(){
    var order = this.props.orderCollection.map(function(orderItem){
      return (
        <li key={orderItem.cid}>
          {orderItem.get('title')} :: {orderItem.get('price')}
          <button className="btn btn-danger" onClick={function(){self.props.removeItem(orderItem)}}>Remove</button>
        </li>
      );
    })
    return (
      <div className="col-md-6">
        <h1>Your Order</h1>
        <ul>
          {order}
        </ul>
        <strong>Total:</strong> {this.props.orderCollection.total()}
        <div>
          <button onClick={this.props.placeOrder} className="btn btn-warning">Place Order</button>
        </div>
      </div>
    );
  }
})

var Menu = React.createClass({
  render: function(){
    var self = this;
    var menu = this.props.menuItems.map(function(menuItem){
      return (
        <li key={menuItem.get('_id')}>
          {menuItem.get('title')} :: {menuItem.get('price')}
          <button className="btn btn-success" onClick={function(){self.props.addToOrder(menuItem)}}> Add to Order</button>
        </li>
      );
    });
    return (
      <div className="col-md-6">
        <h1>Menu Items</h1>
        <ul>
          {menu}
        </ul>
      </div>
    );
  }
});

var OrderingContainer = React.createClass({
  getInitialState: function(){
    var menuItems = new menuModels.MenuCollections();
    var orderCollection = new orderModels.OrderItemCollection();
    return {
      menuItems: menuItems,
      orderCollection: orderCollection
    }
  },
  addToOrder: function(){
    var orderCollection = this.state.orderCollection;
    var orderItemData = menuItem.toJSON();
    delete orderItemData.cid;
    orderCollection.add([orderItemData]);

    this.setState({orderCollection: orderCollection});
  },
  removeItem: function(){

  },
  placeOrder: function(){
    var newOrder = new orderModels.Order();
    var orderCollection = this.state.orderCollection;
    newOrder.set({items: orderCollection.toJSON()});
    this.setState({orderCollection: new orderModels.OrderItemCollection});
  },
  render: function(){
    return (
      <div>
        <Menu addToOrder={this.addToOrder} menuItems={this.state.menuItems} />
        <Order placeOrder={this.placeOrder} removeItem={this.removeItem} orderCollection={this.state.orderCollection}/>
      </div>
    );
  }
});

module.exports = {
  OrderingContainer: OrderingContainer
};
