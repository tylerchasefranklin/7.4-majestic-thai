var React = require('react');

var MenuItemCollection = require('../models/items').MenuItemCollection;
var MenuListComponent = require('./menulist.jsx').MenuListComponent;
var CartComponent = require('./cart.jsx').CartComponent;

var TemplateComponent = React.createClass({
  getDefaultProps: function(){
  },
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
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <MenuListComponent menu={this.state.collection}/>
          <CartComponent />
        </div>
      </div>
    )
  }
});

module.exports = {
  TemplateComponent: TemplateComponent
};
